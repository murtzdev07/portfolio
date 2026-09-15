import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { MapPin, GraduationCap, Briefcase, Code2, Sparkles, Terminal, Layers } from 'lucide-react';

// ----------------------------------------------------------------------
// NEW: CYBERPUNK TEXT DECRYPTION COMPONENT
// Rapidly scrambles and unscrambles text when it scrolls into view
// ----------------------------------------------------------------------
const DecryptedText = ({ text }) => {
  // Initialize with block characters to look like encrypted terminal data
  const [displayText, setDisplayText] = useState(() => text.replace(/[a-zA-Z0-9]/g, '█'));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:<>?";

  useEffect(() => {
    if (!isInView) return;
    
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) return char;
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) clearInterval(interval);
      
      // Math to ensure long paragraphs decrypt quickly while short titles decrypt char-by-char
      iteration += Math.max(1, text.length / 30);
    }, 30);

    return () => clearInterval(interval);
  }, [isInView, text]);

  return <span ref={ref}>{displayText}</span>;
};

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false); // NEW: 3D Flip State

  // HAPTIC FEEDBACK TRIGGER FOR MOBILE
  const triggerHaptic = () => {
    if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(30);
    }
  };

  return (
    <section id="about" className="relative z-10 bg-transparent px-4 sm:px-6 py-20 md:py-24 text-white">
      
      {/* SEO META INJECTION FOR THE ABOUT SECTION */}
      <Helmet>
        <title>About Murtaza Dawoodjeewala | Best Web Developer in Ratlam & MP</title>
        <meta name="description" content="Discover Murtaza Dawoodjeewala's technical background, education from Medi-Caps University, and leadership as Webblers CEO and premier React Developer in Ratlam, MP." />
        <meta name="keywords" content="Best Web Developer in MP, Best Developer in Ratlam, Frontend Developer in Ratlam, React Developer in Ratlam, Website Builder in Ratlam, Webblers CEO, Murtaza Dawoodjeewala" />
      </Helmet>

      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-10 md:mb-20 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-3 mb-3 md:mb-4">
            <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-emerald-400" />
            <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-zinc-400">Behind the Code</span>
          </div>
          
          {/* SEO Optimized Secondary Heading (H2) containing local search entities */}
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
            Driven by <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent italic">Logic & Design</span>
          </h2>
          <p className="sr-only">
            Murtaza Dawoodjeewala is recognized as the best web developer in MP, top React developer in Ratlam, and technical leader across Madhya Pradesh.
          </p>
        </motion.div>

        {/* Asymmetric Bento Grid - gap-4 on mobile, gap-6 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* ------------------------------------------------------------- */}
          {/* UPGRADED: Main Bio Card with 3D UI/JSON Flip Physics          */}
          {/* ------------------------------------------------------------- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
            style={{ perspective: 1000 }} // Enables 3D perspective
            className="md:col-span-2 group relative z-20"
          >
            {/* The absolute toggle sits ON TOP of the 3D rotating card */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6 z-50 flex items-center gap-1 rounded-full border border-zinc-800/80 bg-zinc-950/80 p-1 backdrop-blur-md shadow-xl">
               <button 
                  onClick={() => { setIsFlipped(false); triggerHaptic(); }}
                  className={`rounded-full px-2.5 md:px-3 py-1 text-[9px] md:text-[10px] font-bold uppercase tracking-widest transition-all ${!isFlipped ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
               >
                  UI
               </button>
               <button 
                  onClick={() => { setIsFlipped(true); triggerHaptic(); }}
                  className={`rounded-full px-2.5 md:px-3 py-1 text-[9px] md:text-[10px] font-bold uppercase tracking-widest transition-all ${isFlipped ? 'bg-emerald-500/20 text-emerald-400' : 'text-zinc-500 hover:text-zinc-300'}`}
               >
                  System Data
               </button>
            </div>

            {/* Inner Rotating Container */}
            <motion.div
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative w-full h-full rounded-3xl md:rounded-[2rem]"
            >
              
              {/* FRONT FACE (The Original UI) */}
              <div 
                style={{ backfaceVisibility: "hidden" }}
                className="relative w-full h-full overflow-hidden rounded-3xl md:rounded-[2rem] border border-zinc-800/50 bg-zinc-900/40 p-6 md:p-10 backdrop-blur-md transition-colors hover:border-emerald-500/30 hover:bg-zinc-800/40"
              >
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/5 blur-[80px] transition-all group-hover:bg-emerald-500/10"></div>
                
                <div className="relative z-10">
                  <Code2 className="h-6 w-6 md:h-8 md:w-8 text-emerald-400 mb-4 md:mb-6" />
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white pr-24">Tech Enthusiast & Builder</h3>
                  
                  <p className="text-[13px] md:text-base leading-relaxed text-zinc-400 mb-2 md:mb-4">
                    I am a passionate tech enthusiast, graphic designer, and leading <strong className="text-white">React Developer in Ratlam</strong>. My expertise lies in bridging the gap between highly complex backend systems and beautifully fluid user interfaces for clients throughout Madhya Pradesh and beyond. 
                  </p>
                  
                  <p className={`text-[13px] md:text-base leading-relaxed text-zinc-400 transition-all ${isExpanded ? 'block' : 'hidden md:block'}`}>
                    Whether I am architecting scalable React frontends, integrating headless Shopify APIs, or configuring serverless databases as a trusted <strong className="text-white">website builder in Ratlam</strong>, my philosophy remains the same: write clean code and build unforgettable digital experiences.
                  </p>
                  
                  <button 
                    onClick={() => { setIsExpanded(!isExpanded); triggerHaptic(); }} 
                    className="md:hidden mt-3 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-400 active:scale-95 transition-transform"
                  >
                    {isExpanded ? 'Show Less' : 'Read Full Bio'}
                  </button>
                </div>
              </div>

              {/* BACK FACE (Syntax Highlighted JSON) */}
              <div 
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                className="absolute inset-0 w-full h-full overflow-hidden rounded-3xl md:rounded-[2rem] border border-zinc-800/50 bg-[#09090b] p-6 md:p-10 backdrop-blur-md flex flex-col justify-center shadow-inner"
              >
                <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-cyan-500/5 blur-[80px]"></div>
                
                <div className="relative z-10 font-mono text-[11px] md:text-[13px] leading-relaxed md:leading-loose text-zinc-300 pt-8 md:pt-0">
                  <span className="text-zinc-500">{"{"}</span><br/>
                  &nbsp;&nbsp;<span className="text-emerald-400">"identity"</span><span className="text-zinc-500">: {"{"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">"name"</span><span className="text-zinc-500">: </span><span className="text-cyan-400">"Murtaza Dawoodjeewala"</span><span className="text-zinc-500">,</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">"roles"</span><span className="text-zinc-500">: [</span><span className="text-cyan-400">"React Developer"</span><span className="text-zinc-500">, </span><span className="text-cyan-400">"Graphic Designer"</span><span className="text-zinc-500">],</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">"location"</span><span className="text-zinc-500">: </span><span className="text-cyan-400">"Ratlam, MP"</span><br/>
                  &nbsp;&nbsp;<span className="text-zinc-500">{"},"}</span><br/>
                  &nbsp;&nbsp;<span className="text-emerald-400">"philosophy"</span><span className="text-zinc-500">: </span><span className="text-cyan-400">"Write clean code and build unforgettable experiences."</span><span className="text-zinc-500">,</span><br/>
                  &nbsp;&nbsp;<span className="text-emerald-400">"expertise"</span><span className="text-zinc-500">: [</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">"Scalable React Frontends"</span><span className="text-zinc-500">,</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">"Headless Shopify APIs"</span><span className="text-zinc-500">,</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">"Serverless Databases"</span><br/>
                  &nbsp;&nbsp;<span className="text-zinc-500">]</span><br/>
                  <span className="text-zinc-500">{"}"}</span>
                </div>
              </div>

            </motion.div>
          </motion.div>

          {/* Location / Radar Card - Becomes a horizontal pill on mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="group relative flex flex-row md:flex-col items-center justify-start md:justify-center overflow-hidden rounded-3xl md:rounded-[2rem] border border-zinc-800/50 bg-zinc-900/40 p-5 md:p-8 backdrop-blur-md transition-colors hover:border-cyan-500/30 hover:bg-zinc-800/40"
          >
            {/* Animated Radar Rings - Pushed to the right on mobile, centered on desktop */}
            <div className="absolute -right-16 md:inset-0 flex items-center justify-end md:justify-center opacity-30 md:opacity-100 pointer-events-none">
              <div className="absolute h-24 w-24 md:h-32 md:w-32 animate-ping rounded-full border border-cyan-500/20 bg-cyan-500/5 opacity-50" style={{ animationDuration: '3s' }}></div>
              <div className="absolute h-32 w-32 md:h-48 md:w-48 rounded-full border border-cyan-500/10 bg-transparent"></div>
              <div className="absolute h-48 w-48 md:h-64 md:w-64 rounded-full border border-zinc-800/50 bg-transparent"></div>
            </div>

            <div className="relative z-10 flex flex-row md:flex-col items-center text-left md:text-center gap-4 md:gap-0 w-full">
              <div className="flex h-12 w-12 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-full bg-zinc-950 border border-zinc-800 shadow-inner md:mb-4 relative">
                <MapPin className="h-5 w-5 md:h-6 md:w-6 text-cyan-400" />
                {/* Active Ping Dot */}
                <span className="absolute top-0 right-0 flex h-2.5 w-2.5 md:h-3 md:w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-cyan-500"></span>
                </span>
              </div>
              <div>
                <h4 className="text-[10px] md:text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-0.5 md:mb-1">Base of Operations</h4>
                <p className="text-sm md:text-lg font-bold text-white">Ratlam, MP (Best Developer in MP)</p>
              </div>
            </div>
          </motion.div>

          {/* Ventures & Entrepreneurship Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="md:col-span-2 group relative overflow-hidden rounded-3xl md:rounded-[2rem] border border-zinc-800/50 bg-zinc-900/40 p-6 md:p-10 backdrop-blur-md transition-colors hover:border-emerald-500/30 hover:bg-zinc-800/40"
          >
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-start lg:items-center justify-between">
              <div className="flex-1">
                <Briefcase className="h-6 w-6 md:h-8 md:w-8 text-emerald-400 mb-4 md:mb-6" />
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-white">Entrepreneurial Ventures & CEO Leadership</h3>
                <p className="text-[13px] md:text-sm leading-relaxed text-zinc-400">
                  Beyond writing code, as the <strong className="text-white">Webblers CEO</strong> and technical lead at Webblers IT Solutions and Ajicon Industries, I direct digital transformations and scalable software systems across Madhya Pradesh.
                </p>
              </div>

              {/* Interactive Mock Terminal */}
              <div className="w-full lg:w-auto shrink-0 rounded-xl border border-zinc-800 bg-[#09090b] p-3 md:p-4 font-mono text-[10px] md:text-xs shadow-inner overflow-x-auto custom-scrollbar">
                <div className="flex gap-1.5 mb-2.5 md:mb-3 border-b border-zinc-800/80 pb-2">
                  <div className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-red-500/80 border border-red-500/50"></div>
                  <div className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-yellow-500/80 border border-yellow-500/50"></div>
                  <div className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-green-500/80 border border-green-500/50"></div>
                </div>
                <div className="text-zinc-400 whitespace-nowrap">
                  <span className="text-emerald-500">➜</span> <span className="text-cyan-400">~</span> <span className="text-white">npm run deploy:ventures</span>
                </div>
                <div className="text-zinc-500 mt-2 whitespace-nowrap">
                  <p>✔ Compiling Webblers IT logic...</p>
                  <p>✔ Initializing Ajicon cloud systems...</p>
                  <p className="text-emerald-400 mt-1 font-semibold">✨ Production ready in 1.2s</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ------------------------------------------------------------- */}
          {/* UPGRADED: Education Card with Decryption Text Effect          */}
          {/* ------------------------------------------------------------- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="group flex flex-col justify-between overflow-hidden rounded-3xl md:rounded-[2rem] border border-zinc-800/50 bg-zinc-900/40 p-6 md:p-8 backdrop-blur-md transition-colors hover:border-emerald-500/30 hover:bg-zinc-800/40"
          >
            <div>
              <GraduationCap className="h-6 w-6 md:h-8 md:w-8 text-cyan-400 mb-4 md:mb-6 transition-transform group-hover:-translate-y-1 group-hover:rotate-12" />
              <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
                <DecryptedText text="Academic Foundation" />
              </h3>
              <p className="text-[13px] md:text-sm leading-relaxed text-zinc-400">
                <DecryptedText text="Building a highly structured analytical mindset and technical foundation through formal computer application studies to rank as a leading developer in MP." />
              </p>
            </div>
            
            <div className="mt-6 md:mt-8 border-t border-zinc-800/80 pt-4 md:pt-5">
              <p className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-1">Degree</p>
              <p className="text-sm md:text-base font-bold text-white">
                <DecryptedText text="Bachelor of Computer Application" />
              </p>
              <p className="text-[11px] md:text-xs text-zinc-500 mt-1">
                <DecryptedText text="Medi-Caps University" />
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}