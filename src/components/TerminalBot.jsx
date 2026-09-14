import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Minimize2, Maximize2, Mail, Phone, TerminalSquare, Volume2, VolumeX } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

// ----------------------------------------------------------------------
// WEB AUDIO API UTILITY (No external files needed)
// ----------------------------------------------------------------------
let audioCtx = null;

const playSound = (type, isMuted) => {
  if (isMuted || typeof window === 'undefined') return;
  
  // Initialize lazily on first user interaction to bypass browser autoplay blocks
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);

  const now = audioCtx.currentTime;

  if (type === 'click') {
    // Crisp, high-frequency UI click
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, now);
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
    osc.start(now);
    osc.stop(now + 0.05);
  } else if (type === 'type') {
    // Subtle, muffled mechanical keystroke
    osc.type = 'square';
    osc.frequency.setValueAtTime(250, now);
    gain.gain.setValueAtTime(0.015, now); // Very quiet
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
    osc.start(now);
    osc.stop(now + 0.03);
  } else if (type === 'success') {
    // Two-note ascending chime
    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.setValueAtTime(600, now + 0.1);
    gain.gain.setValueAtTime(0.05, now);
    gain.gain.linearRampToValueAtTime(0, now + 0.3);
    osc.start(now);
    osc.stop(now + 0.3);
  } else if (type === 'error') {
    // Low frequency buzz/thud
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, now);
    gain.gain.setValueAtTime(0.05, now);
    gain.gain.linearRampToValueAtTime(0, now + 0.3);
    osc.start(now);
    osc.stop(now + 0.3);
  }
};

export default function TerminalBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMuted, setIsMuted] = useState(false); // New state for audio toggle
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const [messages, setMessages] = useState([
    { sender: 'system', text: 'SYSTEM_BOOT: murtaza-os v2.0 online.' },
    { 
      sender: 'bot', 
      text: 'Access granted. I am Murtaza_AI. I can tell you about his React/Node architecture, Graphic Design work, Customized E-Commerce builds, or how to contact him. What do you want to know?', 
      hasContactCard: false,
      hasSkillGraph: false 
    }
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => { scrollToBottom(); }, [messages, isTyping]);

  // ----------------------------------------------------------------------
  // TRUE AI INTEGRATION - FIXED TOKEN CLIPPING
  // ----------------------------------------------------------------------
  const fetchAIResponse = async (userMessage) => {
    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

    const systemPrompt = `
      You are Murtaza_AI, a highly intelligent, witty, and cyberpunk-themed portfolio assistant for Murtaza Dawoodjeewala. 
      Speak concisely, with a slight hacker/developer edge, but remain highly professional and helpful to recruiters.
      
      Murtaza's Context:
      - Role: Web Developer & Graphic Designer.
      - Core Stack: React, Tailwind CSS, Framer Motion, Node.js, Prisma ORM, Vercel.
      - E-commerce: He builds headless e-commerce platforms using React, Next JS and Other libraries with Highly Professional UI.
      - Mobile: Develops Android apps, custom Java home screen widgets, and Firebase Firestore integrations.
      - Design: He creates modern UI/UX layouts, branding, and digital graphics.
      - Experience: Technical Co-founder bridging frontend UI, graphic design, and backend logic.
      
      CRITICAL INSTRUCTIONS: 
      1. NEVER truncate your response. Always complete your final sentence.
      2. Keep responses natural and brief (1 to 3 complete sentences).
      3. If the user asks how to contact Murtaza, hire him, email him, or call him, you MUST include the exact string "[CONTACT_CARD]" somewhere in your response.
      4. If the user asks about his skills, tech stack, or what technologies he uses, you MUST include the exact string "[SKILL_GRAPH]" somewhere in your response.
    `;

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${API_KEY}`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          systemInstruction: { 
            role: "system", 
            parts: [{ text: systemPrompt }] 
          },
          contents: [{ 
            role: "user", 
            parts: [{ text: userMessage }] 
          }],
          generationConfig: { 
            temperature: 0.7,
            maxOutputTokens: 800
          } 
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
        console.error("Google API Error Response:", data);
        return `API_ERROR [${response.status}]: ${data.error?.message || "Unknown error occurred."}`;
      }
      
      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error("Fetch Network Error:", error);
      return `SYS_ERROR: ${error.message}.`;
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    playSound('click', isMuted); // Sound on send

    const userMsg = inputValue.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInputValue('');
    setIsTyping(true);

    // ----------------------------------------------------------------------
    // CLI COMMAND INTERCEPTOR
    // ----------------------------------------------------------------------
    if (userMsg.startsWith('/')) {
      setTimeout(() => {
        const cmd = userMsg.toLowerCase().trim();
        if (cmd === '/clear') {
          setMessages([{ sender: 'system', text: 'Terminal buffer cleared.' }]);
          playSound('success', isMuted);
        } else if (cmd === '/ping') {
          const latency = Math.floor(Math.random() * 40) + 12;
          setMessages(prev => [...prev, { sender: 'system', text: `Connection stable. Latency to mainframe: ${latency}ms` }]);
          playSound('success', isMuted);
        } else if (cmd.startsWith('/sudo')) {
          setMessages(prev => [...prev, { sender: 'system', text: 'ACCESS DENIED. This incident will be reported to the administrator.' }]);
          playSound('error', isMuted);
        } else if (cmd === '/version') {
          setMessages(prev => [...prev, { sender: 'system', text: 'murtaza-os v2.0.4 | React 18.2 | Build Hash: 0x8F9B2' }]);
          playSound('success', isMuted);
        } else if (cmd.startsWith('/go ')) {
          const target = cmd.split(' ')[1];
          const el = document.getElementById(target);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setMessages(prev => [...prev, { sender: 'system', text: `Executing navigation... scrolled to /${target}` }]);
            playSound('success', isMuted);
          } else {
            setMessages(prev => [...prev, { sender: 'system', text: `Target section '${target}' not found. Try '/go about' or '/go contact'.` }]);
            playSound('error', isMuted);
          }
        } else {
          setMessages(prev => [...prev, { sender: 'system', text: `bash: ${cmd}: command not found. Available commands: /clear, /ping, /version, /sudo, /go <section>` }]);
          playSound('error', isMuted);
        }
        setIsTyping(false);
      }, 500);
      return;
    }

    const rawResponse = await fetchAIResponse(userMsg);
    
    const hasContactCard = rawResponse.includes('[CONTACT_CARD]');
    const hasSkillGraph = rawResponse.includes('[SKILL_GRAPH]');
    
    const cleanText = rawResponse
      .replace('[CONTACT_CARD]', '')
      .replace('[SKILL_GRAPH]', '')
      .trim();

    // Play appropriate sound based on response success
    if (cleanText.includes('ERROR')) {
      playSound('error', isMuted);
    } else {
      playSound('success', isMuted);
    }

    setMessages(prev => [...prev, { sender: 'bot', text: cleanText, hasContactCard, hasSkillGraph }]);
    setIsTyping(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    playSound('type', isMuted); // Play typing sound
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              playSound('click', isMuted);
              setIsOpen(true);
              setIsMinimized(false);
            }}
            className="fixed bottom-38 md:bottom-24 right-4 md:right-6 z-[90] flex h-12 w-12 sm:h-14 sm:w-auto items-center justify-center sm:justify-start gap-3 rounded-full bg-emerald-500 sm:pl-4 sm:pr-5 text-zinc-950 shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all hover:bg-emerald-400 group overflow-hidden"
          >
            <Bot className="h-6 w-6 shrink-0 transition-transform group-hover:rotate-12" />
            <span className="hidden sm:inline font-bold text-sm tracking-wide">Ask AI</span>
            
            <span className="absolute top-0 right-0 flex h-3 w-3 translate-y-1 -translate-x-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-200 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-100"></span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              y: isMinimized ? 'calc(100% - 48px)' : 0, 
              scale: 1 
            }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-38 md:bottom-24 right-4 md:right-6 z-[100] w-[calc(100vw-2rem)] sm:w-[400px] overflow-hidden rounded-2xl border border-zinc-700/50 bg-black/90 shadow-2xl backdrop-blur-xl flex flex-col"
            style={{ height: isMinimized ? 'auto' : '500px', maxHeight: '70vh' }}
          >
            <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/80 px-4 py-3 cursor-default select-none">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/80 cursor-pointer hover:bg-red-400" onClick={() => { playSound('click', isMuted); setIsOpen(false); }}></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500/80 cursor-pointer hover:bg-yellow-400" onClick={() => { playSound('click', isMuted); setIsMinimized(!isMinimized); }}></div>
                <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-[11px] font-mono text-zinc-400 tracking-widest flex items-center gap-2">
                <TerminalSquare className="h-3.5 w-3.5 text-emerald-500" />
                murtaza_ai.exe
              </div>
              <div className="flex gap-3 items-center">
                <button onClick={() => setIsMuted(!isMuted)} className="text-zinc-500 hover:text-emerald-400 transition-colors" title="Toggle Sound">
                  {isMuted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
                </button>
                <button onClick={() => { playSound('click', isMuted); setIsMinimized(!isMinimized); }} className="text-zinc-500 hover:text-white transition-colors">
                  {isMinimized ? <Maximize2 className="h-3.5 w-3.5" /> : <Minimize2 className="h-3.5 w-3.5" />}
                </button>
                <button onClick={() => { playSound('click', isMuted); setIsOpen(false); }} className="text-zinc-500 hover:text-red-400 transition-colors">
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-5 font-mono text-xs custom-scrollbar">
                  <div className="space-y-5">
                    {messages.map((msg, idx) => (
                      <div key={idx} className="flex flex-col gap-1.5">
                        <span className={`text-[10px] uppercase tracking-widest flex items-center gap-1 ${msg.sender === 'user' ? 'text-cyan-400' : msg.sender === 'system' ? 'text-zinc-500' : msg.sender === 'bot' && msg.text.includes('ERROR') ? 'text-red-400' : 'text-emerald-400'}`}>
                          {msg.sender === 'bot' && <Bot className="h-3 w-3" />}
                          {msg.sender === 'user' ? 'guest@local:~$' : msg.sender === 'system' ? '[SYSTEM]' : 'murtaza_ai:~$'}
                        </span>
                        
                        <p className={`leading-relaxed text-[13px] ${msg.sender === 'user' ? 'text-zinc-300' : msg.sender === 'system' ? 'text-zinc-600' : msg.sender === 'bot' && msg.text.includes('ERROR') ? 'text-red-300' : 'text-emerald-50'}`}>
                          {msg.text}
                        </p>

                        {/* CONTACT CARD */}
                        {msg.hasContactCard && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                            className="mt-2 flex flex-col gap-3 rounded-xl border border-zinc-700/50 bg-zinc-900/50 p-3.5 backdrop-blur-md"
                          >
                            <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold border-b border-zinc-800 pb-1">
                              Direct Communication Links
                            </span>
                            <div className="grid grid-cols-2 gap-2">
                              <a href="mailto:murtazadawoodjee.connect@gmail.com" onClick={() => playSound('click', isMuted)} className="flex items-center gap-2 rounded-lg bg-zinc-800/80 p-2 hover:bg-emerald-500/20 hover:text-emerald-400 hover:border-emerald-500/30 border border-transparent transition-all">
                                <Mail className="h-4 w-4"/> Email
                              </a>
                              <a href="https://wa.me/918208266645" target="_blank" rel="noreferrer" onClick={() => playSound('click', isMuted)} className="flex items-center gap-2 rounded-lg bg-zinc-800/80 p-2 hover:bg-[#25D366]/20 hover:text-[#25D366] hover:border-[#25D366]/30 border border-transparent transition-all">
                                <SiWhatsapp className="h-4 w-4"/> WhatsApp
                              </a>
                              <a href="tel:+918208266645" onClick={() => playSound('click', isMuted)} className="flex items-center gap-2 rounded-lg bg-zinc-800/80 p-2 hover:bg-emerald-500/20 hover:text-emerald-400 hover:border-emerald-500/30 border border-transparent transition-all">
                                <Phone className="h-4 w-4"/> Call
                              </a>
                              <a href="https://linkedin.com/in/murtaza-dawoodjee" target="_blank" rel="noreferrer" onClick={() => playSound('click', isMuted)} className="flex items-center gap-2 rounded-lg bg-zinc-800/80 p-2 hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500/30 border border-transparent transition-all">
                                <FaLinkedin className="h-4 w-4"/> LinkedIn
                              </a>
                            </div>
                          </motion.div>
                        )}

                        {/* SKILL GRAPH */}
                        {msg.hasSkillGraph && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                            className="mt-2 flex flex-col gap-3 rounded-xl border border-zinc-700/50 bg-zinc-900/50 p-3.5 backdrop-blur-md"
                          >
                            <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold border-b border-zinc-800 pb-1 mb-1">
                              System Capabilities Detected
                            </span>
                            {[
                              { skill: 'React / Frontend Architecture', level: 95, color: 'bg-cyan-400' },
                              { skill: 'Node.js / Cloud Backend', level: 85, color: 'bg-emerald-400' },
                              { skill: 'Graphic Design / UI', level: 90, color: 'bg-purple-400' }
                            ].map((s, i) => (
                              <div key={i} className="flex flex-col gap-1.5">
                                <div className="flex justify-between text-[10px] font-mono text-zinc-400">
                                  <span>{s.skill}</span>
                                  <span>{s.level}%</span>
                                </div>
                                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                                  <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: `${s.level}%` }}
                                    transition={{ duration: 1.2, delay: i * 0.2, ease: "easeOut" }}
                                    className={`h-full ${s.color} rounded-full`}
                                  />
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ))}
                    
                    {isTyping && (
                      <div className="flex flex-col gap-1 animate-pulse">
                        <span className="text-[10px] uppercase tracking-widest text-emerald-400 flex items-center gap-1">
                          <Bot className="h-3 w-3" /> murtaza_ai:~$
                        </span>
                        <div className="flex gap-1.5 pt-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/50 animate-bounce"></span>
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/50 animate-bounce" style={{ animationDelay: '0.15s' }}></span>
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/50 animate-bounce" style={{ animationDelay: '0.3s' }}></span>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </div>

                <form onSubmit={handleSend} className="border-t border-zinc-800 bg-zinc-950/80 p-3 flex gap-2">
                  <div className="flex-1 relative flex items-center">
                    <span className="absolute left-3 text-emerald-500 font-mono text-xs font-bold">&gt;</span>
                    <input
                      type="text"
                      value={inputValue}
                      onChange={handleInputChange}
                      placeholder="Query system or /help..."
                      disabled={isTyping}
                      className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg py-2.5 pl-7 pr-3 text-[13px] font-mono text-white placeholder-zinc-600 outline-none focus:border-emerald-500/50 focus:bg-black transition-colors disabled:opacity-50"
                      autoComplete="off"
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={!inputValue.trim() || isTyping}
                    className="flex items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-3 text-emerald-400 transition-colors hover:bg-emerald-500 hover:text-zinc-950 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}