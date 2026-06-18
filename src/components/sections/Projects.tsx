import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Github,
  Brain,
  Smartphone,
  Server,
  Cloud,
  TrendingUp,
  Gamepad2,
  FileJson,
  Globe,
  Cpu,
  Terminal
} from "lucide-react";

type Project = {
  id: string;
  title: string;
  category: string;
  filterCategory: "ai" | "web" | "systems" | "desktop";
  github: string;
  description: string;
  tech: string[];
  gradient: string;
  accentColor: string;
  image?: string;
  flowDiagram?: string;
};

const projectsList: Project[] = [
  {
    id: "01",
    title: "ProxyIQ",
    category: "Full Stack · Cloud · AI",
    filterCategory: "web",
    github: "#",
    description: "A production-grade, fully serverless healthcare supply chain platform built on AWS. ProxyIQ handles sensitive healthcare documentation and logistics workflows with end-to-end HIPAA and SOC 2 compliance enforced through automated security gating on every deployment.",
    tech: ["AWS Lambda", "AWS Cognito", "AWS AppSync", "AWS Amplify", "Vanta", "HIPAA", "SOC 2", "Serverless", "CI/CD"],
    gradient: "from-blue-900 via-indigo-800 to-slate-900",
    accentColor: "bg-blue-500",
    image: "/images/projects/img/proxyiq.png",
    flowDiagram: "/images/projects/img/proxyiq-flow.png"
  },
  {
    id: "02",
    title: "AI Voice Sales Agent",
    category: "AI Automation · Voice AI",
    filterCategory: "ai",
    github: "#",
    description: "A fully autonomous conversational voice AI agent designed for dynamic B2B and B2C sales interactions. The agent handles real-time voice conversations, qualifies leads, responds to objections, and hands off to CRM automatically — with no human in the loop.",
    tech: ["LLMs", "Speech-to-Text", "Text-to-Speech", "LLM Reasoning Pipelines", "CRM Integration", "AWS Serverless"],
    gradient: "from-purple-900 via-violet-800 to-slate-900",
    accentColor: "bg-purple-500",
    image: "/images/projects/img/voice-agent-cover.png",
    flowDiagram: "/images/projects/img/voice-agent-flow.png"
  },
  {
    id: "03",
    title: "Movie Creation Multi-Agent System",
    category: "AI · Multi-Agent Systems",
    filterCategory: "ai",
    github: "#",
    description: "A collaborative multi-agent AI system where specialized LLM agents each own a distinct phase of a creative production workflow — from story ideation to scene planning, dialogue writing, and asset coordination — fully automating the creative pipeline.",
    tech: ["Multi-Agent LLM Orchestration", "OpenRouter", "Python", "Autonomous Workflows", "Prompt Engineering"],
    gradient: "from-green-900 via-emerald-800 to-slate-900",
    accentColor: "bg-green-500",
    image: "/images/projects/img/multi-agent-cover.png",
    flowDiagram: "/images/projects/img/multi-agent-flow.png"
  },
  {
    id: "04",
    title: "Enterprise RAG Pipelines",
    category: "AI · RAG · LLM Engineering",
    filterCategory: "ai",
    github: "#",
    description: "Designed and deployed multiple production RAG systems for enterprise clients, dramatically improving LLM accuracy over proprietary knowledge bases through custom data ingestion, intelligent chunking strategies, and optimized vector retrieval.",
    tech: ["RAG", "Vector Databases", "Python", "LLMs", "Custom Data Pipelines", "OpenRouter", "Embeddings"],
    gradient: "from-indigo-900 via-blue-800 to-slate-900",
    accentColor: "bg-indigo-500",
    image: "/images/projects/img/rag-pipeline-flow.png",
    flowDiagram: "/images/projects/img/rag-pipeline-flow.png"
  },
  {
    id: "05",
    title: "Automotive Ad Creative Generator (MLOps)",
    category: "AI · MLOps · Full Stack",
    filterCategory: "systems",
    github: "#",
    description: "A fully automated, LLM-powered ad creative generation system backed by a production MLOps pipeline. The system generates automotive ad creatives at scale with experiment tracking, pipeline orchestration, containerized deployment, and real-time production monitoring.",
    tech: ["LLMs", "MLflow", "Apache Airflow", "Kubernetes (EKS)", "Prometheus", "Grafana", "AWS", "Docker", "Python"],
    gradient: "from-pink-900 via-rose-800 to-slate-900",
    accentColor: "bg-pink-500",
    image: "/images/projects/img/mlops-pipeline-cover.png",
    flowDiagram: "/images/projects/img/mlops-pipeline-flow.png"
  },
  {
    id: "06",
    title: "ExtraJob",
    category: "Full Stack · AI · Fintech",
    filterCategory: "web",
    github: "#",
    description: "A full-stack freelance marketplace that uses AI to intelligently match freelancers with client requirements. Features complex Stripe escrow payment flows, automated dispute resolution, and a full cloud-native deployment on AWS.",
    tech: ["MERN Stack", "Next.js", "TypeScript", "AWS", "Stripe", "AI Service Matching", "CI/CD", "Docker"],
    gradient: "from-cyan-900 via-teal-800 to-slate-900",
    accentColor: "bg-cyan-500",
    image: "/images/projects/img/extra-jobs.png",
  },
  // {
  //   id: "07",
  //   title: "Neural Network Racing AI (TORCS)",
  //   category: "AI · Reinforcement Learning",
  //   filterCategory: "ai",
  //   github: "#",
  //   description: "A reinforcement learning agent trained to drive autonomously in the TORCS racing simulation environment. Through iterative reward shaping and policy optimization, the agent surpassed the performance of the built-in TORCS baseline AI.",
  //   tech: ["Deep Neural Networks", "Reinforcement Learning", "TORCS", "Python", "Policy Optimization", "Reward Shaping"],
  //   gradient: "from-yellow-900 via-amber-800 to-slate-900",
  //   accentColor: "bg-yellow-500",
  // },
  {
    id: "08",
    title: "DeepBlight",
    category: "AI · Computer Vision · Mobile",
    filterCategory: "desktop",
    github: "#",
    description: "A mobile Android application for real-time plant disease diagnosis powered by a deep learning CNN model. Designed for agricultural use, DeepBlight gives farmers instant, accurate disease identification from a phone camera shot.",
    tech: ["Deep Learning", "CNN", "Android Studio", "Mobile Dev", "Computer Vision", "Python"],
    gradient: "from-purple-900 via-violet-800 to-slate-900",
    accentColor: "bg-purple-500",
    image: "/images/projects/img/deepblight.png",
  },
  {
    id: "10",
    title: "Watch Time",
    category: "Full Stack · Frontend",
    filterCategory: "web",
    github: "https://github.com/Umar1-1assan/watch-time",
    description: "A performant movie and TV discovery web app integrating the TMDb API. Engineered for speed and engagement with lazy loading, infinite scroll, and Vercel edge deployment — resulting in a 30% improvement in user engagement.",
    tech: ["React.js", "TMDb API", "Vercel CDN", "Lazy Loading", "Infinite Scroll", "JavaScript"],
    gradient: "from-blue-900 via-blue-800 to-slate-900",
    accentColor: "bg-blue-500",
    image: "/images/projects/img/watchtime.PNG",
  },
  // {
  //   id: "11",
  //   title: "Applied LLM Tools",
  //   category: "AI · NLP",
  //   filterCategory: "ai",
  //   github: "#",
  //   description: "A suite of specialized LLM applications including a neural English-to-Urdu translation engine and a real-time sentiment analysis model for automated mood detection — demonstrating applied NLP engineering for Urdu-language and multilingual contexts.",
  //   tech: ["LLMs", "NLP", "Python", "Neural Machine Translation", "Sentiment Analysis"],
  //   gradient: "from-slate-800 via-gray-700 to-slate-900",
  //   accentColor: "bg-slate-400",
  // },
  {
    id: "12",
    title: "Hospital Management System",
    category: "Software Engineering · Desktop",
    filterCategory: "desktop",
    github: "https://github.com/Umar1-1assan/Hospital-Management-System",
    description: "A layered desktop GUI application for hospital record management, featuring 98% data validation accuracy and clean architecture across patient and staff management workflows.",
    tech: ["JavaFX", "Java", "OOP", "Layered Architecture", "Data Validation", "MySQL"],
    gradient: "from-emerald-900 via-green-800 to-slate-900",
    accentColor: "bg-emerald-500",
    image: "/images/projects/img/hms.png",
  },
  {
    id: "13",
    title: "Hilman Shopping Castle",
    category: "Web",
    filterCategory: "web",
    github: "#",
    description: "A modern shopping platform with real-time inventory, user-friendly interface, and seamless checkout process.",
    tech: ["NextJS", "Node.js", "MongoDB", "JWT", "Redis"],
    gradient: "from-green-900 via-emerald-800 to-slate-900",
    accentColor: "bg-green-500",
    image: "/images/projects/img/hilman-castle.png",
  },
  {
    id: "14",
    title: "PtolemyTree Report",
    category: "Software",
    filterCategory: "web",
    github: "#",
    description: "Digital palm tree report generation tool for environmental monitoring and data analysis.",
    tech: ["ReactJS", "Supabase", "PostgreSQL", "PDF Generation", "JWT", "Redis"],
    gradient: "from-orange-900 via-amber-800 to-slate-900",
    accentColor: "bg-orange-500",
    image: "/images/projects/img/ptolemy-tree.png",
  },
  {
    id: "15",
    title: "Flex for Gyms",
    category: "Software",
    filterCategory: "desktop",
    github: "#",
    description: "A complete gym management solution handling memberships, trainer schedules, and billing using C# and SQL Server. Features a Windows Forms UI with real-time reporting and analytics.",
    tech: ["C#", ".NET", "SQL Server", "Windows Forms"],
    gradient: "from-green-900 via-emerald-800 to-slate-900",
    accentColor: "bg-green-500",
    image: "/images/projects/img/gym-flex.png",
  },
  {
    id: "16",
    title: "Ultimate Tic-Tac-Toe AI",
    category: "AI",
    filterCategory: "ai",
    github: "https://github.com/Umar1-1assan/Ultimate-TTT",
    description: "An AI-powered Ultimate Tic-Tac-Toe game using CSP techniques and Minimax with Alpha-Beta pruning. The AI plays optimally and is nearly unbeatable. Built with a Tkinter GUI for interactive play.",
    tech: ["Python", "CSP", "Minimax", "Alpha-Beta Pruning", "Tkinter"],
    gradient: "from-purple-900 via-violet-800 to-slate-900",
    accentColor: "bg-purple-500",
    image: "/images/projects/img/Utt.PNG",
  },
  {
    id: "17",
    title: "IPFS Distributed File Storage",
    category: "Systems",
    filterCategory: "systems",
    github: "https://github.com/Umar1-1assan/IPFS-DSA",
    description: "A distributed file storage simulation using SHA1 hashing and B-trees for efficient decentralized storage. Implements core IPFS protocols for secure and redundant data management.",
    tech: ["C++", "SHA1", "B-Trees", "Distributed Systems"],
    gradient: "from-orange-900 via-amber-800 to-slate-900",
    accentColor: "bg-orange-500",
    image: "/images/projects/img/ipfs2.PNG",
  },
  {
    id: "18",
    title: "Next Word Prediction LSTM",
    category: "AI",
    filterCategory: "ai",
    github: "https://github.com/Umar1-1assan/next_word_lstm",
    description: "A word-level language model using LSTM neural networks to predict the next word in a sequence. Trained on large text corpora with configurable sequence length and model depth.",
    tech: ["Python", "TensorFlow", "LSTM", "NLP", "Keras"],
    gradient: "from-pink-900 via-rose-800 to-slate-900",
    accentColor: "bg-pink-500",
    image: "/images/projects/img/lstm.PNG",
  },
  {
    id: "19",
    title: "Pacman-OS",
    category: "Systems",
    filterCategory: "systems",
    github: "https://github.com/Umar1-1assan/Pacman-OS",
    description: "A Pacman-like operating system simulation built in C++, exploring OS concepts like process scheduling, memory management, and inter-process communication in a game environment.",
    tech: ["C++", "OS Concepts", "Process Scheduling", "Memory Management"],
    gradient: "from-yellow-900 via-amber-800 to-slate-900",
    accentColor: "bg-yellow-500",
    image: "/images/projects/img/pacman-os.png",
  },
  {
    id: "20",
    title: "Pacman-COAL (Assembly)",
    category: "Systems",
    filterCategory: "systems",
    github: "https://github.com/Umar1-1assan/Pacman-COAL",
    description: "An Assembly-based Pacman game demonstrating low-level programming concepts close to the metal. Written entirely in x86 Assembly, showcasing direct hardware manipulation and interrupt handling.",
    tech: ["x86 Assembly", "Low-Level", "Hardware Interrupts", "BIOS"],
    gradient: "from-red-900 via-red-800 to-slate-900",
    accentColor: "bg-red-500",
    image: "/images/projects/img/pacman-coal.PNG",
  },
  {
    id: "21",
    title: "MISTs Construction (MPI + OpenMP)",
    category: "Systems",
    filterCategory: "systems",
    github: "https://github.com/MuhammadSarmad091/MISTs-Construction-using-MPICH-and-OpenMP",
    description: "Parallel construction of Minimum Spanning Trees using MPICH and OpenMP for high-performance computing. Achieves significant speedup over sequential algorithms through distributed memory and shared memory parallelism.",
    tech: ["C++", "OpenMP", "MPI", "Parallel Computing", "Graph Algorithms"],
    gradient: "from-cyan-900 via-teal-800 to-slate-900",
    accentColor: "bg-cyan-500",
    image: "/images/projects/img/MIST.PNG",
  },
  {
    id: "22",
    title: "JSON to CSV Compiler",
    category: "Systems",
    filterCategory: "systems",
    github: "https://github.com/Umar1-1assan/Json-to-csv",
    description: "A compiler that converts JSON files to CSV format using Flex for lexical analysis and Bison for parsing and semantic analysis. Handles nested objects, arrays, and type conversions.",
    tech: ["Flex", "Bison", "C", "Compiler Theory", "Lexer/Parser"],
    gradient: "from-slate-800 via-gray-700 to-slate-900",
    accentColor: "bg-slate-400",
    image: "/images/projects/img/jsontocsv.jpeg",
  },
  {
    id: "23",
    title: "Quiz Management System",
    category: "Software",
    filterCategory: "desktop",
    github: "https://github.com/Umar1-1assan/QuizManagementSystem",
    description: "A system for teachers to create quizzes, manage classes, and auto-grade student submissions. Features role-based access control, real-time quiz sessions, and detailed performance analytics.",
    tech: ["JavaFX", "MySQL", "OOP", "Role-Based Access"],
    gradient: "from-indigo-900 via-blue-800 to-slate-900",
    accentColor: "bg-indigo-500",
    image: "/images/projects/img/quizms.png",
  },
  {
    id: "24",
    title: "Space Shooter OOP",
    category: "Software",
    filterCategory: "desktop",
    github: "https://github.com/Umar1-1assan/SpaceShooter-OOP",
    description: "A Space Shooter game demonstrating Object-Oriented Programming principles in C++. Features inheritance hierarchies for player/enemy classes, collision detection, and smooth SFML rendering.",
    tech: ["C++", "SFML", "OOP", "Game Development"],
    gradient: "from-violet-900 via-purple-800 to-slate-900",
    accentColor: "bg-violet-500",
    image: "/images/projects/img/space-shooter.jpg",
  }
];

function getProjectIcon(category: string, title: string) {
  const cat = category.toLowerCase();
  const t = title.toLowerCase();

  if (cat.includes("ai") || t.includes("ai") || t.includes("prediction") || t.includes("lstm") || t.includes("rag") || t.includes("agent")) {
    return Brain;
  }
  if (cat.includes("mobile") || (cat.includes("app") && !cat.includes("web")) || t.includes("blight")) {
    return Smartphone;
  }
  if (cat.includes("system") || t.includes("distributed") || t.includes("ipfs") || t.includes("parallel") || t.includes("mpi") || t.includes("os") || t.includes("compiler")) {
    return Server;
  }
  if (cat.includes("cloud")) {
    return Cloud;
  }
  if (t.includes("marketing") || t.includes("seo") || t.includes("ad")) {
    return TrendingUp;
  }
  if (t.includes("game") || t.includes("pacman") || t.includes("shooter") || t.includes("tic-tac-toe") || t.includes("racing")) {
    return Gamepad2;
  }
  if (t.includes("compiler") || t.includes("parser") || t.includes("json")) {
    return FileJson;
  }
  if (cat.includes("web") || cat.includes("application") || cat.includes("marketplace") || cat.includes("commerce")) {
    return Globe;
  }
  if (cat.includes("software") || cat.includes("desktop")) {
    return Cpu;
  }
  return Terminal;
}

const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

type FilterType = "all" | "ai" | "web" | "systems" | "desktop";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [modalTab, setModalTab] = useState<"image" | "diagram">("image");

  const filteredProjects = activeFilter === "all"
    ? projectsList
    : projectsList.filter((p) => p.filterCategory === activeFilter);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 5);

  const filterOptions: { label: string; value: FilterType }[] = [
    { label: "All Projects", value: "all" },
    { label: "AI & Agents", value: "ai" },
    { label: "Full Stack & Web", value: "web" },
    { label: "Systems & MLOps", value: "systems" },
    { label: "Mobile & Desktop", value: "desktop" }
  ];

  const handleSelectProject = (project: Project) => {
    setSelected(project);
    setModalTab("image");
  };

  const getAssetPath = (path: string | undefined) => {
    if (!path) return "";
    const base = import.meta.env.BASE_URL || "/";
    const cleanBase = base.endsWith("/") ? base : `${base}/`;
    const cleanPath = path.startsWith("/") ? path.slice(1) : path;
    return `${cleanBase}${cleanPath}`;
  };

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-20 lg:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 w-full">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-massive-sm font-black uppercase flex flex-col items-center justify-center">
            <span className="text-foreground">FEATURED</span>
            <span className="text-white/20">PROJECTS</span>
          </h2>
        </motion.div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-12 pb-4 border-b border-white/10 justify-center">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                setActiveFilter(opt.value);
                setShowAll(false);
              }}
              className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl border transition-all duration-300 cursor-pointer ${activeFilter === opt.value
                ? "bg-primary text-primary-foreground border-primary shadow-[0_4px_15px_-5px_rgba(5,150,105,0.4)]"
                : "bg-white/[0.02] text-muted-foreground border-white/5 hover:border-white/20 hover:text-white"
                }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Bento Grid layout */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter + "-" + displayedProjects.length}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6 w-full"
            >
              {chunkArray(displayedProjects, 5).map((chunk, chunkIndex) => (
                <div key={chunkIndex} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[260px]">
                  {chunk.map((project, index) => {
                    const Icon = getProjectIcon(project.category, project.title);

                    if (index === 0) {
                      // Large card (first in chunk of 5)
                      const hasImage = !!project.image;
                      return (
                        <motion.div
                          key={project.id}
                          onClick={() => handleSelectProject(project)}
                          className="relative overflow-hidden rounded-2xl border border-white/10 cursor-pointer group select-none transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_-5px_rgba(5,150,105,0.15)] md:col-span-2 md:row-span-2 flex flex-col justify-between h-[380px] md:h-full bg-card"
                        >
                          {/* Image or Gradient area */}
                          {hasImage ? (
                            <div className="relative flex-1 w-full overflow-hidden">
                              <img
                                src={getAssetPath(project.image)}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-750"
                              />
                            </div>
                          ) : (
                            <div className={`relative flex-1 w-full bg-gradient-to-br ${project.gradient} opacity-80 z-0`} />
                          )}

                          {/* Bottom Content */}
                          <div className="relative z-20 p-6 md:p-8 bg-zinc-950/95 border-t border-white/5 flex flex-col justify-end">
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-4 transition-all group-hover:border-primary/50 group-hover:bg-primary/10">
                              <Icon size={20} />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2 transition-colors group-hover:text-primary">
                              {project.title}
                            </h3>
                            <p className="text-sm text-white/70 max-w-xl line-clamp-2 leading-relaxed">
                              {project.description}
                            </p>
                          </div>
                        </motion.div>
                      );
                    }

                    // Small / Wide cards
                    const isWide = index === 4;
                    const colSpanClass = isWide ? "md:col-span-2" : "md:col-span-1";
                    const hasImage = !!project.image;

                    return (
                      <motion.div
                        key={project.id}
                        onClick={() => handleSelectProject(project)}
                        className={`relative overflow-hidden rounded-2xl border border-white/10 cursor-pointer group select-none transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_-5px_rgba(5,150,105,0.15)] flex flex-col justify-between bg-card h-[260px] md:h-full ${colSpanClass}`}
                      >
                        {/* Top Image or Gradient Area */}
                        {hasImage ? (
                          <div className="relative flex-1 w-full overflow-hidden">
                            <img
                              src={getAssetPath(project.image)}
                              alt={project.title}
                              className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-750"
                            />
                            <div className="absolute top-3 right-3 z-20 w-8 h-8 rounded-lg bg-black/45 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/75 transition-all group-hover:text-primary group-hover:border-primary/50 group-hover:bg-primary/10">
                              <Icon size={16} />
                            </div>
                          </div>
                        ) : (
                          <div className={`relative flex-1 w-full bg-gradient-to-br ${project.gradient} opacity-80 z-0`}>
                            <div className="absolute top-3 right-3 z-20 w-8 h-8 rounded-lg bg-black/25 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/75 transition-all group-hover:text-primary group-hover:border-primary/50 group-hover:bg-primary/10">
                              <Icon size={16} />
                            </div>
                          </div>
                        )}

                        {/* Bottom Content */}
                        <div className="relative z-20 p-5 bg-zinc-950/95 border-t border-white/5">
                          <h3 className={`font-black text-white leading-tight mb-1 transition-colors group-hover:text-primary ${isWide ? "text-xl md:text-2xl" : "text-lg md:text-xl"}`}>
                            {project.title}
                          </h3>
                          <p className="text-xs md:text-sm text-white/60 line-clamp-2 leading-relaxed max-w-xl">
                            {project.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Details Modal Overlay */}
        <AnimatePresence>
          {selected && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelected(null)}
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-5xl bg-card border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10 max-h-[90vh] md:max-h-[85vh]"
              >
                {/* Left/Top side: Project Image/Diagram Area */}
                <div className="w-full md:w-1/2 min-h-[280px] md:min-h-0 relative bg-black/60 flex flex-col justify-between overflow-hidden shrink-0 border-b md:border-b-0 md:border-r border-white/10">
                  {/* Tab buttons if diagram is available */}
                  {selected.flowDiagram && (
                    <div className="absolute top-4 left-4 z-20 flex gap-1 bg-black/80 backdrop-blur-md p-1 rounded-xl border border-white/10">
                      <button
                        onClick={() => setModalTab("image")}
                        className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${modalTab === "image" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-white"
                          }`}
                      >
                        Overview
                      </button>
                      <button
                        onClick={() => setModalTab("diagram")}
                        className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${modalTab === "diagram" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-white"
                          }`}
                      >
                        Flow Diagram
                      </button>
                    </div>
                  )}

                  <div className="flex-1 flex items-center justify-center p-4 relative w-full h-full min-h-[240px]">
                    {modalTab === "diagram" && selected.flowDiagram ? (
                      <img
                        src={getAssetPath(selected.flowDiagram)}
                        alt={`${selected.title} Flow Diagram`}
                        className="max-w-full max-h-[380px] object-contain p-2"
                      />
                    ) : selected.image ? (
                      <img
                        src={getAssetPath(selected.image)}
                        alt={selected.title}
                        className="max-w-full max-h-[380px] object-contain p-2"
                      />
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${selected.gradient} opacity-95`} />
                    )}
                  </div>
                </div>

                {/* Right/Bottom side: All Details */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between overflow-y-auto bg-zinc-950/95 relative">
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all z-20 cursor-pointer"
                  >
                    <X size={16} />
                  </button>

                  <div className="space-y-6">
                    <div>
                      <span className="px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-[10px] font-mono tracking-widest text-primary uppercase font-bold">
                        {selected.category}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-black text-white mt-3 leading-tight">{selected.title}</h2>
                    </div>

                    <div>
                      <h4 className="text-[11px] font-mono tracking-widest text-primary uppercase font-bold mb-2">Project Overview</h4>
                      <p className="text-sm sm:text-base text-white/80 leading-relaxed">{selected.description}</p>
                    </div>

                    <div>
                      <h4 className="text-[11px] font-mono tracking-widest text-primary uppercase font-bold mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selected.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-white/90"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10 mt-8">
                    {selected.github !== "#" ? (
                      <a
                        href={selected.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-all transform hover:-translate-y-0.5"
                      >
                        <Github size={16} /> View on GitHub
                      </a>
                    ) : (
                      <span className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white/40 cursor-not-allowed">
                        <Github size={16} /> Private Repository
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* See More Button */}
        {filteredProjects.length > displayedProjects.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors cursor-pointer"
            >
              See More Projects ({filteredProjects.length - displayedProjects.length})
            </button>
          </motion.div>
        )}

        {showAll && filteredProjects.length > 5 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button
              onClick={() => setShowAll(false)}
              className="px-6 py-3 rounded-xl border border-white/20 text-white font-bold hover:bg-white/5 transition-colors cursor-pointer"
            >
              Show Less
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
