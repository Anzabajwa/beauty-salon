import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingDecor, SocialRail, SectionTitle } from "@/components/Decorations";
import { ArrowRight, Calendar } from "lucide-react";
import wMakeup from "@/assets/work-makeup.jpg";
import wNails from "@/assets/work-nails.jpg";
import wHair from "@/assets/work-hair.jpg";
import wFacial from "@/assets/work-facial.jpg";
import sBridal from "@/assets/service-bridal.jpg";
import sSpa from "@/assets/service-spa.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Pinki Beauty Salon" },
      { name: "description", content: "Beauty tips, makeup trends, bridal inspiration and skincare guides from the Pinki team." },
      { property: "og:title", content: "Beauty Blog — Pinki Beauty Salon" },
      { property: "og:description", content: "Tips, tricks and trends from our beauty experts." },
    ],
  }),
  component: Blog,
});

const posts = [
  { img: wMakeup, tag: "Makeup", date: "Jun 18, 2026", title: "5 Pink Eye Looks That Will Steal the Show", excerpt: "From soft rose to electric fuchsia — the only pink palette guide you'll need this season." },
  { img: sBridal, tag: "Bridal", date: "Jun 12, 2026", title: "The Complete Pakistani Bridal Beauty Timeline", excerpt: "Plan your skincare, makeup trials and hair prep 6 months before the big day." },
  { img: wNails, tag: "Nails", date: "Jun 05, 2026", title: "Glitter, Gems & Glam: Nail Art Trends 2026", excerpt: "Long stiletto, soft coffin or chrome bubble — find the shape that fits your hand." },
  { img: wFacial, tag: "Skincare", date: "May 28, 2026", title: "Rose Ritual: Building a Glow Routine", excerpt: "Why botanical pinks belong in your weekly self-care rotation." },
  { img: wHair, tag: "Hair", date: "May 21, 2026", title: "Pearl Updos & Romantic Braids", excerpt: "The hairstyles brides are saving on Pinterest right now — and how to wear them." },
  { img: sSpa, tag: "Spa", date: "May 14, 2026", title: "A Beginner's Guide to Aromatherapy", excerpt: "The science of scent and how to choose the right oil for your mood." },
];

function Blog() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <SocialRail />

      <section className="relative bg-gradient-hero py-20">
        <FloatingDecor />
        <div className="max-w-7xl mx-auto px-4 text-center animate-fade-up relative">
          <span className="inline-block bg-white/60 backdrop-blur-sm border border-primary/20 px-5 py-2 rounded-full text-xs font-bold text-primary tracking-wider">📝 BEAUTY BLOG</span>
          <h1 className="mt-4 font-serif text-6xl md:text-7xl text-pink-deep">
            Tips & <span className="font-display text-primary italic">Trends</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Inspiration, tutorials and beauty secrets — straight from our stylists' chairs.</p>
        </div>
      </section>

      <section className="py-20">
        <SectionTitle small="Latest" big="Stories" />
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <article key={p.title} className="group bg-card rounded-3xl overflow-hidden shadow-card border border-primary/10 hover-lift animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                <span className="absolute top-4 left-4 bg-gradient-button text-primary-foreground px-3 py-1 rounded-full text-[10px] font-bold tracking-wider">{p.tag}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground"><Calendar size={12}/> {p.date}</div>
                <h3 className="mt-3 font-serif text-xl font-bold text-pink-deep leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <button className="mt-4 inline-flex items-center gap-2 text-xs font-bold tracking-wider text-primary hover:gap-3 transition-all">
                  READ MORE <ArrowRight size={12}/>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
