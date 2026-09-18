export function PageHeader({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <section className="bg-[#0D2E6B] px-5 py-16 text-white shadow-[inset_0_8px_22px_rgba(0,0,0,0.18)] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl text-center">
        {eyebrow ? <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#C9990A]">{eyebrow}</p> : null}
        <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70">{description}</p>
      </div>
    </section>
  );
}
