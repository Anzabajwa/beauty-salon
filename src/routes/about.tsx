import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingDecor, SocialRail } from "@/components/Decorations";
import { ArrowRight, Award, Heart, Users, Sparkles } from "lucide-react";
import hero from "@/assets/hero-model.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Pinki Beauty Salon" },
      { name: "description", content: "Learn about Pinki Beauty Salon's 20+ years of expertise in beauty, makeup, bridal, and spa services." },
      { property: "og:title", content: "About Pinki Beauty Salon" },
      { property: "og:description", content: "Two decades of luxury beauty experiences in a dreamy pink sanctuary." },
    ],
  }),
  component: About,
});

const stats = [
  { icon: Users, num: "10K+", label: "Happy Clients" },
  { icon: Award, num: "20+", label: "Years Experience" },
  { icon: Heart, num: "50+", label: "Beauty Experts" },
  { icon: Sparkles, num: "100%", label: "Satisfaction" },
];

function About() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <SocialRail />

      <section className="relative bg-gradient-hero py-20">
        <FloatingDecor />
        <div className="max-w-7xl mx-auto px-4 text-center animate-fade-up relative">
          <span className="inline-block bg-white/60 backdrop-blur-sm border border-primary/20 px-5 py-2 rounded-full text-xs font-bold text-primary tracking-wider">👑 ABOUT US</span>
          <h1 className="mt-4 font-serif text-6xl md:text-7xl text-pink-deep">
            Our <span className="font-display text-primary italic">Beautiful</span> Story
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Two decades of crafting confidence, one glowing transformation at a time.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-pink rounded-3xl blur-3xl opacity-40"/>
            <img src={hero} alt="Pinki Beauty Salon" width={1024} height={1024} loading="lazy" className="relative rounded-3xl shadow-glow border-8 border-white/70"/>
            <div className="absolute -bottom-6 -right-6 bg-gradient-button text-primary-foreground rounded-full w-36 h-36 flex flex-col items-center justify-center shadow-soft animate-float">
              <span className="text-4xl font-bold">20+</span>
              <span className="text-xs">Years</span>
            </div>
          </div>
          <div className="animate-fade-up">
            <p className="text-xs tracking-[0.3em] font-bold text-primary">OUR JOURNEY</p>
            <h2 className="mt-3 font-display text-5xl text-pink-deep">Where Dreams Bloom <span className="text-accent">♡</span></h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Founded with a single vision — to make every woman feel like the most beautiful version of herself. Pinki Beauty Salon has grown into a sanctuary where artistry meets care, and where every visit feels like a celebration.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From bridal magic to everyday glow, our certified experts use only premium products and the latest techniques in a hygienic, luxurious environment designed entirely around you.
            </p>
            <Link to="/book" className="mt-6 inline-flex items-center gap-2 bg-gradient-button text-primary-foreground px-6 py-3 rounded-full text-xs font-bold tracking-wider shadow-soft hover-lift">
              BOOK A VISIT <ArrowRight size={14}/>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={s.label} className="bg-card rounded-3xl p-8 text-center shadow-card border border-primary/10 hover-lift animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="w-14 h-14 mx-auto rounded-full bg-gradient-button text-primary-foreground flex items-center justify-center">
                <s.icon size={22}/>
              </div>
              <div className="mt-4 font-display text-5xl text-pink-deep">{s.num}</div>
              <div className="text-sm font-semibold text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
