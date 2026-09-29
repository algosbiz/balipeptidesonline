import Image from "next/image";
import { externalLinkProps, navLinks, siteConfig } from "@/data/site";
import { getWhatsAppUrl, WHATSAPP_DISPLAY_NUMBER } from "@/lib/whatsapp";
import { ArrowUpRightIcon, WhatsAppIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white/70">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr] lg:py-20">
        <div>
          <Image
            src="/images/logo/bali-peptides-logo.png"
            alt="Bali Peptides"
            width={170}
            height={80}
            className="h-20 w-auto"
          />
          <p className="mt-6 max-w-xs font-label text-xs leading-relaxed font-semibold tracking-[0.18em] text-primary uppercase">
            Premium peptides · Expert guidance · Bali wide delivery
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="font-label text-sm font-semibold text-white">Navigation</p>
          <ul className="mt-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} {...externalLinkProps(link)} className="inline-block py-2.5 transition hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-label text-sm font-semibold text-white">Contact</p>
          <ul className="mt-4 space-y-1">
            <li>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-2.5 transition hover:text-primary"
              >
                <WhatsAppIcon className="size-4 text-accent" />
                <span>
                  WhatsApp <span className="whitespace-nowrap">{WHATSAPP_DISPLAY_NUMBER}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={siteConfig.catalogueUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 py-2.5 transition hover:text-primary"
              >
                Peptides Bali Online
                <ArrowUpRightIcon className="size-3.5" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="container-page pt-6 pb-24 text-sm text-white/55 sm:pb-6">
          © {new Date().getFullYear()} Bali Peptides. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
