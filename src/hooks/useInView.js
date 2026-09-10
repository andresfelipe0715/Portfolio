import { useEffect, useRef, useState } from "react";

/**
 * Tracks whether an element has scrolled into the viewport, for scroll-reveal
 * animations. Uses IntersectionObserver only (no extra dependency) and
 * respects prefers-reduced-motion by reporting "in view" immediately so
 * reduced-motion users never wait on a scroll trigger.
 *
 * @param {IntersectionObserverInit} [options]
 * @returns {[React.RefObject, boolean]} [ref to attach to the element, inView]
 */
export default function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setInView(true);
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px", ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}
