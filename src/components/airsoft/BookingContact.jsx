import { useState } from 'react';
import { Calendar, Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import SectionShell from './SectionShell';

export default function BookingContact() {
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const body = Object.entries(data).map(([key, value]) => `${key}: ${value}`).join('\n');
    window.location.href = `mailto:booking@reserveops.bg?subject=Airsoft Booking Request&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  return (
    <SectionShell id="contact" eyebrow="Deployment Request" title="Book Your Game">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
        <form onSubmit={submit} className="border border-border bg-card p-6 md:p-8 grid sm:grid-cols-2 gap-5">
          {['Name', 'Phone', 'Email', 'Number of players', 'Preferred date'].map((label, i) => <div key={label} className={i === 4 ? 'sm:col-span-2' : ''}><Label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</Label><Input required name={label} type={label === 'Email' ? 'email' : label === 'Preferred date' ? 'date' : 'text'} className="mt-2 rounded-none bg-background border-border" /></div>)}
          <div className="sm:col-span-2"><Label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Message</Label><Textarea name="Message" className="mt-2 min-h-32 rounded-none bg-background border-border" placeholder="Tell us about the group, package or preferred game mode." /></div>
          <div className="sm:col-span-2"><Button className="w-full rounded-none bg-primary hover:bg-primary/85 font-mono uppercase tracking-widest"><Send className="h-4 w-4 mr-2" />Send Booking Request</Button>{sent && <p className="mt-4 text-sm text-primary">Your email app opened with the booking request ready to send.</p>}</div>
        </form>
        <aside className="space-y-4">
          {[[Phone, 'Phone', '+359 XXX XXX XXX'], [Mail, 'Email', 'booking@reserveops.bg'], [MapPin, 'Location', 'Old reserve area / local field'], [Clock, 'Working hours', 'Weekends and private slots'], [Calendar, 'Private games', 'Contact us in advance']].map(([Icon, label, value]) => <div key={label} className="border border-border bg-card/80 p-5 flex gap-4"><Icon className="h-5 w-5 text-primary mt-1" /><div><p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</p><p className="mt-1 text-foreground">{value}</p></div></div>)}
          <div className="h-64 border border-primary/40 bg-[linear-gradient(45deg,hsl(var(--secondary))_25%,transparent_25%),linear-gradient(-45deg,hsl(var(--secondary))_25%,transparent_25%),linear-gradient(45deg,transparent_75%,hsl(var(--secondary))_75%),linear-gradient(-45deg,transparent_75%,hsl(var(--secondary))_75%)] bg-[length:24px_24px] bg-[position:0_0,0_12px,12px_-12px,-12px_0px] grid place-items-center"><div className="text-center"><MapPin className="h-8 w-8 text-primary mx-auto mb-3" /><p className="font-mono uppercase tracking-widest text-sm">Map Area</p><p className="text-xs text-muted-foreground mt-2">Embed location here</p></div></div>
        </aside>
      </div>
    </SectionShell>
  );
}