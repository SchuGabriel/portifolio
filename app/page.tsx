import { About } from "./components/about";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { Skill } from "./components/skill";

export default function Home() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>
      <section id="hero" className="py-20">
        <About />
      </section>
      <Skill />
      <Projects />
    </main>
  );
}
