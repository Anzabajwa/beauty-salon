import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingDecor, SocialRail, SectionTitle } from "@/components/Decorations";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Pinki Beauty Salon" },
      { name: "description", content: "Reach out to Pinki Beauty Salon — call, email or visit us in Pink City for bookings and inquiries." },
      { property: "og:title", content: "Contact Pinki Beauty Salon" },
      { property: "og:description", content: "We'd love to hear from you." },
    ],
  }),
  component: Contact,
});

const info = [
  { icon: Phone, title: "Call Us", lines: ["+92 300 1234567", "+92 21 9876543"] },
  { icon: Mail, title: "Email Us", lines: ["info@pinkibeautysalon.com", "booking@pinkibeautysalon.com"] },
  { icon: MapPin, title: "Visit Us", lines: ["123, Beauty Street", "Pink City, Pakistan"] },
  { icon: Clock, title: "Open Hours", lines: ["Mon - Sat: 10am - 9pm", "Sunday: 12pm - 7pm"] },
];

function Contact() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <SocialRail />

      <section className="relative bg-gradient-hero py-20">
        <FloatingDecor />
        <div className="max-w-7xl mx-auto px-4 text-center animate-fade-up relative">
          <span className="inline-block bg-white/60 backdrop-blur-sm border border-primary/20 px-5 py-2 rounded-full text-xs font-bold text-primary tracking-wider">💌 CONTACT US</span>
          <h1 className="mt-4 font-serif text-6xl md:text-7xl text-pink-deep">
            Say <span className="font-display text-primary italic">Hello</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Questions, bookings or just a friendly chat — we're always one message away.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {info.map((c, i) => (
            <div key={c.title} className="bg-card rounded-3xl p-6 text-center shadow-card border border-primary/10 hover-lift animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="w-14 h-14 mx-auto rounded-full bg-gradient-button text-primary-foreground flex items-center justify-center">
                <c.icon size={20}/>
              </div>
              <h3 className="mt-3 font-serif text-lg font-bold text-pink-deep">{c.title}</h3>
              {c.lines.map((l) => (
                <p key={l} className="text-xs text-muted-foreground mt-1">{l}</p>
              ))}
            </div>
          ))}
        </div>

        <SectionTitle small="Drop A" big="Message" />
        <div className="max-w-3xl mx-auto px-4">
          <form className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-primary/10 grid md:grid-cols-2 gap-4 animate-scale-in">
            <input placeholder="Your Name" className="px-5 py-3 rounded-full bg-pink-soft text-sm focus:outline-none focus:ring-2 focus:ring-primary"/>
            <input placeholder="Phone Number" className="px-5 py-3 rounded-full bg-pink-soft text-sm focus:outline-none focus:ring-2 focus:ring-primary"/>
            <input placeholder="Email Address" className="md:col-span-2 px-5 py-3 rounded-full bg-pink-soft text-sm focus:outline-none focus:ring-2 focus:ring-primary"/>
            <input placeholder="Subject" className="md:col-span-2 px-5 py-3 rounded-full bg-pink-soft text-sm focus:outline-none focus:ring-2 focus:ring-primary"/>
            <textarea rows={5} placeholder="Your Message..." className="md:col-span-2 px-5 py-3 rounded-3xl bg-pink-soft text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"/>
            <button type="button" className="md:col-span-2 bg-gradient-button text-primary-foreground py-3 rounded-full text-xs font-bold tracking-wider shadow-soft hover-lift inline-flex items-center justify-center gap-2">
              SEND MESSAGE <Send size={14}/>
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
