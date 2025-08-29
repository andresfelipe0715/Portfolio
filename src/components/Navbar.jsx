import { useEffect, useState, useRef } from "react";
import ThemeToggle from "./ThemeToggle.jsx";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "languages", label: "Languages" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ visible }) {
  const [open, setOpen] = useState(false);
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

  const onClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[9999] backdrop-blur-md bg-panel/60 border-b-[0.1px] border-border transition-transform duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
      role="navigation"
      aria-label="Main"
    >
      <div className="max-w-[1024px] mx-auto px-4 flex items-center justify-between w-full">
        <a href="#home" onClick={(e) => onClick(e, "home")} className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-full border border-border bg-card">
          <span>🛠️</span>
          <strong>Andres Guaglianone</strong>
        </a>

        {/* Desktop links */}
        <div className="flex flex-1 justify-end mr-8">
          <div className="hidden md:flex gap-5">
            {SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`} onClick={(e) => onClick(e, s.id)} className="whitespace-nowrap px-3 py-2 rounded-md transition hover:bg-brand/20 hover:border hover:border-ring">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
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
            <div className="flex flex-col gap-3 w-44 max-h-[70vh] overflow-y-auto bg-panel border border-border p-3 shadow-2xl divide-y divide-border">
              {SECTIONS.map((s) => (
                <a key={s.id} href={`#${s.id}`} onClick={(e) => onClick(e, s.id)} className="whitespace-nowrap px-3 py-2 rounded-md transition hover:bg-brand/20 hover:border hover:border-ring">
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
