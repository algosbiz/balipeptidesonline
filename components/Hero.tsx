import Image from "next/image";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { ArrowDownIcon, ArrowRightIcon, PinIcon, WhatsAppIcon } from "@/components/Icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="container-page grid items-center gap-14 pt-8 pb-20 sm:pt-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pt-14 lg:pb-24">
        <div>
          <p className="fade-up inline-flex items-center gap-2 rounded-full border border-primary/35 bg-white/70 px-3.5 py-1.5 font-label text-[13px] font-semibold text-primary-dark">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            Same-Day Delivery Available
          </p>

          <h1 className="fade-up mt-6 text-[clamp(2.1rem,10.5vw,2.6rem)] leading-[1.02] font-semibold tracking-[-0.035em] [animation-delay:80ms] sm:text-6xl lg:text-[4rem] xl:text-[4.6rem]">
            Bali&apos;s Premium{" "}
            <span className="text-primary-dark sm:block">Peptide Delivery</span>{" "}
            Service
          </h1>

          <p className="fade-up mt-6 max-w-[34rem] text-lg leading-relaxed text-muted [animation-delay:160ms]">
            Access premium-quality peptides delivered across Bali with fast
            delivery, discreet packaging and expert guidance.
          </p>

          <div className="fade-up mt-9 flex flex-col gap-3 [animation-delay:240ms] sm:flex-row">
            <a href="#peptides" className="btn btn-primary">
              Explore Peptides
              <ArrowDownIcon className="size-4" />
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <WhatsAppIcon className="size-4 text-accent" />
              Order on WhatsApp
            </a>
          </div>
        </div>

        {/* Imagery: Bali landscape with a product card overlapping it.
            No fade-in here: this photo is the largest element on screen, and
            animating it would delay how fast the page appears to load. */}
        <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/hero/bali-rice-terraces.webp"
              alt="Bali rice terraces at sunrise"
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 640px) 560px, 100vw"
              className="object-cover"
            />
            <p className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-2 font-label text-[13px] font-semibold text-heading backdrop-blur">
              <PinIcon className="size-4 text-primary-dark" />
              Bali-Wide Coverage
            </p>
          </div>

          <a
            href="#peptides"
            className="group absolute -bottom-10 -left-2 w-[44%] max-w-[230px] rounded-3xl bg-white p-2 shadow-card transition hover:-translate-y-1 sm:-left-8 lg:-left-12"
          >
            <span className="relative block aspect-square overflow-hidden rounded-[1.1rem] bg-cream">
              <Image
                src="/images/products/retatrutide.webp"
                alt=""
                fill
                sizes="230px"
                className="object-cover"
              />
            </span>
            <span className="flex items-center justify-between gap-2 px-2 pt-3 pb-1.5">
              <span className="font-display text-[15px] leading-tight font-semibold text-heading sm:text-base">
                Retatrutide Bali
              </span>
              <ArrowRightIcon className="size-4 shrink-0 text-primary-dark transition group-hover:translate-x-0.5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
