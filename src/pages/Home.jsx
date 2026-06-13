import Header from '@/components/airsoft/Header';
import Hero from '@/components/airsoft/Hero';
import AboutField from '@/components/airsoft/AboutField';
import GameModes from '@/components/airsoft/GameModes';
import RulesSafety from '@/components/airsoft/RulesSafety';
import Prices from '@/components/airsoft/Prices';
import BookingContact from '@/components/airsoft/BookingContact';
import Footer from '@/components/airsoft/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] bg-[linear-gradient(to_bottom,transparent_0,transparent_7px,hsl(var(--foreground))_8px)] bg-[length:100%_8px] z-50" />
      <div className="fixed inset-0 pointer-events-none opacity-[0.06] bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary))_0,transparent_24%),radial-gradient(circle_at_80%_10%,hsl(var(--accent))_0,transparent_22%)]" />
      <Header />
      <main>
        <Hero />
        <AboutField />
        <GameModes />
        <RulesSafety />
        <Prices />
        <BookingContact />
      </main>
      <Footer />
    </div>
  );
}