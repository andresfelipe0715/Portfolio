import { languages } from "../data/languages";
import useInView from "../hooks/useInView";

export default function Languages() {
  const [ref, inView] = useInView();

  return (
    <section id="languages" className="section" aria-label="Languages">
      <p className="eyebrow mb-3">· 06 Languages</p>
      <h2 className="text-3xl font-bold tracking-tight mb-6">Languages</h2>
      <div
        ref={ref}
        className={`reveal-stagger ${inView ? "is-visible" : ""} grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl`}
      >
        {languages.map((l) => (
          <div
            key={l.name}
            className="glass floating-card p-6 pointer-events-auto flex items-center gap-4"
          >
            <span className="brand-mark shrink-0" aria-hidden="true">
              {l.code}
            </span>
            <div>
              <p className="font-semibold text-lg text-text m-0">{l.name}</p>
              <p className="eyebrow mt-1 mb-0">{l.level}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
