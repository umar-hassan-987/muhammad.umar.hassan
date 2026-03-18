import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

type Project = {
  id: string;
  title: string;
  category: string;
  github: string;
  description: string;
  tech: string[];
  gradient: string;
  accentColor: string;
};

const projectsList: Project[] = [
  {
    id: "01",
    title: "ProxyIQ",
    category: "Web Application",
    github: "#",
    description: "A comprehensive healthcare supply chain platform designed to manage inventory, track resources, and streamline enterprise operations.",
    tech: ["React", "Python", "AWS"],
    gradient: "from-blue-900 via-indigo-800 to-slate-900",
    accentColor: "bg-blue-500",
  },
  {
    id: "02",
    title: "DeepBlight",
    category: "Mobile App",
    github: "#",
    description: "A specialized native Android application built in Android Studio, focusing on responsive design and seamless user experience.",
    tech: ["Android Studio", "Java", "Kotlin"],
    gradient: "from-purple-900 via-violet-800 to-slate-900",
    accentColor: "bg-purple-500",
  },
  {
    id: "03",
    title: "GroceryMart",
    category: "Web",
    github: "#",
    description: "A modern grocery shopping platform with real-time inventory, user-friendly interface, and seamless checkout process.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    gradient: "from-green-900 via-emerald-800 to-slate-900",
    accentColor: "bg-green-500",
  },
  {
    id: "04",
    title: "ExtraJobs",
    category: "Web",
    github: "#",
    description: "A freelance platform similar to Fiverr, connecting clients with skilled freelancers for various projects and services.",
    tech: ["React", "Express", "PostgreSQL", "Socket.io"],
    gradient: "from-indigo-900 via-blue-800 to-slate-900",
    accentColor: "bg-indigo-500",
  },
  {
    id: "05",
    title: "PtolemyTree Report",
    category: "Software",
    github: "#",
    description: "Digital palm tree report generation tool for environmental monitoring and data analysis.",
    tech: ["Python", "Pandas", "Matplotlib", "Flask"],
    gradient: "from-orange-900 via-amber-800 to-slate-900",
    accentColor: "bg-orange-500",
  },
  {
    id: "06",
    title: "WatchTime Movie Tracker",
    category: "Web",
    github: "https://github.com/Umar1-1assan/watch-time",
    description:
      "A full-stack MERN application that helps users explore, track, and save movies using the TMDB API. Features user authentication, movie search, watchlist management, and a responsive UI.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "TMDB API"],
    gradient: "from-blue-900 via-blue-800 to-slate-900",
    accentColor: "bg-blue-500",
  },
  {
    id: "07",
    title: "Ultimate Tic-Tac-Toe AI",
    category: "AI",
    github: "https://github.com/Umar1-1assan/Ultimate-TTT",
    description:
      "An AI-powered Ultimate Tic-Tac-Toe game using CSP techniques and Minimax with Alpha-Beta pruning. The AI plays optimally and is nearly unbeatable. Built with a Tkinter GUI for interactive play.",
    tech: ["Python", "CSP", "Minimax", "Alpha-Beta Pruning", "Tkinter"],
    gradient: "from-purple-900 via-violet-800 to-slate-900",
    accentColor: "bg-purple-500",
  },
  {
    id: "08",
    title: "IPFS Distributed File Storage",
    category: "Systems",
    github: "https://github.com/Umar1-1assan/IPFS-DSA",
    description:
      "A distributed file storage simulation using SHA1 hashing and B-trees for efficient decentralized storage. Implements core IPFS protocols for secure and redundant data management.",
    tech: ["C++", "SHA1", "B-Trees", "Distributed Systems"],
    gradient: "from-orange-900 via-amber-800 to-slate-900",
    accentColor: "bg-orange-500",
  },
  {
    id: "09",
    title: "Hospital Management System",
    category: "Software",
    github: "https://github.com/Umar1-1assan/Hospital-Management-System",
    description:
      "A desktop-based hospital management system built with JavaFX using design patterns for modularity. Manages patient records, doctor schedules, appointments, and billing.",
    tech: ["JavaFX", "MySQL", "OOP", "Design Patterns"],
    gradient: "from-emerald-900 via-green-800 to-slate-900",
    accentColor: "bg-emerald-500",
  },
  {
    id: "10",
    title: "Next Word Prediction LSTM",
    category: "AI",
    github: "https://github.com/Umar1-1assan/next_word_lstm",
    description:
      "A word-level language model using LSTM neural networks to predict the next word in a sequence. Trained on large text corpora with configurable sequence length and model depth.",
    tech: ["Python", "TensorFlow", "LSTM", "NLP", "Keras"],
    gradient: "from-pink-900 via-rose-800 to-slate-900",
    accentColor: "bg-pink-500",
  },
  {
    id: "11",
    title: "Pacman-OS",
    category: "Systems",
    github: "https://github.com/Umar1-1assan/Pacman-OS",
    description:
      "A Pacman-like operating system simulation built in C++, exploring OS concepts like process scheduling, memory management, and inter-process communication in a game environment.",
    tech: ["C++", "OS Concepts", "Process Scheduling", "Memory Management"],
    gradient: "from-yellow-900 via-amber-800 to-slate-900",
    accentColor: "bg-yellow-500",
  },
  {
    id: "12",
    title: "Pacman-COAL (Assembly)",
    category: "Systems",
    github: "https://github.com/Umar1-1assan/Pacman-COAL",
    description:
      "An Assembly-based Pacman game demonstrating low-level programming concepts close to the metal. Written entirely in x86 Assembly, showcasing direct hardware manipulation and interrupt handling.",
    tech: ["x86 Assembly", "Low-Level", "Hardware Interrupts", "BIOS"],
    gradient: "from-red-900 via-red-800 to-slate-900",
    accentColor: "bg-red-500",
  },
  {
    id: "13",
    title: "MISTs Construction (MPI + OpenMP)",
    category: "Systems",
    github: "https://github.com/MuhammadSarmad091/MISTs-Construction-using-MPICH-and-OpenMP",
    description:
      "Parallel construction of Minimum Spanning Trees using MPICH and OpenMP for high-performance computing. Achieves significant speedup over sequential algorithms through distributed memory and shared memory parallelism.",
    tech: ["C++", "OpenMP", "MPI", "Parallel Computing", "Graph Algorithms"],
    gradient: "from-cyan-900 via-teal-800 to-slate-900",
    accentColor: "bg-cyan-500",
  },
  {
    id: "14",
    title: "JSON to CSV Compiler",
    category: "Systems",
    github: "https://github.com/Umar1-1assan/Json-to-csv",
    description:
      "A compiler that converts JSON files to CSV format using Flex for lexical analysis and Bison for parsing and semantic analysis. Handles nested objects, arrays, and type conversions.",
    tech: ["Flex", "Bison", "C", "Compiler Theory", "Lexer/Parser"],
    gradient: "from-slate-800 via-gray-700 to-slate-900",
    accentColor: "bg-slate-400",
  },
  {
    id: "15",
    title: "Quiz Management System",
    category: "Software",
    github: "https://github.com/Umar1-1assan/QuizManagementSystem",
    description:
      "A system for teachers to create quizzes, manage classes, and auto-grade student submissions. Features role-based access control, real-time quiz sessions, and detailed performance analytics.",
    tech: ["JavaFX", "MySQL", "OOP", "Role-Based Access"],
    gradient: "from-indigo-900 via-blue-800 to-slate-900",
    accentColor: "bg-indigo-500",
  },
  {
    id: "16",
    title: "Space Shooter OOP",
    category: "Software",
    github: "https://github.com/Umar1-1assan/SpaceShooter-OOP",
    description:
      "A Space Shooter game demonstrating Object-Oriented Programming principles in C++. Features inheritance hierarchies for player/enemy classes, collision detection, and smooth SFML rendering.",
    tech: ["C++", "SFML", "OOP", "Game Development"],
    gradient: "from-violet-900 via-purple-800 to-slate-900",
    accentColor: "bg-violet-500",
  },
  {
    id: "17",
    title: "Flex for Gyms",
    category: "Software",
    github: "#",
    description:
      "A complete gym management solution handling memberships, trainer schedules, and billing using C# and SQL Server. Features a Windows Forms UI with real-time reporting and analytics.",
    tech: ["C#", ".NET", "SQL Server", "Windows Forms"],
    gradient: "from-green-900 via-emerald-800 to-slate-900",
    accentColor: "bg-green-500",
  }
];

function ProjectThumbnail({ project, size = "sm" }: { project: Project; size?: "sm" | "lg" }) {
  const cls =
    size === "sm"
      ? "w-14 h-10 rounded-lg shrink-0"
      : "w-full h-full";

  return (
    <div className={`bg-gradient-to-br ${project.gradient} ${cls} flex items-end p-2 relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-30">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-white/10"
            style={{
              width: `${40 + i * 20}%`,
              height: `${40 + i * 20}%`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>
      {size === "sm" && (
        <span className="relative z-10 text-[8px] font-bold text-white/60 uppercase tracking-wider leading-tight">
          {project.category}
        </span>
      )}
      {size === "lg" && (
        <div className="relative z-10 p-6 w-full">
          <div className={`w-3 h-3 rounded-full ${project.accentColor} mb-3`} />
          <div className="text-xs font-bold text-white/50 uppercase tracking-[0.2em]">
            {project.category}
          </div>
          <div className="text-2xl font-black text-white/80 leading-tight mt-1">{project.title}</div>
        </div>
      )}
    </div>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const handleRowClick = (project: Project) => {
    setSelected((prev) => (prev?.id === project.id ? null : project));
  };

  const displayedProjects = showAll ? projectsList : projectsList.slice(0, 6);

  return (
    <section id="projects" className="py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-massive-sm font-black uppercase flex flex-col">
            <span className="text-foreground">FEATURED</span>
            <span className="text-white/20">PROJECTS</span>
          </h2>
          
        </motion.div>

        <div className="w-full h-[1px] bg-white/10 mb-8" />

        <div className="flex gap-8 items-start">
          {/* Project List */}
          <div className="flex-1 flex flex-col min-w-0">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                onClick={() => handleRowClick(project)}
                className={`group flex items-center justify-between py-5 border-b border-white/10 cursor-pointer transition-all duration-200 relative border-l-4 pl-4 -ml-4 ${
                  selected?.id === project.id
                    ? "border-l-primary bg-white/[0.03]"
                    : "border-l-transparent hover:border-l-primary hover:bg-white/[0.02]"
                }`}
              >
                {/* Left: number + thumbnail + title */}
                <div className="flex items-center gap-4 min-w-0 flex-1">
                  <span
                    className={`text-base font-mono shrink-0 transition-colors ${
                      selected?.id === project.id ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                    }`}
                  >
                    {project.id}
                  </span>

                  <ProjectThumbnail project={project} size="sm" />

                  <h3
                    className={`text-lg sm:text-2xl font-bold tracking-tight truncate transition-colors ${
                      selected?.id === project.id ? "text-white" : "text-foreground group-hover:text-white"
                    }`}
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Right: category + actions */}
                <div className="flex items-center gap-4 sm:gap-6 shrink-0 ml-4">
                  <span
                    className={`hidden sm:inline-flex px-3 py-1 rounded-full border text-xs font-medium uppercase tracking-wider transition-colors ${
                      selected?.id === project.id
                        ? "border-primary/50 text-primary"
                        : "border-white/20 text-muted-foreground group-hover:border-primary/50 group-hover:text-primary"
                    }`}
                  >
                    {project.category}
                  </span>

                  <div
                    className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                      selected?.id === project.id
                        ? "bg-primary border-primary text-primary-foreground rotate-0"
                        : "border-white/10 text-muted-foreground group-hover:border-primary -rotate-45 group-hover:rotate-0 group-hover:bg-primary group-hover:text-primary-foreground"
                    }`}
                  >
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detail Panel */}
          <AnimatePresence mode="wait">
            {selected && (
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="hidden lg:flex flex-col w-[380px] xl:w-[440px] shrink-0 sticky top-24 self-start rounded-2xl border border-white/10 overflow-hidden"
              >
                {/* Large Project Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <ProjectThumbnail project={selected} size="lg" />
                </div>

                {/* Details */}
                <div className="p-6 flex flex-col gap-4 bg-white/[0.02]">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">
                        {selected.category}
                      </p>
                      <h3 className="text-xl font-black text-foreground leading-tight">{selected.title}</h3>
                    </div>
                    <button
                      onClick={() => setSelected(null)}
                      className="shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-white/30 transition-colors"
                    >
                      <X size={14} />
                    </button>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{selected.description}</p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {selected.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-2 border-t border-white/10">
                    {selected.github !== "#" ? (
                      <a
                        href={selected.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors"
                      >
                        <Github size={15} /> View on GitHub
                      </a>
                    ) : (
                      <span className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-muted-foreground cursor-not-allowed">
                        <Github size={15} /> Private Repo
                      </span>
                    )}
                    <a
                      href={selected.github !== "#" ? selected.github : undefined}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 text-sm text-muted-foreground hover:text-foreground hover:border-white/30 transition-colors"
                    >
                      <ExternalLink size={15} /> Details
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile detail panel */}
        <AnimatePresence>
          {selected && (
            <motion.div
              key={`mobile-${selected.id}`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-6 rounded-2xl border border-white/10 overflow-hidden"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <ProjectThumbnail project={selected} size="lg" />
              </div>
              <div className="p-5 flex flex-col gap-4 bg-white/[0.02]">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-black text-foreground">{selected.title}</h3>
                  <button
                    onClick={() => setSelected(null)}
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground"
                  >
                    <X size={14} />
                  </button>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{selected.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selected.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                {selected.github !== "#" && (
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-bold w-fit"
                  >
                    <Github size={15} /> View on GitHub
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* See More Button */}
        {projectsList.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors"
            >
              {showAll ? "Show Less" : `See More Projects (${projectsList.length - 6})`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
