import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-soft border-t border-primary/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-1">
          <div className="font-display text-4xl text-primary">Pinki<span className="text-accent">✿</span></div>
          <div className="text-[10px] tracking-[0.3em] text-muted-foreground mb-4">BEAUTY SALON</div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Elevating your beauty with luxury & perfection.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg text-primary mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">› Home</Link></li>
            <li><Link to="/about" className="hover:text-primary">› About Us</Link></li>
            <li><Link to="/services" className="hover:text-primary">› Services</Link></li>
            <li><Link to="/gallery" className="hover:text-primary">› Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg text-primary mb-4">More</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/packages" className="hover:text-primary">› Packages</Link></li>
            <li><Link to="/blog" className="hover:text-primary">› Blog</Link></li>
            <li><Link to="/contact" className="hover:text-primary">› Contact Us</Link></li>
            <li><Link to="/book" className="hover:text-primary">› Appointment</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg text-primary mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone size={14} className="text-primary"/> +92 300 1234567</li>
            <li className="flex items-center gap-2"><Mail size={14} className="text-primary"/> info@pinkibeautysalon.com</li>
            <li className="flex items-start gap-2"><MapPin size={14} className="text-primary mt-1"/> 123, Beauty Street, Pink City, Pakistan</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg text-primary mb-4">Follow Us</h4>
          <div className="flex gap-3">
            {[Instagram, Facebook, Twitter, Mail].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-gradient-button text-primary-foreground flex items-center justify-center hover-lift">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-primary/10 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Pinki Beauty Salon. Made with ♡ for beauty lovers.
      </div>
    </footer>
  );
}
