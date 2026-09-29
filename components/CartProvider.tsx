"use client";

import { createContext, useContext, useState, useSyncExternalStore, type ReactNode } from "react";
import { products, type Product } from "@/data/products";

// The cart only remembers product ids and quantities. Names, images and
// descriptions are always read from data/products.ts, so editing a product
// there updates it inside visitors' carts too.
type CartItem = {
  productId: number;
  quantity: number;
};

export type CartLine = {
  product: Product;
  quantity: number;
};

type CartContextValue = {
  lines: CartLine[];
  totalQuantity: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (productId: number, quantity: number) => void;
  setQuantity: (productId: number, quantity: number) => void;
  removeItem: (productId: number) => void;
  clearCart: () => void;
};

export const MAX_QUANTITY = 99;

const clamp = (quantity: number) => Math.min(Math.max(Math.round(quantity), 1), MAX_QUANTITY);

// ---------- Saving the cart in the browser ----------
// The cart is kept in localStorage so it survives a page refresh.
// React reads it through useSyncExternalStore (below), which re-renders
// the page whenever saveCart() changes it.

const STORAGE_KEY = "bali-peptides-cart";
const listeners = new Set<() => void>();
// Used instead of localStorage when the browser blocks storage (e.g. some private modes).
let cartInMemory = "[]";

function readSavedCart() {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? "[]";
  } catch {
    return cartInMemory;
  }
}

function saveCart(items: CartItem[]) {
  cartInMemory = JSON.stringify(items);
  try {
    localStorage.setItem(STORAGE_KEY, cartInMemory);
  } catch {
    // Storage is blocked: the cart still works for this visit.
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  // The "storage" event keeps the cart in sync across several open tabs.
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function parseCart(saved: string): CartItem[] {
  try {
    const items = JSON.parse(saved);
    return Array.isArray(items) ? items : [];
  } catch {
    return [];
  }
}

// ---------- The cart itself ----------

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  // On the server there is no browser storage, so the cart starts empty ("[]")
  // and fills in as soon as the page loads in the browser.
  const savedCart = useSyncExternalStore(subscribe, readSavedCart, () => "[]");
  const items = parseCart(savedCart);
  const [isOpen, setIsOpen] = useState(false);

  // Pair each saved item with its product. Items whose product was removed
  // from data/products.ts are skipped.
  const lines: CartLine[] = items.flatMap((item) => {
    const product = products.find((p) => p.id === item.productId);
    return product ? [{ product, quantity: clamp(item.quantity) }] : [];
  });

  const totalQuantity = lines.reduce((sum, line) => sum + line.quantity, 0);

  function addItem(productId: number, quantity: number) {
    const existing = items.find((item) => item.productId === productId);
    if (existing) {
      saveCart(
        items.map((item) =>
          item.productId === productId ? { ...item, quantity: clamp(item.quantity + quantity) } : item,
        ),
      );
    } else {
      saveCart([...items, { productId, quantity: clamp(quantity) }]);
    }
    setIsOpen(true);
  }

  function setQuantity(productId: number, quantity: number) {
    saveCart(items.map((item) => (item.productId === productId ? { ...item, quantity: clamp(quantity) } : item)));
  }

  function removeItem(productId: number) {
    saveCart(items.filter((item) => item.productId !== productId));
  }

  const value: CartContextValue = {
    lines,
    totalQuantity,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    addItem,
    setQuantity,
    removeItem,
    clearCart: () => saveCart([]),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// Use this inside any component to read or change the cart.
export function useCart() {
  const cart = useContext(CartContext);
  if (!cart) throw new Error("useCart must be used inside <CartProvider>");
  return cart;
}
