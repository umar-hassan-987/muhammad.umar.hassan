import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const terminalLogs = [
  { text: "> SYSTEM_INIT: PULLING DOCKER_IMAGE_AI_CORE", trigger: 10 },
  { text: "> NEURAL_NET: SYNAPSING LAYERS [8, 16, 32, 16, 8]", trigger: 35 },
  { text: "> DATA_FLOW: INGESTING PIPELINE FROM CLOUD_SOURCE", trigger: 60 },
  { text: "> SECURITY_PROTOCOL: HANDSHAKE", trigger: 80 },
  { text: "> SYSTEM_BOOT: LOADING PORTFOLIO INTERFACE", trigger: 95 }
];

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [activeLogs, setActiveLogs] = useState<string[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // 1. Matrix Code Rain Animation Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    // Set canvas sizes
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Matrix characters pool (combining letters, binary, hex, and math symbols)
    const alphabet = "010101ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz<>[]{}/\\+=&*-%$#@!^";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);

    // Array of drops - one per column, starting at random Y heights
    const rainDrops = Array(columns)
      .fill(1)
      .map(() => Math.floor(Math.random() * -100));

    const draw = () => {
      // Semi-transparent black block to generate fading trail
      ctx.fillStyle = "rgba(4, 4, 4, 0.12)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < rainDrops.length; i++) {
        // Pick a random char
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        
        // Randomize the color alpha dynamically for depth
        const x = i * fontSize;
        const y = rainDrops[i] * fontSize;

        // Head of the drop is bright green/white, body is darker green (matching portfolio primary color HSL 150 71% 42% / RGB 16 185 129)
        const isHead = Math.random() > 0.98;
        ctx.fillStyle = isHead ? "#d1fae5" : "rgba(16, 185, 129, 0.28)"; 

        ctx.fillText(text, x, y);

        // Reset drop back to top once it hits bottom or randomly to add variance
        if (y > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    const updateLoop = () => {
      draw();
      animationFrameId = requestAnimationFrame(updateLoop);
    };
    updateLoop();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // 2. Simulated Loading Progress Core Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const remaining = 100 - prev;
        const increment = Math.max(1, Math.min(12, Math.floor(Math.random() * remaining * 0.15) + 1));
        return prev + increment;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  // Trigger onComplete once loading ends
  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  // Update console logs based on loading milestones
  useEffect(() => {
    const currentLogs = terminalLogs
      .filter((log) => progress >= log.trigger)
      .map((log) => log.text);
    setActiveLogs(currentLogs);
  }, [progress]);

  // Compute segmented progress bar blocks (5 segments total)
  const totalBlocks = 5;
  const activeBlocksCount = Math.floor(progress / (100 / totalBlocks));

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-50 bg-[#040404] flex flex-col items-center justify-center select-none overflow-hidden"
    >
      {/* HTML5 Matrix Code Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block pointer-events-none" />

      {/* Subtle overlay vignette for retro terminal look */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#040404]/30 to-[#040404] pointer-events-none" />

      {styleElement}

      {/* TOP-LEFT SYSTEM WIDGET */}
      <div className="absolute top-6 left-6 flex items-center gap-3">
        {/* Glowing mini system icon */}
        <div className="w-9 h-9 rounded bg-[#03140f] border border-primary/30 flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.15)]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#10b981" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M7 8h10M7 12h10M7 16h6" strokeLinecap="round" />
          </svg>
        </div>
        <div className="flex flex-col font-mono">
          <span className="text-[11px] font-black text-primary tracking-widest leading-none">UMAR_OS_V4.0.2</span>
          <span className="text-[8px] text-emerald-600/70 tracking-widest mt-1 leading-none">INIT_TIME: 2703833588_1A</span>
        </div>
      </div>

      {/* CENTRAL DIALOG TERMINAL BOX */}
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-[90%] max-w-[460px] bg-[#060608]/92 backdrop-blur-md border border-primary/20 rounded-lg p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8),_0_0_30px_rgba(16,185,129,0.08)] relative z-10"
      >
        {/* Terminal Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col">
            <h2 className="font-mono text-sm font-black text-primary tracking-widest">FULL-STACK_AI_CORE</h2>
            <span className="font-mono text-[9px] text-emerald-600/80 tracking-widest mt-0.5">ID: ((SYSTEM_ARCH_NULL))</span>
          </div>
          {/* Header Controls */}
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-primary/80 shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-primary/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-primary/20" />
          </div>
        </div>

        {/* Segmented Progress Blocks */}
        <div className="flex gap-2.5 mb-6">
          {Array(totalBlocks)
            .fill(0)
            .map((_, index) => {
              const isActive = index < activeBlocksCount;
              return (
                <div
                  key={index}
                  className={`flex-1 h-2.5 rounded transition-all duration-300 ${
                    isActive
                      ? "bg-primary border border-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]"
                      : "bg-[#041410] border border-emerald-900/30"
                  }`}
                />
              );
            })}
        </div>

        {/* Live Terminal Output Logs */}
        <div className="bg-[#030304]/80 border border-emerald-950/60 rounded p-4 h-[155px] font-mono text-[10.5px] leading-relaxed overflow-hidden text-primary/90 flex flex-col justify-start gap-2.5 shadow-inner">
          {activeLogs.map((log, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="tracking-wider break-all flex"
            >
              <span className="mr-1">{log}</span>
            </motion.div>
          ))}
          {/* Active indicator cursor */}
          {progress < 100 && (
            <div className="flex items-center gap-1">
              <span className="text-[10px] text-emerald-600/60 tracking-wider font-bold animate-pulse">&gt; SYS_RUNNING...</span>
              <span className="w-1.5 h-3.5 bg-primary/80 animate-blink leading-none ml-1" />
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

// Global CSS styles helper for cursor blink and overlay animations
const styleElement = (
  <style>{`
    @keyframes blinkCursor {
      0%, 100% { opacity: 0; }
      50% { opacity: 1; }
    }
    .animate-blink {
      animation: blinkCursor 0.8s infinite;
    }
    
    /* Radial Background Vignette */
    .bg-radial-gradient {
      background: radial-gradient(circle at center, transparent 40%, rgba(4, 4, 4, 0.85) 90%);
    }
  `}</style>
);
