import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section" aria-label="Skills">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>

      <div className="grid gap-4 grid-cols-12">
        {skills.map((s) => (
          <span
            key={s.name}
            className="
              card 
              col-span-6    /* 2 per row on mobile */
              md:col-span-4 /* 3 per row on tablet */
              lg:col-span-3 /* 4 per row on desktop */
              flex items-center justify-center gap-2 min-h-16 px-3
              pointer-events-auto
            "
          >
            <img
              src={s.logo}
              alt={`${s.name} logo`}
              className="w-8 h-8 object-contain"
            />
            {s.name}
          </span>
        ))}
      </div>
    </section>
  );
}