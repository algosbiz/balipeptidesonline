import { siteConfig } from "@/data/site";

// Questions shown in the FAQ section. They are also added to the page's
// structured data so search engines can understand them.
// "link" is optional: use it when an answer should point somewhere.

export type FaqItem = {
  question: string;
  answer: string;
  link?: {
    label: string;
    href: string;
  };
};

export const faqs: FaqItem[] = [
  {
    question: "What areas of Bali do you deliver to?",
    answer:
      "We deliver throughout Bali including Canggu, Uluwatu, Seminyak, Ubud, Sanur and Nusa Dua.",
  },
  {
    question: "Do you offer same-day delivery?",
    answer:
      "Many Bali locations can be serviced the same day depending on stock availability and order time.",
  },
  {
    question: "Where can I view the full peptide catalogue?",
    answer: "Visit:",
    link: {
      label: "Peptides Bali Online Full Catalogue",
      href: siteConfig.catalogueUrl,
    },
  },
  {
    question: "Do you provide consultations?",
    answer:
      "Yes. Guidance is available to help customers understand available options.",
  },
  {
    question: "How do I place an order?",
    answer: "Visit:",
    link: {
      label: "Peptides Bali Online Ordering Page",
      href: siteConfig.catalogueUrl,
    },
  },
];
