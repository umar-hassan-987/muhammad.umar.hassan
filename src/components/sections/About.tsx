import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, GraduationCap, MapPin, Sparkles, Compass, Target } from "lucide-react";

export function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-20 lg:py-24 bg-zinc-950/20">
      <div className="max-w-[1400px] mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-massive-sm font-black uppercase flex flex-col">
            <span className="text-foreground">ABOUT</span>
            <span className="text-white/20">MY MISSION</span>
          </h2>
        </motion.div>

        <div className="w-full h-[1px] bg-white/10 mb-16" />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Bio */}
          <div className="lg:col-span-7 space-y-8">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight uppercase"
            >
              Engineer by degree. <span className="text-primary">Builder by obsession.</span>
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed space-y-6"
            >
              <p>
                I'm a Computer Science graduate from <span className="text-foreground">FAST NUCES, Islamabad</span>, specializing at the intersection of Full Stack Development and Artificial Intelligence. I don't just build features — I architect complete systems: from React frontends and Node.js backends to LLM-powered pipelines, RAG architectures, and cloud-native infrastructure on AWS.
              </p>
            </motion.div>

            {/* Expandable Bio */}
            <div className="pt-2">
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="text-sm md:text-base text-muted-foreground/80 leading-relaxed space-y-4 pb-6 border-l-2 border-primary/20 pl-4 font-normal">
                      <p>
                        My journey started with systems-level programming in C and Assembly, evolved through full-stack MERN development, and has now landed deep in the world of AI engineering — building autonomous agents, multi-agent orchestration systems, and production-grade LLM workflows.
                      </p>
                      <p>
                        I've shipped healthcare SaaS platforms with HIPAA & SOC 2 compliance, AI-integrated freelance marketplaces, MLOps pipelines running on Kubernetes, and real-time voice AI agents — all from the ground up.
                      </p>
                      <p>
                        I've worked across startups, enterprise SAP environments, and remote product teams. Currently I'm a Software Engineer at Ozone Sync Limited, where I architect AI-driven systems and lead technical delivery on client-facing products.
                      </p>
                      <p>
                        When I'm not building, I'm exploring the cutting edge of agentic AI, multi-agent systems, and what it means for software to truly think.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="group inline-flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-primary/50 bg-white/[0.02] hover:bg-primary/5 text-foreground hover:text-primary transition-all duration-300 font-bold uppercase tracking-wider text-xs rounded-xl cursor-pointer"
              >
                {isExpanded ? (
                  <>
                    Show Less <ChevronUp size={14} />
                  </>
                ) : (
                  <>
                    Read Full Journey <ChevronDown size={14} />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Side: Bento Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Bento */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-white/10 bg-card/40 hover:border-primary/30 transition-all duration-350 flex gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                <GraduationCap size={20} />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-widest text-primary uppercase font-bold">Education</span>
                <h4 className="text-lg font-black text-white">BS in Computer Science</h4>
                <p className="text-sm font-semibold text-white/80">FAST NUCES, Islamabad</p>
                <div className="flex gap-2 items-center text-xs text-muted-foreground mt-2">
                  <MapPin size={12} className="text-primary" /> Islamabad, PK
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span>Graduate (2026)</span>
                </div>
              </div>
            </motion.div>

            {/* Currently Bento */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl border border-white/10 bg-card/40 hover:border-primary/30 transition-all duration-350 flex gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                <Sparkles size={20} />
              </div>
              <div className="space-y-3 flex-1">
                <span className="text-[10px] font-mono tracking-widest text-primary uppercase font-bold">Current Focus</span>
                <h4 className="text-lg font-black text-white">Actively Pursuing</h4>
                
                <ul className="space-y-3 text-xs md:text-sm text-muted-foreground">
                  <li className="flex gap-2.5 items-start">
                    <Compass size={14} className="text-primary shrink-0 mt-0.5" />
                    <span>Building AI voice agents and multi-agent LLM pipelines.</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <Target size={14} className="text-primary shrink-0 mt-0.5" />
                    <span>Exploring agentic AI frameworks and autonomous workflow orchestration.</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <Sparkles size={14} className="text-primary shrink-0 mt-0.5" />
                    <span>Open to Full Stack AI Engineer, AI/ML Engineer, and Software Engineer roles.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
