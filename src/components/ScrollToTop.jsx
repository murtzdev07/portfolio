import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          /* 
            LAYOUT FIX: 
            Moved up on mobile to avoid the bottom dock (bottom-24 md:bottom-8)
          */
          className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-50 flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-2xl border border-zinc-700/50 bg-zinc-900/85 text-emerald-400 shadow-2xl backdrop-blur-xl transition-all hover:bg-zinc-800 hover:border-emerald-500/50 hover:text-emerald-300 hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)] active:scale-95"
          title="Scroll to Top"
        >
          <ArrowUp className="h-4 w-4 md:h-5 md:w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}