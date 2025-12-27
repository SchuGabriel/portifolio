"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { contactWays } from "./contact-ways";
import { containerVariants } from "./motion/variants";
import { SectionTitle } from "./section-title";

export function Contact() {
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden scroll-mt-15 bg-muted/5"
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 md:px-6 flex flex-col items-center">
        <SectionTitle firstTitle="Entre em" secondTitle="Contato" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-center max-w-2xl mx-auto text-lg text-muted-foreground">
            Interessado em trabalhar juntos? Tem uma ideia de projeto? Vamos
            conversar!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full md:w-4/6 mt-10"
        >
          {contactWays.map((contactway, index) => (
            <motion.a
              key={index}
              href={contactway.link}
              target={contactway.external ? "_blank" : undefined}
              rel={contactway.external ? "noopener noreferrer" : undefined}
              className="block"
              variants={itemVariants}
            >
              <Card className="cursor-pointer bg-card/75">
                <CardHeader>
                  <contactway.icon
                    className={`${contactway.color ?? ""} w-8 h-8`}
                  />
                </CardHeader>
                <CardContent className="space-y-1.5">
                  <h3 className="text-lg">{contactway.title}</h3>
                  <p className="text-muted-foreground">
                    {contactway.description}
                  </p>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-8 text-center"
        >
          <Button variant="neon" size="lg" className="py-5" asChild>
            <a href="https://wa.me/5554984464174?text=Encontrei%20seu%20site%20e%20gostaria%20de%20conversar%20contigo.">
              <Send className="mr-2" /> Enviar Mensagem
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
