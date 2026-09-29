import Image from "next/image";
import type { Product } from "@/data/products";
import { getProductMessage, getWhatsAppUrl } from "@/lib/whatsapp";
import AddToCartButton from "@/components/AddToCartButton";
import { WhatsAppIcon } from "@/components/Icons";

type ProductCardProps = {
  product: Product;
};

// On phones the card is a compact row (image beside text) so visitors can
// scan the whole catalogue quickly. From tablet width up it becomes a
// classic vertical product card.
export default function ProductCard({ product }: ProductCardProps) {
  // Use the product's own message if it has one, otherwise the standard one.
  const message = product.whatsappMessage ?? getProductMessage(product.name);

  return (
    <article className="group reveal grid grid-cols-[6rem_1fr] gap-4 min-[380px]:grid-cols-[7.5rem_1fr] rounded-[1.5rem] border border-line bg-white p-3 transition duration-300 hover:border-primary/50 hover:shadow-card sm:flex sm:flex-col sm:gap-0 sm:rounded-[1.75rem] sm:p-2.5 sm:hover:-translate-y-1">
      <div className="relative aspect-square self-start overflow-hidden rounded-2xl bg-cream sm:self-stretch sm:rounded-[1.25rem]">
        <Image
          src={product.image}
          alt={`${product.name} vial`}
          fill
          sizes="(min-width: 1280px) 290px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 120px"
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute top-3.5 left-3.5 hidden rounded-full border border-primary/40 bg-white/85 px-2.5 py-1 font-label text-xs font-bold text-primary-dark tabular-nums sm:block">
          {String(product.id).padStart(3, "0")}
        </span>
      </div>

      <div className="sm:px-3 sm:pt-5">
        <p className="font-label text-xs font-semibold tracking-[0.14em] text-primary-dark uppercase">
          {product.category}
        </p>
        <h3 className="mt-1.5 text-lg leading-tight font-semibold tracking-[-0.01em] sm:mt-2 sm:text-[1.35rem]">
          {product.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted sm:mt-2.5 sm:text-[15px]">
          {product.description}
        </p>
      </div>

      {/* sm:mt-auto keeps every button on the same line, whatever the text length */}
      <div className="col-span-2 sm:mt-auto sm:px-3 sm:pt-6 sm:pb-2">
        <AddToCartButton productId={product.id} productName={product.name} />
        <a
          href={getWhatsAppUrl(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 flex min-h-11 items-center justify-center gap-2 rounded-full text-sm font-medium text-muted transition hover:text-heading"
        >
          <WhatsAppIcon className="size-4 text-accent" />
          Ask on WhatsApp
          <span className="sr-only">about {product.name}</span>
        </a>
      </div>
    </article>
  );
}
