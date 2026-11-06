import { useTypewriter } from "@/hooks/use-reveal";
import { Zap } from "lucide-react";
import { ShinyText } from "@/components/reactbits";
import GhostFibers from "@/components/reactbits/GhostFibers";

export function Hero() {
  const typed = useTypewriter([
    "websites for real businesses.",
    "web apps built around your work.",
    "technology shaped for people.",
  ]);

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-end overflow-hidden px-5 pb-10 pt-28 sm:px-8"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-90">
        <GhostFibers
          glowColor="#7c3aed"
          secondaryColor="#3b0a6b"
          lineColor="#00e5ff"
          gradient="along"
          layers={3}
          twist={1.2}
          threads={72}
          fiberStyle="dots"
          depthOfField={0.85}
          hoverEffect="focus"
          intro={true}
          mouseInteraction={true}
          pulseOnClick={false}
        />
      </div>
      <span
        aria-hidden
        className="text-outline-faint text-hero pointer-events-none absolute -right-8 top-24 select-none text-[26vw] opacity-40"
      >
        BL
      </span>

      <div className="relative mx-auto w-full max-w-7xl">
        <p className="reveal label-mono mb-6 flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <ShinyText>One team · Web &amp; tech studio</ShinyText>
        </p>

        <h1 className="text-hero neon-text reveal text-[13vw] leading-[0.9] sm:text-[11.5vw] lg:text-[9.5rem]">
          <span className="block">
            Brightlane
          </span>
          <span className="block font-serif text-[0.66em] font-normal lowercase italic tracking-normal">
            <span className="text-accent-gradient">studio</span>&nbsp;·&nbsp;web&nbsp;&&nbsp;tech
          </span>
          <span className="block">
            solu
            <Zap
              aria-hidden
              className="mx-1 inline-block h-[0.6em] w-[0.6em] shrink-0 -translate-y-[0.04em] fill-accent"
              stroke="none"
            />
            tions
          </span>
        </h1>

        <div className="mt-10 flex flex-col justify-between gap-6 border-t border-border pt-6 md:flex-row md:items-end">
          <p className="reveal text-sm text-muted-foreground sm:text-base md:whitespace-nowrap lg:text-lg">
            We build{" "}
            <span data-typewriter className="text-foreground">
              {typed}
            </span>
          </p>

          <div className="reveal flex items-center justify-between gap-10 md:justify-end">
            <p className="label-mono">Frontend · Backend · Cybersecurity</p>
            <a
              href="#work"
              className="label-mono flex items-center gap-2 transition-colors hover:text-foreground"
            >
              Explore
              <span className="inline-block animate-bounce">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}