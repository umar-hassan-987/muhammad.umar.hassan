import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-white/10 py-5">
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a href="#home" className="text-xl font-bold tracking-tighter text-foreground uppercase hover:opacity-85 transition-opacity">
            UMAR<span className="text-primary">.</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#experience" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Experience</a>
            <a href="#skills" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>

        {/* Desktop Social Links */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="https://github.com/Umar1-1assan" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title="GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/umar-hassan-3763a8247" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="mailto:muhammadumarhassan987@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" title="Email">
            <Mail size={18} />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-muted-foreground hover:text-white transition-colors cursor-pointer z-50 p-2 rounded-xl bg-white/5 border border-white/10"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-x-0 top-0 h-screen bg-zinc-950/98 backdrop-blur-xl z-40 flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            <nav className="flex flex-col items-center gap-6 justify-center flex-1">
              <a href="#about" onClick={() => setIsOpen(false)} className="text-xl font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#experience" onClick={() => setIsOpen(false)} className="text-xl font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Experience</a>
              <a href="#skills" onClick={() => setIsOpen(false)} className="text-xl font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Skills</a>
              <a href="#projects" onClick={() => setIsOpen(false)} className="text-xl font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-xl font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </nav>
            
            <div className="flex flex-col items-center gap-4 pb-8">
              <div className="w-12 h-[1px] bg-white/10" />
              <div className="flex items-center gap-6">
                <a href="https://github.com/Umar1-1assan" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title="GitHub">
                  <Github size={22} />
                </a>
                <a href="https://www.linkedin.com/in/umar-hassan-3763a8247" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title="LinkedIn">
                  <Linkedin size={22} />
                </a>
                <a href="mailto:muhammadumarhassan987@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" title="Email">
                  <Mail size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
