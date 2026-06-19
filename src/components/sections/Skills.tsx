import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Terminal as TerminalIcon, Languages as LangIcon, CheckCircle2, ChevronDown } from "lucide-react";

type SkillLevel = "Expert" | "Advanced" | "Intermediate";

type Skill = {
  name: string;
  level: SkillLevel;
};

type SkillGroup = {
  category: string;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "Large Language Models (LLMs)", level: "Expert" },
      { name: "Multi-Agent Systems", level: "Expert" },
      { name: "RAG Pipelines", level: "Expert" },
      { name: "Prompt Engineering", level: "Expert" },
      { name: "LLM Orchestration", level: "Expert" },
      { name: "OpenRouter / Claude / GPT APIs", level: "Expert" },
      { name: "Agentic AI / Autonomous Workflows", level: "Advanced" },
      { name: "Reinforcement Learning", level: "Advanced" },
      { name: "Computer Vision / CNNs", level: "Advanced" },
      { name: "Deep Learning", level: "Advanced" },
      { name: "Sentiment Analysis / NLP", level: "Advanced" },
      { name: "Voice AI (STT / TTS)", level: "Advanced" },
      { name: "TensorFlow / PyTorch", level: "Intermediate" },
      { name: "LSTM / Neural Networks", level: "Intermediate" },
      { name: "OpenCL / Parallel Computing / OpenMP", level: "Intermediate" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "JavaScript", level: "Expert" },
      { name: "HTML5 / CSS3", level: "Expert" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Material UI (MUI)", level: "Advanced" },
      { name: "Angular", level: "Intermediate" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: "Expert" },
      { name: "Express.js", level: "Expert" },
      { name: "REST APIs", level: "Expert" },
      { name: "Python", level: "Expert" },
      { name: "Java", level: "Advanced" },
      { name: "C / C++", level: "Advanced" },
      { name: "GraphQL (AppSync)", level: "Advanced" },
      { name: "C# / .NET", level: "Intermediate" },
      { name: "ABAP (SAP)", level: "Intermediate" },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS Lambda (Serverless)", level: "Expert" },
      { name: "Vercel", level: "Expert" },
      { name: "AWS Amplify", level: "Advanced" },
      { name: "AWS AppSync", level: "Advanced" },
      { name: "AWS Cognito", level: "Advanced" },
      { name: "AWS EC2 / EKS", level: "Advanced" },
      { name: "Docker", level: "Advanced" },
      { name: "Kubernetes (K8s)", level: "Advanced" },
      { name: "GitHub Actions (CI/CD)", level: "Advanced" },
      { name: "Linux (Ubuntu)", level: "Advanced" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB / Atlas", level: "Expert" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MySQL", level: "Advanced" },
      { name: "SQL", level: "Advanced" },
      { name: "DynamoDB (AWS)", level: "Intermediate" },
      { name: "Supabase", level: "Intermediate" },
    ],
  },
  {
    category: "MLOps",
    skills: [
      { name: "MLflow", level: "Advanced" },
      { name: "Apache Airflow", level: "Advanced" },
      { name: "Prometheus", level: "Advanced" },
      { name: "Grafana", level: "Advanced" },
    ],
  },
];

const securityCompliance = [
  "HIPAA Compliance (PHI data protection)",
  "SOC 2 Compliance (via Vanta framework)",
  "AWS IAM Policies & Secrets Management",
  "Security Automation in CI/CD deployment pipelines"
];

const languages = ["Python", "TypeScript", "JavaScript", "Java", "C", "C++", "C#", "SQL", "ABAP", "Assembly (x86)"];

const tools = ["Git / GitHub", "Claude Code", "Postman", "VS Code", "Android Studio", "Cameo Systems Modeler", "SAP Fiori", "SAPUI5", "SysML"];

function getLevelBadgeStyles(level: SkillLevel) {
  switch (level) {
    case "Expert":
      return {
        bg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
        dot: "bg-emerald-400 shadow-[0_0_8px_#10b981]",
        cardHover: "hover:border-emerald-500/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.08)]",
      };
    case "Advanced":
      return {
        bg: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
        dot: "bg-cyan-400 shadow-[0_0_8px_#06b6d4]",
        cardHover: "hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.08)]",
      };
    case "Intermediate":
      return {
        bg: "bg-violet-500/10 border-violet-500/20 text-violet-400",
        dot: "bg-violet-400 shadow-[0_0_8px_#8b5cf6]",
        cardHover: "hover:border-violet-500/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.08)]",
      };
  }
}

export function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center py-20 lg:py-24 relative overflow-hidden bg-background">
      <div className="max-w-[1400px] mx-auto px-6 w-full">
        
        {/* Header */}
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

        {/* Dashboard Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Categories Selector & Skills Grid */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Mobile Dropdown Selector */}
            <div className="sm:hidden mb-6 relative">
              <select
                value={activeTab}
                onChange={(e) => setActiveTab(Number(e.target.value))}
                className="w-full px-5 py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl border border-white/10 bg-card/60 text-white outline-none focus:border-primary appearance-none cursor-pointer pr-10"
              >
                {skillGroups.map((group, idx) => (
                  <option key={group.category} value={idx} className="bg-zinc-950 text-white">
                    {group.category}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                <ChevronDown size={16} />
              </div>
            </div>

            {/* Desktop Tabs Switcher */}
            <div className="hidden sm:flex flex-wrap gap-2 pb-4 border-b border-white/5">
              {skillGroups.map((group, idx) => (
                <button
                  key={group.category}
                  onClick={() => setActiveTab(idx)}
                  className={`px-5 py-3 text-xs font-bold uppercase tracking-wider rounded-xl border transition-all duration-300 shrink-0 cursor-pointer ${
                    activeTab === idx
                      ? "bg-primary text-primary-foreground border-primary shadow-[0_4px_20px_-5px_rgba(5,150,105,0.4)]"
                      : "bg-white/[0.02] text-muted-foreground border-white/10 hover:border-white/25 hover:text-white"
                  }`}
                >
                  {group.category}
                </button>
              ))}
            </div>

            {/* Active Skills Grid */}
            <div className="min-h-[350px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                >
                  {skillGroups[activeTab].skills.map((skill) => {
                    const styles = getLevelBadgeStyles(skill.level);
                    return (
                      <div
                        key={skill.name}
                        className={`p-5 rounded-2xl border border-white/10 bg-card/30 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between gap-4 group ${styles.cardHover}`}
                      >
                        <span className="text-sm font-bold text-white leading-snug group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>

                        <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-lg border text-[9px] font-bold uppercase tracking-wider self-start ${styles.bg}`}>
                          <span className={`w-1 h-1 rounded-full ${styles.dot}`} />
                          {skill.level}
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Other Categorized Bento Panels */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Security & Compliance Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-white/10 bg-card/40 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <ShieldCheck size={18} />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-white">Security & Compliance</h3>
              </div>
              <ul className="space-y-4">
                {securityCompliance.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-xs md:text-sm text-muted-foreground">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Languages Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl border border-white/10 bg-card/40 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <LangIcon size={18} />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-white">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-2 text-xs font-semibold rounded-lg bg-white/[0.02] border border-white/5 hover:border-primary/40 text-white/90 transition-all duration-200"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Tools & Other Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl border border-white/10 bg-card/40 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <TerminalIcon size={18} />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-white">Tools & Other</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-2 text-xs font-mono rounded-lg bg-black/40 border border-white/5 hover:border-primary/30 text-white/70 transition-all duration-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
