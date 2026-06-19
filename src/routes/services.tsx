import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingDecor, SocialRail, SectionTitle } from "@/components/Decorations";
import { ArrowRight } from "lucide-react";
import sMakeup from "@/assets/service-makeup.jpg";
import sHair from "@/assets/service-hair.jpg";
import sNails from "@/assets/service-nails.jpg";
import sFacial from "@/assets/service-facial.jpg";
import sBridal from "@/assets/service-bridal.jpg";
import sSpa from "@/assets/service-spa.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Pinki Beauty Salon" },
      { name: "description", content: "Explore makeup, hair styling, nail art, facials, bridal packages, and spa & massage at Pinki Beauty Salon." },
      { property: "og:title", content: "Our Services — Pinki Beauty Salon" },
      { property: "og:description", content: "Premium beauty services tailored for you." },
    ],
  }),
  component: Services,
});

const services = [
  { name: "Makeup", img: sMakeup, price: "From PKR 4,500", desc: "Glam, party, editorial — all customized to your features and event." },
  { name: "Hair Styling", img: sHair, price: "From PKR 2,500", desc: "Blow-outs, curls, updos and color treatments by master stylists." },
  { name: "Nail Art", img: sNails, price: "From PKR 1,800", desc: "Manicure, pedicure, extensions, gel & rhinestone nail art." },
  { name: "Facial Treatment", img: sFacial, price: "From PKR 3,500", desc: "Hydrating, brightening, anti-aging and signature glow facials." },
  { name: "Bridal Makeup", img: sBridal, price: "From PKR 35,000", desc: "Complete bridal packages — engagement, mehndi, nikkah & valima." },
  { name: "Spa & Massage", img: sSpa, price: "From PKR 5,000", desc: "Relaxing body massages, aromatherapy and body polishing rituals." },
];

function Services() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <SocialRail />

      <section className="relative bg-gradient-hero py-20">
        <FloatingDecor />
        <div className="max-w-7xl mx-auto px-4 text-center animate-fade-up relative">
          <span className="inline-block bg-white/60 backdrop-blur-sm border border-primary/20 px-5 py-2 rounded-full text-xs font-bold text-primary tracking-wider">✨ OUR SERVICES</span>
          <h1 className="mt-4 font-serif text-6xl md:text-7xl text-pink-deep">
            Luxury <span className="font-display text-primary italic">Treatments</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">A complete menu of beauty rituals — every service designed to make you glow.</p>
        </div>
      </section>

      <section className="py-20">
        <SectionTitle small="What We" big="Offer" />
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={s.name} className="group bg-card rounded-3xl overflow-hidden shadow-card border border-primary/10 hover-lift animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="relative aspect-square bg-gradient-to-br from-pink-soft to-white p-6">
                <img src={s.img} alt={s.name} width={512} height={512} loading="lazy" className="w-full h-full object-cover rounded-2xl"/>
                <div className="absolute top-4 right-4 bg-gradient-button text-primary-foreground rounded-full px-3 py-1 text-[10px] font-bold tracking-wider">{s.price}</div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display text-3xl text-pink-deep">{s.name} <span className="text-accent text-xl">♡</span></h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <Link to="/book" className="mt-4 inline-flex items-center gap-2 bg-gradient-button text-primary-foreground px-5 py-2.5 rounded-full text-xs font-bold tracking-wider shadow-soft group-hover:scale-105 transition-transform">
                  BOOK NOW <ArrowRight size={12}/>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
