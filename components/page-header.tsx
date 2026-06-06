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
    <section className="bg-[#0D2E6B] px-4 py-14 text-white">
      <div className="mx-auto max-w-4xl text-center">
        {eyebrow ? <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#C9990A]">{eyebrow}</p> : null}
        <h1 className="font-display mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">{title}</h1>
        <p className="mx-auto max-w-xl leading-relaxed text-white/70">{description}</p>
      </div>
    </section>
  );
}
