import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section" aria-label="Projects">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <p className="text-muted mb-3">A few things I’ve shipped and maintained.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}