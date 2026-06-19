import { motion } from "framer-motion";

type SkillGroup = {
  category: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    category: "AI & Machine Learning",
    skills: [
      "Large Language Models (LLMs)",
      "Multi-Agent Systems",
      "RAG Pipelines",
      "Prompt Engineering",
      "LLM Orchestration",
      "OpenRouter / Claude / GPT APIs",
      "Agentic AI / Autonomous Workflows",
      "Reinforcement Learning",
      "Computer Vision / CNNs",
      "Deep Learning",
      "Sentiment Analysis / NLP",
      "Voice AI (STT / TTS)",
      "TensorFlow / PyTorch",
      "LSTM / Neural Networks",
      "OpenCL / Parallel Computing / OpenMP",
    ],
  },
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5 / CSS3",
      "Tailwind CSS",
      "Material UI (MUI)",
      "Angular",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Python",
      "Java",
      "C / C++",
      "GraphQL (AppSync)",
      "C# / .NET",
      "ABAP (SAP)",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS Lambda (Serverless)",
      "Vercel",
      "AWS Amplify",
      "AWS AppSync",
      "AWS Cognito",
      "AWS EC2 / EKS",
      "Docker",
      "Kubernetes (K8s)",
      "GitHub Actions (CI/CD)",
      "Linux (Ubuntu)",
    ],
  },
  {
    category: "Databases",
    skills: [
      "MongoDB / Atlas",
      "PostgreSQL",
      "MySQL",
      "SQL",
      "DynamoDB (AWS)",
      "Supabase",
    ],
  },
  {
    category: "MLOps",
    skills: [
      "MLflow",
      "Apache Airflow",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    category: "Security & Compliance",
    skills: [
      "HIPAA Compliance (PHI)",
      "SOC 2 (Vanta Framework)",
      "AWS IAM & Secrets",
      "CI/CD Security Automation",
    ],
  },
  {
    category: "Languages",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "Java",
      "C / C++",
      "C#",
      "SQL",
      "ABAP",
      "Assembly (x86)",
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      "Git / GitHub",
      "Claude Code",
      "Postman",
      "VS Code",
      "Android Studio",
      "Cameo Systems Modeler",
      "SAP Fiori / SAPUI5",
      "SysML",
    ],
  },
];

const highlightedLogos = [
  {
    name: "React",
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none" strokeWidth="2">
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="2" className="fill-current" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M1.125 0h21.75c.621 0 1.125.504 1.125 1.125v21.75c0 .621-.504 1.125-1.125 1.125H1.125C.504 24 0 23.496 0 22.875V1.125C0 .504.504 0 1.125 0zm17.135 15.651c-.657-.393-1.407-.594-2.229-.594-1.248 0-2.208.57-2.208 1.956 0 2.871 4.545 2.508 4.545 5.253 0 1.392-1.035 2.214-2.829 2.214-1.398 0-2.433-.615-3.054-1.374l1.326-1.503c.537.603 1.257.99 2.025.99.981 0 1.488-.363 1.488-1.047 0-2.88-4.545-2.409-4.545-5.223 0-1.554 1.164-2.316 2.766-2.316 1.17 0 2.127.429 2.748.882l-1.329 1.488zm-8.871-.168H6.558v1.68h2.091v7.659h1.791V17.16h2.094v-1.677z"/>
      </svg>
    ),
  },
  {
    name: "Next.js",
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.892 18.006l-5.692-7.34v7.34H10.4v-10h1.8l5.692 7.34V8.006h1.8v10h-1.8z"/>
      </svg>
    ),
  },
  {
    name: "Python",
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
        <path d="M11.9 2c-2.3 0-4.1.2-5.4.5-1.5.3-2.6 1-3.3 2.1-.8 1.1-1 2.5-1 4.5v1.2c0 2 0 3.4.9 4.5.6.8 1.5 1.2 2.7 1.4v-1.7c0-2.3 2-4.2 4.3-4.2h3.9c2.3 0 4.3-2 4.3-4.3V6.4c0-2.3-2-4.3-4.3-4.3L11.9 2zm-2.4 1.8c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm4.9 6.4c0 2.3-2 4.3-4.3 4.3H6.2c-2.3 0-4.3 2-4.3 4.3v3.9c0 2.3 2 4.3 4.3 4.3h3.9c2.3 0 4.1-.2 5.4-.5 1.5-.3 2.6-1 3.3-2.1.8-1.1 1-2.5 1-4.5v-1.2c0-2 0-3.4-.9-4.5-.6-.8-1.5-1.2-2.7-1.4v1.7c0 2.3-2 4.2-4.3 4.2zm-.1 6.2c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7z"/>
      </svg>
    ),
  },
  {
    name: "AWS",
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
        <path d="M15.5 12c-1-.2-2-.3-3-.4v-1.8c1.3.1 2.5.3 3.5.6V8.6c-1-.2-2.3-.4-3.5-.5V6c2.5.1 4.5.6 5.5 1.3v4.7zm-4.5.1c-1-.1-2-.1-3 0v1.7c1-.1 2-.1 3 0v-1.7zm0-3.6c-1-.1-2-.1-3 0v1.7c1-.1 2-.1 3 0V8.5zM22.8 13.9C21 16.3 16.7 18 12 18s-9-1.7-10.8-4.1c-.2-.3-.1-.7.2-.9l.7-.5c.3-.2.7-.2.9.1C4.7 14.8 8.1 16 12 16s7.3-1.2 9-3.4c.2-.3.6-.3.9-.1l.7.5c.3.2.4.6.2.9z"/>
      </svg>
    ),
  },
  {
    name: "Docker",
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
        <path d="M13.983 11.078h2.119v-2.006h-2.119v2.006zm-2.825 0h2.12v-2.006h-2.12v2.006zm-2.827 0h2.12v-2.006h-2.12v2.006zm-2.814 0h2.119v-2.006H5.517v2.006zM5.517 8.477h2.119V6.47h-2.119v2.007zm2.814 0h2.12V6.47h-2.12v2.007zm2.827 0h2.12V6.47h-2.12v2.007zm-5.641-2.61h2.119V3.86H5.517v2.006zm13.111 4.605c-.244-.131-.482-.262-.72-.392v4.887c0 .121-.097.22-.218.22h-1.956v1.306h4.127c.121 0 .219-.098.219-.22v-5.801zm-5.074.392v4.887H15.6v1.306h4.128c.12 0 .218-.098.218-.22v-5.972zM24 13.014c0-.735-.386-1.423-1.01-1.808-.052-.032-.107-.06-.164-.085v-4.14H20.72v2.404h-1.807V6.981H17.1v2.404h-1.807V6.981h-1.807v2.404h-1.807V6.981h-1.807v2.404H8.064V9.385H6.257V11.79H4.45V9.385H2.643v2.404H.836c-.057.025-.112.053-.164.085A2.164 2.164 0 000 13.68c0 3.738 3.518 5.86 8.358 5.86 6.84 0 11.238-3.155 12.63-6.526 1.488 0 3.012-.663 3.012-1.686V13.014z"/>
      </svg>
    ),
  },
  {
    name: "Kubernetes",
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
        <path d="M12.43 0a1.44 1.44 0 0 0-.86.29L1.86 7.42a1.43 1.43 0 0 0-.57.86l-1.28 11a1.43 1.43 0 0 0 .57 1.28l9.71 7.14a1.43 1.43 0 0 0 1.71 0l9.71-7.14a1.43 1.43 0 0 0 .57-1.28l-1.28-11a1.43 1.43 0 0 0-.57-.86L12.43.29A1.44 1.44 0 0 0 12 0zm-.43 2.5l8 5.89v8.32l-8 3.79-8-3.79V8.39z"/>
      </svg>
    ),
  },
  {
    name: "Git",
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
        <path d="M23.384 11.252L12.748.616a1.765 1.765 0 0 0-2.496 0L8.74 2.13l3.528 3.528a2.478 2.478 0 0 1 2.87 2.87l3.528 3.528a2.478 2.478 0 0 1 .596 2.544l4.132 4.132a1.766 1.766 0 0 0 0-2.496zm-9.76 1.428a2.478 2.478 0 0 1-2.87-2.87L7.226 5.678A2.478 2.478 0 0 1 4.682 5.08L.55 9.214a1.766 1.766 0 0 0 0 2.496l10.636 10.636a1.765 1.765 0 0 0 2.496 0l4.132-4.132a2.478 2.478 0 0 1-2.544-.596l-1.646-1.644z"/>
      </svg>
    ),
  },
];

export function Skills() {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center py-20 lg:py-24 relative overflow-hidden bg-background">
      <div className="max-w-[1400px] mx-auto px-6 w-full space-y-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <h2 className="text-massive-sm font-black uppercase flex flex-col">
            <span className="text-foreground">TECHNICAL</span>
            <span className="text-white/20">ARSENAL</span>
          </h2>
        </motion.div>

        <div className="w-full h-[1px] bg-white/10 mb-6" />

        {/* Highlighted Core Tech Stack Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-4 space-y-6"
        >
          <h4 className="text-[10px] font-mono tracking-widest text-primary uppercase font-bold text-center">
            Highlighted Core Stack
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10">
            {highlightedLogos.map((logo) => (
              <div 
                key={logo.name} 
                className="flex flex-col items-center gap-2 group transition-all duration-300 transform hover:-translate-y-1"
                title={logo.name}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/[0.02] border border-white/10 group-hover:border-primary/50 flex items-center justify-center text-white/40 group-hover:text-primary transition-all duration-300 shadow-[0_4px_15px_-8px_rgba(255,255,255,0.03)] group-hover:shadow-[0_4px_20px_-3px_rgba(16,185,129,0.18)] bg-card p-3">
                  {logo.svg}
                </div>
                <span className="text-[9px] font-mono tracking-wider text-muted-foreground group-hover:text-white uppercase transition-colors">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="w-full h-[1px] bg-white/5 my-8" />

        {/* Stack of Categorized Continuous Sliders */}
        <div className="space-y-10">
          {skillGroups.map((group, idx) => {
            const isEven = idx % 2 === 0;
            const animationClass = isEven ? "animate-marquee" : "animate-marquee-reverse";
            
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="space-y-4"
              >
                {/* Category Heading */}
                <h3 className="text-xs sm:text-sm font-black uppercase tracking-widest text-white/80 pl-2 border-l-2 border-primary">
                  {group.category}
                </h3>
                
                {/* Continuous Slider Wrapper */}
                <div className="relative w-full overflow-hidden py-3 bg-white/[0.01] border-y border-white/5 mask-fade-edges">
                  <div className={`flex gap-4 whitespace-nowrap ${animationClass}`}>
                    {/* Triple the skills list to guarantee seamless infinite looping with -33.333% marquee offset */}
                    {[...group.skills, ...group.skills, ...group.skills].map((skill, index) => (
                      <span
                        key={`${skill}-${index}`}
                        className="px-4 py-2 text-xs font-semibold rounded-lg bg-card border border-white/10 text-white/90 hover:border-primary/50 hover:text-primary transition-all duration-300 select-none cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
