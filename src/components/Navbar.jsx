import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code2 } from 'lucide-react';
import { SiGithub, SiInstagram, SiWhatsapp } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { useDevMode } from './DevModeContext';

export default function Navbar() {
  const { isDevMode, toggleDevMode } = useDevMode();
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  // Handle scroll effects (background intensity and scrollspy)
  useEffect(() => {
    const handleScroll = () => {
      // Toggle background blur intensity on scroll
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scrollspy logic to determine active section
      const sections = navLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`print:hidden fixed top-0 z-50 w-full transition-all duration-300 border-b ${
          scrolled 
            ? "border-zinc-800 bg-zinc-950/80 backdrop-blur-xl py-3 shadow-2xl shadow-emerald-950/10" 
            : "border-transparent bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          {/* Fixed-width container for Brand Logo to prevent shifting center menu items */}
          <div className="w-[320px] flex items-center">
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="group flex items-center gap-1.5 font-mono text-sm tracking-tight text-zinc-300 transition-colors hover:text-white overflow-hidden"
            >
              <span className="text-emerald-400 font-bold flex items-center gap-1 shrink-0">
                <Terminal className="h-4 w-4 text-emerald-400" />
                murtaza@dev:~$
              </span>
              <span className="text-zinc-500 font-medium shrink-0">
                ./portfolio/
              </span>
              <AnimatePresence mode="wait">
                <motion.span 
                  key={activeSection || "hero"}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className={`font-semibold tracking-wide ${activeSection ? "capitalize text-emerald-300" : "uppercase text-white"}`}
                >
                  {activeSection || "MURTAZA"}
                </motion.span>
              </AnimatePresence>
              <span className="text-emerald-400 animate-pulse font-bold">_</span>
            </motion.a>
          </div>

          {/* Desktop Navigation with Active Pill Indicator */}
          <div className="hidden items-center gap-2 rounded-full border border-zinc-800/60 bg-zinc-900/40 px-3 py-1.5 backdrop-blur-md md:flex">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full bg-zinc-800 border border-zinc-700/50"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Social Icons & Dev Mode */}
          <div className="w-[320px] flex items-center justify-end gap-3">
            {/* GitHub */}
            <a href="https://github.com/murtzdev07" target="_blank" rel="noreferrer" className="hidden text-zinc-400 transition-colors hover:text-white md:block p-1" title="GitHub">
              <SiGithub className="h-5 w-5" />
            </a>
            
            {/* LinkedIn */}
            <a href="https://linkedin.com/in/murtaza-dawoodjee" target="_blank" rel="noreferrer" className="hidden text-zinc-400 transition-colors hover:text-white md:block p-1" title="LinkedIn">
              <FaLinkedin className="h-5 w-5" />
            </a>

            {/* Instagram */}
            <a href="https://instagram.com/murtaza_0710" target="_blank" rel="noreferrer" className="hidden text-zinc-400 transition-colors hover:text-pink-400 md:block p-1" title="Instagram">
              <SiInstagram className="h-5 w-5" />
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/918208266645?" target="_blank" rel="noreferrer" className="hidden text-zinc-400 transition-colors hover:text-emerald-400 md:block p-1" title="WhatsApp">
              <SiWhatsapp className="h-5 w-5" />
            </a>

            {/* Dev Mode X-Ray Toggle Button */}
            <button 
              onClick={toggleDevMode}
              className={`hidden md:flex items-center gap-1.5 rounded-xl border px-2.5 py-1.5 text-xs font-mono transition-all ${
                isDevMode 
                  ? "border-emerald-500 bg-emerald-500/20 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.3)]" 
                  : "border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-white hover:border-zinc-700"
              }`}
              title="Toggle X-Ray Dev Mode"
            >
              <Code2 className="h-3.5 w-3.5" />
              <span>{isDevMode ? "DEV: ON" : "DEV: OFF"}</span>
            </button>
          </div>
        </div>
      </motion.nav>
    </>
  );
}