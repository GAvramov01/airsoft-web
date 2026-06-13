import { Download, FileText, Shield, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionShell from './SectionShell';

const rules = ['Eye protection is mandatory.', 'Follow marshal instructions.', 'Respect minimum engagement distance.', 'No physical contact.', 'Safe zone rules must be followed.', 'Players are responsible for their own behavior and equipment.'];

export default function RulesSafety() {
  return (
    <SectionShell id="rules" eyebrow="Safety & Deployment" title="Rules & Safety">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
        <div className="border border-primary/50 bg-primary/10 p-7 relative overflow-hidden">
          <Shield className="absolute -right-8 -bottom-8 h-40 w-40 text-primary/10" />
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">Mandatory Briefing</p>
          <h3 className="font-display uppercase text-2xl mb-5">Every player must read and accept the safety rules before entering the field.</h3>
          <p className="text-muted-foreground leading-7">Safety is part of the experience. Marshals control every game, safe zones are clearly separated, and rule violations are handled seriously.</p>
        </div>
        <div className="grid gap-4">
          <div className="border border-border bg-card p-6 flex flex-col md:flex-row md:items-center gap-5 justify-between">
            <div className="flex items-start gap-4"><FileText className="h-8 w-8 text-primary" /><div><h3 className="font-display uppercase text-xl">Player Declaration / Waiver</h3><p className="text-sm text-muted-foreground mt-2">Download, sign and bring the document before your game.</p></div></div>
            <div className="flex flex-col sm:flex-row gap-3"><Button asChild className="rounded-none bg-primary hover:bg-primary/85"><a href="/player-declaration-waiver.txt" download><Download className="h-4 w-4 mr-2" />Download Document</a></Button><Button asChild variant="outline" className="rounded-none"><a href="#contact">Bring Signed Document</a></Button></div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {rules.map(rule => <div key={rule} className="flex gap-3 border border-border bg-card/70 p-4"><X className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span className="text-sm leading-6 text-muted-foreground">{rule}</span></div>)}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}