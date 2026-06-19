import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingDecor, SocialRail, SectionTitle } from "@/components/Decorations";
import { ArrowRight, User, Phone, Calendar, Sparkles, Mail, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import giftBox from "@/assets/gift-box.jpg";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Appointment — Pinki Beauty Salon" },
      { name: "description", content: "Reserve your beauty appointment at Pinki Beauty Salon. Choose service, date and time — and enjoy 20% off your first visit." },
      { property: "og:title", content: "Book Your Appointment — Pinki Beauty Salon" },
      { property: "og:description", content: "Secure your slot today and get 20% off your first visit." },
    ],
  }),
  component: Book,
});

const services = ["Makeup", "Hair Styling", "Nail Art", "Facial Treatment", "Bridal Makeup", "Spa & Massage"];
const slots = ["10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:30 PM", "7:00 PM"];

function Book() {
  const [submitted, setSubmitted] = useState(false);
  const [slot, setSlot] = useState("");

  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <SocialRail />

      <section className="relative bg-gradient-hero py-20">
        <FloatingDecor />
        <div className="max-w-7xl mx-auto px-4 text-center animate-fade-up relative">
          <span className="inline-block bg-white/60 backdrop-blur-sm border border-primary/20 px-5 py-2 rounded-full text-xs font-bold text-primary tracking-wider">👑 BOOK APPOINTMENT</span>
          <h1 className="mt-4 font-serif text-6xl md:text-7xl text-pink-deep">
            Reserve Your <span className="font-display text-primary italic">Glow</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Pick a service, choose a date — and step into your most beautiful self. New visitors enjoy 20% off!</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-[2fr_1fr] gap-8">
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-primary/10 animate-fade-up">
            <SectionTitle small="Book Your" big="Appointment" />

            {submitted ? (
              <div className="text-center py-10 animate-scale-in">
                <div className="text-6xl animate-float">🌸</div>
                <h3 className="mt-4 font-display text-4xl text-pink-deep">Thank You!</h3>
                <p className="mt-2 text-muted-foreground">Your appointment request has been received. We'll call you within 2 hours to confirm.</p>
                <button onClick={()=>setSubmitted(false)} className="mt-6 bg-gradient-button text-primary-foreground px-6 py-3 rounded-full text-xs font-bold tracking-wider shadow-soft hover-lift">
                  BOOK ANOTHER
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="grid md:grid-cols-2 gap-4"
              >
                {[
                  { icon: User, ph: "Your Full Name", type: "text" },
                  { icon: Phone, ph: "Phone Number", type: "tel" },
                  { icon: Mail, ph: "Email Address", type: "email", span: true },
                ].map((f, i) => (
                  <div key={i} className={`relative ${f.span ? "md:col-span-2" : ""}`}>
                    <f.icon size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary"/>
                    <input required type={f.type} placeholder={f.ph} className="w-full pl-11 pr-4 py-3.5 rounded-full bg-pink-soft text-sm focus:outline-none focus:ring-2 focus:ring-primary"/>
                  </div>
                ))}
                <div className="relative">
                  <Sparkles size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary"/>
                  <select required className="w-full pl-11 pr-4 py-3.5 rounded-full bg-pink-soft text-sm focus:outline-none focus:ring-2 focus:ring-primary appearance-none">
                    <option value="">Select Service</option>
                    {services.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="relative">
                  <Calendar size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary"/>
                  <input required type="date" className="w-full pl-11 pr-4 py-3.5 rounded-full bg-pink-soft text-sm focus:outline-none focus:ring-2 focus:ring-primary"/>
                </div>

                <div className="md:col-span-2">
                  <label className="text-xs font-bold tracking-wider text-pink-deep flex items-center gap-2 mb-3"><Clock size={12}/> PICK A TIME SLOT</label>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                    {slots.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSlot(s)}
                        className={`px-3 py-2 rounded-full text-xs font-semibold transition-all ${
                          slot === s
                            ? "bg-gradient-button text-primary-foreground shadow-soft scale-105"
                            : "bg-pink-soft text-pink-deep hover:bg-accent"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-2 relative">
                  <MessageCircle size={14} className="absolute left-4 top-4 text-primary"/>
                  <textarea rows={3} placeholder="Special requests, allergies or preferences..." className="w-full pl-11 pr-4 py-3 rounded-3xl bg-pink-soft text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"/>
                </div>

                <button type="submit" className="md:col-span-2 bg-gradient-button text-primary-foreground py-4 rounded-full text-xs font-bold tracking-wider shadow-soft hover-lift inline-flex items-center justify-center gap-2 animate-pulse-glow">
                  CONFIRM APPOINTMENT <ArrowRight size={14}/>
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-6">
            <div className="relative bg-gradient-pink rounded-3xl p-6 text-center shadow-glow overflow-hidden animate-scale-in">
              <img src={giftBox} alt="Gift" width={640} height={640} loading="lazy" className="w-32 h-32 mx-auto rounded-2xl object-cover animate-float"/>
              <div className="font-display text-4xl text-white mt-3">20% OFF</div>
              <p className="text-sm text-white/90 font-semibold">on your first visit</p>
              <p className="mt-2 text-xs text-white/80">Auto-applied at checkout</p>
            </div>

            <div className="bg-card rounded-3xl p-6 shadow-card border border-primary/10 animate-fade-up">
              <h4 className="font-serif text-xl font-bold text-pink-deep">Need help?</h4>
              <p className="mt-2 text-sm text-muted-foreground">Call us anytime, we'd love to assist.</p>
              <a href="tel:+923001234567" className="mt-4 inline-flex items-center gap-2 bg-gradient-button text-primary-foreground px-5 py-3 rounded-full text-xs font-bold tracking-wider shadow-soft hover-lift">
                <Phone size={12}/> +92 300 1234567
              </a>
            </div>

            <div className="bg-card rounded-3xl p-6 shadow-card border border-primary/10 animate-fade-up">
              <h4 className="font-serif text-xl font-bold text-pink-deep">Open Hours</h4>
              <ul className="mt-3 text-sm text-muted-foreground space-y-1">
                <li className="flex justify-between"><span>Mon - Fri</span><span className="font-semibold text-pink-deep">10am - 9pm</span></li>
                <li className="flex justify-between"><span>Saturday</span><span className="font-semibold text-pink-deep">10am - 10pm</span></li>
                <li className="flex justify-between"><span>Sunday</span><span className="font-semibold text-pink-deep">12pm - 7pm</span></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}
