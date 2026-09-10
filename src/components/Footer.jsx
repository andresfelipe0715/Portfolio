import { Mail, Github, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="relative mt-8 pt-14 pb-10 text-muted border-t border-border overflow-hidden pointer-events-none"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-brand-2 to-transparent"
        aria-hidden="true"
      />
      <div
        className="glow-blob w-[280px] h-[280px] -bottom-32 left-1/2 -translate-x-1/2 bg-brand/15 dark:bg-brand/10"
        aria-hidden="true"
      />

      <div className="container relative">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="pointer-events-auto">
            <p className="font-heading font-bold text-lg text-gradient m-0">
              Andres Guaglianone
            </p>
            <p className="text-sm mt-1 mb-0">
              Building bold, full-stack products with React &amp; AI.
            </p>
          </div>

          <div className="flex items-center gap-3 pointer-events-auto">
            <a
              href="mailto:andresfgpicon@gmail.com"
              aria-label="Email"
              className="flex items-center justify-center w-10 h-10 rounded-xl glass hover:border-ring hover:text-brand transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/andresfelipe0715"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex items-center justify-center w-10 h-10 rounded-xl glass hover:border-ring hover:text-brand transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/andresguaglianone/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-10 h-10 rounded-xl glass hover:border-ring hover:text-brand transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#hero"
              aria-label="Back to top"
              className="flex items-center justify-center w-10 h-10 rounded-xl glass hover:border-ring hover:text-brand transition-all"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-wrap justify-between gap-3 text-sm">
          <span className="pointer-events-auto">
            © {new Date().getFullYear()} Andres Guaglianone
          </span>
          <span className="text-muted pointer-events-auto">
            Built with{" "}
            <span aria-label="Vite and React" title="Vite and React">
              ⚡ React + Tailwind CSS
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
