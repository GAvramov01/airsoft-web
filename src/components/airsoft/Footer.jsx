import { Crosshair } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="flex items-center gap-3">
            <Crosshair className="h-8 w-8 text-primary" />
            <span className="font-display uppercase tracking-widest">Reserve Ops</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Outdoor and indoor airsoft experiences in a real abandoned-zone environment.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {['Home', 'Field', 'Games', 'Rules', 'Prices', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link === 'Home' ? 'home' : link.toLowerCase()}`}
              className="hover:text-primary"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="md:text-right">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            STATUS: OPERATIONAL / NEXT GAME: 0900HRS
          </p>

          <div className="flex md:justify-end gap-3 mt-5 text-muted-foreground">
            <a href="#contact" className="border border-border px-3 py-2 text-xs font-mono uppercase hover:text-primary hover:border-primary">FB</a>
            <a href="#contact" className="border border-border px-3 py-2 text-xs font-mono uppercase hover:text-primary hover:border-primary">IG</a>
            <a href="#contact" className="border border-border px-3 py-2 text-xs font-mono uppercase hover:text-primary hover:border-primary">YT</a>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            © {year} Reserve Ops Airsoft Arena. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
