"use client";

import { contactWays } from "./contact-ways";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-5 bg-card border-t border-border">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="flex flex-col space-y-2">
            <h4 className="gradient-text">Gabriel Schu</h4>
            <p>{`© ${year} Todos os direitos reservados`}</p>
          </div>
          <div className="flex items-center gap-8">
            {contactWays.map((contactway, index) => (
              <div key={index}>
                <a
                  key={index}
                  href={contactway.link}
                  target={contactway.external ? "_blank" : undefined}
                  rel={contactway.external ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  <contactway.icon className={` ${contactway.color} w-6 h-6`} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
