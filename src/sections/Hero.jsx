import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef(null);

  // Cursor-aware soft radial highlight: cheap to run because it only ever
  // writes two CSS custom properties directly to the DOM node (no React
  // state/re-render per pointer move) and is skipped entirely for
  // prefers-reduced-motion via the .hero-glow-follow CSS rule.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = null;
    const handlePointerMove = (e) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        el.style.setProperty("--my", `${e.clientY - rect.top}px`);
        frame = null;
      });
    };

    el.addEventListener("pointermove", handlePointerMove);
    return () => {
      el.removeEventListener("pointermove", handlePointerMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      aria-label="hero"
      className="relative flex flex-col justify-center min-h-screen py-24"
    >
      {/* Full-bleed glow backdrop — breaks out of the container so the
          glow reaches the true viewport edges instead of stopping at the
          content column (which read as a visible "boxed" seam). */}
      <div
        className="absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 overflow-hidden -z-10 pointer-events-none"
        aria-hidden="true"
      >
        <div className="glow-blob w-[420px] h-[420px] -top-24 left-[6%] bg-brand/30 dark:bg-brand/25" />
        <div className="glow-blob w-[420px] h-[420px] bottom-0 right-[8%] bg-brand-2/25 dark:bg-brand-2/20" />
        <div className="glow-blob w-[300px] h-[300px] top-1/3 right-[30%] bg-brand-3/20" />
      </div>

      {/* Cursor-following soft highlight, layered behind content */}
      <div
        className="absolute inset-0 -z-10 hero-glow-follow pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
        {/* Left column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left gap-5">
          <span className="hero-in hero-in-1 eyebrow px-3 py-2 rounded-full glass normal-case tracking-normal font-medium text-text pointer-events-auto">
            👋 Available for full-time — remote
          </span>

          <h1 className="hero-in hero-in-2 m-0 text-[clamp(2.4rem,4.5vw+1rem,4rem)] font-bold tracking-tight leading-[1.05]">
            Building <span className="text-gradient">bold, full-stack</span>{" "}
            products with React &amp; AI
          </h1>

          <p className="hero-in hero-in-3 text-lg text-text/90 max-w-xl">
            Andres Guaglianone — Software Engineer specializing in{" "}
            <span className="font-semibold">full-stack development</span>,
            SaaS applications, and AI-driven automation.
          </p>

          <div className="hero-in hero-in-4 flex gap-3 flex-wrap mt-2">
            <a
              href="#projects"
              className="pointer-events-auto inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-brand via-brand-2 to-brand-3 shadow-lg shadow-brand/30 transition-all hover:scale-[1.03] hover:shadow-xl hover:shadow-brand/40 active:scale-[0.98]"
            >
              View Projects
            </a>
            <a
              href="https://docs.google.com/document/d/1WP1DtihD13xcSzQMz4A7Kz1h78ENo2uQ/edit?usp=sharing&ouid=105483751432569552413&rtpof=true&sd=true"
              target="_blank"
              rel="noreferrer"
              className="pointer-events-auto inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold glass hover:border-ring transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              Download Résumé
            </a>
          </div>
        </div>

        {/* Right column — floating glass cards */}
        <div className="hero-in hero-in-5 lg:col-span-5 relative hidden sm:block h-[320px] lg:h-[380px]">
          <div className="absolute top-0 left-4 right-10 glass floating-card p-5 rotate-[4deg] pointer-events-auto">
            <p className="eyebrow mb-2">Currently building</p>
            <p className="font-semibold text-text">
              Software Engineer @ AINOVIX
            </p>
            <p className="text-muted text-sm mt-1">
              Full-stack SaaS · Next.js · Supabase
            </p>
          </div>

          <div className="absolute top-[38%] right-0 left-10 glass floating-card p-5 -rotate-[3deg] pointer-events-auto">
            <p className="eyebrow mb-2">Focus area</p>
            <p className="font-semibold text-text">AI Workflows &amp; Automation</p>
            <p className="text-muted text-sm mt-1">
              LLM integration · real-time systems
            </p>
          </div>

          <div className="absolute bottom-0 left-8 right-4 glass floating-card p-5 rotate-[2deg] pointer-events-auto">
            <p className="eyebrow mb-2">Tech stack</p>
            <p className="text-text text-sm font-medium">
              React · FastAPI · PostgreSQL · Tailwind
            </p>
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-2xl text-muted animate-bounce z-10 pointer-events-auto"
      >
        ↓
        <span className="text-sm tracking-wider opacity-80">Scroll Down</span>
      </a>
    </section>
  );
}
