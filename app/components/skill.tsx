import { Progress } from "@/components/ui/progress";

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

  return (
    <section id="skill" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        <div className="mb-16">
          <div className="flex items-center justify-center text-5xl mb-4">
            <h2>
              Minhas <span className="gradient-text">Habilidades</span>
            </h2>
          </div>

          <div className="w-20 h-1 bg-linear-to-r from-primary to-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 w-full md:w-4/6">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 bg-card glass rounded-lg">
              <div className="flex justify-between text-lg">
                <h3>{skill.name}</h3>
                <p className="text-primary font-semibold">{skill.level}%</p>
              </div>
              <div>
                <div className="relative h-3 bg-muted rounded-full overflow-hidden mt-4">
                  <div
                    className={`absolute w-[95%] inset-y-0 left-0 bg-linear-to-r ${skill.color} rounded-full`}
                    style={{
                      transform: `translateX(-${100 - (skill.level || 0)}%)`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <p className="text-muted-foreground text-lg">
            Sempre aprendendo e evoluindo com novas tecnologias
          </p>
        </div>
      </div>
    </section>
  );
}
