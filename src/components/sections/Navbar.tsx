import { Github, Linkedin, Mail } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10 py-5">
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-tighter text-foreground uppercase">
          UMAR<span className="text-primary">.</span>
        </a>

        <nav className="flex items-center gap-6">
          <a href="https://github.com/Umar1-1assan" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/umar-hassan-3763a8247" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:muhammadumarhassan476@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={20} />
          </a>
        </nav>
      </div>
    </header>
  );
}
