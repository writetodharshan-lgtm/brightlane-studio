export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8">
      <p className="reveal label-mono mb-12">01 — About our team</p>

      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="reveal flex min-h-72 flex-col justify-between border-y border-border py-8 sm:min-h-96">
          <span className="text-hero text-6xl leading-[0.95] sm:text-7xl">
            Idea<span className="text-accent-gradient">→</span>
            <br />
            <span className="font-serif font-normal lowercase italic tracking-normal text-accent-gradient">launch.</span>
          </span>
          <span className="label-mono">Design · Build · Secure · Launch</span>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-hero reveal text-4xl sm:text-5xl lg:text-6xl">
            Websites, apps{" "}
            <span className="font-serif font-normal lowercase italic tracking-normal">
              & more.
            </span>
          </h2>

          <p className="reveal mt-8 max-w-xl text-lg text-muted-foreground">
            We are a team building websites, web applications, and
            technology solutions for businesses. Our team brings together
            frontend and backend development with cybersecurity expertise.
          </p>
          <p className="reveal mt-4 max-w-xl text-lg text-muted-foreground">
            From a hospitality website to a cinematic café experience and a
            doorstep car-care site, our work adapts to the people each business
            wants to reach.
          </p>

          <ul className="reveal mt-10 grid gap-3 border-t border-border pt-6 sm:grid-cols-2">
            {["Frontend development", "Backend development", "Cybersecurity", "Web & tech solutions"].map((discipline) => (
              <li key={discipline} className="label-mono text-foreground">
                {discipline}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
