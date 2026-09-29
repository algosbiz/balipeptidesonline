import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import Delivery from "@/components/Delivery";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartProvider";
import CartDrawer from "@/components/CartDrawer";

export default function Home() {
  return (
    // CartProvider lets the header, the product cards and the cart drawer share one cart.
    <CartProvider>
      <Header />

      <main id="main">
        <Hero />
        <Benefits />
        <Products />
        <WhyUs />
        <Delivery />
        <About />
        <FAQ />
        <WhatsAppCTA />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <CartDrawer />
    </CartProvider>
  );
}
