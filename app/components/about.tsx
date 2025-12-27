"use client";

import { motion } from "framer-motion";
import { CodeXml, Lightbulb, Zap } from "lucide-react";
import { containerVariants } from "./motion/variants";
import { SectionTitle } from "./section-title";

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
  const itemVariants = {
    hidden: {
      opacity: 0,
      x: 40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 scroll-mt-15">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle firstTitle="Sobre" secondTitle="Mim" />

        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-10 lg:w-1/2 text-muted-foreground text-base lg:text-lg text-center lg:text-left"
          >
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
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1"
          >
            <div className="flex-1 flex-col space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex p-6 rounded-lg bg-card gap-6 glass"
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
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
