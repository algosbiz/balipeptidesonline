// Small inline icons used across the site. Inline SVGs need no icon
// library and inherit their colour from the surrounding text.

import type { ReactNode } from "react";

type IconProps = {
  className?: string;
};

function Outline({ className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className ?? "size-5"}
    >
      {children}
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className ?? "size-5"}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <Outline className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Outline>
  );
}

export function ArrowDownIcon({ className }: IconProps) {
  return (
    <Outline className={className}>
      <path d="M12 5v14M6 13l6 6 6-6" />
    </Outline>
  );
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <Outline className={className}>
      <path d="M7 17 17 7M8 7h9v9" />
    </Outline>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <Outline className={className}>
      <path d="M4 8h16M4 16h16" />
    </Outline>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <Outline className={className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Outline>
  );
}

export function PlusIcon({ className }: IconProps) {
  return (
    <Outline className={className}>
      <path d="M12 5v14M5 12h14" />
    </Outline>
  );
}

export function MinusIcon({ className }: IconProps) {
  return (
    <Outline className={className}>
      <path d="M5 12h14" />
    </Outline>
  );
}

export function BagIcon({ className }: IconProps) {
  return (
    <Outline className={className}>
      <path d="M5.5 8h13l-1 12.5h-11z" />
      <path d="M9 10V6.5a3 3 0 0 1 6 0V10" />
    </Outline>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <Outline className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </Outline>
  );
}

export function PackageIcon({ className }: IconProps) {
  return (
    <Outline className={className}>
      <path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5z" />
      <path d="M3.5 7.5 12 12l8.5-4.5M12 12v9" />
    </Outline>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <Outline className={className}>
      <path d="M12 21s-6.5-5.8-6.5-11a6.5 6.5 0 0 1 13 0c0 5.2-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </Outline>
  );
}

export function SparkleIcon({ className }: IconProps) {
  return (
    <Outline className={className}>
      <path d="M12 3.5c.6 4.3 2.2 5.9 6.5 6.5-4.3.6-5.9 2.2-6.5 6.5-.6-4.3-2.2-5.9-6.5-6.5 4.3-.6 5.9-2.2 6.5-6.5Z" />
      <path d="M18.5 16v4M16.5 18h4" />
    </Outline>
  );
}

export function ChatIcon({ className }: IconProps) {
  return (
    <Outline className={className}>
      <path d="M20 12a7.5 7.5 0 0 1-11 6.6L4 20l1.4-4.6A7.5 7.5 0 1 1 20 12Z" />
      <path d="M9 11h.01M12.5 11h.01M16 11h.01" strokeWidth={2.2} />
    </Outline>
  );
}
