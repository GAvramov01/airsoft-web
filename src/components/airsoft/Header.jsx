import { useState } from 'react';
import { Menu, X, Crosshair } from 'lucide-react';

const links = [
  ['Home', '#home'], ['Field', '#field'], ['Games', '#games'], ['Rules', '#rules'], ['Prices', '#prices'], ['Contact', '#contact']
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        <a href="#home" className="group flex items-center gap-3">
          <span className="h-10 w-10 border border-primary/60 grid place-items-center bg-primary/10 rotate-45 group-hover:border-primary transition-colors"><Crosshair className="h-5 w-5 -rotate-45 text-primary" /></span>
          <span>
            <span className="block font-display text-sm tracking-[0.22em] uppercase">Reserve Ops</span>
            <span className="block font-mono text-[10px] text-muted-foreground tracking-widest">AIRSOFT ARENA</span>
          </span>
        </a>
        <div className="hidden lg:flex items-center gap-8 font-mono text-xs uppercase tracking-[0.18em]">
          {links.map(([label, href]) => <a key={label} href={href} className="relative text-muted-foreground hover:text-primary transition-colors after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">{label}</a>)}
        </div>
        <a href="#contact" className="hidden sm:inline-flex border border-primary bg-primary px-5 py-3 text-primary-foreground font-mono text-xs uppercase tracking-widest hover:bg-primary/85 transition-colors">Book Now</a>
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </nav>
      {open && <div className="lg:hidden border-t border-border bg-background px-5 py-5 grid gap-4">{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="font-mono text-sm uppercase tracking-widest text-muted-foreground">{label}</a>)}</div>}
    </header>
  );
}