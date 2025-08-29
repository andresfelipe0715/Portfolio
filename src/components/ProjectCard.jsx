export default function ProjectCard({ title, description, tags = [], links = {}, image }) {
  return (
    <article
      className="rounded-xl p-4 border border-border bg-card transition-all duration-200 ease-in-out 
      hover:-translate-y-0.5 hover:shadow-lg hover:border-ring pointer-events-auto"
      aria-labelledby={`${title}-h`}
    >
      {image && (
        <div className="w-full overflow-hidden rounded-xl mb-3 group">
          <img
            src={image}
            alt={`${title} screenshot`}
            className="w-full h-48 object-cover rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
      )}

      <header className="flex justify-between gap-2 items-start mb-2">
        <h3 id={`${title}-h`} className="text-lg font-semibold m-0">
          {title}
        </h3>
        <div className="flex gap-2">
          {links.demo && (
            <a
              className="border border-border bg-card text-text px-3 py-1 rounded-lg transition-all hover:border-ring text-sm"
              href={links.demo}
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          )}
          {links.repo && (
            <a
              className="border border-border bg-card text-text px-3 py-1 rounded-lg transition-all hover:border-ring text-sm"
              href={links.repo}
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          )}
        </div>
      </header>

      <p className="text-muted mt-2">{description}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map((t) => (
          <span
            key={t}
            className="px-2 py-1 text-xs border border-border rounded-md bg-background text-muted"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
