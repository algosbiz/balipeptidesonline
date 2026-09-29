import Image from "next/image";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/Icons";

export default function WhatsAppCTA() {
  return (
    <section aria-labelledby="cta-title" className="bg-white pb-20 sm:pb-28">
      <div className="container-page">
        <div className="reveal relative overflow-hidden rounded-[2rem] bg-primary px-6 py-16 text-center sm:px-12 sm:py-20 lg:py-24">
          <Image
            src="/images/logo/bali-peptides-mark.png"
            alt=""
            width={400}
            height={422}
            className="pointer-events-none absolute -bottom-16 -left-12 w-60 opacity-25 brightness-0 invert sm:w-80"
          />
          <Image
            src="/images/logo/bali-peptides-mark.png"
            alt=""
            width={400}
            height={422}
            className="pointer-events-none absolute -top-14 -right-12 hidden w-72 -scale-x-100 opacity-25 brightness-0 invert md:block"
          />

          <div className="relative">
            <h2
              id="cta-title"
              className="mx-auto max-w-3xl text-4xl leading-[1.05] font-medium tracking-[-0.03em] text-secondary sm:text-5xl lg:text-6xl"
            >
              Looking for peptides in Bali?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-secondary/85">
              Fast delivery, premium products and Bali-wide coverage.
            </p>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-9 px-8 py-4 text-base"
            >
              <WhatsAppIcon className="size-5 text-accent" />
              Chat with Bali Peptides
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
