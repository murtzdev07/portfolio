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
    role: "Freelancer Web Developer & Designer",
    institution: "Self Employed",
    period: "2023 - Present",
    location: "Ratlam , Madhya Pradesh",
    description: "Currently engaged in freelance web development and design projects, delivering responsive websites,Mobile Applications , interactive applications, and visually compelling digital experiences.",
    skills: ["React", "UI/UX", "Website Design", "Frontend", "Backend" , "Full-Stack", "Mobile App Development" , "Database Management" ,"Tailwind CSS" , "Next.js" , "Node.js" , "Express.js" , "MongoDB" , "MySQL"],
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
  const [mobileIndex, setMobileIndex] = useState(0); 
  const containerRef = useRef(null);

  // We keep this for background/decorative elements if needed
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const filteredData = timelineData.filter(item => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  useEffect(() => {
    setMobileIndex(0);
  }, [filter]);

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
    <section id="experience" className="relative bg-zinc-950 px-4 sm:px-6 py-20 md:py-32 text-white overflow-x-clip">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-1/4 left-1/2 -z-10 h-[300px] md:h-[500px] w-[300px] md:w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[100px] md:blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl" ref={containerRef}>
        <div className="w-full">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-10 md:mb-12 text-center relative z-20"
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

          <div className="mb-8 md:mb-10 flex justify-center relative z-20">
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
          {/* DESKTOP UI: The "IDE Master-Detail" View (Ultimate UX)        */}
          {/* ------------------------------------------------------------- */}
          <div className="hidden md:flex relative w-full h-[550px] rounded-3xl border border-zinc-800/60 bg-zinc-950/80 shadow-2xl overflow-hidden mt-6 backdrop-blur-xl">
            
            {/* LEFT SIDEBAR: Scannable List (Master) */}
            <div className="w-1/3 h-full border-r border-zinc-800/60 bg-zinc-900/30 flex flex-col z-10">
              <div className="p-5 border-b border-zinc-800/60 flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
                <TerminalSquare className="h-4 w-4 text-emerald-500/70" />
                System_Explorer
              </div>
              
              <div className="flex-1 overflow-y-auto p-3 space-y-2 custom-scrollbar">
                {filteredData.map((item, index) => {
                  const isSelected = mobileIndex === index;
                  const Icon = item.type === "work" ? Briefcase : GraduationCap;
                  
                  return (
                    <button
                      key={index}
                      onClick={() => { triggerHaptic(); setMobileIndex(index); }}
                      className={`w-full flex items-start gap-4 p-4 rounded-2xl text-left transition-all duration-300 border ${
                        isSelected 
                          ? 'bg-emerald-500/10 border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.05)]' 
                          : 'bg-transparent border-transparent hover:bg-zinc-800/40 hover:border-zinc-700/50'
                      }`}
                    >
                      <div className={`mt-0.5 p-2 rounded-lg ${isSelected ? 'bg-emerald-500/20 text-emerald-400' : 'bg-zinc-800 text-zinc-500'}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className={`text-sm font-bold truncate ${isSelected ? 'text-emerald-400' : 'text-zinc-300'}`}>
                          {item.role}
                        </h4>
                        <div className="text-xs text-zinc-500 font-medium mt-1 truncate">
                          {item.institution}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* RIGHT PANEL: The Content Details (Detail) */}
            <div className="w-2/3 h-full relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.08),transparent_50%)]">
              <AnimatePresence mode="wait">
                {filteredData.length > 0 && (
                  <motion.div
                    key={mobileIndex}
                    initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 p-10 overflow-y-auto custom-scrollbar flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-8">
                      {filteredData[mobileIndex].current ? (
                        <div className="flex items-center gap-1.5 rounded-md border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                          <Activity className="h-3 w-3 animate-pulse" />
                          Active Role
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 rounded-md border border-zinc-700 bg-zinc-800/50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                          <Calendar className="h-3 w-3" />
                          Archived
                        </div>
                      )}
                      <span className="text-[11px] font-mono font-bold text-zinc-500 tracking-widest uppercase">
                        {filteredData[mobileIndex].period}
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                      {filteredData[mobileIndex].role}
                    </h3>
                    
                    <div className="flex items-center gap-3 mb-8">
                      <span className="text-lg font-semibold text-emerald-400">
                        {filteredData[mobileIndex].institution}
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
                      <span className="flex items-center gap-1.5 text-sm font-medium text-zinc-400">
                        <MapPin className="h-4 w-4" />
                        {filteredData[mobileIndex].location}
                      </span>
                    </div>

                    <div className="h-[1px] w-full bg-zinc-800/60 mb-8" />

                    <p className="text-base leading-relaxed text-zinc-300 mb-10 flex-1">
                      {filteredData[mobileIndex].description}
                    </p>

                    <div className="mt-auto">
                      <h5 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-4">Deployed Technologies</h5>
                      <div className="flex flex-wrap gap-2">
                        {filteredData[mobileIndex].skills.map(skill => (
                          <span key={skill} className="px-3 py-1.5 text-xs font-mono font-medium bg-zinc-900 border border-zinc-700/50 rounded-lg text-zinc-300 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* MOBILE EXCLUSIVE UI: Untouched App-Style Pager                */}
          {/* ------------------------------------------------------------- */}
          <div className="md:hidden flex flex-col w-full relative z-10 mt-4">
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

            <div className="relative min-h-[420px]">
              <AnimatePresence mode="wait">
                {filteredData.length > 0 && (
                  <motion.div
                    key={mobileIndex}
                    initial={{ opacity: 0, scale: 0.8, y: 30, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.1, y: -30, filter: "blur(10px)" }}
                    transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                    className="absolute inset-0 w-full overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-900/60 p-6 shadow-2xl backdrop-blur-xl flex flex-col"
                  >
                    
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
                      <span className="text-[10px] font-mono font-bold text-emerald-500/80 tracking-widest uppercase flex items-center gap-1">
                        <TerminalSquare className="h-3 w-3" />
                        {filteredData[mobileIndex].period}
                      </span>
                    </div>

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

                    <p className="text-[13px] leading-relaxed text-zinc-300 mb-6 flex-1">
                      {filteredData[mobileIndex].description}
                    </p>

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
      </div>
    </section>
  );
}