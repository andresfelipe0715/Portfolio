export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="mt-8 py-12 text-muted border-t border-muted pointer-events-none"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-3">
          <span className="pointer-events-auto">© {new Date().getFullYear()} Andres Guaglianone</span>
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
