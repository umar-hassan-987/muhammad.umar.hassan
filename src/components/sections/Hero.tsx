import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 w-full flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-start justify-between">
        
        {/* Left Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[300px] shrink-0 flex flex-col gap-8 mt-4 lg:mt-8"
        >
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-none overflow-hidden bg-card border border-white/10">
            <img 
              src={`${import.meta.env.BASE_URL}images/avatar-placeholder.png`} 
              alt="Muhammad Umar Hassan"
              className="w-full h-full object-cover grayscale opacity-90"
            />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-3">Muhammad Umar Hassan</h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              I craft high-performance systems and dynamic web applications. Bridging the gap between complex algorithms and seamless user experiences.
            </p>
          </div>

          <div className="flex items-center justify-between py-5 border-y border-white/10 text-sm font-medium">
            <div className="flex flex-col">
              <span className="text-foreground text-lg font-bold">15+</span>
              <span className="text-muted-foreground text-xs uppercase tracking-wider">Projects</span>
            </div>
            <div className="w-[1px] h-10 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-foreground text-lg font-bold">8+</span>
              <span className="text-muted-foreground text-xs uppercase tracking-wider">Languages</span>
            </div>
            <div className="w-[1px] h-10 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-foreground text-lg font-bold">CS</span>
              <span className="text-muted-foreground text-xs uppercase tracking-wider">Student</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
            <a href="#projects" className="w-full py-3 px-4 bg-primary text-primary-foreground font-bold text-center hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 uppercase tracking-wide text-sm">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="#" className="w-full py-3 px-4 border border-white/20 text-foreground font-bold text-center hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2 uppercase tracking-wide text-sm">
              <Download size={16} /> Download CV
            </a>
          </div>
        </motion.div>

        {/* Right Massive Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex flex-col justify-center w-full"
        >
          <h1 className="text-massive font-black uppercase flex flex-col">
            <span className="text-foreground">FULL-STACK</span>
            <span className="text-white/20">DEVELOPER</span>
          </h1>
          
          <div className="mt-8 max-w-lg text-lg text-muted-foreground leading-relaxed">
            I am a passionate Computer Science student at FAST NUCES (Class of 2026). My journey spans from low-level systems programming to modern full-stack web applications.
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <div className="px-6 py-3 bg-primary text-primary-foreground font-bold tracking-tight rounded-full uppercase text-xs sm:text-sm hover:opacity-90 transition-opacity cursor-default">
              React, Node.js, Python
            </div>
            <div className="px-6 py-3 bg-white/10 text-foreground font-bold tracking-tight rounded-full uppercase text-xs sm:text-sm hover:bg-white/20 transition-colors cursor-default">
              AI, Systems, Compilers
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
