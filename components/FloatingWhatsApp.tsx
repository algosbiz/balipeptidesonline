import { getWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/Icons";

export default function FloatingWhatsApp() {
  // On phones the bottom offset adds the "safe area" so the button
  // stays clear of the iPhone home bar and browser toolbars.
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Bali Peptides on WhatsApp"
      className="fixed right-5 bottom-[calc(1.25rem+env(safe-area-inset-bottom))] z-50 grid size-14 place-items-center rounded-full bg-accent text-white shadow-[0_12px_30px_-8px_rgb(16_26_33/0.45)] transition duration-200 hover:scale-105 active:scale-95 sm:right-8 sm:bottom-8"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
