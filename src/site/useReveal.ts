import { useEffect } from "react";

/**
 * Marks `.reveal` elements visible as they scroll into view. Content is visible by default; the
 * page opts in with `js-reveal` on <html> so nothing stays hidden without JavaScript.
 */
export function useReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const items = [...document.querySelectorAll<HTMLElement>(".reveal")];
    if (!("IntersectionObserver" in window) || items.length === 0) return;
    root.classList.add("js-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );
    items.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      root.classList.remove("js-reveal");
    };
  }, []);
}
