import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-28 pb-16 lg:py-0 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 w-full flex flex-col lg:flex-row gap-12 lg:gap-24 items-center justify-center text-center lg:min-h-screen">
        
        {/* Left Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full sm:w-[360px] lg:w-[380px] shrink-0 flex flex-col items-center text-center gap-4 lg:gap-6 p-6 lg:p-10 rounded-2xl lg:rounded-none border border-white/10 lg:border-y-0 bg-card/50 backdrop-blur-sm shadow-xl lg:self-stretch lg:justify-center lg:pt-28 lg:pb-12"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] font-bold tracking-widest uppercase self-center">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(5,150,105,0.8)]" />
            Open to Opportunities
          </div>

          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-card border border-white/10">
            <img 
              src={`${import.meta.env.BASE_URL}images/projects/img/MUH.png`} 
              alt="Muhammad Umar Hassan"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-lg font-bold tracking-tight mb-1 text-white">Muhammad Umar Hassan</h2>
            <p className="text-muted-foreground leading-relaxed text-[11px]">
              Computer Science graduate from FAST NUCES specializing at the intersection of Full Stack Dev & AI Engineering.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 py-4 border-y border-white/10 w-full">
            <div className="flex flex-col items-center">
              <span className="text-foreground text-xl font-black tracking-tight">6+</span>
              <span className="text-muted-foreground text-[8px] uppercase tracking-wider font-semibold leading-tight">Specialized Resumes</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-foreground text-xl font-black tracking-tight">10+</span>
              <span className="text-muted-foreground text-[8px] uppercase tracking-wider font-semibold leading-tight">Production Projects</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-foreground text-xl font-black tracking-tight">3+</span>
              <span className="text-muted-foreground text-[8px] uppercase tracking-wider font-semibold leading-tight">Years Building</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-foreground text-xl font-black tracking-tight">5+</span>
              <span className="text-muted-foreground text-[8px] uppercase tracking-wider font-semibold leading-tight">Companies Worked</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <a href="#projects" className="w-full py-2.5 px-4 bg-primary text-primary-foreground font-bold text-center hover:bg-primary/90 transition-all rounded-xl flex items-center justify-center gap-2 uppercase tracking-wide text-[10px]">
              View My Work <ArrowRight size={12} />
            </a>
            <a href="/resume.html?download" target="_blank" rel="noopener noreferrer" className="w-full py-2.5 px-4 border border-white/20 text-foreground font-bold text-center hover:bg-white/5 hover:border-white transition-all rounded-xl flex items-center justify-center gap-2 uppercase tracking-wide text-[10px]">
              <Download size={12} /> Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right Massive Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex flex-col items-center justify-center text-center w-full max-w-2xl"
        >
          <h1 className="text-massive font-black uppercase flex flex-col leading-none text-center items-center">
            <span className="text-foreground">FULL-STACK</span>
            <span className="text-primary">AI ENGINEER</span>
          </h1>
          
          <div className="mt-6 text-lg md:text-xl text-muted-foreground leading-normal font-medium text-center">
            I build <span className="text-foreground font-bold">intelligent systems</span> — from pixel to pipeline.
          </div>

          <div className="mt-3 text-sm md:text-base text-muted-foreground/80 leading-relaxed text-center">
            Full Stack Developer × AI/ML Engineer × Cloud Architect. I ship production-grade AI-powered web platforms end-to-end.
          </div>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <div className="px-4 py-2 bg-white/5 border border-white/10 text-foreground font-bold tracking-tight rounded-full uppercase text-[10px] sm:text-xs hover:border-primary/30 transition-all cursor-default">
              React, Next.js, TypeScript
            </div>
            <div className="px-4 py-2 bg-primary/10 border border-primary/20 text-primary font-bold tracking-tight rounded-full uppercase text-[10px] sm:text-xs hover:bg-primary/20 transition-all cursor-default">
              LLMs, Agents, RAG Pipelines
            </div>
            <div className="px-4 py-2 bg-white/5 border border-white/10 text-foreground font-bold tracking-tight rounded-full uppercase text-[10px] sm:text-xs hover:border-primary/30 transition-all cursor-default">
              AWS Serverless, Docker, MLOps
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
