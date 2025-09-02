export default function About() {
  return (
    <section id="about" className="py-24" aria-label="About">
      <h2 className="text-2xl mb-4">About</h2>
      <p className="text-muted mb-6">
        "I'm a Software Engineer with a BS in Systems Engineering, passionate about building reliable tech solutions.
      </p>
      <div className="grid gap-4 grid-cols-12">
        <div className="card md:col-span-6 pointer-events-auto">
          <h3 className="text-xl mb-4 font-bold">What I value</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Writing clean, maintainable code</li>
            <li>Constant learning and growth</li>
            <li>Collaboration and open communication</li>
          </ul>
        </div>
        <div className="card md:col-span-6 pointer-events-auto">
          <h3 className="text-xl mb-4 font-bold">How I work</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Break problems into clear, manageable steps</li>
            <li>Balance speed with attention to detail</li>
            <li>Adapt quickly to new tools and challenges</li>
          </ul>
        </div>
      </div>
    </section>
  );
}