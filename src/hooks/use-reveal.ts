import { useEffect, useState } from "react";

/**
 * Adds `.is-visible` to every `.reveal` element as it scrolls into view.
 * Elements can stagger with an inline `--reveal-delay` style.
 */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -4% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/** Cycles through `words` with a type/delete effect. */
export function useTypewriter(words: string[], typeMs = 65, holdMs = 1500) {
  const [text, setText] = useState("");

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const word = words[wordIndex] ?? "";
      charIndex += deleting ? -1 : 1;
      setText(word.slice(0, charIndex));
      let delay = deleting ? typeMs / 2 : typeMs;
      if (!deleting && charIndex === word.length) {
        delay = holdMs;
        deleting = true;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = typeMs;
      }
      timer = setTimeout(tick, delay);
    };
    tick();

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return text;
}
