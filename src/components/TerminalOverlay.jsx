import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';

// Core commands for autocomplete
const COMMANDS = ['help', 'whoami', 'about', 'experience', 'skills', 'projects', 'contact', 'clear', 'ls', 'cat', 'sudo', 'coffee', 'ping', 'matrix'];

export default function TerminalOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to murtaza_os v2.0' },
    { type: 'system', text: 'Type "help" to see available commands or try to find the easter eggs.' }
  ]);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  // Smarter Autocomplete: Only suggest on the first word
  let suggestion = '';
  const parts = input.trimStart().toLowerCase().split(' ');
  if (parts.length === 1 && parts[0]) {
    const match = COMMANDS.find(cmd => cmd.startsWith(parts[0]));
    if (match) {
      suggestion = input + match.slice(parts[0].length);
    }
  }

  // Global Keyboard Shortcuts (Cmd+K to toggle, Esc to close)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Auto-scroll to bottom of terminal
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, isOpen]);

  const handleKeyDown = (e) => {
    // Handle Tab Autocompletion
    if (e.key === 'Tab') {
      e.preventDefault();
      if (suggestion) {
        setInput(suggestion);
      }
    }

    // Handle Command Execution
    if (e.key === 'Enter') {
      const rawInput = input.trim();
      if (!rawInput) return;

      const newHistory = [...history, { type: 'user', text: `murtaza@dev:~$ ${rawInput}` }];
      
      // Parse command and arguments
      const inputParts = rawInput.toLowerCase().split(' ');
      const cmd = inputParts[0];
      const args = inputParts.slice(1).join(' ');

      switch (cmd) {
        case 'help':
          newHistory.push({ type: 'system', text: 'AVAILABLE COMMANDS:\n  about       - Read my bio\n  experience  - View my work history\n  skills      - Check my tech stack\n  projects    - List my recent work\n  contact     - Get my contact details\n  clear       - Clear terminal output\n  ls          - List directory contents\n\n* Plus a few hidden commands for the curious ones...' });
          break;
        case 'whoami':
        case 'about':
          newHistory.push({ type: 'system', text: 'MURTAZA DAWOODJEEWALA\nFrontend Engineer & Technical Co-founder.\nBridging the gap between raw backend logic and refined user interfaces. Building modern, scalable web platforms with React, Node.js, and a keen eye for design.' });
          break;
        case 'experience':
          newHistory.push({ type: 'system', text: 'WORK HISTORY:\n[2025-Present] Sr. Frontend Developer @ Ajicon Industries Pvt. Ltd.\n[2025-Present] Co-founder @ Webblers IT Solutions\n[2022-Present] Co-founder @ MSquare Graphix' });
          break;
        case 'skills':
          newHistory.push({ type: 'system', text: 'TECH STACK:\n- Frontend: React, Next.js, Tailwind CSS, Framer Motion\n- Backend: Node.js, Express, Firebase, Supabase, Prisma\n- Mobile: Android Studio, Java\n- Design: UI/UX, Graphic Design' });
          break;
        case 'projects':
          newHistory.push({ type: 'system', text: 'LOADING PROJECTS...\n- Home-Depot Kuwait E-Commerce\n- FMB App Ratlam\n- Nature Bio ERP System\n- Ora-Care Dental CRM\n- Ascon Construction & Co.\n- Anchor Tr LLC\n- Advanced PDF Merger\n\n(Tip: Type "ls" to see the project files)' });
          break;
        case 'contact':
          newHistory.push({ type: 'system', text: 'CONNECT WITH ME:\nEmail  -> murtazadawoodjee.connect@gmail.com\nPhone  -> +91 8208266645\nStatus -> Available for Development & Ventures' });
          break;
        case 'clear':
          setHistory([]);
          setInput('');
          return;
        case 'resume':
        case 'cv':
          newHistory.push({ type: 'system', text: 'GENERATING RESUME PROTOCOL...\nLocating file: Murtaza_Dawoodjeewala_Resume.pdf\nInitiating secure download...' });
          setHistory(newHistory);
          
          setTimeout(() => {
            // Programmatically click a hidden link to trigger the download
            const link = document.createElement('a');
            link.href = '/Murtaza_Dawoodjeewala_Resume.pdf';
            link.download = 'Murtaza_Dawoodjeewala_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            setIsOpen(false); // Close the terminal
          }, 1500);
          return;
          
        /* --- EASTER EGGS & SYSTEM COMMANDS --- */
        case 'ls':
        case 'dir':
          newHistory.push({ type: 'system', text: 'about.txt   experience.md   projects.json   contact.sh   secret_keys.env' });
          break;
        case 'cat':
          if (!args) {
            newHistory.push({ type: 'error', text: 'cat: missing file operand' });
          } else if (args === 'secret_keys.env' || args === '.env') {
            newHistory.push({ type: 'error', text: 'cat: secret_keys.env: Permission denied. Nice try, hacker. 😉' });
          } else if (args === 'about.txt') {
            newHistory.push({ type: 'system', text: 'Executing about...\nMurtaza Dawoodjeewala - Frontend Engineer.' });
          } else if (args === 'experience.md' || args === 'projects.json' || args === 'contact.sh') {
            newHistory.push({ type: 'system', text: `Executing ${args}... (Try typing the command name directly without 'cat')` });
          } else {
            newHistory.push({ type: 'error', text: `cat: ${args}: No such file or directory` });
          }
          break;
        case 'sudo':
          if (args === 'rm -rf /' || args === 'rm -rf /*') {
            newHistory.push({ type: 'error', text: 'CRITICAL WARNING: Operation blocked.\nPlease don\'t delete my portfolio. I worked hard on it.' });
          } else {
            newHistory.push({ type: 'error', text: `murtaza is not in the sudoers file. This incident will be reported to Santa Claus.` });
          }
          break;
        case 'coffee':
        case 'brew':
          newHistory.push({ type: 'system', text: '☕ Brewing...\nError 418: I\'m a teapot.' });
          break;
        case 'ping':
          newHistory.push({ type: 'system', text: `pong! (${Math.floor(Math.random() * 20) + 1}ms)` });
          break;
        case 'matrix':
          newHistory.push({ type: 'system', text: 'Wake up, Neo...\nThe Matrix has you...\nFollow the white rabbit. 🐇' });
          break;
        case 'upupdowndownleftrightleftrightba':
          newHistory.push({ type: 'system', text: '🎮 KONAMI CODE ACCEPTED. +30 Lives.\n(If only debugging was this easy...)' });
          break;
        default:
          newHistory.push({ type: 'error', text: `bash: ${cmd}: command not found\nType "help" to see available commands.` });
      }

      setHistory(newHistory);
      setInput('');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-[100000] flex flex-col bg-zinc-950/95 font-mono text-sm shadow-2xl backdrop-blur-xl"
        >
          {/* Terminal Header */}
          <div className="flex h-12 w-full shrink-0 items-center justify-between border-b border-zinc-800/80 bg-zinc-900/80 px-4">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <div onClick={() => setIsOpen(false)} className="h-3 w-3 cursor-pointer rounded-full bg-red-500/80 border border-red-500/50 hover:bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500/80 border border-yellow-500/50"></div>
                <div className="h-3 w-3 rounded-full bg-green-500/80 border border-green-500/50"></div>
              </div>
              <div className="flex items-center gap-2 text-zinc-500 text-xs">
                <Terminal className="h-3.5 w-3.5" />
                <span>murtaza_os — bash</span>
              </div>
            </div>
            
            {/* ESC Hint to Close */}
            <div className="flex items-center gap-2 text-zinc-500">
              <span className="hidden sm:inline-block text-[10px] uppercase tracking-widest font-semibold">Close</span>
              <kbd className="flex h-5 items-center justify-center rounded border border-zinc-700 bg-zinc-800 px-1.5 font-sans text-[10px] text-zinc-300">ESC</kbd>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="flex-1 overflow-y-auto p-6 custom-scrollbar text-zinc-300" onClick={() => inputRef.current?.focus()}>
            <div className="mx-auto max-w-4xl space-y-3">
              {history.map((log, index) => (
                <div key={index} className="whitespace-pre-wrap leading-relaxed">
                  {log.type === 'user' && <span className="text-zinc-400 font-semibold">{log.text}</span>}
                  {log.type === 'system' && <span className="text-emerald-400">{log.text}</span>}
                  {log.type === 'error' && <span className="text-red-400">{log.text}</span>}
                </div>
              ))}

              {/* Active Input Line with Zsh-style Autocomplete */}
              <div className="flex items-center gap-2 pt-2">
                <span className="text-emerald-400 font-bold shrink-0">murtaza@dev:~$</span>
                <div className="relative flex-1 flex items-center">
                  {/* Ghost suggestion text */}
                  {suggestion && input && (
                    <span className="absolute left-0 text-zinc-600 pointer-events-none">
                      <span className="opacity-0">{input}</span>
                      {suggestion.slice(input.length)}
                    </span>
                  )}
                  {/* Actual input field */}
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full bg-transparent text-zinc-200 outline-none relative z-10"
                    spellCheck="false"
                    autoComplete="off"
                    autoFocus
                  />
                </div>
              </div>
              <div ref={bottomRef} className="h-4" />
            </div>
          </div>

          {/* Footer UI Hints */}
          <div className="absolute bottom-4 right-6 hidden sm:flex items-center gap-4 text-[10px] text-zinc-600 font-sans uppercase tracking-widest font-semibold">
            {suggestion && input && (
              <span className="flex items-center gap-1.5 text-emerald-500/70">
                <kbd className="flex h-4 items-center justify-center rounded border border-emerald-500/30 bg-emerald-500/10 px-1 font-sans text-[9px] text-emerald-400">TAB</kbd>
                to complete
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <kbd className="flex h-4 items-center justify-center rounded border border-zinc-700 bg-zinc-800 px-1 font-sans text-[9px] text-zinc-400">⌘K</kbd>
              to toggle
            </span>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}