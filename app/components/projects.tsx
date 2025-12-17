import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

export function Projects() {
  const projects = [
    {
      img: "",
      title: "E-commerce Platform",
      description:
        "Plataforma completa de e-commerce com React, TypeScript e Node.js. Sistema de pagamentos integrado e painel administrativo.",
      gradient: "from-primary/20 to-secondary/20",
      technologies: [
        {
          name: "React",
        },
        {
          name: "TypeScript",
        },
        {
          name: "Node.js",
        },
        {
          name: "PostgreSQL",
        },
      ],
    },
    {
      img: "",
      title: "Dashboard Analytics",
      description:
        "Dashboard interativo para análise de dados em tempo real com visualizações avançadas e relatórios customizáveis.",
      gradient: "from-secondary/20 to-primary/20",
      technologies: [
        {
          name: "React",
        },
        {
          name: "TypeScript",
        },
        {
          name: "D3.js",
        },
        {
          name: "WebSocket",
        },
      ],
    },
    {
      img: "",
      title: "Sistema ERP",
      description:
        "Sistema de gestão empresarial desenvolvido com Genero FourJS e integração com APIs modernas.",
      gradient: "from-primary/20 to-purple-500/20",
      technologies: [
        {
          name: "Genero FourJS",
        },
        {
          name: "PostgreSQL",
        },
        {
          name: "REST API",
        },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 scroll-mt-15">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        <div className="mb-16">
          <div className="flex items-center justify-center text-5xl mb-4">
            <h2>
              Meus <span className="gradient-text">Projetos</span>
            </h2>
          </div>

          <div className="w-20 h-1 bg-linear-to-r from-primary to-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="pt-0 hover:text-primary cursor-pointer"
            >
              <CardHeader className="p-0">
                <div
                  className={`h-48 bg-linear-to-br ${project.gradient} rounded-t-2xl opacity-80 relative overflow-hidden`}
                ></div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h3 className="text-xl">{project.title}</h3>
                  <p className="text-base text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex gap-2">
                    {project.technologies.map((technology, index) => (
                      <Badge
                        key={index}
                        variant="foreground"
                        className="font-semibold"
                      >
                        {technology.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
