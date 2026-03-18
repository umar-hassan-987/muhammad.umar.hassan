import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-massive-sm font-black uppercase flex flex-col">
            <span className="text-foreground">ABOUT</span>
          </h2>
        </motion.div>

        <div className="w-full h-[1px] bg-white/10 mb-16" />

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-8 text-xl md:text-3xl text-muted-foreground font-medium leading-normal tracking-tight"
          >
            <p>
              I am <span className="text-foreground">Muhammad Umar Hassan</span>, a passionate Computer Science student at FAST NUCES (Class of 2026).
            </p>
            <p>
              My journey spans from low-level systems programming with compilers and parallel computing to modern full-stack web applications.
            </p>
            <p>
              Currently expanding into cloud with AWS Amplify, Supabase, mobile with Android Studio, and Agentic AI systems.
            </p>
          </motion.div>

          <div className="lg:col-span-4 flex flex-col gap-0 border-t border-l border-r border-white/10">
            <div className="p-8 border-b border-white/10">
              <div className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Location</div>
              <div className="text-2xl font-bold text-foreground">Islamabad, Pakistan</div>
            </div>
            <div className="p-8 border-b border-white/10">
              <div className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Education</div>
              <div className="text-2xl font-bold text-foreground">FAST NUCES '26</div>
            </div>
            <div className="p-8 border-b border-white/10">
              <div className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Focus</div>
              <div className="text-2xl font-bold text-foreground">AI & Systems</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
