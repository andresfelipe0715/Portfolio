import useInView from "../hooks/useInView";

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="section relative" aria-label="About">
      <div
        ref={ref}
        className={`reveal ${inView ? "is-visible" : ""} grid grid-cols-1 lg:grid-cols-12 gap-10 items-start`}
      >
        {/* Left column — narrative */}
        <div className="lg:col-span-7">
          <p className="eyebrow mb-3">· 01 About</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted mb-6 max-w-2xl leading-relaxed text-lg">
            I'm a Systems Engineer and Software Developer with experience in full-stack
            development, SaaS applications, and AI tool integration and automation. I build
            end-to-end solutions with React, Next.js, Python, FastAPI, PostgreSQL, and
            Supabase — including APIs, real-time systems, secure databases, and automated
            workflows. I'm focused on maintainable software that solves real product and
            business needs.
          </p>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            <div className="card pointer-events-auto">
              <h3 className="text-xl mb-4 font-bold">What I value</h3>
              <ul className="list-disc list-inside space-y-2 text-muted">
                <li>Writing clean, maintainable code</li>
                <li>Constant learning and growth</li>
                <li>Collaboration and open communication</li>
              </ul>
            </div>
            <div className="card pointer-events-auto">
              <h3 className="text-xl mb-4 font-bold">How I work</h3>
              <ul className="list-disc list-inside space-y-2 text-muted">
                <li>Break problems into clear, manageable steps</li>
                <li>Balance speed with attention to detail</li>
                <li>Adapt quickly to new tools and challenges</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right column — floating highlight card */}
        <div className="lg:col-span-5 relative hidden lg:block h-full min-h-[260px]">
          <div className="absolute top-2 left-2 right-10 glass floating-card p-6 -rotate-[2deg] pointer-events-auto">
            <p className="eyebrow mb-3">At a glance</p>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between gap-4">
                <span className="text-muted">Based in</span>
                <span className="font-semibold text-text">Colombia</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-muted">Currently</span>
                <span className="font-semibold text-text">Software Engineer @ AINOVIX</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-muted">Background</span>
                <span className="font-semibold text-text">Systems Engineering</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-muted">Focus</span>
                <span className="font-semibold text-text">Full-stack &amp; AI automation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
