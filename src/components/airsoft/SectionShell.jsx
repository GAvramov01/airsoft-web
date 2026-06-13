export default function SectionShell({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="mb-12 md:mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary mb-4">{eyebrow}</p>
          <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tight text-foreground max-w-3xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}