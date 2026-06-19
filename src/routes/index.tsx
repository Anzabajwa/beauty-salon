import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, Sparkles, Check, Phone, User, Calendar, Mail } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingDecor, SocialRail, SectionTitle } from "@/components/Decorations";
import heroModel from "@/assets/hero-model.jpg";
import sMakeup from "@/assets/service-makeup.jpg";
import sHair from "@/assets/service-hair.jpg";
import sNails from "@/assets/service-nails.jpg";
import sFacial from "@/assets/service-facial.jpg";
import sBridal from "@/assets/service-bridal.jpg";
import sSpa from "@/assets/service-spa.jpg";
import wMakeup from "@/assets/work-makeup.jpg";
import wNails from "@/assets/work-nails.jpg";
import wHair from "@/assets/work-hair.jpg";
import wFacial from "@/assets/work-facial.jpg";
import giftBox from "@/assets/gift-box.jpg";
import client1 from "@/assets/client-1.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pinki Beauty Salon — Where Beauty Meets Perfection" },
      { name: "description", content: "Premium pink beauty salon offering makeup, hair, nails, facials & bridal services. Book your appointment today." },
      { property: "og:title", content: "Pinki Beauty Salon" },
      { property: "og:description", content: "Discover the best version of yourself with our premium salon & beauty services." },
    ],
  }),
  component: Home,
});

const services = [
  { name: "Makeup", img: sMakeup },
  { name: "Hair Styling", img: sHair },
  { name: "Nail Art", img: sNails },
  { name: "Facial Treatment", img: sFacial },
  { name: "Bridal Makeup", img: sBridal },
  { name: "Spa & Massage", img: sSpa },
];

const workShots = [wMakeup, wNails, wHair, wFacial];

const reasons = [
  "Professional & Certified Experts",
  "Premium Quality Products",
  "Hygienic & Safe Environment",
  "100% Customer Satisfaction",
];

function Home() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <SocialRail />

      {/* HERO */}
      <section className="relative bg-gradient-hero pt-10 pb-32 overflow-hidden">
        <FloatingDecor />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center relative">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-primary/20 px-5 py-2 rounded-full text-xs font-semibold text-primary tracking-wider">
              👑 WHERE BEAUTY MEETS <span className="text-pink-deep">PERFECTION</span>
            </span>
            <h1 className="mt-6 font-serif text-6xl md:text-7xl lg:text-8xl text-pink-deep leading-[0.95] text-balance">
              Beauty
              <br />
              <span className="font-display text-7xl md:text-8xl lg:text-9xl text-primary italic block -my-2">Beyond</span>
              <span className="text-pink-deep">Imagination</span>
            </h1>
            <p className="mt-6 text-muted-foreground text-lg max-w-md">
              Discover the best version of yourself with our premium salon & beauty services.
            </p>
            <Link
              to="/book"
              className="mt-8 inline-flex items-center gap-3 bg-gradient-button text-primary-foreground px-8 py-4 rounded-full font-bold tracking-wider shadow-soft hover-lift animate-pulse-glow"
            >
              BOOK YOUR APPOINTMENT <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-pink rounded-full blur-3xl opacity-50 animate-pulse-glow" />
            <div className="relative aspect-square rounded-full overflow-hidden border-8 border-white/70 shadow-glow">
              <img src={heroModel} alt="Beauty model" width={1024} height={1024} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-6 bg-gradient-button text-primary-foreground rounded-full w-32 h-32 flex flex-col items-center justify-center font-serif shadow-soft animate-float">
              <span className="text-3xl font-bold">20+</span>
              <span className="text-xs">Years of</span>
              <span className="text-xs">Experience</span>
            </div>
            <div className="absolute -top-4 -right-2 text-4xl animate-butterfly">🦋</div>
            <div className="absolute top-1/4 -left-8 text-3xl animate-sparkle">✦</div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-background" style={{ clipPath: "ellipse(70% 100% at 50% 100%)" }} />
      </section>

      {/* SERVICES */}
      <section className="py-20 relative">
        <SectionTitle small="What We" big="Offer" />
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((s, i) => (
            <Link
              to="/services"
              key={s.name}
              className="group text-center animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative bg-gradient-to-br from-white to-pink-soft rounded-[40%] aspect-square p-4 shadow-card hover-lift border border-primary/10">
                <img src={s.img} alt={s.name} width={512} height={512} loading="lazy" className="w-full h-full object-cover rounded-[40%]" />
              </div>
              <h3 className="mt-4 font-serif text-base font-bold text-pink-deep">{s.name}</h3>
              <div className="mt-2 inline-flex w-9 h-9 items-center justify-center rounded-full bg-gradient-button text-primary-foreground group-hover:scale-110 transition-transform">
                <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* OUR WORK */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[1fr_2fr] gap-8 items-center">
          <div className="bg-gradient-to-br from-pink-soft to-white rounded-3xl p-10 border border-primary/10 shadow-card animate-fade-up">
            <p className="text-xs tracking-[0.3em] font-bold text-primary">WE MAKE YOU SHINE</p>
            <h2 className="mt-3 font-display text-6xl text-pink-deep">Our Work <span className="text-accent text-3xl">♡</span></h2>
            <p className="mt-4 text-muted-foreground">Every look we create is a work of art. Explore our stunning transformations.</p>
            <Link to="/gallery" className="mt-6 inline-flex items-center gap-2 bg-gradient-button text-primary-foreground px-6 py-3 rounded-full text-xs font-bold tracking-wider shadow-soft hover-lift">
              VIEW GALLERY <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {workShots.map((img, i) => (
              <div key={i} className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-card hover-lift animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <img src={img} alt={`Work ${i + 1}`} width={640} height={768} loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative bg-gradient-pink rounded-3xl p-8 md:p-12 overflow-hidden shadow-glow">
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 text-7xl opacity-60">🌸</div>
            <div className="absolute -right-4 -bottom-4 w-44 h-44 rounded-2xl overflow-hidden hidden md:block">
              <img src={giftBox} alt="Special gift" width={640} height={640} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="relative grid md:grid-cols-3 items-center gap-6">
              <div className="text-center md:text-left">
                <span className="inline-block bg-white text-primary px-4 py-1 rounded-full text-xs font-bold tracking-wider">SPECIAL</span>
                <h3 className="font-display text-6xl text-white mt-2">Offer</h3>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-3xl md:text-4xl text-white font-bold">Get 20% OFF On</h3>
                <p className="font-serif text-2xl md:text-3xl text-white">Your First Visit</p>
                <Link to="/book" className="mt-4 inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full text-xs font-bold tracking-wider hover-lift">
                  BOOK NOW <ArrowRight size={14} />
                </Link>
              </div>
              <div className="text-center md:text-right">
                <span className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-pink-deep text-white text-sm font-bold animate-pulse-glow">
                  Limited<br/>Time<br/>Offer!
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM 3 CARDS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-6">
          {/* Book */}
          <div className="bg-card rounded-3xl p-8 shadow-card border border-primary/10 animate-fade-up">
            <h3 className="font-display text-3xl text-pink-deep">Book Your <span className="font-serif text-2xl">Appointment</span></h3>
            <form className="mt-6 grid grid-cols-2 gap-3">
              <div className="relative col-span-1">
                <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
                <input placeholder="Your Name" className="w-full pl-9 pr-3 py-3 rounded-full bg-pink-soft text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div className="relative">
                <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
                <input placeholder="Phone Number" className="w-full pl-9 pr-3 py-3 rounded-full bg-pink-soft text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div className="relative">
                <Sparkles size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
                <select className="w-full pl-9 pr-3 py-3 rounded-full bg-pink-soft text-sm focus:outline-none focus:ring-2 focus:ring-primary appearance-none">
                  <option>Select Service</option>
                  {services.map(s => <option key={s.name}>{s.name}</option>)}
                </select>
              </div>
              <div className="relative">
                <Calendar size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
                <input type="date" className="w-full pl-9 pr-3 py-3 rounded-full bg-pink-soft text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <button type="button" className="col-span-2 bg-gradient-button text-primary-foreground py-3 rounded-full text-xs font-bold tracking-wider shadow-soft hover-lift inline-flex items-center justify-center gap-2">
                BOOK APPOINTMENT <ArrowRight size={14} />
              </button>
            </form>
          </div>

          {/* Why */}
          <div className="bg-card rounded-3xl p-8 shadow-card border border-primary/10 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="font-display text-3xl text-pink-deep">Why Choose Us? <span className="text-accent">♡</span></h3>
            <ul className="mt-6 space-y-4">
              {reasons.map((r) => (
                <li key={r} className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-gradient-pink flex items-center justify-center text-primary-foreground">
                    <Check size={14} />
                  </span>
                  <span className="text-sm font-semibold text-pink-deep">{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonial */}
          <div className="bg-card rounded-3xl p-8 shadow-card border border-primary/10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-display text-3xl text-pink-deep text-center">~ What Our Clients Say ~</h3>
            <div className="mt-6 flex gap-4">
              <img src={client1} alt="Sana Khan" width={64} height={64} loading="lazy" className="w-16 h-16 rounded-full object-cover border-4 border-primary/20" />
              <div>
                <div className="flex gap-0.5 text-yellow-500 mb-1">
                  {Array.from({length: 5}).map((_,i)=> <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-sm text-muted-foreground italic">"Absolutely loved the experience! The staff is so professional and the results are amazing. Highly recommended!"</p>
                <p className="mt-2 text-xs font-bold text-primary">— Sana Khan</p>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              <span className="w-2 h-2 rounded-full bg-primary"/>
              <span className="w-2 h-2 rounded-full bg-primary/30"/>
              <span className="w-2 h-2 rounded-full bg-primary/30"/>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
