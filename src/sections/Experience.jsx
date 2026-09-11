import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, TerminalSquare, Activity, ChevronLeft, ChevronRight } from 'lucide-react';

const timelineData = [
  {
    type: "work",
    role: "Sr. Frontend Developer & Graphic Designer",
    institution: "Ajicon Industries Pvt. Ltd.",
    period: "2025 - Present",
    location: "Madhya Pradesh",
    description: "Spearheading frontend architecture and digital marketing media for private biomass manufacturing. Building high-performance interfaces and creative production pipelines.",
    skills: ["React", "UI/UX", "Graphic Design", "Frontend"],
    current: true
  },
  {
    type: "work",
    role: "Co-founder",
    institution: "Webblers IT Solutions",
    period: "2025 - Present",
    location: "Cloud-based",
    description: "Co-founding and directing cloud-based web and app development operations, custom software creation, and advanced database administration.",
    skills: ["Cloud Architecture", "Full-Stack", "Database Admin"],
    current: true
  },
  {
    type: "work",
    role: "Co-founder",
    institution: "MSquare Graphix",
    period: "2022 - Present",
    location: "Ratlam, India",
    description: "Co-founded and scaled a creative graphic design company focused on delivering cutting-edge visual solutions, branding, and design assets.",
    skills: ["Branding", "Graphic Design", "Entrepreneurship"],
    current: true
  },
  {
    type: "education",
    role: "Bachelor of Computer Application (BCA)",
    institution: "Medi-Caps University",
    period: "2022 - 2025",
    location: "Indore, India",
    description: "Comprehensive study of computer science fundamentals, software engineering principles, web development methodologies, and programming frameworks.",
    skills: ["C/C++", "Java", "Web Tech", "SQL"],
    current: false
  },
  {
    type: "education",
    role: "Higher Secondary (12th) & Senior Secondary (10th)",
    institution: "St. Joseph's Convent Sr. Sec. School",
    period: "Completed",
    location: "Ratlam, India",
    description: "Foundation academic years focusing on core sciences, mathematics, and analytical problem-solving skills.",
    skills: ["Academics", "Science & Math"],
    current: false
  }
];

export default function Experience() {
  const [filter, setFilter] = useState("all");
  const [mobileIndex, setMobileIndex] = useState(0); // Mobile Pager State
  const containerRef = useRef(null);

  // Magic Scroll setup for the illuminated timeline line (Desktop Only)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end 80%"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const filteredData = timelineData.filter(item => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  // Reset mobile pagination when filter changes
  useEffect(() => {
    setMobileIndex(0);
  }, [filter]);

  // Haptic Feedback for Mobile Actions
  const triggerHaptic = (intensity = 30) => {
    if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(intensity);
    }
  };

  const handleNext = () => {
    if (mobileIndex < filteredData.length - 1) {
      triggerHaptic();
      setMobileIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (mobileIndex > 0) {
      triggerHaptic();
      setMobileIndex(prev => prev - 1);
    }
  };

  return (
    <section id="experience" className="relative bg-zinc-950 px-4 sm:px-6 py-20 md:py-32 text-white overflow-hidden">
      {/* Dynamic Background Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-1/4 left-1/2 -z-10 h-[300px] md:h-[500px] w-[300px] md:w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[100px] md:blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-4xl" ref={containerRef}>
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-10 md:mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs md:text-sm font-mono mb-4">
            <TerminalSquare className="h-3.5 w-3.5 md:h-4 md:w-4" />
            <span>./history --log</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-3 md:mb-4">
            Career & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Education</span>
          </h2>
          <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto px-4 md:px-0">Executing a chronicle of professional milestones, leadership roles, and academic foundations.</p>
        </motion.div>

        {/* Interactive IDE-Style Filter Tabs */}
        <div className="mb-12 md:mb-20 flex justify-center">
          <div className="flex rounded-xl border border-zinc-800/80 bg-zinc-900/60 p-1.5 backdrop-blur-xl shadow-xl shadow-black/50">
            {["all", "work", "education"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  triggerHaptic();
                  setFilter(tab);
                }}
                className={`relative rounded-lg px-4 sm:px-6 py-2 sm:py-2.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  filter === tab ? "text-emerald-400" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {filter === tab && (
                  <motion.div
                    layoutId="filter-active"
                    className="absolute inset-0 rounded-lg bg-zinc-800/80 border border-zinc-700/50"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* DESKTOP UI: Untouched Vertical Timeline Line                  */}
        {/* ------------------------------------------------------------- */}
        <div className="hidden md:block relative ml-32">
          {/* Static Background Line */}
          <div className="absolute left-[-21px] top-4 bottom-0 w-[2px] bg-zinc-800/60 rounded-full" />
          
          {/* Animated Scroll Progress Line */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-[-21px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-emerald-400 via-cyan-400 to-transparent rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)] z-10" 
          />

          <AnimatePresence mode="wait">
            {filteredData.map((item, index) => (
              <motion.div
                key={item.institution + item.role}
                initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-14 relative pl-16 group"
              >
                {/* Glowing Node Icon - Lights up on Hover */}
                <div className="absolute -left-[31px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-zinc-800 bg-zinc-950 text-zinc-500 transition-all duration-500 z-20 group-hover:border-emerald-400 group-hover:text-emerald-400 group-hover:bg-emerald-400/10 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] group-hover:scale-125">
                  <div className="h-1.5 w-1.5 rounded-full bg-current" />
                </div>

                {/* Period Badge (Floating left on desktop) */}
                <div className="absolute -left-44 top-1.5 text-[11px] font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2 mb-0 transition-colors duration-300 group-hover:text-emerald-400">
                  {item.period}
                </div>

                {/* Shifting Interactive Card */}
                <motion.div 
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="relative overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-8 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/30 hover:bg-zinc-900/80 hover:shadow-2xl hover:shadow-emerald-900/20"
                >
                  {/* Internal Card Gradient Hover */}
                  <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Header Row */}
                  <div className="flex flex-row items-start justify-between gap-4 mb-4 relative z-10">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors flex items-center gap-3">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-sm font-semibold text-zinc-300">{item.institution}</span>
                        <span className="h-1 w-1 rounded-full bg-zinc-700"></span>
                        <span className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
                          <MapPin className="h-3 w-3" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Tech Status Indicator */}
                    <div className="shrink-0">
                      {item.current ? (
                        <div className="flex items-center gap-1.5 rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                          <Activity className="h-3 w-3 animate-pulse" />
                          Active
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 rounded-md border border-zinc-700 bg-zinc-800/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                          Archived
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-zinc-400 mb-6 relative z-10">
                    {item.description}
                  </p>

                  {/* Skills / Tags Pills */}
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {item.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="rounded-md bg-zinc-950/50 border border-zinc-800/80 px-3 py-1.5 text-[11px] font-mono font-medium text-zinc-300 transition-colors hover:border-emerald-500/50 hover:text-emerald-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MOBILE EXCLUSIVE UI: App-Style Pager Console                */}
        {/* ------------------------------------------------------------- */}
        <div className="md:hidden flex flex-col w-full relative z-10">
          
          {/* Progress Indicator Dots */}
          <div className="flex items-center justify-center gap-2 mb-6">
            {filteredData.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === mobileIndex 
                    ? "w-8 bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.5)]" 
                    : "w-2 bg-zinc-700"
                }`}
              />
            ))}
          </div>

          {/* Active Mobile Card */}
          <div className="relative min-h-[380px]">
            <AnimatePresence mode="wait">
              {filteredData.length > 0 && (
                <motion.div
                  key={mobileIndex}
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-0 w-full overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-900/60 p-6 shadow-2xl backdrop-blur-xl flex flex-col"
                >
                  
                  {/* Status & Date Row */}
                  <div className="flex items-center justify-between mb-5">
                    {filteredData[mobileIndex].current ? (
                      <div className="flex items-center gap-1.5 rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-emerald-400">
                        <Activity className="h-3 w-3 animate-pulse" />
                        Active
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 rounded-md border border-zinc-700 bg-zinc-800/50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-zinc-400">
                        Archived
                      </div>
                    )}
                    <span className="text-[10px] font-mono font-bold text-zinc-500 tracking-widest uppercase">
                      {filteredData[mobileIndex].period}
                    </span>
                  </div>

                  {/* Main Info */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                      {filteredData[mobileIndex].role}
                    </h3>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-semibold text-emerald-400">
                        {filteredData[mobileIndex].institution}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
                        <MapPin className="h-3 w-3" />
                        {filteredData[mobileIndex].location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[13px] leading-relaxed text-zinc-300 mb-6 flex-1">
                    {filteredData[mobileIndex].description}
                  </p>

                  {/* Skills/Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {filteredData[mobileIndex].skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="rounded-md bg-zinc-950/80 border border-zinc-800 px-2.5 py-1 text-[10px] font-mono font-medium text-zinc-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center justify-between mt-6 px-2">
            <button 
              onClick={handlePrev}
              disabled={mobileIndex === 0}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl border font-bold text-xs uppercase tracking-widest transition-all ${
                mobileIndex === 0 
                  ? "border-transparent bg-transparent text-zinc-700 pointer-events-none" 
                  : "border-zinc-700/50 bg-zinc-900/50 text-zinc-300 hover:text-white hover:bg-zinc-800 active:scale-95"
              }`}
            >
              <ChevronLeft className="h-4 w-4" />
              Prev
            </button>
            
            <div className="text-[10px] font-mono text-zinc-600">
              [ {mobileIndex + 1} / {filteredData.length} ]
            </div>

            <button 
              onClick={handleNext}
              disabled={mobileIndex === filteredData.length - 1}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl border font-bold text-xs uppercase tracking-widest transition-all ${
                mobileIndex === filteredData.length - 1 
                  ? "border-transparent bg-transparent text-zinc-700 pointer-events-none" 
                  : "border-emerald-500/30 bg-emerald-500/10 text-emerald-400 active:scale-95 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
              }`}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}