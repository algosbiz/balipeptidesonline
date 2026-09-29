import Image from "next/image";
import { products } from "@/data/products";
import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import ProductCard from "@/components/ProductCard";
import { ArrowUpRightIcon, WhatsAppIcon } from "@/components/Icons";

export default function Products() {
  return (
    <section id="peptides" aria-labelledby="products-title" className="section bg-white">
      <div className="container-page">
        <div className="reveal flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Peptide catalogue</p>
            <h2 id="products-title" className="section-title mt-4">
              Most Popular Peptides in Bali
            </h2>
          </div>
          <a
            href={siteConfig.catalogueUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link self-start lg:self-auto"
          >
            For full product availability visit Peptides Bali
            <ArrowUpRightIcon className="ml-1 inline size-4 align-[-3px]" />
          </a>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

          {/* Spans two columns so the grid always ends on a full row */}
          <div className="reveal relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] bg-secondary p-8 text-white sm:col-span-2 sm:p-10">
            <Image
              src="/images/logo/bali-peptides-mark.png"
              alt=""
              width={400}
              height={422}
              className="pointer-events-none absolute -right-10 -bottom-12 w-64 opacity-[0.12] sm:w-72"
            />
            <div className="relative max-w-md">
              <p className="eyebrow text-primary">Full catalogue</p>
              <h3 className="mt-4 text-3xl leading-tight font-medium text-white sm:text-[2.1rem]">
                Looking for a specific peptide?
              </h3>
              <p className="mt-4 leading-relaxed text-white/70">
                For the complete catalogue and latest availability, visit
                Peptides Bali Online or ask our team on WhatsApp.
              </p>
            </div>
            <div className="relative mt-8 flex flex-wrap gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-copper"
              >
                <WhatsAppIcon className="size-4" />
                Ask on WhatsApp
              </a>
              <a
                href={siteConfig.catalogueUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn border border-white/25 text-white hover:border-white/60"
              >
                View full catalogue
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
