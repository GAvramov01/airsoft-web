import { Target, Flag, Bomb, UserCheck, Trophy, Map } from 'lucide-react';
import SectionShell from './SectionShell';

const modes = [
  [Target, 'Team Deathmatch', 'Two squads fight for controlled eliminations and field dominance.'],
  [Flag, 'Capture the Flag', 'Move fast, protect your base and extract the enemy flag.'],
  [Bomb, 'Bomb / Objective Mission', 'Attackers complete the mission while defenders hold the zone.'],
  [UserCheck, 'VIP Escort', 'Protect the VIP through hostile corridors and open terrain.'],
  [Trophy, 'Last Man Standing', 'No respawns. Tactical patience decides the final survivor.'],
  [Map, 'Private Scenario Games', 'Custom briefings for groups, companies and special events.']
];

export default function GameModes() {
  return (
    <SectionShell id="games" eyebrow="Engagement Protocols" title="Game Modes" className="bg-secondary/25">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {modes.map(([Icon, title, text], index) => <article key={title} className="relative overflow-hidden border border-border bg-background/70 p-6 min-h-52 hover:-translate-y-1 hover:border-primary/70 transition-all duration-300"><div className="absolute right-4 top-4 font-mono text-xs text-muted-foreground/40">0{index + 1}</div><Icon className="h-9 w-9 text-primary mb-8" strokeWidth={1.4} /><h3 className="font-display uppercase tracking-wider text-xl mb-4">{title}</h3><p className="text-muted-foreground leading-7">{text}</p><div className="absolute inset-x-0 bottom-0 h-1 bg-primary/70 scale-x-0 origin-left group-hover:scale-x-100" /></article>)}
      </div>
    </SectionShell>
  );
}