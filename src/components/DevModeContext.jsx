import { createContext, useContext, useState, useEffect } from 'react';

const DevModeContext = createContext();

export function DevModeProvider({ children }) {
  const [isDevMode, setIsDevMode] = useState(false);
  const [hoveredMeta, setHoveredMeta] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const toggleDevMode = () => setIsDevMode(prev => !prev);

  useEffect(() => {
    if (!isDevMode) {
      setHoveredMeta(null);
      return;
    }

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      const target = e.target.closest('[data-dev-info]');
      if (target) {
        setHoveredMeta(target.getAttribute('data-dev-info'));
      } else {
        setHoveredMeta(null);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isDevMode]);

  return (
    <DevModeContext.Provider value={{ isDevMode, toggleDevMode }}>
      {/* Wrapped in a Fragment to satisfy single-root JSX rules */}
      <>
        {children}

        {/* Global Dev Mode Inspector Tooltip Overlay */}
        {isDevMode && (
          <div 
            className="fixed pointer-events-none z-[999999] transition-all duration-75 ease-out"
            style={{ top: mousePos.y + 15, left: mousePos.x + 15 }}
          >
            {hoveredMeta && (
              <div className="rounded-lg border border-emerald-500/40 bg-zinc-950/90 px-3 py-1.5 font-mono text-[11px] text-emerald-400 shadow-2xl backdrop-blur-md">
                <span className="text-zinc-500 mr-2">element:</span>
                {hoveredMeta}
              </div>
            )}
          </div>
        )}
      </>
    </DevModeContext.Provider>
  );
}

export const useDevMode = () => useContext(DevModeContext);