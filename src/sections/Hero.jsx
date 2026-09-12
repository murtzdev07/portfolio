import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Sparkles, Code2, Cloud, Terminal, CheckCircle2, ChevronRight, Download } from 'lucide-react';
// Add this import near the top of Hero.jsx
import GithubActivity from '../components/GithubActivity';
import MagneticWrapper from '../components/MagneticWrapper';
import TelemetryWidget from '../components/TelemetryWidget';

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
  const [activeWidget, setActiveWidget] = useState('telemetry'); // Alternating Widget State

  // Automated Alternator for Telemetry & Github Stats
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWidget((prev) => (prev === 'telemetry' ? 'github' : 'telemetry'));
    }, 8000); // Swaps every 8 seconds
    return () => clearInterval(interval);
  }, []);

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

  // HAPTIC FEEDBACK TRIGGER FOR MOBILE
  const triggerHaptic = () => {
    if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(40); // Subtle 40ms physical vibration
    }
  };

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
    <section id="hero" data-dev-info="<HeroSection layout='responsive' />" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-transparent px-4 sm:px-6 pt-32 pb-20 text-center z-10">
      
      {/* SEO META INJECTION VIA REACT-HELMET-ASYNC */}
      <Helmet>
        <title>Murtaza Dawoodjeewala | Best Web Developer in Ratlam, MP & React Expert</title>
        <meta name="description" content="Looking for the best web developer in MP or a React developer in Ratlam? Meet Murtaza Dawoodjeewala, Frontend Developer, Website Builder, and Webblers CEO." />
        <meta name="keywords" content="Best Web Developer in MP, Best Developer in Ratlam, Frontend Developer in Ratlam, React Developer in Ratlam, Website Builder in Ratlam, Webblers CEO, Murtaza Dawoodjeewala" />
        <meta property="og:title" content="Murtaza Dawoodjeewala | Best Web Developer in Ratlam, MP & React Expert" />
        <meta property="og:description" content="Top-tier React Developer, Frontend Engineer, and Webblers CEO based in Ratlam, Madhya Pradesh." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Deep Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-[45rem] w-[45rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[160px] animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute top-1/2 left-1/3 -z-10 h-[35rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px] animate-pulse" style={{ animationDuration: '10s' }}></div>

      {/* Subtle Moving Background Grid */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="flex max-w-5xl flex-col items-center w-full relative z-10">

        {/* Animated Status Badge */}
        <motion.div 
          data-dev-info="<StatusBadge status='available' />"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="group mb-8 flex cursor-pointer items-center gap-2 rounded-full border border-zinc-800/80 bg-zinc-900/60 px-4 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-xl transition-colors hover:border-emerald-500/50 hover:bg-zinc-800/80"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          <span className="text-zinc-400 hidden md:inline">System Status:</span> 
          <span className="text-white font-semibold tracking-wide">Available for Development & Ventures</span>
          <Sparkles className="h-3.5 w-3.5 text-emerald-400 ml-1 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
        </motion.div>

        {/* Dynamic Holographic Headline with Optimized Semantic H1 */}
        <motion.div
          data-dev-info="<HolographicHeadline text='Murtaza Dawoodjeewala' />"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h2 className="text-lg font-medium tracking-wide text-zinc-400 sm:text-2xl mb-2">
            Hi, I am
          </h2>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="relative cursor-default"
          >
            {/* Glowing Text Shadow behind the name */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 blur-2xl opacity-20"></div>
            <h1 className="relative text-4xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-[5.5rem] bg-gradient-to-br from-white via-emerald-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-sm pb-2">
              Murtaza Dawoodjeewala
            </h1>
          </motion.div>

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Architecting <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent italic pr-2">Digital Products</span>
          </h2>

          {/* Hidden SEO Keyword Anchor for Local Ranking Authority */}
          <p className="sr-only">
            Recognized as the best web developer in MP, best developer in Ratlam, expert frontend and React developer in Ratlam, Madhya Pradesh, premier website builder, and Webblers CEO.
          </p>
        </motion.div>

        <motion.p 
          data-dev-info="<BioDescription />"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-8 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base md:text-lg"
        >
          A Frontend Engineer and Technical Co-founder bridging the gap between raw backend logic and refined user interfaces. I build modern, scalable web platforms.
        </motion.p>

      {/* ------------------------------------------------------------- */}
        {/* NEW RESPONSIVE CTA BUTTONS (Mobile Split Grid, Desktop Row) */}
        {/* ------------------------------------------------------------- */}
        <motion.div 
          data-dev-info="<CallToActionCluster />"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 w-full"
        >
          {/* Primary Button: Full width on mobile, auto on desktop */}
          <MagneticWrapper className="w-full md:w-auto flex justify-center">
            <a 
              href="#projects" 
              onClick={triggerHaptic}
              className="group relative flex w-full md:w-auto justify-center items-center gap-2 rounded-full bg-emerald-500 px-8 py-3.5 md:py-4 text-sm font-bold text-zinc-950 transition-all hover:bg-emerald-400 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)] active:scale-95 overflow-hidden whitespace-nowrap"
            >
              <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                Explore Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
            </a>
          </MagneticWrapper>
          
          {/* Secondary Buttons: 50/50 Split row on Mobile, inline on desktop */}
          <div className="flex w-full md:w-auto gap-3 md:gap-4">
            <MagneticWrapper className="flex flex-1 md:flex-none w-full md:w-auto"> 
              <a 
                href="#contact" 
                onClick={triggerHaptic}
                className="group flex flex-1 w-full justify-center items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/40 px-4 md:px-8 py-3.5 md:py-4 text-[13px] md:text-sm font-semibold text-zinc-300 backdrop-blur-md transition-all hover:border-zinc-500 hover:bg-zinc-800 hover:text-white active:scale-95 whitespace-nowrap"
              >
                Get in Touch
              </a>
            </MagneticWrapper>

            <MagneticWrapper className="flex flex-1 md:flex-none w-full md:w-auto">
              <a 
                href="/Murtaza_Dawoodjeewala_Resume.pdf" 
                download="Murtaza_Dawoodjeewala_Resume.pdf"
                onClick={triggerHaptic}
                className="group flex flex-1 w-full justify-center items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/40 px-4 md:px-8 py-3.5 md:py-4 text-[13px] md:text-sm font-semibold text-zinc-300 backdrop-blur-md transition-all hover:border-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-400 active:scale-95 whitespace-nowrap"
              >
                <Download className="h-4 w-4 shrink-0" />
                Resume
              </a>
            </MagneticWrapper>
          </div>
        </motion.div>
        {/* ------------------------------------------------------------- */}
        {/* ALTERNATING WIDGETS: Live Telemetry & GitHub Stats          */}
        {/* ------------------------------------------------------------- */}
        <motion.div
          data-dev-info="<DashboardWidget status='active' />"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="w-full flex justify-center items-center min-h-[80px]"
        >
          <AnimatePresence mode="wait">
            {activeWidget === 'telemetry' ? (
              <motion.div
                key="telemetry"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full flex justify-center"
              >
                <TelemetryWidget />
              </motion.div>
            ) : (
              <motion.div
                key="github"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full flex justify-center"
              >
                <GithubActivity />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>


        {/* ------------------------------------------------------------- */}
        {/* DESKTOP UI: Your untouched interactive capability switcher  */}
        {/* ------------------------------------------------------------- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="hidden md:block w-full max-w-4xl mt-24"
        >
          <motion.div 
            data-dev-info="<CapabilitiesTerminalWindow />"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="w-full rounded-3xl border border-zinc-800/80 bg-zinc-900/50 p-6 backdrop-blur-2xl shadow-2xl shadow-emerald-950/20 text-left relative overflow-hidden"
          >
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

                <div className="md:col-span-2 relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative rounded-2xl border border-zinc-700/50 bg-[#0d0d0f] p-5 font-mono text-xs shadow-inner overflow-hidden">
                    <div className="flex items-center gap-2 mb-3 text-zinc-600 border-b border-zinc-800 pb-2">
                      <ChevronRight className="h-3 w-3 text-emerald-500" />
                      <span>snippet.js</span>
                    </div>
                    <code className="text-emerald-400 leading-relaxed block overflow-x-auto whitespace-nowrap custom-scrollbar pb-2 min-h-[2.5rem]">
                      <TypewriterText text={capabilities[activeTab].codeSnippet} />
                    </code>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* ------------------------------------------------------------- */}
        {/* MOBILE EXCLUSIVE UI: Native App-Style Accordion Stack       */}
        {/* ------------------------------------------------------------- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="w-full mt-12 md:hidden"
        >
          <div className="flex items-center gap-2 mb-4 px-2">
            <Terminal className="h-4 w-4 text-emerald-500" />
            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest">System Modules</span>
          </div>
          
          <div className="flex flex-col gap-3">
            {capabilities.map((cap, idx) => (
              <div 
                key={idx} 
                onClick={() => {
                  setActiveTab(idx);
                  triggerHaptic();
                }}
                className={`flex flex-col rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                  activeTab === idx 
                    ? "border-emerald-500/30 bg-zinc-900/70 shadow-[0_0_15px_rgba(16,185,129,0.05)]" 
                    : "border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/50"
                }`}
              >
                {/* Accordion Header */}
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-xl border transition-colors ${activeTab === idx ? "bg-emerald-500/10 border-emerald-500/20" : "bg-zinc-800/50 border-zinc-700/50"}`}>
                      {cap.icon}
                    </div>
                    <h3 className={`text-sm font-bold transition-colors ${activeTab === idx ? "text-white" : "text-zinc-300"}`}>
                      {cap.title}
                    </h3>
                  </div>
                  {/* Rotates 90deg when active */}
                  <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${activeTab === idx ? "rotate-90 text-emerald-400" : "text-zinc-500"}`} />
                </div>

                {/* Accordion Body (Smooth Expand/Collapse) */}
                <AnimatePresence>
                  {activeTab === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4">
                        <span className="inline-block rounded-md bg-emerald-500/10 px-2 py-1 text-[9px] font-semibold tracking-wider uppercase text-emerald-400 border border-emerald-500/20 mb-3">
                          {cap.tagline}
                        </span>
                        <p className="text-[13px] text-zinc-400 leading-relaxed mb-4 text-left">
                          {cap.description}
                        </p>
                        
                        {/* Compact Mobile Snippet */}
                        <div className="relative rounded-xl border border-zinc-700/50 bg-[#09090b] p-3 font-mono text-[10px] shadow-inner text-left">
                          <div className="flex items-center gap-2 mb-1.5 text-zinc-600 border-b border-zinc-800/80 pb-1.5">
                            <ChevronRight className="h-3 w-3 text-emerald-500" />
                            <span>snippet.js</span>
                          </div>
                          <code className="text-emerald-400 block overflow-x-auto whitespace-nowrap hide-scrollbar">
                            <TypewriterText text={cap.codeSnippet} />
                          </code>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* OPTION 3: Subtle Matrix Glitch System Hint - Hidden on mobile as there's no keyboard */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
        className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-widest text-emerald-500/50 pointer-events-none select-none"
      >
        SYSTEM_READY &gt; INIT_TERMINAL [CMD+K] or [CTRL+K]
      </motion.div>

    </section>
  );
}