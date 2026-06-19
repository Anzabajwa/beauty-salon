import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT US" },
  { to: "/services", label: "SERVICES" },
  { to: "/gallery", label: "GALLERY" },
  { to: "/packages", label: "PACKAGES" },
  { to: "/blog", label: "BLOG" },
  { to: "/contact", label: "CONTACT US" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const path = location.pathname;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-primary/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <Link to="/" className="flex flex-col leading-tight group">
          <span className="font-display text-4xl text-primary group-hover:scale-105 transition-transform">
            Pinki<span className="text-accent">✿</span>
          </span>
          <span className="text-[10px] tracking-[0.3em] text-muted-foreground">BEAUTY SALON</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const active = path === l.to;
            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all ${
                    active
                      ? "bg-gradient-button text-primary-foreground shadow-soft"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          to="/book"
          className="hidden lg:inline-flex items-center gap-2 bg-gradient-button text-primary-foreground px-6 py-3 rounded-full text-xs font-bold tracking-wider shadow-soft hover-lift"
        >
          👑 BOOK APPOINTMENT
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-full bg-primary/10 text-primary"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-primary/10 bg-background/95 backdrop-blur-xl animate-fade-in">
          <ul className="flex flex-col p-4 gap-2">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-2xl text-sm font-semibold text-foreground hover:bg-primary/10 hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/book"
                onClick={() => setOpen(false)}
                className="block text-center bg-gradient-button text-primary-foreground px-4 py-3 rounded-full text-sm font-bold"
              >
                BOOK APPOINTMENT
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
