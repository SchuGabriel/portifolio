import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { Skill } from "./components/skill";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
