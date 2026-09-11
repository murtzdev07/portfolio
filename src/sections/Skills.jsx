import { motion } from 'framer-motion';
import { TerminalSquare } from 'lucide-react';
import { 
  SiReact, SiTailwindcss, SiNodedotjs, SiPrisma, SiShopify, 
  SiFirebase, SiVercel, SiNextdotjs, SiTypescript, 
  SiJavascript, SiHtml5, SiGit, SiGraphql, SiSupabase 
} from 'react-icons/si';
import { FaJava, FaPaintBrush, FaRobot, FaServer, FaCss3Alt } from 'react-icons/fa';

// Array mapped with skills, brand icons, brand colors, and official URLs
const skills = [
  { name: "React", icon: SiReact, color: "text-[#61DAFB]", url: "https://react.dev/" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white", url: "https://nextjs.org/" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]", url: "https://www.typescriptlang.org/" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]", url: "https://tailwindcss.com/" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]", url: "https://nodejs.org/" },
  { name: "Prisma ORM", icon: SiPrisma, color: "text-white", url: "https://www.prisma.io/" },
  { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]", url: "https://supabase.com/" },
  { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]", url: "https://firebase.google.com/" },
  { name: "Vercel", icon: SiVercel, color: "text-white", url: "https://vercel.com/" },
  { name: "GraphQL", icon: SiGraphql, color: "text-[#E10098]", url: "https://graphql.org/" },
  { name: "REST APIs", icon: FaServer, color: "text-zinc-400", url: "https://restfulapi.net/" },
  { name: "Shopify API", icon: SiShopify, color: "text-[#95BF47]", url: "https://shopify.dev/" },
  { name: "Java", icon: FaJava, color: "text-[#5382A1]", url: "https://www.java.com/" },
  { name: "Git", icon: SiGit, color: "text-[#F05032]", url: "https://git-scm.com/" },
  { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-[#1572B6]", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "Generative AI", icon: FaRobot, color: "text-emerald-400", url: "https://openai.com/" },
  { name: "UI/UX Design", icon: FaPaintBrush, color: "text-cyan-400", url: "https://www.figma.com/" }
];

// Split skills into two rows for the bi-directional effect
const topRowSkills = skills.slice(0, Math.ceil(skills.length / 2));
const bottomRowSkills = skills.slice(Math.ceil(skills.length / 2));

// Duplicate arrays for seamless infinite scrolling
const dupTopRow = [...topRowSkills, ...topRowSkills];
const dupBottomRow = [...bottomRowSkills, ...bottomRowSkills];

export default function Skills() {
  
  // HAPTIC FEEDBACK TRIGGER FOR MOBILE
  const triggerHaptic = () => {
    if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(30); // Quick precise physical buzz
    }
  };

  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24">
      {/* High-Tech Grid Background - Dimmed for better focus */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto mb-12 max-w-7xl px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-mono mb-4">
            <TerminalSquare className="h-4 w-4" />
            <span>./scan_environment --verbose</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Arsenal</span>
          </h2>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* DESKTOP UI: Untouched Infinite Marquee Scroll               */}
      {/* ------------------------------------------------------------- */}
      <div className="hidden md:flex relative z-10 flex-col gap-6 py-10 max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        
        {/* Top Row - Scrolls Left */}
        <motion.div
          className="flex flex-nowrap gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 40
          }}
        >
          {dupTopRow.map((skill, index) => (
            <motion.a 
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              key={`top-${index}`}
              whileHover={{ y: -5, scale: 1.05 }}
              className="group relative flex shrink-0 items-center gap-4 rounded-full border border-zinc-800/60 bg-zinc-900/40 pr-6 pl-2 py-2 backdrop-blur-md transition-all hover:border-emerald-500/50 hover:bg-zinc-800/80 hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)] cursor-pointer"
            >
              <div className="absolute top-2 right-4 h-1.5 w-1.5 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity"></div>
              
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-950 border border-zinc-800/50 group-hover:border-zinc-700 transition-colors">
                <skill.icon className={`h-6 w-6 ${skill.color}`} />
              </div>
              <span className="text-sm font-bold text-zinc-300 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom Row - Scrolls Right */}
        <motion.div
          className="flex flex-nowrap gap-6 w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 35 
          }}
        >
          {dupBottomRow.map((skill, index) => (
            <motion.a 
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              key={`bottom-${index}`}
              whileHover={{ y: -5, scale: 1.05 }}
              className="group relative flex shrink-0 items-center gap-4 rounded-full border border-zinc-800/60 bg-zinc-900/40 pr-6 pl-2 py-2 backdrop-blur-md transition-all hover:border-emerald-500/50 hover:bg-zinc-800/80 hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)] cursor-pointer"
            >
              <div className="absolute top-2 right-4 h-1.5 w-1.5 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity"></div>
              
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-950 border border-zinc-800/50 group-hover:border-zinc-700 transition-colors">
                <skill.icon className={`h-6 w-6 ${skill.color}`} />
              </div>
              <span className="text-sm font-bold text-zinc-300 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* MOBILE EXCLUSIVE UI: Native App-Drawer Grid                 */}
      {/* ------------------------------------------------------------- */}
      <div className="md:hidden relative z-10 px-4">
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4">
          {skills.map((skill, index) => (
            <motion.a
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              key={`mobile-${index}`}
              onClick={triggerHaptic}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.4, type: "spring" }}
              whileTap={{ scale: 0.92 }}
              className="flex flex-col items-center justify-center gap-2.5 rounded-2xl border border-zinc-800/60 bg-zinc-900/40 py-4 px-2 backdrop-blur-md transition-colors hover:border-emerald-500/30 hover:bg-zinc-800/60"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-950 border border-zinc-800/50 shadow-inner">
                <skill.icon className={`h-6 w-6 ${skill.color}`} />
              </div>
              <span className="text-[10px] sm:text-xs font-semibold text-zinc-400 text-center leading-tight tracking-wide">
                {skill.name}
              </span>
            </motion.a>
          ))}
        </div>
        
        {/* Subtle Module Counter */}
        <div className="mt-8 flex justify-center">
          <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
            {skills.length} Modules Loaded
          </span>
        </div>
      </div>

    </section>
  );
}