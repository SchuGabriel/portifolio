"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const handleNavClick = (event: React.MouseEvent, href: string) => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      event.preventDefault();

      const element = document.querySelector(href);
      if (!element) return;

      window.history.pushState(null, "", href);

      const y = element.getBoundingClientRect().top + window.scrollY - 30;

      window.scrollTo({ top: y - 10, behavior: "smooth" });

      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={isScrolled ? "bg-card glass shadow-lg" : "bg-transparent"}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-5">
          <div>
            <h3 className="gradient-text text-2xl select-none">GS</h3>
          </div>

          <div className="hidden md:flex gap-6 text-muted-foreground ">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className={hoverGradient}>
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden flex flex-col gap-4 px-6 py-4 bg-card shadow-lg"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
