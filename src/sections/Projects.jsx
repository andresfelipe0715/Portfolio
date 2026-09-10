import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import useInView from "../hooks/useInView";

export default function Projects() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p !== featured);
  const [ref, inView] = useInView();

  return (
    <section id="projects" className="section" aria-label="Projects">
      <p className="eyebrow mb-3">· 03 Projects</p>
      <h2 className="text-3xl font-bold tracking-tight mb-3">Projects</h2>
      <p className="text-muted mb-6">A few things I've shipped and maintained.</p>

      <div
        ref={ref}
        className={`reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[minmax(0,1fr)] ${inView ? "is-visible" : ""}`}
      >
        <div className="md:col-span-2 md:row-span-2">
          <ProjectCard {...featured} featured />
        </div>
        {rest.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
