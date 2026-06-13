import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionShell from './SectionShell';

const plans = [
  ['Basic Entry', 'For players with their own equipment.', 'from XX BGN', ['Field access', 'Game organization', 'Safety briefing', 'Access to safe zone']],
  ['Rental Package', 'For new players or people without equipment.', 'from XX BGN / player', ['Field access', 'Rental airsoft replica', 'Protective mask/glasses', 'BBs starter pack', 'Safety briefing']],
  ['Private / Team Event', 'For groups, birthdays, company events and team building.', 'custom quote', ['Private game session', 'Organized scenarios', 'Rental equipment options', 'Dedicated marshal', 'Group briefing', 'Custom time slot']]
];

export default function Prices() {
  return (
    <SectionShell id="prices" eyebrow="Logistics" title="Prices" className="bg-secondary/20">
      <div className="grid lg:grid-cols-3 gap-5">
        {plans.map(([title, desc, price, items], index) => <div key={title} className={`relative border bg-card p-7 flex flex-col ${index === 1 ? 'border-primary shadow-[0_0_40px_hsl(var(--primary)/0.12)]' : 'border-border'}`}><p className="font-mono text-xs uppercase tracking-[0.26em] text-muted-foreground mb-5">Package 0{index + 1}</p><h3 className="font-display uppercase text-2xl mb-3">{title}</h3><p className="text-muted-foreground leading-7 mb-7">{desc}</p><div className="font-display uppercase text-3xl text-primary mb-8">{price}</div><ul className="space-y-3 mb-8 flex-1">{items.map(item => <li key={item} className="flex gap-3 text-sm text-muted-foreground"><Check className="h-5 w-5 text-primary shrink-0" />{item}</li>)}</ul><Button asChild className="rounded-none bg-primary hover:bg-primary/85 font-mono uppercase tracking-widest"><a href="#contact">Select</a></Button></div>)}
      </div>
    </SectionShell>
  );
}