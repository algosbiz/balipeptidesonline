import { faqs } from "@/data/faq";
import { siteConfig } from "@/data/site";
import { WHATSAPP_DISPLAY_NUMBER } from "@/lib/whatsapp";

// Structured data (JSON-LD) describes the business to search engines.
// It is deliberately conservative: Organization, WebSite and FAQPage only,
// because the site is a catalogue with WhatsApp ordering, not an online shop.
export default function StructuredData() {
  const { url, name } = siteConfig;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${url}/#organization`,
        name,
        url,
        logo: `${url}/images/logo/bali-peptides-logo.png`,
        areaServed: "Bali, Indonesia",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: WHATSAPP_DISPLAY_NUMBER,
          contactType: "customer service",
          areaServed: "Bali, Indonesia",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name,
        publisher: { "@id": `${url}/#organization` },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}/#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.link ? `${faq.answer} ${faq.link.label} (${faq.link.href})` : faq.answer,
          },
        })),
      },
    ],
  };

  // Escaping "<" stops the JSON from ever being read as HTML.
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
