import { experience } from "../data/experience";


export default function Experience() {
  return (
    <section id="experience" className="section" aria-label="Experience">
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      <div className="grid grid-cols-1 gap-4 ">
        {experience.map((job) => (
          <article
            key={`${job.company}-${job.role}`}
            aria-labelledby={`${job.company}-h`}
            className="card bg-card border border-border rounded-2xl p-4 shadow-sm pointer-events-auto"
          >
            <header className="flex justify-between gap-2 items-start mb-2">
              <h3 id={`${job.company}-h`} className="font-semibold m-0">
                {job.role} · {job.company}
              </h3>
              <span className="font-mono border border-border border-b-2 px-2 py-0.5 rounded-md bg-background text-muted text-[12px]">
                {job.period}
              </span>
            </header>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}