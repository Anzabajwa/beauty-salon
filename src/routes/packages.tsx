import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingDecor, SocialRail, SectionTitle } from "@/components/Decorations";
import { Check, ArrowRight, Crown } from "lucide-react";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Packages — Pinki Beauty Salon" },
      { name: "description", content: "Choose from Glow, Bridal and Royal beauty packages tailored to make you shine." },
      { property: "og:title", content: "Beauty Packages — Pinki Beauty Salon" },
      { property: "og:description", content: "Curated beauty bundles at every price." },
    ],
  }),
  component: Packages,
});

const packages = [
  {
    name: "Glow",
    price: "8,500",
    tag: "Everyday Beauty",
    features: ["Express Facial", "Manicure & Pedicure", "Hair Wash & Blow-dry", "Threading & Cleanup", "Complimentary Tea"],
    highlight: false,
  },
  {
    name: "Bridal",
    price: "45,000",
    tag: "Most Popular",
    features: ["HD Bridal Makeup", "Bridal Hairstyle", "Pre-bridal Facial", "Nail Art & Extensions", "Saree/Dupatta Draping", "Touch-up Kit"],
    highlight: true,
  },
  {
    name: "Royal",
    price: "75,000",
    tag: "Ultimate Luxury",
    features: ["Everything in Bridal", "Mehndi Look", "Engagement Look", "Spa & Body Polish", "Personal Beauty Consultant", "Limousine Touch-up Service"],
    highlight: false,
  },
];

function Packages() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <SocialRail />

      <section className="relative bg-gradient-hero py-20">
        <FloatingDecor />
        <div className="max-w-7xl mx-auto px-4 text-center animate-fade-up relative">
          <span className="inline-block bg-white/60 backdrop-blur-sm border border-primary/20 px-5 py-2 rounded-full text-xs font-bold text-primary tracking-wider">💎 OUR PACKAGES</span>
          <h1 className="mt-4 font-serif text-6xl md:text-7xl text-pink-deep">
            Beauty <span className="font-display text-primary italic">Bundles</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Curated to make every moment unforgettable — from everyday glow to royal bridal magic.</p>
        </div>
      </section>

      <section className="py-20">
        <SectionTitle small="Choose Your" big="Package" />
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8">
          {packages.map((p, i) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-8 shadow-card hover-lift animate-fade-up border ${
                p.highlight
                  ? "bg-gradient-pink text-primary-foreground border-transparent scale-105"
                  : "bg-card border-primary/10"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {p.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-deep text-white px-4 py-1 rounded-full text-[10px] font-bold tracking-wider shadow-soft">
                  ★ {p.tag} ★
                </div>
              )}
              <div className="text-center">
                <Crown size={32} className={`mx-auto ${p.highlight ? "text-white" : "text-primary"}`}/>
                <h3 className={`mt-3 font-display text-5xl ${p.highlight ? "text-white" : "text-pink-deep"}`}>{p.name}</h3>
                {!p.highlight && <p className="text-xs text-muted-foreground tracking-wider">{p.tag}</p>}
                <div className="mt-4">
                  <span className={`text-sm ${p.highlight ? "text-white/80" : "text-muted-foreground"}`}>PKR</span>
                  <span className={`font-serif text-5xl font-bold ml-1 ${p.highlight ? "text-white" : "text-pink-deep"}`}>{p.price}</span>
                </div>
              </div>
              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center ${p.highlight ? "bg-white text-primary" : "bg-gradient-pink text-primary-foreground"}`}>
                      <Check size={12}/>
                    </span>
                    <span className={p.highlight ? "text-white" : "text-foreground"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/book"
                className={`mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold tracking-wider shadow-soft ${
                  p.highlight ? "bg-white text-primary" : "bg-gradient-button text-primary-foreground"
                }`}
              >
                BOOK PACKAGE <ArrowRight size={12}/>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
