import madeena from "@/assets/project-madeena.jpg";
import irani from "@/assets/project-irani.jpg";
import bridge from "@/assets/project-bridge.jpg";
import carwash from "@/assets/project-carwash.jpg";

const PROJECTS = [
  {
    title: "Madeena Hotel",
    meta: "Restaurant · Hospitality",
    desc: "A restaurant website presenting Kerala flavours and the Madeena dining experience.",
    href: "https://madeenahotel.in/",
    img: madeena,
  },
  {
    title: "Anand’s Irani Chai",
    meta: "Café · Food & drink",
    desc: "A neighbourhood chai house in Alwarpet, Chennai, centred on tea, coffee, and snacks.",
    href: "https://anand-s-irani-chai.pages.dev/",
    img: irani,
  },
  {
    title: "Bridge Coffee",
    meta: "Café · Cinematic storytelling",
    desc: "A scroll-led café experience featuring coffee, matcha, and a dog-friendly patio.",
    href: "https://bridgecoffee-cinematic.pages.dev/",
    img: bridge,
  },
  {
    title: "Friends Car Wash",
    meta: "Doorstep car care · Chennai",
    desc: "A service-led website for doorstep car care, from foam washes to interior detailing.",
    href: "https://playful-hamster-aa4ed5.netlify.app/",
    img: carwash,
  },
];

export function Projects() {
  return (
    <section id="work" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="reveal mb-12 flex flex-wrap items-end justify-between gap-4">
        <p className="label-mono">03 — Selected websites</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${p.title} website (opens in a new tab)`}
            className="reveal group hud-panel relative block aspect-[4/3.6] overflow-hidden sm:aspect-[16/11]"
          >
            <img
              src={p.img}
              alt={`${p.title} website homepage`}
              loading="lazy"
              className="card-zoom-img absolute inset-0 h-full w-full object-cover object-top opacity-70 saturate-[0.85] transition-all duration-700 group-hover:opacity-90 group-hover:saturate-100"
            />
            <div aria-hidden className="project-shade absolute inset-0" />
            <span
              aria-hidden
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/60 text-accent backdrop-blur transition-all duration-300 group-hover:rotate-45 group-hover:bg-accent group-hover:text-accent-foreground"
            >
              ↗
            </span>
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="label-mono mb-3">0{i + 1} · {p.meta}</p>
              <h3 className="text-hero text-3xl transition-transform duration-300 group-hover:translate-x-1 sm:text-4xl">{p.title}</h3>
              <p className="mt-3 max-w-md text-sm text-muted-foreground">{p.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
