"use client";

import { useEffect, useState } from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/Icons";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  // The hero already has a WhatsApp button, so this one appears once the
  // visitor scrolls past it. This also stops it covering the hero buttons on small phones.
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On phones the bottom offset adds the "safe area" so the button
  // stays clear of the iPhone home bar and browser toolbars.
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Bali Peptides on WhatsApp"
      className={`fixed right-5 bottom-[calc(1.25rem+env(safe-area-inset-bottom))] z-30 grid size-14 place-items-center rounded-full bg-accent text-white shadow-[0_12px_30px_-8px_rgb(16_26_33/0.45)] transition-[opacity,translate,scale,visibility] duration-300 hover:scale-105 active:scale-95 sm:right-8 sm:bottom-8 ${
        visible ? "visible translate-y-0 opacity-100" : "invisible translate-y-4 opacity-0"
      }`}
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
