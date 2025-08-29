import { useEffect, useState } from "react";

export default function ParticlesBackground() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );
  const [particlesLoaded, setParticlesLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/particles.min.js";
    script.async = true;
    script.onload = () => setParticlesLoaded(true);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // Watch for changes in localStorage when theme is toggled
  useEffect(() => {
    const handleStorage = () => {
      const storedTheme = localStorage.getItem("theme") || "light";
      setTheme(storedTheme);
    };

    window.addEventListener("storage", handleStorage);
    // also catch changes from same tab
    const observer = new MutationObserver(() => handleStorage());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      window.removeEventListener("storage", handleStorage);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!particlesLoaded || !window.particlesJS) return;

    fetch("/particles.json")
      .then((res) => res.json())
      .then((config) => {
        const color = theme === "light" ? "#000000" : "#ffffff";
        config.particles.color.value = color;
        config.particles.line_linked.color = color;

        const container = document.getElementById("particles-js");
        if (container) container.innerHTML = "";
        window.particlesJS("particles-js", config);
      });
  }, [theme, particlesLoaded]);

  return (
    <div
      id="particles-js"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
}
