import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, LayoutGrid, Briefcase, Mail, TerminalSquare } from 'lucide-react';

export default function MobileDock() {
  const [active, setActive] = useState('hero');

  // Trigger Haptic Vibration (Physical Buzz on Mobile)
  const triggerHaptic = (intensity = 40) => {
    if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(intensity);
    }
  };

  // The Magic Terminal Trigger (Simulates Cmd+K)
  const openTerminal = () => {
    triggerHaptic(60); // Stronger buzz for the terminal
    const event = new KeyboardEvent('keydown', {
      key: 'k',
      metaKey: true, // Simulates Cmd
      ctrlKey: true, // Simulates Ctrl for Windows/Android
      bubbles: true,
    });
    document.dispatchEvent(event);
  };

  const navItems = [
    { id: 'hero', icon: <Home className="h-5 w-5" />, href: '#hero' },
    { id: 'projects', icon: <LayoutGrid className="h-5 w-5" />, href: '#projects' },
    { id: 'experience', icon: <Briefcase className="h-5 w-5" />, href: '#experience' },
    { id: 'contact', icon: <Mail className="h-5 w-5" />, href: '#contact' },
  ];

  return (
    // sm:hidden ensures this ONLY appears on mobile devices
    <motion.div 
      initial={{ y: 100, opacity: 0, x: '-50%' }}
      animate={{ y: 0, opacity: 1, x: '-50%' }}
      transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.5 }}
      className="sm:hidden fixed bottom-6 left-1/2 z-[100] flex items-center gap-2 rounded-full border border-zinc-700/60 bg-zinc-950/80 p-2 shadow-2xl shadow-emerald-900/20 backdrop-blur-xl"
    >
      {/* Standard Nav Items */}
      {navItems.map((item) => (
        <a
          key={item.id}
          href={item.href}
          onClick={() => {
            triggerHaptic(30);
            setActive(item.id);
          }}
          className={`relative rounded-full p-3 transition-colors ${
            active === item.id ? 'text-emerald-400' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          {active === item.id && (
            <motion.div
              layoutId="dockIndicator"
              className="absolute inset-0 rounded-full bg-zinc-800/80 border border-zinc-700/50"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{item.icon}</span>
        </a>
      ))}

      {/* Divider */}
      <div className="h-8 w-[1px] bg-zinc-700/50 mx-1"></div>

      {/* The Mobile Terminal Trigger */}
      <button
        onClick={openTerminal}
        className="group relative flex items-center justify-center rounded-full bg-emerald-500/10 p-3 text-emerald-400 border border-emerald-500/20 active:scale-90 transition-transform overflow-hidden"
      >
        {/* Radar Ping Animation */}
        <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-20"></span>
        <TerminalSquare className="relative z-10 h-5 w-5" />
      </button>
    </motion.div>
  );
}