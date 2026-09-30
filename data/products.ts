// Every product card on the website is built from this list.
//
// To add a product: copy one of the blocks below, give it the next id,
// change the details, and put its image in /public/images/products/.
// To remove a product: delete its block.

export type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  // Optional. Leave it out and the site writes the standard message:
  // "I'm interested in <name>. Could you please provide more information?"
  // The greeting that names balipeptides.online is always added in front automatically.
  whatsappMessage?: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Retatrutide Bali",
    category: "Weight management",
    description:
      "Popular among individuals focused on body composition and weight management goals.",
    image: "/images/products/retatrutide.webp",
  },
  {
    id: 2,
    name: "Tirzepatide Bali",
    category: "Metabolic support",
    description:
      "Widely searched peptide for appetite control and metabolic support.",
    image: "/images/products/tirzepatide.webp",
  },
  {
    id: 3,
    name: "BPC-157 Bali",
    category: "Recovery",
    description: "Commonly researched for recovery and injury support.",
    image: "/images/products/bpc-157.webp",
  },
  {
    id: 4,
    name: "TB-500 Bali",
    category: "Recovery",
    description: "Often paired with recovery-focused protocols.",
    image: "/images/products/tb-500.webp",
  },
  {
    id: 5,
    name: "GHK-Cu Bali",
    category: "Skin & hair",
    description: "Popular for skin, hair and appearance-focused protocols.",
    image: "/images/products/ghk-cu.webp",
  },
  {
    id: 6,
    name: "NAD+ Bali",
    category: "Longevity",
    description:
      "Frequently researched for wellness, energy and longevity support.",
    image: "/images/products/nad.webp",
  },
  {
    id: 7,
    name: "CJC-1295 & Ipamorelin",
    category: "Growth hormone",
    description: "Commonly used within growth hormone support protocols.",
    image: "/images/products/cjc-1295-ipamorelin.webp",
  },
  {
    id: 8,
    name: "Tesamorelin Bali",
    category: "Body composition",
    description: "Popular among individuals focused on body composition goals.",
    image: "/images/products/tesamorelin.webp",
  },
  {
    id: 9,
    name: "Epitalon Bali",
    category: "Longevity",
    description: "Often researched for healthy ageing and longevity protocols.",
    image: "/images/products/epitalon.webp",
  },
  {
    id: 10,
    name: "MOTS-C Bali",
    category: "Performance",
    description:
      "Frequently included within performance and metabolic optimisation protocols.",
    image: "/images/products/mots-c.webp",
  },
];
