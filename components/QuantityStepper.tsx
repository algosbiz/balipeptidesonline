"use client";

import { MAX_QUANTITY } from "@/components/CartProvider";
import { MinusIcon, PlusIcon } from "@/components/Icons";

type QuantityStepperProps = {
  value: number;
  onChange: (value: number) => void;
  // Used to give the buttons clear names for screen readers, e.g. "Increase quantity of NAD+ Bali".
  productName: string;
};

export default function QuantityStepper({ value, onChange, productName }: QuantityStepperProps) {
  const buttonClass =
    "grid size-11 place-items-center xl:size-9 rounded-full text-heading transition hover:bg-cream disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent";

  return (
    <div className="inline-flex shrink-0 items-center rounded-full border border-line bg-white p-0.5">
      <button
        type="button"
        onClick={() => onChange(value - 1)}
        disabled={value <= 1}
        aria-label={`Decrease quantity of ${productName}`}
        className={buttonClass}
      >
        <MinusIcon className="size-4" />
      </button>
      <span className="w-7 text-center text-[15px] font-semibold text-heading tabular-nums" aria-live="polite">
        <span className="sr-only">Quantity </span>
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        disabled={value >= MAX_QUANTITY}
        aria-label={`Increase quantity of ${productName}`}
        className={buttonClass}
      >
        <PlusIcon className="size-4" />
      </button>
    </div>
  );
}
