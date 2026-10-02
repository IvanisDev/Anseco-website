export function SchoolTicker() {
  return (
    <section className="relative overflow-hidden !rounded-none border-y border-[#0D2E6B]/15 bg-[#C9990A] py-3 text-white" aria-label="School motto">
      <span className="sr-only">The Star of Anlo-Land</span>
      <div className="school-ticker-track flex gap-16 whitespace-nowrap" aria-hidden="true">
        {Array.from({ length: 10 }).map((_, index) => (
          <span key={index} className="shrink-0 text-xs font-black uppercase tracking-[0.3em]">
            The Star of Anlo-Land
          </span>
        ))}
      </div>
    </section>
  );
}
