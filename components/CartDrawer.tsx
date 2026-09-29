"use client";

import { useEffect, useRef, type MouseEvent } from "react";
import Image from "next/image";
import { useCart } from "@/components/CartProvider";
import QuantityStepper from "@/components/QuantityStepper";
import { getCartMessage, getWhatsAppUrl } from "@/lib/whatsapp";
import { ArrowRightIcon, BagIcon, ClockIcon, CloseIcon, PackageIcon, WhatsAppIcon } from "@/components/Icons";

export default function CartDrawer() {
  const { lines, totalQuantity, isOpen, closeCart, setQuantity, removeItem, clearCart } = useCart();
  const dialogRef = useRef<HTMLDialogElement>(null);

  // The cart is a native <dialog>. Opening it with showModal() gives us, for free:
  // the dark backdrop, the Escape key to close, and keyboard focus kept inside the panel.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  const checkoutUrl = getWhatsAppUrl(
    getCartMessage(lines.map((line) => ({ name: line.product.name, quantity: line.quantity }))),
  );

  // A click that lands on the dialog itself (not on the panel's content) is a click on the backdrop.
  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) closeCart();
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="cart-title"
      onClose={closeCart}
      onClick={handleBackdropClick}
      className="cart-drawer fixed inset-y-0 right-0 left-auto m-0 h-dvh max-h-none w-[calc(100%-2.5rem)] max-w-md border-0 bg-cream p-0 text-body shadow-2xl"
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-line bg-white px-5 py-4">
          <h2 id="cart-title" className="text-2xl font-semibold">
            Cart{" "}
            <span className="font-label text-base font-semibold text-muted">({totalQuantity})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="grid size-10 place-items-center rounded-full text-heading transition hover:bg-cream"
          >
            <CloseIcon />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <span className="grid size-16 place-items-center rounded-full bg-white text-primary-dark ring-1 ring-line">
              <BagIcon className="size-7" />
            </span>
            <p className="mt-5 font-display text-2xl font-semibold text-heading">Your cart is empty</p>
            <p className="mt-2 text-muted">Add peptides from the catalogue, then send your order on WhatsApp.</p>
            <a href="#peptides" onClick={closeCart} className="btn btn-primary mt-7">
              Browse peptides
            </a>
          </div>
        ) : (
          <>
            <ul className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {lines.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-4 rounded-2xl bg-white p-3 ring-1 ring-line">
                  <div className="relative size-20 shrink-0 overflow-hidden rounded-xl bg-cream">
                    <Image src={product.image} alt="" fill sizes="80px" className="object-cover" />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="font-display text-lg leading-tight font-semibold text-heading">
                          {product.name}
                        </p>
                        <p className="mt-1 font-label text-[11px] font-semibold tracking-[0.14em] text-primary-dark uppercase">
                          {product.category}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(product.id)}
                        aria-label={`Remove ${product.name} from cart`}
                        className="-mt-1 -mr-1 grid size-8 shrink-0 place-items-center rounded-full text-muted transition hover:bg-cream hover:text-heading"
                      >
                        <CloseIcon className="size-4" />
                      </button>
                    </div>
                    <div className="mt-auto pt-3">
                      <QuantityStepper
                        value={quantity}
                        onChange={(value) => setQuantity(product.id, value)}
                        productName={product.name}
                      />
                    </div>
                  </div>
                </li>
              ))}

              <li className="space-y-3 rounded-2xl bg-white p-4 text-sm ring-1 ring-line">
                <p className="flex items-center gap-3 text-heading">
                  <PackageIcon className="size-4 shrink-0 text-primary-dark" />
                  Discreet packaging
                </p>
                <p className="flex items-center gap-3 text-heading">
                  <ClockIcon className="size-4 shrink-0 text-primary-dark" />
                  Same-day delivery available in many Bali locations
                </p>
              </li>
            </ul>

            <div className="border-t border-line bg-white px-5 pt-4 pb-[calc(1.25rem+env(safe-area-inset-bottom))]">
              <div className="flex items-center justify-between">
                <span className="font-medium text-heading">Total items</span>
                <span className="text-xl font-semibold text-heading tabular-nums">{totalQuantity}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Your order opens in WhatsApp. Our team will confirm availability, pricing and delivery.
              </p>
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-4 w-full py-4 text-base"
              >
                <WhatsAppIcon className="size-5 text-accent" />
                Proceed to Checkout
                <ArrowRightIcon className="size-4" />
              </a>
              <button
                type="button"
                onClick={clearCart}
                className="mx-auto mt-3 block text-sm text-muted underline underline-offset-4 transition hover:text-heading"
              >
                Clear cart
              </button>
            </div>
          </>
        )}
      </div>
    </dialog>
  );
}
