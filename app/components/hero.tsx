import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import hero from "@/assets/hero.png";
import profile from "@/assets/profile.png";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <div
      className="hero-section flex flex-col items-center justify-center gap-4 min-h-screen"
      style={{ "--hero-img": `url(${hero.src})` } as React.CSSProperties}
    >
      <Avatar className="w-40 h-40 border-4 border-primary glow-primary mb-4">
        <AvatarImage src={profile.src} alt="Gabriel Schu" />
        <AvatarFallback>GS</AvatarFallback>
      </Avatar>

      <h1 className="flex gap-5 text-7xl mb-0.5">
        Gabriel <span className="gradient-text">Schu</span>
      </h1>

      <h3 className="text-primary text-4xl mb-2">Desenvolvedor Full Stack</h3>

      <span className="text-xl text-muted-foreground mb-4">
        Criando interfaces modernas e sistemas robustos
      </span>

      <div className="flex gap-3">
        <Button variant="neon" size="lg">
          Ver Projetos
        </Button>

        <Button
          variant="ghost"
          size="lg"
          className="border border-primary/80 hover:border-primary text-white"
        >
          Contato
        </Button>
      </div>
      <ArrowDown height={28} width={28} className="text-primary" />
    </div>
  );
}
