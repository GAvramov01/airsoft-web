import { Shield, Package, Users, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';

const heroImage = 'https://media.base44.com/images/public/6a2d179a6ce603d1819fb835/9e9dcbd3e_generated_b0464a69.png';
const badges = [
  [Map, 'Outdoor & Indoor Field'], [Package, 'Rental Equipment Available'], [Users, 'Private Events & Team Building'], [Shield, 'Safety Rules Required']
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-14 overflow-hidden">
      <img src={heroImage} alt="Airsoft players moving through an abandoned tactical arena" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,transparent_48%,hsl(var(--primary)/0.16)_49%,transparent_52%)]" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-3 border border-border bg-card/50 px-4 py-2 font-mono text-xs uppercase tracking-[0.28em] text-primary backdrop-blur">STATUS: OPERATIONAL</div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl uppercase leading-[0.9] tracking-tight text-foreground">Airsoft Arena for Outdoor & Indoor Games</h1>
          <p className="mt-7 max-w-2xl text-lg md:text-xl leading-relaxed text-muted-foreground">Tactical games, rental equipment, private events and team battles in a real abandoned-zone environment.</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/85 font-mono uppercase tracking-widest"><a href="#contact">Book a Game</a></Button>
            <Button asChild size="lg" variant="outline" className="rounded-none border-primary/70 text-foreground hover:bg-primary/10 font-mono uppercase tracking-widest"><a href="#prices">View Prices</a></Button>
          </div>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl">
          {badges.map(([Icon, label]) => <div key={label} className="border border-border/80 bg-card/55 backdrop-blur px-4 py-4 flex items-center gap-3 hover:border-primary/70 transition-colors"><Icon className="h-5 w-5 text-primary" /><span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</span></div>)}
        </div>
      </div>
    </section>
  );
}