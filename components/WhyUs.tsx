import Image from "next/image";
import { ChatIcon, ClockIcon, PackageIcon, PinIcon, SparkleIcon } from "@/components/Icons";

const reasons = [
  {
    title: "Fast Bali Delivery",
    text: "Orders delivered throughout Bali.",
    icon: ClockIcon,
  },
  {
    title: "Discreet Packaging",
    text: "Privacy-focused delivery service.",
    icon: PackageIcon,
  },
  {
    title: "Bali Coverage",
    text: "Canggu, Uluwatu, Seminyak, Ubud, Sanur, Nusa Dua and beyond.",
    icon: PinIcon,
  },
  {
    title: "Premium Quality",
    text: "Sourced from trusted manufacturers with strict quality standards.",
    icon: SparkleIcon,
  },
  {
    title: "Expert Guidance",
    text: "Support selecting products aligned with your goals.",
    icon: ChatIcon,
  },
];

export default function WhyUs() {
  return (
    <section id="whyus" aria-labelledby="why-us-title" className="section bg-cream">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="reveal lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">Why Bali Peptides</p>
          <h2 id="why-us-title" className="section-title mt-4">
            A peptide service built for Bali.
          </h2>
          <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[2rem] lg:aspect-[5/4]">
            <Image
              src="/images/why-us/bali-coastline.webp"
              alt="Bali coastline and palm trees at sunset"
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <ol className="divide-y divide-line border-y border-line">
          {reasons.map((reason, index) => (
            <li
              key={reason.title}
              className="reveal grid grid-cols-[auto_1fr_auto] items-start gap-5 py-7 sm:gap-7 sm:py-9"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-white text-primary-dark ring-1 ring-line">
                <reason.icon className="size-5" />
              </span>
              <div>
                <h3 className="text-xl font-semibold sm:text-2xl">{reason.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{reason.text}</p>
              </div>
              <span className="pt-1 font-label text-sm font-semibold text-primary-dark tabular-nums" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
