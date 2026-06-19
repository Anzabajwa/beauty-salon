import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingDecor, SocialRail, SectionTitle } from "@/components/Decorations";
import wMakeup from "@/assets/work-makeup.jpg";
import wNails from "@/assets/work-nails.jpg";
import wHair from "@/assets/work-hair.jpg";
import wFacial from "@/assets/work-facial.jpg";
import hero from "@/assets/hero-model.jpg";
import giftBox from "@/assets/gift-box.jpg";
import client1 from "@/assets/client-1.jpg";
import sBridal from "@/assets/service-bridal.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Pinki Beauty Salon" },
      { name: "description", content: "Browse our portfolio of bridal makeup, nail art, hair styling and facial transformations." },
      { property: "og:title", content: "Gallery — Pinki Beauty Salon" },
      { property: "og:description", content: "Real transformations by our beauty experts." },
    ],
  }),
  component: Gallery,
});

const images = [
  { src: hero, span: "md:col-span-2 md:row-span-2", label: "Bridal Glow" },
  { src: wMakeup, span: "", label: "Pink Eye Glam" },
  { src: wNails, span: "", label: "Glitter Nails" },
  { src: wHair, span: "", label: "Pearl Updo" },
  { src: wFacial, span: "", label: "Rose Ritual" },
  { src: client1, span: "md:col-span-2", label: "Bridal Portrait" },
  { src: sBridal, span: "", label: "Princess Bride" },
  { src: giftBox, span: "", label: "Gift Packages" },
];

function Gallery() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <SocialRail />

      <section className="relative bg-gradient-hero py-20">
        <FloatingDecor />
        <div className="max-w-7xl mx-auto px-4 text-center animate-fade-up relative">
          <span className="inline-block bg-white/60 backdrop-blur-sm border border-primary/20 px-5 py-2 rounded-full text-xs font-bold text-primary tracking-wider">📸 OUR GALLERY</span>
          <h1 className="mt-4 font-serif text-6xl md:text-7xl text-pink-deep">
            Moments of <span className="font-display text-primary italic">Magic</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Every face we touch becomes our canvas — here are some of our favorites.</p>
        </div>
      </section>

      <section className="py-20">
        <SectionTitle small="Our" big="Portfolio" />
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, i) => (
            <div key={i} className={`relative rounded-3xl overflow-hidden shadow-card hover-lift animate-scale-in group ${img.span}`} style={{ animationDelay: `${i * 0.08}s` }}>
              <img src={img.src} alt={img.label} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
              <div className="absolute inset-0 bg-gradient-to-t from-pink-deep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="font-display text-2xl text-white">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
