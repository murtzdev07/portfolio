import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MatrixEasterEgg() {
  const [isActive, setIsActive] = useState(false);
  const [sequenceStep, setSequenceStep] = useState(0);
  const secretCode = "murtaza";

  // 1. Listen for the secret keystrokes
  useEffect(() => {
    let inputStr = "";
    
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      inputStr += e.key.toLowerCase();
      
      if (inputStr.length > secretCode.length) {
        inputStr = inputStr.slice(-secretCode.length);
      }
      
      if (inputStr === secretCode) {
        setIsActive(true);
        setSequenceStep(0);
        inputStr = "";
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // 2. Handle the cinematic tech sequence timing
  useEffect(() => {
    if (!isActive) return;

    const timers = [
      setTimeout(() => setSequenceStep(1), 1000), // Step 1
      setTimeout(() => setSequenceStep(2), 2200), // Step 2
      setTimeout(() => setSequenceStep(3), 3500), // Step 3
      setTimeout(() => setSequenceStep(4), 5000), // Final Reveal
      setTimeout(() => setIsActive(false), 7500)  // The "Dive" Exit
    ];

    return () => timers.forEach(clearTimeout);
  }, [isActive]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          /* THE "DIVE" EXIT ANIMATION: Zooms through the screen and fades into the website */
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 2, 
            filter: "blur(20px)",
            transition: { duration: 0.8, ease: "easeInOut" } 
          }}
          className="fixed inset-0 z-[9999999] pointer-events-none flex items-center justify-center bg-zinc-950 overflow-hidden"
        >
          {/* Authentic Matrix Rain GIF Overlay - Dimmed for better text contrast */}
          <div 
            className="absolute inset-0 bg-[url('https://c.tenor.com/jM3B8qH0fHgAAAAC/matrix-code.gif')] bg-cover bg-center opacity-10 mix-blend-screen" 
          />
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 5, opacity: 0 }} /* The terminal itself scales massively toward the user */
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="relative z-10 flex flex-col items-center w-full max-w-2xl px-6"
          >
            {/* Terminal Window */}
            <div className="w-full rounded-2xl border border-emerald-500/30 bg-black/90 px-8 py-8 shadow-[0_0_50px_rgba(16,185,129,0.15)] backdrop-blur-xl text-left overflow-hidden relative">
              
              {/* Subtle CRT Scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none"></div>

              {/* Mac-style Window Controls */}
              <div className="flex gap-2 mb-6 relative z-10">
                <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
              </div>

              {/* Dynamic Boot Sequence */}
              <div className="font-mono text-sm md:text-base text-emerald-500 space-y-3 min-h-[140px] relative z-10">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <span className="text-zinc-500">murtaza@portfolio:~$</span> sudo mount --reality
                </motion.div>

                {sequenceStep >= 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    &gt; Injecting root-level access... <span className="text-emerald-300">[OK]</span>
                  </motion.div>
                )}

                {sequenceStep >= 2 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    &gt; Bypassing hydration mismatch... <span className="text-emerald-300">[OK]</span>
                  </motion.div>
                )}

                {sequenceStep >= 3 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    &gt; Compiling UI assets... <span className="text-emerald-300">100%</span>
                  </motion.div>
                )}

                {sequenceStep >= 4 && (
                  <motion.div 
                    initial={{ opacity: 0, filter: "blur(10px)" }} 
                    animate={{ opacity: 1, filter: "blur(0px)" }} 
                    className="pt-6 pb-2 text-center"
                  >
                    <h2 className="text-xl md:text-3xl font-black text-white tracking-widest animate-pulse drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                      [ INITIATING UI HOT-RELOAD ]
                    </h2>
                  </motion.div>
                )}

                {/* Blinking Cursor */}
                {sequenceStep < 4 && (
                  <motion.div 
                    animate={{ opacity: [1, 0] }} 
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2.5 h-4 bg-emerald-500 ml-1 translate-y-1"
                  />
                )}
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}