import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Code2, Globe, Share2, Check, Smartphone, Database, Palette, Sparkles, Terminal, TerminalSquare, ArrowRight } from 'lucide-react';
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiPrisma, 
  SiSupabase, SiVercel, SiJavascript, SiGithub, SiGit, SiFirebase, SiNetlify, SiAndroidstudio, SiPostgresql, SiExpress, SiVite, SiFramer, SiTypescript } from 'react-icons/si';
import { FaJava, FaHtml5, FaCss3Alt, FaBuilding, FaWrench } from 'react-icons/fa';

const projects = [
  {
    id: "home-depot-kuwait",
    title: "Home-Depot Kuwait E-Commerce",
    description: "Full-stack e-commerce platform for mobile phones, smartwatches, and electronic accessories.",
    fullDescription: "A custom-built digital storefront developed for Home-Depot Company Kuwait, specializing in mobile phones, smartwatches, and electronic devices. Architected with Next.js and React for a lightning-fast, SEO-optimized frontend. The platform relies on Node.js, Prisma, and Supabase for robust inventory and relational data management, all seamlessly deployed via Vercel.",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs className="h-4 w-4 text-white" /> },
      { name: "React", icon: <SiReact className="h-4 w-4 text-[#61DAFB]" /> },
      { name: "Supabase", icon: <SiSupabase className="h-4 w-4 text-[#3ECF8E]" /> },
      { name: "Prisma", icon: <SiPrisma className="h-4 w-4 text-white" /> },
      { name: "Node.js", icon: <SiNodedotjs className="h-4 w-4 text-[#339939]" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="h-4 w-4 text-[#06B6D4]" /> },
      { name: "Vercel", icon: <SiVercel className="h-4 w-4 text-white" /> }
    ],
    icon: <Smartphone className="h-6 w-6 text-emerald-400" />,
    colSpan: "md:col-span-2",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=400",
    liveUrl: "https://home-depot-kw.vercel.app/",
    githubUrl: "#",
    status: "Production"
  },
  {
    id: "fmb-app-ratlam",
    title: "FMB App - Ratlam",
    description: "Highly advanced Android application and widget for FMB community kitchen management.",
    fullDescription: "A comprehensive Android application developed specifically for Ratlam Burhani Mohalla to streamline FMB operations. The app features a dynamic weekly menu interface, interactive Thali stop/hault scheduling, and menu customization options. It includes a dedicated user feedback system and a custom-built Java home screen widget that pulls real-time updates from Firebase Firestore with robust offline caching.",
    tech: [
      { name: "Java", icon: <FaJava className="h-4 w-4 text-[#ED8B00]" /> },
      { name: "Android Studio", icon: <SiAndroidstudio className="h-4 w-4 text-[#3DDC84]" /> },
      { name: "JavaScript", icon: <SiJavascript className="h-4 w-4 text-[#F7DF1E]" /> },
      { name: "HTML", icon: <FaHtml5 className="h-4 w-4 text-[#E34F26]" /> },
      { name: "CSS", icon: <FaCss3Alt className="h-4 w-4 text-[#1572B6]" /> },
      { name: "Git", icon: <SiGit className="h-4 w-4 text-[#F05032]" /> },
      { name: "GitHub", icon: <SiGithub className="h-4 w-4 text-white" /> },
      { name: "Netlify", icon: <SiNetlify className="h-4 w-4 text-[#00C7B7]" /> }
    ],
    icon: <Smartphone className="h-6 w-6 text-cyan-400" />,
    colSpan: "md:col-span-1",
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&q=80&w=800&h=400",
    liveUrl: "https://fmb.ratlamburhani.com/", 
    githubUrl: "#",
    status: "Active"
  },
  {
    id: "erp-backend",
    title: "Nature Bio ERP System",
    description: "Full-stack enterprise resource planning system built with React, Express, and Supabase.",
    fullDescription: "A robust full-stack ERP architecture designed for manufacturing and operational management. The blazing-fast frontend is powered by React and Vite, styled meticulously with Tailwind CSS. The backend utilizes a modular Node.js and Express architecture, cleanly separated into controllers and routes. Everything is tied together with Supabase for highly scalable, real-time database management.",
    tech: [
      { name: "React", icon: <SiReact className="h-4 w-4 text-[#61DAFB]" /> },
      { name: "Vite", icon: <SiVite className="h-4 w-4 text-[#646CFF]" /> },
      { name: "Node.js", icon: <SiNodedotjs className="h-4 w-4 text-[#339939]" /> },
      { name: "Express", icon: <SiExpress className="h-4 w-4 text-white" /> },
      { name: "Supabase", icon: <SiSupabase className="h-4 w-4 text-[#3ECF8E]" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="h-4 w-4 text-[#06B6D4]" /> }
    ],
    icon: <Database className="h-6 w-6 text-emerald-400" />,
    colSpan: "md:col-span-1",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=400",
    liveUrl: "https://example.com",
    githubUrl: "#",
    status: "Active"
  },
  {
    id: "ora-care-dental-crm",
    title: "Ora-Care Dental Clinic Portal",
    description: "Comprehensive CRM solution featuring patient record management, automated reminders, and lab tracking.",
    fullDescription: "An advanced, all-in-one CRM and practice management portal built specifically for Ora-Care Dental Clinic. The platform streamlines daily clinical workflows with modules for appointment scheduling, patient record management, dues calculation with automated reminders, and a real-time lab tracking system. It also features integrated data backup and restore capabilities, alongside Tesseract.js for optical character recognition tasks, delivering a seamless administrative experience.",
    tech: [
      { name: "JavaScript", icon: <SiJavascript className="h-4 w-4 text-[#F7DF1E]" /> },
      { name: "HTML", icon: <FaHtml5 className="h-4 w-4 text-[#E34F26]" /> },
      { name: "CSS", icon: <FaCss3Alt className="h-4 w-4 text-[#1572B6]" /> },
      { name: "Firebase", icon: <SiFirebase className="h-4 w-4 text-[#FFCA28]" /> },
      { name: "Netlify", icon: <SiNetlify className="h-4 w-4 text-[#00C7B7]" /> },
      { name: "Git", icon: <SiGit className="h-4 w-4 text-[#F05032]" /> },
      { name: "GitHub", icon: <SiGithub className="h-4 w-4 text-white" /> }
    ],
    icon: <Palette className="h-6 w-6 text-cyan-400" />,
    colSpan: "md:col-span-2",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800&h=400",
    liveUrl: "https://example.com",
    githubUrl: "#",
    status: "Production"
  },
  {
    id: "ascon-construction",
    title: "Ascon Construction & Co.",
    description: "High-end static corporate website built with React, TypeScript, and Framer Motion.",
    fullDescription: "A premium, ultra-responsive corporate website crafted for Ascon Construction & Co. Built using React (TSX) and styled meticulously with Tailwind CSS to reflect structural precision and architectural elegance. The interface features silky-smooth scroll animations driven by Framer Motion, optimized performance assets, and a lightweight Node.js asset pipeline deployed seamlessly on Vercel.",
    tech: [
      { name: "React", icon: <SiReact className="h-4 w-4 text-[#61DAFB]" /> },
      { name: "TypeScript", icon: <SiTypescript className="h-4 w-4 text-[#3178C6]" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="h-4 w-4 text-[#06B6D4]" /> },
      { name: "Framer Motion", icon: <SiFramer className="h-4 w-4 text-white" /> },
      { name: "Node.js", icon: <SiNodedotjs className="h-4 w-4 text-[#339939]" /> },
      { name: "Vercel", icon: <SiVercel className="h-4 w-4 text-white" /> },
      { name: "Git", icon: <SiGit className="h-4 w-4 text-[#F05032]" /> }
    ],
    icon: <FaBuilding className="h-6 w-6 text-emerald-400" />,
    colSpan: "md:col-span-1",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18f86f5?auto=format&fit=crop&q=80&w=800&h=400",
    liveUrl: "https://ascon-construction.vercel.app/",
    githubUrl: "#",
    status: "Production"
  },
  {
    id: "anchor-tr-llc",
    title: "Anchor Tr LLC - Hardware & Bolts Store",
    description: "Industrial e-commerce & corporate showcase for a premier anchor bolts and hardware supplier in Sharjah, UAE.",
    fullDescription: "A high-performance digital storefront and corporate website built for Anchor Tr LLC, a specialized hardware and industrial anchor bolts supplier based in Sharjah, UAE. Designed with a rugged, professional aesthetic to showcase heavy-duty industrial fasteners, construction hardware, and structural fixings. Built using clean HTML5, modern CSS, and vanilla JavaScript for blazing-fast load speeds, optimized product catalog navigation, and seamless deployment on Netlify.",
    tech: [
      { name: "JavaScript", icon: <SiJavascript className="h-4 w-4 text-[#F7DF1E]" /> },
      { name: "HTML5", icon: <FaHtml5 className="h-4 w-4 text-[#E34F26]" /> },
      { name: "CSS3", icon: <FaCss3Alt className="h-4 w-4 text-[#1572B6]" /> },
      { name: "Netlify", icon: <SiNetlify className="h-4 w-4 text-[#00C7B7]" /> },
      { name: "Git", icon: <SiGit className="h-4 w-4 text-[#F05032]" /> },
      { name: "GitHub", icon: <SiGithub className="h-4 w-4 text-white" /> }
    ],
    icon: <FaWrench className="h-6 w-6 text-cyan-400" />,
    colSpan: "md:col-span-1",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800&h=400",
    liveUrl: "https://www.anchortrdg.com/",
    githubUrl: "#",
    status: "Production"
  },
  {
    id: "pdf-merger-tool",
    title: "Advanced PDF & Image Merger Utility",
    description: "Lightweight, client-side utility accepting multiple PDFs and images with drag-and-drop page sequencing.",
    fullDescription: "A high-performance, client-side web utility built for merging and rearranging documents effortlessly. It accepts bulk uploads of both PDF files and multiple image formats, featuring an interactive interface to reorder pages and sequence layouts on the fly. Powered by modern web libraries including html2pdf.js for clean document rendering and Tesseract.js for text processing, all wrapped in a blazing-fast vanilla JavaScript architecture deployed on Netlify.",
    tech: [
      { name: "JavaScript", icon: <SiJavascript className="h-4 w-4 text-[#F7DF1E]" /> },
      { name: "HTML5", icon: <FaHtml5 className="h-4 w-4 text-[#E34F26]" /> },
      { name: "CSS3", icon: <FaCss3Alt className="h-4 w-4 text-[#1572B6]" /> },
      { name: "Tesseract.js", icon: <Sparkles className="h-4 w-4 text-purple-400" /> },
      { name: "html2pdf.js", icon: <Code2 className="h-4 w-4 text-emerald-400" /> },
      { name: "Netlify", icon: <SiNetlify className="h-4 w-4 text-[#00C7B7]" /> },
      { name: "Git", icon: <SiGit className="h-4 w-4 text-[#F05032]" /> }
    ],
    icon: <Terminal className="h-6 w-6 text-emerald-400" />,
    colSpan: "md:col-span-1",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800&h=400",
    liveUrl: "https://webblerspdforg.netlify.app",
    githubUrl: "#",
    status: "Production"
  },
];

// Reusable Spotlight Card Component
const ProjectCard = ({ project, index, onClick }) => {
  const boundingRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  const handleMouseMove = (e) => {
    if (!boundingRef.current) return;
    const rect = boundingRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => setMousePos({ x: -1000, y: -1000 });

  return (
    <motion.div
      ref={boundingRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onClick={onClick}
      className={`group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-zinc-800/50 bg-zinc-900/40 p-8 transition-all hover:border-emerald-500/40 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.2)] ${project.colSpan}`}
    >
      {/* Linear.app Style Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16,185,129,0.12), transparent 40%)`,
        }}
      />

      {/* Background Image Reveal (Blooms on Hover) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={project.image} 
          alt="" 
          className="h-full w-full object-cover opacity-0 scale-100 transition-all duration-700 ease-out group-hover:opacity-20 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/90 to-zinc-900/40"></div>
      </div>

      {/* "Access System" Compile Arrow overlay */}
      <div className="absolute top-6 right-6 z-20 flex items-center gap-2 text-emerald-400 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest">Access System</span>
        <ArrowRight className="h-4 w-4" />
      </div>

      <div className="relative z-20">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800/80 shadow-inner transition-transform group-hover:scale-110">
          {project.icon}
        </div>
        <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-emerald-400">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-400 line-clamp-2">
          {project.description}
        </p>
      </div>

      <div className="relative z-20 mt-8 flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 2).map((t) => (
            <span 
              key={t.name} 
              className="flex items-center gap-1.5 rounded-md border border-zinc-700/30 bg-zinc-950/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-zinc-300 transition-transform duration-300 group-hover:-translate-y-0.5"
            >
              {t.icon}
              {t.name}
            </span>
          ))}
          {project.tech.length > 2 && (
            <span className="flex items-center rounded-md border border-zinc-700/30 bg-zinc-950/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-zinc-500 transition-transform duration-300 group-hover:-translate-y-0.5 delay-75">
              +{project.tech.length - 2}
            </span>
          )}
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800/80 backdrop-blur-sm transition-transform group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-zinc-950">
          <ExternalLink className="h-4 w-4" />
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [copied, setCopied] = useState(false);
  
  // Terminal Boot Sequence States
  const [isBooting, setIsBooting] = useState(false);
  const [bootLogs, setBootLogs] = useState([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      
      // Trigger Boot Sequence
      setIsBooting(true);
      setBootLogs([]);
      const logs = [
        "> INITIALIZING SECURE CONNECTION...",
        "> RESOLVING HOST...",
        "> FETCHING COMPILED ASSETS...",
        `> MOUNTING /SYSTEM/PROJECTS/${selectedProject.id.toUpperCase()}`,
        "> CONNECTION ESTABLISHED. 200 OK"
      ];
      
      let i = 0;
      const interval = setInterval(() => {
        if (i < logs.length) {
          setBootLogs(prev => [...prev, logs[i]]);
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => setIsBooting(false), 400); // Slight pause before render
        }
      }, 150); // Fast typing effect
      
      return () => clearInterval(interval);

    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const handleShare = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="projects" className="bg-transparent px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          {/* Terminal Aesthetic Header Sync */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-mono mb-4">
            <TerminalSquare className="h-4 w-4" />
            <span>./execute_portfolio --show</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mt-2">
            Selected <span className="text-emerald-400">Works</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl">A showcase of complex architectures, creative designs, and full-stack solutions.</p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              onClick={() => setSelectedProject(project)} 
            />
          ))}
        </div>
      </div>

      {/* Aesthetic Developer Modal with Live Preview & Terminal Boot */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            
            {/* Immersive Blur Backdrop */}
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-zinc-950/80 cursor-pointer"
            />

            {/* Split-Pane / Terminal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative my-auto flex w-full max-w-5xl flex-col md:flex-row overflow-hidden rounded-[2rem] border border-zinc-700/50 bg-zinc-900/90 shadow-2xl shadow-emerald-950/20 backdrop-blur-2xl z-10"
              style={{ maxHeight: 'calc(100vh - 4rem)' }} 
            >
              
              {isBooting ? (
                /* Terminal Boot Sequence View */
                <div className="flex w-full min-h-[50vh] flex-col p-8 font-mono text-sm text-emerald-400">
                  <div className="flex gap-2 mb-8">
                    <div className="h-3 w-3 rounded-full bg-red-500/80 border border-red-500/50"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80 border border-yellow-500/50"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500/80 border border-green-500/50"></div>
                  </div>
                  <div className="space-y-2">
                    {bootLogs.map((log, i) => (
                      <div key={i} className="animate-[fadeIn_0.1s_ease-out]">{log}</div>
                    ))}
                    <span className="animate-pulse font-bold">_</span>
                  </div>
                </div>
              ) : (
                /* Main Split-Pane View */
                <>
                  {/* Left Pane: macOS Browser & Live Preview */}
                  <div className="relative flex flex-col h-64 md:h-auto md:w-[45%] shrink-0 bg-zinc-950 overflow-hidden border-b md:border-b-0 md:border-r border-zinc-800/50">
                    
                    {/* Simulated Browser Chrome Header */}
                    <div className="flex h-11 w-full shrink-0 items-center gap-3 border-b border-zinc-800/60 bg-zinc-900/80 px-4">
                      <div className="flex gap-1.5">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-500/80 border border-red-500/50"></div>
                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80 border border-yellow-500/50"></div>
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500/80 border border-green-500/50"></div>
                      </div>
                      {/* URL Bar */}
                      <div className="ml-2 flex h-6 flex-1 items-center rounded-md bg-zinc-950/50 px-3 text-[10px] font-mono text-zinc-500 truncate border border-zinc-800/50">
                        {selectedProject.liveUrl !== "#" ? selectedProject.liveUrl : "localhost:3000"}
                      </div>
                    </div>
                    
                    {/* Live iframe window */}
                    <div className="relative flex-1 bg-zinc-950">
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="absolute inset-0">
                        {selectedProject.liveUrl && selectedProject.liveUrl !== "#" ? (
                          <iframe 
                            src={selectedProject.liveUrl} 
                            title={selectedProject.title}
                            className="h-full w-full border-none"
                            sandbox="allow-scripts allow-same-origin"
                            loading="lazy"
                          />
                        ) : (
                          <img 
                            src={selectedProject.image} 
                            alt={selectedProject.title} 
                            className="h-full w-full object-cover opacity-50"
                          />
                        )}
                      </motion.div>
                      {/* Subtle vignette shadow so the iframe blends smoothly into the dark theme */}
                      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_40px_rgba(9,9,11,0.6)]"></div>
                    </div>
                  </div>

                  {/* Right Pane: Scrollable Content Area */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative flex w-full md:w-[55%] flex-col overflow-y-auto p-6 md:p-10 custom-scrollbar"
                  >
                    
                    {/* Modern ESC Hint / Mobile Close */}
                    <div className="absolute right-6 top-6 z-20 flex items-center gap-3">
                      <div className="hidden md:flex items-center gap-2 text-zinc-500">
                        <span className="text-[10px] font-semibold uppercase tracking-widest">Close</span>
                        <kbd className="flex h-5 items-center justify-center rounded border border-zinc-700 bg-zinc-800 px-1.5 font-sans text-[10px] text-zinc-300">ESC</kbd>
                      </div>
                      <button 
                        onClick={() => setSelectedProject(null)}
                        className="md:hidden flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800/80 text-zinc-400 hover:text-white"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Developer Meta Bar */}
                    <div className="mb-8 flex items-center gap-4 border-b border-zinc-800/60 pb-4 mt-8 md:mt-0">
                      <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                        <Code2 className="h-4 w-4 text-emerald-500" />
                        <span>~/workspace/{selectedProject.id}</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        </span>
                        {selectedProject.status}
                      </div>
                    </div>

                    {/* Header */}
                    <div className="mb-6 flex items-center gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-zinc-800/80 border border-zinc-700/50 shadow-inner">
                        {selectedProject.icon}
                      </div>
                      <h3 className="text-3xl font-extrabold text-white tracking-tight">
                        {selectedProject.title}
                      </h3>
                    </div>

                    <p className="mb-10 text-[15px] leading-relaxed text-zinc-300">
                      {selectedProject.fullDescription}
                    </p>

                    {/* System Specs (Tech Stack) */}
                    <div className="mb-10">
                      <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">System Architecture</h4>
                      <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
                        className="grid grid-cols-2 gap-3"
                      >
                        {selectedProject.tech.map((t) => (
                          <motion.div 
                            variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                            key={t.name} 
                            className="flex items-center gap-3 rounded-xl border border-zinc-700/40 bg-zinc-800/30 px-4 py-3 transition-colors hover:border-zinc-500 hover:bg-zinc-800"
                          >
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-950/50 border border-zinc-700/50">
                              {t.icon}
                            </div>
                            <span className="text-sm font-medium text-zinc-200">{t.name}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>

                    {/* Action Dock */}
                    <div className="mt-auto flex flex-wrap items-center gap-3 pt-4">
                      <a 
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition-all hover:bg-emerald-400 hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)]"
                      >
                        <Globe className="h-4 w-4" />
                        Open Platform
                      </a>
                      <a 
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800/50 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-zinc-700"
                      >
                        <Code2 className="h-4 w-4" />
                        Source Code
                      </a>
                      
                      <button
                        onClick={handleShare}
                        className="ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800/50 text-zinc-300 transition-all hover:bg-zinc-700 hover:text-white"
                        title="Copy Project Link"
                      >
                        {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Share2 className="h-4 w-4" />}
                      </button>
                    </div>
                  </motion.div>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}