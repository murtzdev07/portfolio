import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Code2, Sparkles, Terminal, Layers } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative z-10 bg-transparent px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="h-5 w-5 text-emerald-400" />
            <span className="text-sm font-semibold uppercase tracking-widest text-zinc-400">Behind the Code</span>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
            Driven by <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent italic">Logic & Design</span>
          </h2>
        </motion.div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* Main Bio Card (Spans 2 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
            className="md:col-span-2 group relative overflow-hidden rounded-[2rem] border border-zinc-800/50 bg-zinc-900/40 p-8 md:p-10 backdrop-blur-md transition-colors hover:border-emerald-500/30 hover:bg-zinc-800/40"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/5 blur-[80px] transition-all group-hover:bg-emerald-500/10"></div>
            
            <div className="relative z-10">
              <Code2 className="h-8 w-8 text-emerald-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">Tech Enthusiast & Builder</h3>
              <p className="text-base leading-relaxed text-zinc-400 mb-4">
                I am a passionate tech enthusiast and frontend developer. My expertise lies in bridging the gap between highly complex backend systems and beautifully fluid user interfaces. 
              </p>
              <p className="text-base leading-relaxed text-zinc-400">
                Whether I am architecting scalable React frontends, integrating headless Shopify APIs, or configuring serverless databases, my philosophy remains the same: write clean code and build unforgettable digital experiences.
              </p>
            </div>
          </motion.div>

          {/* Location / Radar Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="group relative flex flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-zinc-800/50 bg-zinc-900/40 p-8 backdrop-blur-md transition-colors hover:border-cyan-500/30 hover:bg-zinc-800/40"
          >
            {/* Animated Radar Rings */}
            <div className="absolute flex items-center justify-center">
              <div className="absolute h-32 w-32 animate-ping rounded-full border border-cyan-500/20 bg-cyan-500/5 opacity-50" style={{ animationDuration: '3s' }}></div>
              <div className="absolute h-48 w-48 rounded-full border border-cyan-500/10 bg-transparent"></div>
              <div className="absolute h-64 w-64 rounded-full border border-zinc-800/50 bg-transparent"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-950 border border-zinc-800 shadow-inner mb-4 relative">
                <MapPin className="h-6 w-6 text-cyan-400" />
                {/* Active Ping Dot */}
                <span className="absolute top-0 right-0 flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-500"></span>
                </span>
              </div>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-1">Base of Operations</h4>
              <p className="text-lg font-bold text-white">Ratlam, India</p>
            </div>
          </motion.div>

          {/* Ventures & Entrepreneurship Card (Spans 2 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="md:col-span-2 group relative overflow-hidden rounded-[2rem] border border-zinc-800/50 bg-zinc-900/40 p-8 md:p-10 backdrop-blur-md transition-colors hover:border-emerald-500/30 hover:bg-zinc-800/40"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
              <div className="flex-1">
                <Briefcase className="h-8 w-8 text-emerald-400 mb-6" />
                <h3 className="text-2xl font-bold mb-3 text-white">Entrepreneurial Ventures</h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  Beyond writing code, I lead technical initiatives and drive digital innovation as a core contributor at Webblers IT Solutions and Ajicon Industries.
                </p>
              </div>

              {/* Interactive Mock Terminal */}
              <div className="w-full md:w-auto shrink-0 rounded-xl border border-zinc-800 bg-[#09090b] p-4 font-mono text-xs shadow-inner">
                <div className="flex gap-1.5 mb-3 border-b border-zinc-800/80 pb-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/80 border border-red-500/50"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80 border border-yellow-500/50"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/80 border border-green-500/50"></div>
                </div>
                <div className="text-zinc-400">
                  <span className="text-emerald-500">➜</span> <span className="text-cyan-400">~</span> <span className="text-white">npm run deploy:ventures</span>
                </div>
                <div className="text-zinc-500 mt-2">
                  <p>✔ Compiling Webblers IT logic...</p>
                  <p>✔ Initializing Ajicon cloud systems...</p>
                  <p className="text-emerald-400 mt-1 font-semibold">✨ Production ready in 1.2s</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="group flex flex-col justify-between overflow-hidden rounded-[2rem] border border-zinc-800/50 bg-zinc-900/40 p-8 backdrop-blur-md transition-colors hover:border-emerald-500/30 hover:bg-zinc-800/40"
          >
            <div>
              <GraduationCap className="h-8 w-8 text-cyan-400 mb-6 transition-transform group-hover:-translate-y-1 group-hover:rotate-12" />
              <h3 className="text-xl font-bold mb-2 text-white">Academic Foundation</h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                Building a highly structured analytical mindset and technical foundation through formal computer application studies.
              </p>
            </div>
            
            <div className="mt-8 border-t border-zinc-800/80 pt-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-1">Degree</p>
              <p className="text-sm font-bold text-white">Bachelor of Computer Application</p>
              <p className="text-xs text-zinc-500 mt-1">Medi-Caps University</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}