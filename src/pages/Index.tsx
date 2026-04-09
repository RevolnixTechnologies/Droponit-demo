import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ProductGrid from "@/components/ProductGrid";
import CartDrawer from "@/components/CartDrawer";
import About from "@/components/About";
import TrustStrip from "@/components/TrustStrip";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ModeSwitcher from "@/components/ModeSwitcher";
import { useShoppingMode } from "@/context/ShoppingModeContext";
import WholesaleEnquiryForm from "@/components/WholesaleEnquiryForm";

export default function Index() {
  const { isWholesale } = useShoppingMode();

  return (
    <CartProvider>
      <div className="min-h-screen bg-background transition-colors duration-500">
        <Header />


        {isWholesale ? (
          <div className="animate-fade-in">
            {/* Wholesale Hero */}
            <section className="pt-32 pb-12 bg-[#FFF3E8]">
              <div className="container mx-auto px-4">
                <div className="mb-12 flex justify-start">
                  <ModeSwitcher />
                </div>
                <div className="text-center">
                  <h1 className="font-display font-black text-4xl md:text-6xl mb-4 text-navy">
                    Bulk Joy, <span className="text-primary">Bulk Savings</span>
                  </h1>
                  <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                    Scale your business with Droponit's most-loved toys. High-volume toys, irresistible wholesale prices!
                  </p>
                </div>
              </div>
            </section>

            <ProductGrid />

            {/* Wholesale Info */}
            <section className="py-20 bg-muted/30">
              <div className="container mx-auto px-4 flex flex-col items-center">
                <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="font-display font-black text-3xl">Why Droponit Wholesale?</h2>
                    <ul className="space-y-4">
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">✓</span>
                        <p className="font-body text-sm text-muted-foreground">Significant tiered discounts on bulk orders.</p>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">✓</span>
                        <p className="font-body text-sm text-muted-foreground">GST compliant invoices for business tax benefits.</p>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">✓</span>
                        <p className="font-body text-sm text-muted-foreground">Priority logistics and expedited delivery.</p>
                      </li>
                    </ul>
                  </div>
                  <WholesaleEnquiryForm />
                </div>
              </div>
            </section>
          </div>
        ) : (
          <div className="animate-fade-in">
            <Hero />
            <Marquee />
            <ProductGrid />
            <About />
          </div>
        )}

        <TrustStrip />
        <Footer />
        <CartDrawer />
        <FloatingButtons />
      </div>
    </CartProvider>
  );
}
