"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  const contactWays = [
    {
      icon: Mail,
      title: "Email",
      description: "gabrielschu79@gmail.com",
      color: "text-primary",
      external: false,
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "in/gabriel-schu",
      link: "https://www.linkedin.com/in/gabriel-schu",
      color: "text-blue-600",
      external: true,
    },
    {
      icon: Github,
      title: "Github",
      description: "SchuGabriel",
      link: "https://github.com/SchuGabriel",
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 md:px-6 flex flex-col items-center">
        <div className="mb-16">
          <div className="flex items-center justify-center text-5xl mb-4">
            <h2>
              Entre em <span className="gradient-text">Contato</span>
            </h2>
          </div>

          <div className="w-20 h-1 bg-linear-to-r from-primary to-secondary mx-auto" />
        </div>

        <div>
          <p className="text-center max-w-2xl mx-auto text-lg text-muted-foreground">
            Interessado em trabalhar juntos? Tem uma ideia de projeto? Vamos
            conversar!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full md:w-4/6 mt-10">
          {contactWays.map((contactway, index) => (
            <a
              key={index}
              href={contactway.link}
              target={contactway.external ? "_blank" : undefined}
              rel={contactway.external ? "noopener noreferrer" : undefined}
              className="block"
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
