"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

import hero from "@/assets/hero.png";
import profile from "@/assets/profile.png";
import { ArrowDown } from "lucide-react";
import { containerVariants } from "./motion/variants";

export function Hero() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="hero">
      <div
        className="hero-section flex flex-col items-center justify-center gap-4 min-h-screen"
        style={{ "--hero-img": `url(${hero.src})` } as React.CSSProperties}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Avatar className="w-40 h-40 border-4 border-primary glow-primary mb-4">
            <AvatarImage src={profile.src} alt="Gabriel Schu" />
            <AvatarFallback>GS</AvatarFallback>
          </Avatar>
        </motion.div>

        <motion.div
          variants={containerVariants}
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          className="flex flex-col items-center justify-center gap-4"
        >
          <motion.h1
            variants={itemVariants}
            className="flex gap-5 text-7xl mb-0.5"
          >
            Gabriel <span className="gradient-text">Schu</span>
          </motion.h1>

          <motion.h3
            variants={itemVariants}
            className="text-primary text-4xl mb-2"
          >
            Desenvolvedor Full Stack
          </motion.h3>

          <motion.span
            variants={itemVariants}
            className="text-xl text-muted-foreground mb-4"
          >
            Criando interfaces modernas e sistemas robustos
          </motion.span>

          <motion.div variants={itemVariants} className="flex gap-3">
            <Button variant="neon" size="lg">
              <a href="#projects">Ver Projetos</a>
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="border border-primary/80 hover:border-primary text-white"
            >
              <a href="#contact">Contato</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{
              delay: 0.8,
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <ArrowDown height={32} width={32} className="text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
