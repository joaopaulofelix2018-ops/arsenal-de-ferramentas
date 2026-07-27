import Benefits from "@/components/Benefits";
import Brands from "@/components/Brands";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Offers from "@/components/Offers";
import SocialProof from "@/components/SocialProof";
import Testimonials from "@/components/Testimonials";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0B0B0B]">
      <Navbar />
      <div className="fixed inset-x-0 top-20 z-30 bg-[#FFC107] px-4 py-2 text-center text-xs font-black text-black sm:text-sm">⚠ Algumas promoções acabam em poucas horas</div>
      <Hero />
      <Offers />
      <Brands />
      <Benefits />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <SocialProof />
      <WhatsAppButton />
    </main>
  );
}
