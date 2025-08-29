import { languages } from "../data/languages";

export default function Languages() {
  return (
    <section id="languages" className="section" aria-label="Languages">
      <h2 className="text-2xl font-bold mb-6">Languages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {languages.map((s) => (
          <span
            key={s}
            className="col-span-1 flex items-center justify-center min-h-16 rounded-xl border border-border bg-card transition-all duration-200 ease-in-out hover:-translate-y-0.5 
            hover:shadow-lg hover:border-ring pointer-events-auto"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
