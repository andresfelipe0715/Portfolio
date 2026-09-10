import { GraduationCap, Award } from "lucide-react";
import { education, certifications } from "../data/education";
import useInView from "../hooks/useInView";

export default function Education() {
  const [ref, inView] = useInView();

  return (
    <section id="education" className="section" aria-label="Education">
      <p className="eyebrow mb-3">· 05 Education</p>
      <h2 className="text-3xl font-bold tracking-tight mb-6">
        <span className="text-gradient">Education</span>
      </h2>

      <div
        ref={ref}
        className={`reveal-stagger ${inView ? "is-visible" : ""} grid grid-cols-1 gap-4 mb-8`}
      >
        {education.map((e) => (
          <article
            key={e.school}
            className="card pointer-events-auto border-ring/40 flex items-start gap-4"
          >
            <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-brand to-brand-2 shrink-0 shadow-lg shadow-brand/30">
              <GraduationCap className="w-5 h-5 text-white" />
            </span>
            <div className="flex-1 min-w-0">
              <header className="flex justify-between gap-2 items-start flex-wrap mb-1">
                <h3 className="font-semibold m-0">{e.degree}</h3>
                <span className="badge">{e.period}</span>
              </header>
              <p className="text-muted m-0">{e.school}</p>
            </div>
          </article>
        ))}
      </div>

      <h3 className="eyebrow mb-3">Additional Education &amp; Certifications</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certifications.map((c) => (
          <article
            key={c.issuer + c.period}
            className="card pointer-events-auto flex items-start gap-4"
          >
            <span className="flex items-center justify-center w-11 h-11 rounded-xl glass shrink-0">
              <Award className="w-5 h-5 text-brand" />
            </span>
            <div className="flex-1 min-w-0">
              <header className="flex justify-between gap-2 items-start flex-wrap mb-1">
                <h4 className="font-semibold m-0">{c.issuer}</h4>
                <span className="badge">{c.period}</span>
              </header>
              <p className="text-muted m-0">{c.name}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
