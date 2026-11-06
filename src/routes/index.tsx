import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/portfolio/nav";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Services } from "@/components/portfolio/services";
import { Projects } from "@/components/portfolio/projects";
import { Marquee } from "@/components/portfolio/marquee";
import { Testimonials } from "@/components/portfolio/testimonials";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { ClickSpark } from "@/components/reactbits";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brightlane Studio — Websites, Web Apps & Tech Solutions" },
      {
        name: "description",
        content:
          "Brightlane Studio is a team building websites, web apps, and technology solutions with frontend, backend, and cybersecurity expertise.",
      },
      { property: "og:title", content: "Brightlane Studio — Websites, Web Apps & Tech Solutions" },
      {
        property: "og:description",
        content:
          "A team creating websites, web apps, and technology solutions with frontend, backend, and cybersecurity expertise.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Brightlane Studio — Websites, Web Apps & Tech Solutions" },
      {
        name: "twitter:description",
        content:
          "A team creating websites, web apps, and technology solutions with frontend, backend, and cybersecurity expertise.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="grain-overlay" aria-hidden />
      <ClickSpark />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Marquee
          items={[
            "Restaurants",
            "Cafés",
            "Car care",
            "Hospitality",
            "Websites that sell",
            "Built to convert",
            "Fast & secure",
          ]}
        />
        <Projects />
        <Testimonials />
        <Marquee
          slow
          items={["Local businesses", "Web apps", "Online stores", "Restaurants", "Cafés", "Car care"]}
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
