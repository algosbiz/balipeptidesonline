// Site-wide details used in more than one place.

export const siteConfig = {
  name: "Bali Peptides",
  url: "https://balipeptides.online",
  // The partner catalogue linked from the menu, About, FAQ and Products sections.
  catalogueUrl: "https://peptidesbali.online/",
};

// Menu links in the header and footer, matching the live balipeptides.online menu.
// "#..." links scroll to a section on this page (the section's id).
// "external: true" links go to another website and open in a new tab.
export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Why Us", href: "#whyus" },
  { label: "Peptides", href: "#peptides" },
  { label: "Delivery", href: "#delivery" },
  { label: "FAQ’s", href: "#faq" },
  { label: "Catalogue", href: siteConfig.catalogueUrl, external: true },
];

// Extra attributes for links that leave the site.
export function externalLinkProps(link: { external?: boolean }) {
  return link.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
}
