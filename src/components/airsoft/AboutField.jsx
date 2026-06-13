import { Trees, Building2, Package, Users } from 'lucide-react';
import SectionShell from './SectionShell';

const imageA = 'https://media.base44.com/images/public/6a2d179a6ce603d1819fb835/4b4e62cdc_generated_1267a942.png';
const imageB = 'https://media.base44.com/images/public/6a2d179a6ce603d1819fb835/b5c72009d_generated_46803fe2.png';
const cards = [
  [Trees, 'Outdoor Area', 'Natural cover, forest edges, ruins and open lanes for tactical movement.'],
  [Building2, 'Indoor CQB Zone', 'Corridors, rooms and close-quarter routes inside concrete structures.'],
  [Package, 'Rental Equipment', 'Replicas, eye protection and starter packs for new players.'],
  [Users, 'Team Events', 'Organized battles for groups, birthdays, companies and squads.']
];

export default function AboutField() {
  return (
    <SectionShell id="field" eyebrow="Sector Intel" title="About the Field">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-lg leading-8 text-muted-foreground">The field is located in an old state/local reserve area adapted for airsoft games. The terrain combines outdoor zones, indoor CQB areas, natural cover, buildings, corridors and open spaces for organized tactical scenarios.</p>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {cards.map(([Icon, title, text]) => <div key={title} className="group relative border border-border bg-card/70 p-6 hover:border-primary/70 transition-all"><span className="absolute -top-px -left-px h-4 w-4 border-t border-l border-primary" /><Icon className="h-7 w-7 text-primary mb-5" /><h3 className="font-display uppercase tracking-wider text-lg mb-3">{title}</h3><p className="text-sm leading-6 text-muted-foreground">{text}</p></div>)}
          </div>
        </div>
        <div className="grid gap-4 lg:sticky lg:top-28">
          <img src={imageA} alt="Outdoor airsoft field with concrete ruins and forest cover" className="h-72 w-full object-cover border border-border grayscale-[15%]" />
          <img src={imageB} alt="Indoor CQB airsoft corridor in an abandoned concrete zone" className="h-56 w-full object-cover border border-border grayscale-[15%]" />
        </div>
      </div>
    </SectionShell>
  );
}