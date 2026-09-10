import { useEffect, useState, useRef } from "react";
import ThemeToggle from "./ThemeToggle.jsx";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "languages", label: "Languages" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ visible }) {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("hero");
  const dropdownRef = useRef(null);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  // Close when clicking/tapping outside the dropdown
  useEffect(() => {
    if (!open) return;

    const handleOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [open]);

  // Scroll-spy: highlight whichever section is currently in view.
  useEffect(() => {
    const sections = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport among those
        // currently intersecting, so the highlight tracks scroll direction
        // reliably even with sections of very different heights.
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;

        const top = visible.reduce((closest, e) =>
          e.boundingClientRect.top < closest.boundingClientRect.top ? e : closest
        );
        setActiveId(top.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const onClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
    setOpen(false);
  };

  const linkLabel = SECTIONS.find((s) => s.id === "contact");

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[9999] backdrop-blur-xl bg-panel/70 border-b border-border transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
      role="navigation"
      aria-label="Main"
    >
      <div className="max-w-[1024px] mx-auto px-4 flex items-center justify-between w-full">
        <a
          href="#hero"
          onClick={(e) => onClick(e, "hero")}
          className="inline-flex items-center gap-2.5 text-sm px-3 py-2 rounded-full border border-border bg-card backdrop-blur-xl transition-transform hover:-translate-y-0.5"
        >
          <span className="brand-mark" aria-hidden="true">AG</span>
          <strong className="font-heading font-semibold text-text whitespace-nowrap hidden sm:inline">
            Andres Guaglianone
          </strong>
          <strong className="font-heading font-semibold text-text whitespace-nowrap sm:hidden">
            Andres
          </strong>
        </a>

        {/* Desktop links */}
        <div className="flex flex-1 justify-end mr-4">
          <div className="hidden md:flex items-center gap-1">
            {SECTIONS.filter((s) => s.id !== "contact").map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={(e) => onClick(e, s.id)}
                aria-current={activeId === s.id ? "page" : undefined}
                className={`nav-link ${activeId === s.id ? "nav-link-active" : ""}`}
              >
                {s.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => onClick(e, "contact")}
              aria-current={activeId === "contact" ? "page" : undefined}
              className="nav-cta ml-2"
            >
              {linkLabel.label}
            </a>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button className="block md:hidden text-2xl mr-2" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            ☰
          </button>
          <ThemeToggle size="sm"/>
        </div>
      </div>

      {/* Mobile overlay + dropdown */}
      {open && (
        <>
          <div className="fixed inset-0 bg-black/80 md:hidden z-[10000]" />

          {/* Dropdown (right-side, smaller width) */}
          <div ref={dropdownRef} className="fixed top-16 right-4 md:hidden z-[10001]">
            <div className="flex flex-col gap-1 w-56 max-h-[70vh] overflow-y-auto glass p-3 shadow-2xl">
              {SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={(e) => onClick(e, s.id)}
                  aria-current={activeId === s.id ? "page" : undefined}
                  className={`nav-link ${activeId === s.id ? "nav-link-active" : ""}`}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
