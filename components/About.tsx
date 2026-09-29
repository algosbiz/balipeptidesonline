import Image from "next/image";
import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/Icons";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section bg-cream">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="reveal relative aspect-[4/3] overflow-hidden rounded-[2rem] lg:aspect-square">
          <Image
            src="/images/about/bali-peptides-vial.webp"
            alt="Peptide vial resting on soft fabric"
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="reveal">
          <p className="eyebrow">About Bali Peptides</p>
          <h2 id="about-title" className="section-title mt-4">
            Connecting Bali with premium peptide care.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Bali Peptides was created to help connect Bali residents and
            visitors with premium peptide consultation and delivery services.
          </p>
          <p className="mt-6 border-l-2 border-primary pl-5 font-display text-xl leading-snug text-heading">
            Whether your goals involve recovery, wellness, longevity, body
            composition or performance, our team can help direct you towards
            suitable options.
          </p>
          <p className="mt-6 text-muted">
            For the complete catalogue and latest availability please visit:{" "}
            <a
              href={siteConfig.catalogueUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Peptides Bali Online
            </a>
          </p>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-9"
          >
            <WhatsAppIcon className="size-4 text-accent" />
            Contact on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
