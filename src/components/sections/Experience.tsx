import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Layers } from "lucide-react";

type Role = {
  title: string;
  duration: string;
  type: string;
  highlights: string[];
};

type ExperienceItem = {
  company: string;
  location: string;
  logoText: string;
  logoImg?: string;
  roles: Role[];
  focus?: string;
};

const experiences: ExperienceItem[] = [
  {
    company: "Ozone Sync Limited",
    location: "Islamabad, Pakistan",
    logoText: "OS",
    logoImg: "/images/projects/img/ozone.jfif",
    focus: "Full Stack AI Engineering · Cloud Architecture · LLM Systems",
    roles: [
      {
        title: "Software Engineer",
        duration: "April 2026 – Present",
        type: "Full-time",
        highlights: [
          "Architecting AI automation pipelines and intelligent agent systems as a technical leader.",
          "Delivering LLM workflow integrations, multi-agent AI systems, and cloud infrastructure for client products.",
          "Leading full-stack architecture decisions and end-to-end software delivery lifecycle."
        ]
      }
    ]
  },
  {
    company: "SoftBuilds",
    location: "Islamabad, Pakistan",
    logoText: "SB",
    logoImg: "/images/projects/img/softbuilds.webp",
    roles: [
      {
        title: "Associate Software Engineer",
        duration: "February 2026 – April 2026",
        type: "Full-time",
        highlights: [
          "Built scalable backend services and automated compliance pipelines for production enterprise systems.",
          "Implemented automated monitoring, diagnostics, and resolution workflows."
        ]
      },
      {
        title: "Software Engineer Intern",
        duration: "November 2025 – January 2026",
        type: "Internship",
        highlights: [
          "Built core front-end features using React.js and REST API integrations.",
          "Contributed to CI/CD-integrated deployment workflows."
        ]
      }
    ]
  },
  {
    company: "Red Flag Consulting Group (SAP Partner)",
    location: "Islamabad, Pakistan",
    logoText: "RF",
    logoImg: "/images/projects/img/red_flag.jfif",
    roles: [
      {
        title: "SAP Developer Intern",
        duration: "June 2025 – August 2025",
        type: "Internship",
        highlights: [
          "Developed ABAP programs and built SAP Fiori/SAPUI5 interfaces.",
          "Automated SAP application workflows within enterprise delivery pipelines."
        ]
      }
    ]
  },
  {
    company: "NovaTechX",
    location: "Remote",
    logoText: "NT",
    logoImg: "/images/projects/img/novatechx_log.jfif",
    roles: [
      {
        title: "Software Design Intern",
        duration: "June 2025 – August 2025",
        type: "Internship",
        highlights: [
          "Designed robotic surgical system architecture using SysML and Cameo Systems Modeler.",
          "Produced comprehensive RFP and requirements documentation for hospital automation systems."
        ]
      }
    ]
  }
];

export function Experience() {
  const getAssetPath = (path: string | undefined) => {
    if (!path) return "";
    const base = import.meta.env.BASE_URL || "/";
    const cleanBase = base.endsWith("/") ? base : `${base}/`;
    const cleanPath = path.startsWith("/") ? path.slice(1) : path;
    return `${cleanBase}${cleanPath}`;
  };

  return (
    <section id="experience" className="min-h-screen flex flex-col justify-center py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-massive-sm font-black uppercase flex flex-col">
            <span className="text-foreground">PROFESSIONAL</span>
            <span className="text-white/20">TIMELINE</span>
          </h2>
        </motion.div>

        <div className="w-full h-[1px] bg-white/10 mb-12" />

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto pl-4 sm:pl-10 w-full">
          
          {/* Vertical Line */}
          <div className="absolute left-0 sm:left-6 top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary via-white/10 to-transparent" />

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, expIdx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: expIdx * 0.1 }}
                className="relative group"
              >
                {/* Timeline Circle Node */}
                <div className="absolute -left-[27px] top-[36px] md:top-[44px] w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-125 z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                </div>

                {/* Company Content Wrapper */}
                <div className="p-6 md:p-8 rounded-2xl border border-white/10 bg-card/45 hover:border-primary/30 hover:bg-card/70 transition-all duration-300 shadow-lg">
                  
                  {/* Company Header Info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      {/* Logo Container */}
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center font-black text-primary text-sm tracking-widest uppercase shrink-0 overflow-hidden bg-white/5">
                        {exp.logoImg ? (
                          <img
                            src={getAssetPath(exp.logoImg)}
                            alt={`${exp.company} Logo`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          exp.logoText
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-white tracking-tight">{exp.company}</h3>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-0.5">
                          <MapPin size={12} className="text-primary" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {exp.focus && (
                    <div className="mb-6 px-4 py-2.5 rounded-xl bg-primary/5 border border-primary/15 text-xs font-mono font-medium text-primary flex items-center gap-2">
                      <Layers size={14} />
                      <span>Focus: {exp.focus}</span>
                    </div>
                  )}

                  {/* Nested Roles list (handles multiple jobs at the same company) */}
                  <div className="space-y-8 relative pl-4 border-l border-white/5">
                    {exp.roles.map((role, roleIdx) => (
                      <div key={roleIdx} className="space-y-3 relative">
                        {/* Dot indicator inside the company */}
                        <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-white/20 border border-white/10" />

                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5">
                          <h4 className="text-base font-extrabold text-white group-hover:text-primary transition-colors">
                            {role.title}
                          </h4>
                          <span className="text-xs font-mono font-semibold text-muted-foreground flex items-center gap-1.5">
                            <Calendar size={12} className="text-primary" />
                            {role.duration}
                          </span>
                        </div>

                        <ul className="list-disc pl-4 space-y-2 text-xs md:text-sm text-muted-foreground leading-relaxed">
                          {role.highlights.map((bullet, bulletIdx) => (
                            <li key={bulletIdx} className="hover:text-white transition-colors duration-200">
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
