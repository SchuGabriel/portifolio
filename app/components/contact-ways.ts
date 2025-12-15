import { Github, Linkedin, Mail, Send } from "lucide-react";

export const contactWays = [
  {
    icon: Mail,
    title: "Email",
    description: "gabrielschu79@gmail.com",
    link: "mailto:gabrielschu79@gmail.com",
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
