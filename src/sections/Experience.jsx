import { experience } from "../data/experience";
import useInView from "../hooks/useInView";

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section id="experience" className="section" aria-label="Experience">
      <p className="eyebrow mb-3">· 02 Experience</p>
      <h2 className="text-3xl font-bold tracking-tight mb-10">Experience</h2>

      <div ref={ref} className={`reveal ${inView ? "is-visible" : ""} relative`}>
        {/* connecting line */}
        <div
          className="timeline-line absolute left-[7px] top-2 bottom-2 w-[2px] sm:left-[9px]"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-8">
          {experience.map((job, i) => {
            const isActive = i === 0;
            return (
              <article
                key={`${job.company}-${job.role}`}
                aria-labelledby={`${job.company}-h`}
                className="relative pl-8 sm:pl-10"
              >
                <span
                  className={`absolute left-0 top-1.5 w-4 h-4 rounded-full sm:w-5 sm:h-5 ${
                    isActive
                      ? "timeline-dot-active bg-gradient-to-br from-brand to-brand-2"
                      : "timeline-dot bg-border"
                  }`}
                  aria-hidden="true"
                />

                <div
                  className={`glass p-4 pointer-events-auto ${
                    isActive ? "border-ring" : ""
                  }`}
                >
                  <header className="flex justify-between gap-2 items-start mb-2 flex-wrap">
                    <h3 id={`${job.company}-h`} className="font-semibold m-0">
                      {job.role} · {job.company}
                      {job.location && (
                        <span className="text-muted font-normal">
                          {" "}
                          — {job.location}
                        </span>
                      )}
                    </h3>
                    <span className="badge">{job.period}</span>
                  </header>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-muted">
                    {job.bullets.map((b, bi) => (
                      <li key={bi}>{b}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
