export function FloatingDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute top-10 left-[8%] text-3xl animate-float">✿</div>
      <div className="absolute top-32 right-[12%] text-2xl animate-sparkle text-accent">✦</div>
      <div className="absolute top-1/2 left-[3%] text-4xl animate-float-slow opacity-60">🌸</div>
      <div className="absolute bottom-20 right-[8%] text-3xl animate-butterfly">🦋</div>
      <div className="absolute top-1/3 right-[5%] text-xl animate-sparkle text-primary" style={{animationDelay:"0.5s"}}>✦</div>
      <div className="absolute bottom-1/3 left-[10%] text-2xl animate-float" style={{animationDelay:"1s"}}>♡</div>
    </div>
  );
}

export function SocialRail() {
  return (
    <div className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-40 flex-col gap-3">
      {["📷", "f", "𝕏", "♡"].map((s, i) => (
        <a
          key={i}
          href="#"
          className="w-10 h-10 rounded-full bg-gradient-button text-primary-foreground flex items-center justify-center text-sm font-bold shadow-soft hover-lift animate-fade-in"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          {s}
        </a>
      ))}
    </div>
  );
}

export function SectionTitle({ small, big }: { small: string; big: string }) {
  return (
    <div className="text-center mb-12 animate-fade-up">
      <div className="font-serif text-2xl md:text-3xl text-primary">
        {small} <span className="font-display text-4xl md:text-5xl text-pink-deep">{big}</span>
        <span className="inline-block ml-2 text-accent">♡</span>
      </div>
    </div>
  );
}
