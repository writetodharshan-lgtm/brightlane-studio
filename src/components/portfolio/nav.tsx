import { Magnet } from "@/components/reactbits";
import { useEffect, useState } from "react";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 " +
        (scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent")
      }
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="font-display text-lg font-extrabold uppercase tracking-tight"
        >
          Brightlane Studio
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="label-mono transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Magnet>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-bold uppercase tracking-widest text-accent-foreground shadow-[0_0_24px_-4px_var(--accent)] transition-transform duration-300 hover:scale-105"
        >
          Start a project
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
            ↗
          </span>
        </a>
        </Magnet>
      </nav>
    </header>
  );
}
