export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="hero"
      className="flex flex-col justify-center items-center text-center gap-4 px-4 relative h-screen"
    >
      <span className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-full bg-panel border border-ring">
        👋 Available for full-time - remote
      </span>

      <h1 className="m-0 text-[clamp(2rem,4vw+1rem,3rem)]">Andres Guaglianone</h1>
      <p className="sub text-muted">Full-stack Developer</p>
      <p className="sub text-muted">B.S. in Systems Engineering</p>

      <div className="flex gap-2 flex-wrap justify-center">
        <a
          href="#projects"
          className=" card md:col-span-6 pointer-events-auto hover:border-ring"
          
        >
          View Projects
        </a>
        <a
          href="https://docs.google.com/document/d/11OkSp7IZ9Ef1deBQBhpfojOZCpcFf8EiR0dCTKnjJnE/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className=" card md:col-span-6 pointer-events-auto hover:border-ring"
        >
          Download Résumé
        </a>
        <a
          href="#contact"
          className=" card md:col-span-6 pointer-events-auto hover:border-ring"
        >
          Contact Me
        </a>
      </div>

      {/* scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-2xl text-muted animate-bounce"
      >
        ↓
        <span className="text-sm tracking-wider opacity-80">Scroll Down</span>
      </a>
    </section>
  );
}