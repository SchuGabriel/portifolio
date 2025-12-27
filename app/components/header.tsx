"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const hoverGradient =
    "relative text-muted-foreground hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-linear-to-r after:from-primary after:to-secondary after:transition-all after:duration-300 hover:after:w-full";

  const navItems = [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#about" },
    { label: "Skills", href: "#skill" },
    { label: "Projetos", href: "#projects" },
    { label: "Contato", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={isScrolled ? "bg-card glass shadow-lg" : "bg-transparent"}
      >
        <div className="container mx-auto flex justify-between items-center py-4">
          <div>
            <h3 className="gradient-text text-2xl select-none">GS</h3>
          </div>
          <div className="flex gap-6 text-muted-foreground ">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className={hoverGradient}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </header>
  );
}
