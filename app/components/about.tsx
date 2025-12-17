import { CodeXml, Lightbulb, Zap } from "lucide-react";

const skills = [
  {
    title: "Clean Code",
    description: "Código limpo, organizado e escalável",
    icon: CodeXml,
  },
  {
    title: "Performance",
    description: "Soluções otimizadas e eficientes",
    icon: Zap,
  },
  {
    title: "Inovação",
    description: "Sempre buscando novas tecnologias",
    icon: Lightbulb,
  },
];

export function About() {
  return (
    <section id="about" className="py-20 scroll-mt-15">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <div className="flex items-center justify-center text-5xl mb-4">
            <h2>
              Sobre <span className="gradient-text">Mim</span>
            </h2>
          </div>

          <div className="w-20 h-1 bg-linear-to-r from-primary to-secondary mx-auto" />
        </div>

        <div className="flex justify-between items-center gap-12">
          <div className="flex flex-col gap-10 w-1/2 text-muted-foreground text-lg">
            <p>
              Desenvolvedor Full Stack apaixonado por criar soluções digitais
              que combinam design moderno com funcionalidade robusta. Com
              experiência em React, TypeScript, Node.js e Genero FourJS,
              transformo ideias em aplicações web de alto desempenho.
            </p>
            <p>
              Meu foco está em desenvolver interfaces intuitivas e sistemas
              escaláveis, sempre buscando as melhores práticas de
              desenvolvimento e as tecnologias mais recentes do mercado.
            </p>
          </div>
          <div className="flex-1">
            <div className="flex-1 flex-col space-y-6">
              {skills.map((skill, index) => (
                <div
                  className="flex p-6 rounded-lg bg-card gap-6 glass"
                  key={index}
                >
                  <div className="flex justify-center items-center bg-primary/10 p-3 rounded-lg w-12 h-12 shrink-0">
                    <skill.icon
                      width={24}
                      height={24}
                      className="text-primary"
                    />
                  </div>
                  <div className="flex-1 flex-col text-lg">
                    <h3>{skill.title}</h3>
                    <p className="text-muted-foreground mt-1">
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
