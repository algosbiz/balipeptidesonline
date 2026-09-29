"use client";

import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import QuantityStepper from "@/components/QuantityStepper";

type AddToCartButtonProps = {
  productId: number;
  productName: string;
};

export default function AddToCartButton({ productId, productName }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  function handleAdd() {
    addItem(productId, quantity);
    setQuantity(1);
  }

  return (
    <div className="flex items-center gap-2">
      <QuantityStepper value={quantity} onChange={setQuantity} productName={productName} />
      <button type="button" onClick={handleAdd} className="btn btn-primary min-w-0 flex-1 px-4">
        Add to cart
        <span className="sr-only">: {productName}</span>
      </button>
    </div>
  );
}
