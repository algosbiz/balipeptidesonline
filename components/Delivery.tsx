import Image from "next/image";
import { DELIVERY_MESSAGE, getWhatsAppUrl } from "@/lib/whatsapp";
import { PinIcon, WhatsAppIcon } from "@/components/Icons";

const deliveryAreas = [
  "Canggu",
  "Seminyak",
  "Uluwatu",
  "Ubud",
  "Sanur",
  "Denpasar",
  "Kerobokan",
  "Berawa",
  "Pererenan",
  "Jimbaran",
  "Kuta",
  "Nusa Dua",
  "Legian",
  "Umalas",
];

export default function Delivery() {
  return (
    <section id="delivery" aria-labelledby="delivery-title" className="section bg-white">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="reveal">
          <p className="eyebrow">Delivery coverage</p>
          <h2 id="delivery-title" className="section-title mt-4">
            Bali-Wide Peptide Delivery
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
            Serving the entire island with discreet, reliable delivery.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Delivery areas">
            {deliveryAreas.map((area) => (
              <li
                key={area}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-cream px-3.5 py-2 text-sm font-medium text-heading"
              >
                <PinIcon className="size-3.5 text-primary-dark" />
                {area}
              </li>
            ))}
            <li className="inline-flex items-center px-2 py-2 text-sm font-medium text-muted">
              and beyond
            </li>
          </ul>

          <a
            href={getWhatsAppUrl(DELIVERY_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-10"
          >
            <WhatsAppIcon className="size-4 text-accent" />
            Check Delivery Availability
          </a>
        </div>

        <figure className="reveal rounded-[2rem] bg-cream p-3 sm:p-10">
          <Image
            src="/images/delivery/bali-map.svg"
            alt="Map of Bali marking delivery areas, including Canggu, Seminyak, Uluwatu, Ubud, Sanur, Denpasar and Nusa Dua"
            width={1000}
            height={660}
            className="h-auto w-full"
          />
        </figure>
      </div>
    </section>
  );
}
