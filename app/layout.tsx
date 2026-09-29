import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, Urbanist } from "next/font/google";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

// The three fonts used on the original Bali Peptides website.
// next/font downloads them at build time, so visitors never wait on Google Fonts.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-urbanist",
  display: "swap",
  // Only used for small labels, so it doesn't need to compete with the hero image.
  preload: false,
});

// ---------- SEO ----------
// Edit the title and description here. They appear in Google results
// and when the link is shared on WhatsApp, Facebook, X, etc.
const title = "Bali Peptides | Bali's Premium Peptide Delivery Service";
const description =
  "Access premium-quality peptides delivered across Bali with fast delivery, discreet packaging and expert guidance. Serving Canggu, Uluwatu, Seminyak, Ubud, Sanur, Nusa Dua and beyond.";

export const metadata: Metadata = {
  metadataBase: new URL("https://balipeptides.online"),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Bali Peptides",
    title,
    description,
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bali Peptides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#fff9f1",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${urbanist.variable}`}
    >
      <body id="top">
        <a
          href="#main"
          className="sr-only rounded-full bg-secondary px-5 py-3 text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60]"
        >
          Skip to content
        </a>
        {children}
        <StructuredData />
      </body>
    </html>
  );
}
