import { Github, Linkedin, Mail } from "lucide-react";

export function Navbar() {
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

        <nav className="flex items-center gap-6">
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
      </div>
    </header>
  );
}
