"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { externalLinkProps, navLinks } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { useCart } from "@/components/CartProvider";
import { BagIcon, CloseIcon, MenuIcon, WhatsAppIcon } from "@/components/Icons";

export default function Header() {
  const { totalQuantity, openCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Once the visitor scrolls, the header gets a solid background and a border
  // so it stays readable on top of the content below it.
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Let keyboard users close the mobile menu with the Escape key.
  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const isSolid = scrolled || menuOpen;

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        isSolid
          ? "border-line bg-white/95 backdrop-blur-md"
          : "border-transparent bg-cream"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <a href="#top" onClick={closeMenu} className="shrink-0 rounded-md">
          <Image
            src="/images/logo/bali-peptides-logo.png"
            alt="Bali Peptides"
            width={119}
            height={56}
            loading="eager"
            className="h-14 w-auto"
          />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...externalLinkProps(link)}
                  className="font-label text-[15px] font-semibold text-heading/80 transition hover:text-primary-dark"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary hidden py-3 sm:inline-flex"
          >
            <WhatsAppIcon className="size-4 text-accent" />
            Order on WhatsApp
          </a>

          <button
            type="button"
            onClick={() => {
              closeMenu();
              openCart();
            }}
            aria-label={`Open cart, ${totalQuantity} ${totalQuantity === 1 ? "item" : "items"}`}
            className="relative grid size-11 place-items-center rounded-full border border-secondary/15 bg-white text-secondary transition hover:border-secondary/40"
          >
            <BagIcon />
            {totalQuantity > 0 && (
              <span className="absolute -top-1 -right-1 grid h-5 min-w-5 place-items-center rounded-full bg-primary px-1 font-label text-[11px] font-bold text-secondary tabular-nums">
                {totalQuantity}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-full border border-secondary/15 bg-white text-secondary transition hover:border-secondary/40 lg:hidden"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain border-t border-line bg-white lg:hidden"
        >
          <ul className="container-page py-4">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-line last:border-b-0">
                <a
                  href={link.href}
                  {...externalLinkProps(link)}
                  onClick={closeMenu}
                  className="block py-4 font-display text-2xl font-medium text-heading"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="container-page pb-6">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="btn btn-primary w-full py-4"
            >
              <WhatsAppIcon className="size-4 text-accent" />
              Order on WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
