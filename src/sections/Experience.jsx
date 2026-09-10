import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, TerminalSquare, Activity } from 'lucide-react';

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
  const containerRef = useRef(null);

  // Magic Scroll setup for the illuminated timeline line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end 80%"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const filteredData = timelineData.filter(item => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  return (
    <section id="experience" className="relative bg-zinc-950 px-6 py-32 text-white overflow-hidden">
      {/* Dynamic Background Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-1/4 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-4xl" ref={containerRef}>
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-mono mb-4">
            <TerminalSquare className="h-4 w-4" />
            <span>./history --log</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Career & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Education</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">Executing a chronicle of professional milestones, leadership roles, and academic foundations.</p>
        </motion.div>

        {/* Interactive IDE-Style Filter Tabs */}
        <div className="mb-20 flex justify-center">
          <div className="flex rounded-xl border border-zinc-800/80 bg-zinc-900/60 p-1.5 backdrop-blur-xl shadow-xl shadow-black/50">
            {["all", "work", "education"].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`relative rounded-lg px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
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

        {/* Timeline Container */}
        <div className="relative ml-4 md:ml-32">
          
          {/* Static Background Line */}
          <div className="absolute left-[-17px] md:left-[-21px] top-4 bottom-0 w-[2px] bg-zinc-800/60 rounded-full" />
          
          {/* Animated Scroll Progress Line */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-[-17px] md:left-[-21px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-emerald-400 via-cyan-400 to-transparent rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)] z-10" 
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
                className="mb-14 relative pl-8 md:pl-16 group"
              >
                {/* Glowing Node Icon - Lights up on Hover */}
                <div className="absolute -left-[27px] md:-left-[31px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-zinc-800 bg-zinc-950 text-zinc-500 transition-all duration-500 z-20 group-hover:border-emerald-400 group-hover:text-emerald-400 group-hover:bg-emerald-400/10 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] group-hover:scale-125">
                  <div className="h-1.5 w-1.5 rounded-full bg-current" />
                </div>

                {/* Period Badge (Floating left on desktop) */}
                <div className="md:absolute md:-left-44 md:top-1.5 text-[11px] font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2 mb-3 md:mb-0 transition-colors duration-300 group-hover:text-emerald-400">
                  {item.period}
                </div>

                {/* Shifting Interactive Card */}
                <motion.div 
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="relative overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/30 hover:bg-zinc-900/80 hover:shadow-2xl hover:shadow-emerald-900/20"
                >
                  {/* Internal Card Gradient Hover */}
                  <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4 relative z-10">
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
      </div>
    </section>
  );
}