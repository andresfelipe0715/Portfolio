export default function ProjectCard({
  title,
  description,
  tags = [],
  links = {},
  image,
  featured = false,
}) {
  return (
    <article
      className={`card pointer-events-auto h-full flex flex-col ${
        featured ? "md:p-6 border-ring/60" : ""
      }`}
      aria-labelledby={`${title}-h`}
    >
      {featured && (
        <p className="eyebrow mb-2 text-brand-3">★ Featured project</p>
      )}

      {image && (
        <div className="w-full overflow-hidden rounded-xl mb-3 group">
          <img
            src={image}
            alt={`${title} screenshot`}
            className={`w-full object-cover rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105 ${
              featured ? "h-64 md:h-72" : "h-40"
            }`}
          />
        </div>
      )}

      <header className="flex justify-between gap-2 items-start mb-2">
        <h3
          id={`${title}-h`}
          className={`font-semibold m-0 ${featured ? "text-2xl" : "text-lg"}`}
        >
          {title}
        </h3>
        <div className="flex gap-2 shrink-0">
          {links.demo && (
            <a
              className="pill-link"
              href={links.demo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title} live demo`}
            >
              Live
            </a>
          )}
          {links.repo && (
            <a
              className="pill-link"
              href={links.repo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title} source code`}
            >
              Code
            </a>
          )}
        </div>
      </header>

      <p className="text-muted mt-2">{description}</p>

      <div className="flex flex-wrap gap-2 mt-auto pt-3">
        {tags.map((t) => (
          <span
            key={t}
            className="px-2 py-1 text-xs border border-border rounded-md bg-background/40 text-muted"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
