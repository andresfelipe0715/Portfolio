import { skills, skillCategories } from "../data/skills";
import useInView from "../hooks/useInView";

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" className="section" aria-label="Skills">
      <p className="eyebrow mb-3">· 04 Skills</p>
      <h2 className="text-3xl font-bold tracking-tight mb-6">Skills</h2>

      <div
        ref={ref}
        className={`reveal-stagger grid gap-4 grid-cols-1 md:grid-cols-2 ${inView ? "is-visible" : ""}`}
      >
        {skillCategories.map((category) => {
          const items = skills.filter((s) => s.category === category);
          if (items.length === 0) return null;

          return (
            <div key={category} className="glass p-5 pointer-events-auto">
              <h3 className="eyebrow mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s.name}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-border bg-background/40 text-sm font-medium"
                  >
                    {s.logo ? (
                      <img
                        src={s.logo}
                        alt={`${s.name} logo`}
                        className="w-4 h-4 object-contain"
                      />
                    ) : (
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-brand to-brand-2"
                        aria-hidden="true"
                      />
                    )}
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
