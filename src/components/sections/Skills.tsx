import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Frontend",
    color: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/20",
    accent: "text-blue-400",
    skills: ["React.js", "Next.js", "Angular", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"],
  },
  {
    label: "Backend",
    color: "from-emerald-500/20 to-green-500/10",
    border: "border-emerald-500/20",
    accent: "text-emerald-400",
    skills: ["Node.js", "Express.js", "Python", "Java", "C#", "C++", "REST APIs"],
  },
  {
    label: "Databases",
    color: "from-orange-500/20 to-amber-500/10",
    border: "border-orange-500/20",
    accent: "text-orange-400",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Supabase", "SQL"],
  },
  {
    label: "AI / ML",
    color: "from-purple-500/20 to-violet-500/10",
    border: "border-purple-500/20",
    accent: "text-purple-400",
    skills: ["Neural Networks", "Machine Learning", "LSTM", "Parallel Computing", "OpenMP", "OpenCL", "Agentic AI"],
  },
  {
    label: "DevOps & Tools",
    color: "from-pink-500/20 to-rose-500/10",
    border: "border-pink-500/20",
    accent: "text-pink-400",
    skills: ["Git", "Docker", "VS Code", "Postman", "Linux"],
  },
  {
    label: "Cloud & Mobile",
    color: "from-sky-500/20 to-indigo-500/10",
    border: "border-sky-500/20",
    accent: "text-sky-400",
    skills: ["AWS Amplify", "Android Studio", "Mobile Dev"],
  },
  {
    label: "Languages",
    color: "from-yellow-500/20 to-orange-500/10",
    border: "border-yellow-500/20",
    accent: "text-yellow-400",
    skills: ["Python", "Java", "C++", "C#", "TypeScript", "JavaScript", "SQL", "Assembly x86"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-massive-sm font-black uppercase flex flex-col">
            <span className="text-foreground">TECHNICAL</span>
            <span className="text-white/20">ARSENAL</span>
          </h2>
        </motion.div>

        <div className="w-full h-[1px] bg-white/10 mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.07 }}
              className={`relative rounded-2xl border ${group.border} bg-gradient-to-br ${group.color} p-6 backdrop-blur-sm`}
            >
              <div className={`text-xs font-bold uppercase tracking-[0.2em] mb-4 ${group.accent}`}>
                {group.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-muted-foreground hover:text-foreground hover:border-white/30 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
