import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Cloud, Terminal, CheckCircle2, ChevronRight,Download } from 'lucide-react';
// Add this import near the top of Hero.jsx
import GithubActivity from '../components/GithubActivity';

// Custom Typewriter Effect Component for the Code Snippet
const TypewriterText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 20); // Typing speed
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayedText}<span className="animate-pulse">_</span></span>;
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);

  // OPTION 1: The Hidden Developer Console Secret!
  useEffect(() => {
    console.log(
      "%c Welcome to Murtaza's Portfolio! ", 
      "background: #10b981; color: #09090b; font-size: 20px; font-weight: bold; border-radius: 4px;"
    );
    console.log(
      "%c[System Notice] %cA hidden terminal is waiting for you. Press %cCmd + K%c (or Ctrl + K) to access the mainframe.",
      "color: #10b981; font-weight: bold;",
      "color: #a1a1aa;",
      "color: #fff; font-weight: bold; background: #27272a; padding: 2px 6px; border-radius: 4px;",
      "color: #a1a1aa;"
    );
  }, []);

  const capabilities = [
    {
      title: "Frontend & UI/UX",
      icon: <Code2 className="h-4 w-4 text-emerald-400" />,
      tagline: "React, Tailwind & Modern Design Systems",
      description: "Building responsive, highly polished user interfaces with smooth micro-interactions and optimized component lifecycles.",
      codeSnippet: "const UI = () => <TailwindCSS animate={true} />;"
    },
    {
      title: "Cloud & Backend",
      icon: <Cloud className="h-4 w-4 text-cyan-400" />,
      tagline: "Node.js, Prisma, Vercel & Firebase",
      description: "Architecting serverless API endpoints, handling complex database transactions, and configuring real-time data sync.",
      codeSnippet: "await prisma.ledger.update({ data: { status: 'Synced' } });"
    },
    {
      title: "Software Ventures",
      icon: <Terminal className="h-4 w-4 text-emerald-400" />,
      tagline: "MSquare Graphix & Webblers IT Solutions",
      description: "Directing technical operations, custom web platforms, and digital asset production for industry solutions.",
      codeSnippet: "git commit -m 'feat: deploy full-stack architecture v2.0'"
    }
  ];

  return (
    // Changed ID from "about" to "hero" to fix the Navbar ScrollSpy issue!
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-transparent px-6 pt-32 pb-20 text-center z-10">

      {/* Deep Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-[45rem] w-[45rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[160px] animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute top-1/2 left-1/3 -z-10 h-[35rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px] animate-pulse" style={{ animationDuration: '10s' }}></div>

      {/* Subtle Moving Background Grid */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="flex max-w-5xl flex-col items-center w-full relative z-10">

        {/* Animated Status Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="group mb-8 flex cursor-pointer items-center gap-2 rounded-full border border-zinc-800/80 bg-zinc-900/60 px-4 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-xl transition-colors hover:border-emerald-500/50 hover:bg-zinc-800/80"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          <span className="text-zinc-400">System Status:</span> 
          <span className="text-white font-semibold tracking-wide">Available for Development & Ventures</span>
          <Sparkles className="h-3.5 w-3.5 text-emerald-400 ml-1 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
        </motion.div>

        {/* Dynamic Holographic Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h2 className="text-xl font-medium tracking-wide text-zinc-400 sm:text-2xl mb-2">
            Hi, I am
          </h2>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="relative cursor-default"
          >
            {/* Glowing Text Shadow behind the name */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 blur-2xl opacity-20"></div>
            <h1 className="relative text-5xl font-extrabold tracking-tighter sm:text-7xl lg:text-[5.5rem] bg-gradient-to-br from-white via-emerald-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-sm pb-2">
              Murtaza Dawoodjeewala
            </h1>
          </motion.div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Architecting <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent italic pr-2">Digital Products</span>
          </h2>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          A Frontend Engineer and Technical Co-founder bridging the gap between raw backend logic and refined user interfaces. I build modern, scalable web platforms.
        </motion.p>

        {/* Magnetic CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a 
            href="#projects" 
            className="group relative flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-sm font-bold text-zinc-950 transition-all hover:bg-emerald-400 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)] active:scale-95 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
          </a>
          <a 
            href="#contact" 
            className="group flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/40 px-8 py-4 text-sm font-semibold text-zinc-300 backdrop-blur-md transition-all hover:border-zinc-500 hover:bg-zinc-800 hover:text-white active:scale-95"
          >
            Get in Touch
          </a>

           {/* Static PDF Download Button */}
          <a 
            href="/Murtaza_Dawoodjeewala_Resume.pdf" 
            download="Murtaza_Dawoodjeewala_Resume.pdf"
            className="group flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/40 px-8 py-4 text-sm font-semibold text-zinc-300 backdrop-blur-md transition-all hover:border-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-400 active:scale-95"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>

        </motion.div>

        <GithubActivity />

        {/* Floating Interactive Capability Switcher */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-4xl mt-24"
        >
          <motion.div 
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="w-full rounded-3xl border border-zinc-800/80 bg-zinc-900/50 p-6 backdrop-blur-2xl shadow-2xl shadow-emerald-950/20 text-left relative overflow-hidden"
          >
            {/* Subtle inner top highlight */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-zinc-800/80 pb-5 mb-6 gap-4">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5 mr-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80 border border-red-500/50"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80 border border-yellow-500/50"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500/80 border border-green-500/50"></div>
                </div>
                <span className="text-[11px] font-mono text-zinc-500 flex items-center gap-1.5 border border-zinc-800 bg-zinc-950/50 px-2 py-1 rounded-md">
                  <Terminal className="h-3 w-3 text-emerald-500" />
                  murtaza@workspace ~ ./capabilities
                </span>
              </div>

              {/* Tab Buttons */}
              <div className="flex flex-wrap gap-2">
                {capabilities.map((cap, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`group relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all duration-300 ${
                      activeTab === idx 
                        ? "text-white bg-zinc-800/80 border border-zinc-700/50 shadow-lg" 
                        : "text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/40 border border-transparent"
                    }`}
                  >
                    {cap.icon}
                    <span className="relative z-10">{cap.title}</span>
                    {activeTab === idx && (
                      <motion.div 
                        layoutId="activeTabIndicator"
                        className="absolute inset-0 rounded-xl bg-zinc-800/50 border border-zinc-700"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Content Display Area */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center"
              >
                <div className="md:col-span-3 space-y-4">
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/10 px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase text-emerald-400 border border-emerald-500/20">
                    {capabilities[activeTab].tagline}
                  </span>
                  <p className="text-[15px] leading-relaxed text-zinc-300">
                    {capabilities[activeTab].description}
                  </p>
                  <div className="flex items-center gap-2 pt-1 text-xs text-zinc-500 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    <span>Executing production-ready workflows</span>
                  </div>
                </div>

                {/* Simulated Code Terminal Preview */}
                <div className="md:col-span-2 relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative rounded-2xl border border-zinc-700/50 bg-[#0d0d0f] p-5 font-mono text-xs shadow-inner overflow-hidden">
                    <div className="flex items-center gap-2 mb-3 text-zinc-600 border-b border-zinc-800 pb-2">
                      <ChevronRight className="h-3 w-3 text-emerald-500" />
                      <span>snippet.js</span>
                    </div>
                    <code className="text-emerald-400 leading-relaxed block overflow-x-auto whitespace-nowrap custom-scrollbar pb-2 min-h-[2.5rem]">
                      {/* Integrated Typewriter Effect */}
                      <TypewriterText text={capabilities[activeTab].codeSnippet} />
                    </code>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>

      </div>

      {/* OPTION 3: Subtle Matrix Glitch System Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-widest text-emerald-500/50 pointer-events-none select-none"
      >
        SYSTEM_READY &gt; INIT_TERMINAL [CMD+K] or [CTRL+K]
      </motion.div>

    </section>
  );
}