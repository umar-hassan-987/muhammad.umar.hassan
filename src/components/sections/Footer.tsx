export function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#home" className="text-xl font-bold tracking-tighter text-foreground uppercase">
          UMAR<span className="text-primary">.</span>
        </a>
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
