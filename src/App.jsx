
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import ParticlesBackground from "./components/ParticlesBackground";
import ThemeToggle from "./components/ThemeToggle.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Experience from "./sections/Experience.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
import Languages from "./sections/Languages.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./components/Footer.jsx";


export default function App() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <Navbar visible={visible} />
      {!visible && (
        <div className="fixed top-4 right-4 z-[10000]">
          <ThemeToggle size="lg" />
        </div>
      )}
      <ParticlesBackground />
      <main id="main" className="container min-w-[320px]" role="main" aria-label="Content">

        <Hero /><br />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
