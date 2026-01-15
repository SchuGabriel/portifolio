"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "./section-title";

import previewSSDistribuidora from "@/public/preview/ssdistribuidoradepecas.webp";

export function Projects() {
  const projects = [
    {
      img: "",
      title: "Sistema Institucional com Automação de Processos",
      description:
        "Plataforma institucional integrada a módulos automatizados de conferência, compras e financeiro.",
      gradient: "from-primary/20 to-secondary/20",
      url: "https://ssdistribuidoradepecas.com.br",
      previewImage: previewSSDistribuidora,
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
  ];

  return (
    <section id="projects" className="py-20 scroll-mt-15">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        <SectionTitle firstTitle="Meus" secondTitle="Projetos" />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row gap-5"
        >
          <div className="grid grid-cols-1 gap-8 w-full">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="pt-0 hover:text-primary cursor-pointer max-w-[420px] w-full mx-auto"
              >
                <CardHeader className="p-0">
                  <div className="relative h-full w-full overflow-hidden rounded-t-2xl">
                    <Image
                      src={project.previewImage.src}
                      alt="Preview do projeto SS Distribuidora de Peças"
                      height={1080}
                      width={1920}
                      className="w-full h-full "
                    />

                    <Link
                      prefetch={false}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition"
                    >
                      <span className="px-4 py-2 bg-primary text-black rounded-lg">
                        Ver projeto
                      </span>
                    </Link>
                  </div>
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

          <div className="flex items-center justify-center gap-8 w-full">
            <div className="bg-linear-to-br from-secondary/20 to-primary/20 opacity-80 relative rounded-2xl p-15">
              <div className="flex flex-col text-center items-center justify-center space-y-4">
                <div className="rounded-full bg-linear-to-br from-primary to-secondary p-6">
                  <Rocket width={42} height={42} className="text-black" />
                </div>
                <h3 className="text-4xl">Em Breve</h3>
                <p className="text-xl text-muted-foreground">
                  Novos projetos incríveis estão sendo desenvolvidos.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
