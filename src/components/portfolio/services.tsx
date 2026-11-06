import type { CSSProperties } from "react";

const SERVICES = [
  {
    n: "01",
    title: "Website design & build",
    desc: "Purpose-built websites for businesses, services, and products.",
    tags: ["Business sites", "Landing pages", "Web design"],
  },
  {
    n: "02",
    title: "Web applications",
    desc: "Web applications shaped around the way your team and customers need to work.",
    tags: ["Web apps", "Custom tools", "Digital products"],
  },
  {
    n: "03",
    title: "E-commerce stores",
    desc: "Online storefronts that make it easy for customers to explore products and buy.",
    tags: ["Online stores", "Product pages", "E-commerce"],
  },
  {
    n: "04",
    title: "SEO, speed & care",
    desc: "Technology solutions with cybersecurity expertise considered from the start.",
    tags: ["Cybersecurity", "Web technology", "Security-aware"],
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8">
      <p className="reveal label-mono mb-12">02 — What our team does</p>

      <h2 className="text-hero reveal mb-16 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
        Web and tech solutions{" "}
        <span className="font-serif font-normal lowercase italic tracking-normal">
          built for people.
        </span>
      </h2>

      <div className="border-t border-border">
        {SERVICES.map((s, i) => (
          <article
            key={s.n}
            className="reveal group grid gap-4 border-b border-border py-8 transition-colors duration-500 hover:bg-card sm:grid-cols-[auto_1fr] sm:items-baseline sm:gap-8 sm:px-4 lg:gap-12"
            style={{ "--reveal-delay": `${i * 80}ms` } as CSSProperties}
          >
            <span className="font-mono text-sm text-muted-foreground transition-colors group-hover:text-accent">
              ({s.n})
            </span>
            <div>
              <h3 className="text-hero text-3xl transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl lg:text-5xl">
                {s.title}
              </h3>
              <p className="mt-3 max-w-2xl text-muted-foreground">{s.desc}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 font-mono text-[11px] tracking-wider text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
