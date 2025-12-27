"use client";

import { motion } from "framer-motion";

export function Skill() {
  const skills = [
    {
      name: "React.js",
      level: 95,
      color: "from-[#61DAFB] to-[#4fa3c7]",
    },
    {
      name: "TypeScript",
      level: 90,
      color: "from-[#3178C6] to-[#2a5f99]",
    },
    {
      name: "Node.js",
      level: 85,
      color: "from-[#339933] to-[#267326]",
    },
    {
      name: "Genero FourJS",
      level: 80,
      color: "from-primary to-secondary",
    },
    {
      name: "HTML/CSS",
      level: 95,
      color: "from-[#E34F26] to-[#1572B6]",
    },
    {
      name: "JavaScript",
      level: 90,
      color: "from-[#F7DF1E] to-[#c9b518]",
    },
  ];

  const barVariants = {
    hidden: {
      width: 0,
    },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 0.8,
        delay: 0.2,
      },
    }),
  };

  return (
    <section id="skill" className="py-20 bg-muted/20 scroll-mt-15">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center text-5xl mb-4">
            <h2>
              Minhas <span className="gradient-text">Habilidades</span>
            </h2>
          </div>

          <div className="w-20 h-1 bg-linear-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <motion.div
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 w-full md:w-4/6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {
                  opacity: 0,
                  x: index % 2 === 0 ? -40 : 40,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
              className="p-6 bg-card glass rounded-lg"
            >
              <div className="flex justify-between text-lg">
                <h3>{skill.name}</h3>
                <p className="text-primary font-semibold">{skill.level}%</p>
              </div>
              <div>
                <div className="relative h-3 bg-muted rounded-full overflow-hidden mt-4">
                  <motion.div
                    className={`absolute inset-y-0 left-0 bg-linear-to-r ${skill.color} rounded-full`}
                    variants={barVariants}
                    custom={skill.level}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-muted-foreground text-lg">
            Sempre aprendendo e evoluindo com novas tecnologias
          </p>
        </motion.div>
      </div>
    </section>
  );
}
