import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Check, TerminalSquare, Copy, MessageSquareText, UserCircle } from 'lucide-react';
import { SiWhatsapp, SiGithub, SiInstagram } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [copiedField, setCopiedField] = useState(null);
  const [mobileTab, setMobileTab] = useState("form"); // "form" or "info"
  
  // Terminal Animation States
  const [isSending, setIsSending] = useState(false);
  const [sendLogs, setSendLogs] = useState([]);

  // HAPTIC FEEDBACK TRIGGER FOR MOBILE
  const triggerHaptic = (intensity = 30) => {
    if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(intensity);
    }
  };

  // ADVANCED HANDLE SUBMIT WITH TERMINAL ANIMATION & API FETCH
  const handleSubmit = async (e) => {
    e.preventDefault();
    triggerHaptic(50);
    if (!formData.name || !formData.email || !formData.message) return;

    // 1. Lock screen and start terminal animation
    setIsSending(true);
    setSendLogs([]);
    document.body.style.overflow = 'hidden';

    const bootSequence = [
      "> INITIATING SECURE CONNECTION...",
      "> ENCRYPTING PAYLOAD...",
      "> RESOLVING MAIL SERVER DESTINATION...",
      "> TRANSMITTING DATA PACKETS..."
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < bootSequence.length) {
        setSendLogs(prev => [...prev, bootSequence[i]]);
        i++;
      } else {
        clearInterval(interval);
        executeServerRequest();
      }
    }, 400); // Speed of the terminal typing
  };

  const executeServerRequest = async () => {
    try {
      // 2. Send the actual email using Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "a052925d-c5a6-4849-8a3f-e4d82fd95787", // <--- PASTE YOUR KEY HERE
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Inquiry from ${formData.name}`
        })
      });

      if (response.ok) {
        setSendLogs(prev => [...prev, "> 200 OK: TRANSMISSION SUCCESSFUL", "> CONNECTION CLOSED."]);
        // Reset form and close terminal after a delay
        setTimeout(() => {
          setIsSending(false);
          setFormData({ name: "", email: "", message: "" });
          document.body.style.overflow = 'unset';
        }, 2500);
      } else {
        throw new Error("Server rejected request");
      }
    } catch (error) {
      setSendLogs(prev => [...prev, "> ERR_CONNECTION_REFUSED", "> TRANSMISSION FAILED. PLEASE TRY DIRECT EMAIL."]);
      setTimeout(() => {
        setIsSending(false);
        document.body.style.overflow = 'unset';
      }, 3500);
    }
  };

  // Handle Copy to Clipboard
  const handleCopy = (text, field) => {
    triggerHaptic();
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="relative bg-zinc-950 px-4 sm:px-6 py-20 lg:py-32 text-white overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-0 -z-10 h-[400px] lg:h-[600px] w-[400px] lg:w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full bg-emerald-500/10 blur-[100px] lg:blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-10 lg:mb-16 text-center lg:text-left flex flex-col lg:flex-row justify-between items-center gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs lg:text-sm font-mono mb-4">
              <TerminalSquare className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
              <span>./initiate_connection</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight sm:text-5xl">
              Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Together</span>
            </h2>
          </div>
          
          {/* Status Indicator */}
          <div className="flex items-center gap-3 rounded-2xl border border-zinc-800/80 bg-zinc-900/50 px-4 lg:px-5 py-2.5 lg:py-3 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5 lg:h-3 lg:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 lg:h-3 lg:w-3 bg-emerald-500"></span>
            </span>
            <div className="flex flex-col text-left">
              <span className="text-xs lg:text-sm font-bold text-white">Available for Work</span>
              <span className="text-[10px] lg:text-xs text-zinc-400 font-mono">Accepting new projects</span>
            </div>
          </div>
        </motion.div>

        {/* ------------------------------------------------------------- */}
        {/* DESKTOP UI: 100% UNTOUCHED ORIGINAL GRID                    */}
        {/* ------------------------------------------------------------- */}
        <div className="hidden lg:grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Interactive Contact Details (Left Side) */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            
            {/* Email Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleCopy("murtazadawoodjee.connect@gmail.com", "email")}
              className="group relative cursor-pointer overflow-hidden rounded-3xl border border-zinc-800/60 bg-zinc-900/40 p-6 backdrop-blur-md transition-all hover:border-emerald-500/40 hover:bg-zinc-900/80"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-800/80 text-emerald-400 transition-colors group-hover:bg-emerald-500/10">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-1">Email Address</p>
                    <p className="text-sm sm:text-base font-medium text-zinc-300 group-hover:text-white transition-colors">
                      murtazadawoodjee.connect<br className="hidden sm:block lg:hidden" />@gmail.com
                    </p>
                  </div>
                </div>
                <div className="text-zinc-600 transition-colors group-hover:text-emerald-400">
                  {copiedField === "email" ? <Check className="h-5 w-5 text-emerald-400" /> : <Copy className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />}
                </div>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleCopy("+91 8208266645", "phone")}
              className="group relative cursor-pointer overflow-hidden rounded-3xl border border-zinc-800/60 bg-zinc-900/40 p-6 backdrop-blur-md transition-all hover:border-emerald-500/40 hover:bg-zinc-900/80"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-800/80 text-emerald-400 transition-colors group-hover:bg-emerald-500/10">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-1">Phone Number</p>
                    <p className="text-base font-medium text-zinc-300 group-hover:text-white transition-colors">
                      +91 8208266645
                    </p>
                  </div>
                </div>
                <div className="text-zinc-600 transition-colors group-hover:text-emerald-400">
                  {copiedField === "phone" ? <Check className="h-5 w-5 text-emerald-400" /> : <Copy className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />}
                </div>
              </div>
            </motion.div>

            {/* Location Card */}
            <div className="relative overflow-hidden rounded-3xl border border-zinc-800/60 bg-zinc-900/40 p-6 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-800/80 text-emerald-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-1">Local Time & Location</p>
                  <p className="text-base font-medium text-zinc-300">
                    Ratlam (M.P), India
                  </p>
                </div>
              </div>
            </div>

            {/* DESKTOP SOCIAL LINKS */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com/murtzdev07" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-800/60 bg-zinc-900/40 text-zinc-400 transition-all hover:bg-zinc-800 hover:text-white">
                <SiGithub className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/murtaza-dawoodjee" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-800/60 bg-zinc-900/40 text-zinc-400 transition-all hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/30">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/murtaza_0710" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-800/60 bg-zinc-900/40 text-zinc-400 transition-all hover:bg-pink-500/10 hover:text-pink-400 hover:border-pink-500/30">
                <SiInstagram className="h-5 w-5" />
              </a>
              <a href="https://wa.me/918208266645?" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-800/60 bg-zinc-900/40 text-zinc-400 transition-all hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/30">
                <SiWhatsapp className="h-5 w-5" />
              </a>
            </div>

            {/* Footer Tag */}
            <div className="pt-2 pl-2 text-xs font-mono text-zinc-600">
              © {new Date().getFullYear()} Murtaza Dawoodjeewala. All rights reserved.
            </div>
          </div>

          {/* Contact Form (Right Side) */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="relative flex flex-col justify-between space-y-6 rounded-3xl border border-zinc-800/60 bg-zinc-900/40 p-8 sm:p-10 backdrop-blur-md shadow-2xl">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-emerald-500/30 rounded-tl-3xl m-1 pointer-events-none"></div>
              <div className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-emerald-500/30 rounded-tr-3xl m-1 pointer-events-none"></div>
              
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="group">
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-zinc-500 mb-2 transition-colors group-focus-within:text-emerald-400">Your Name</label>
                    <input 
                      type="text" 
                      required
                      disabled={isSending}
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe" 
                      className="w-full rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-3.5 text-sm text-white placeholder-zinc-700 outline-none transition-all focus:border-emerald-500/50 focus:bg-zinc-900/80 focus:ring-1 focus:ring-emerald-500/50 disabled:opacity-50"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-zinc-500 mb-2 transition-colors group-focus-within:text-emerald-400">Your Email</label>
                    <input 
                      type="email" 
                      required
                      disabled={isSending}
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@example.com" 
                      className="w-full rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-3.5 text-sm text-white placeholder-zinc-700 outline-none transition-all focus:border-emerald-500/50 focus:bg-zinc-900/80 focus:ring-1 focus:ring-emerald-500/50 disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-zinc-500 mb-2 transition-colors group-focus-within:text-emerald-400">Message Payload</label>
                  <textarea 
                    rows={5} 
                    required
                    disabled={isSending}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell me about your project, timeline, and goals..." 
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-4 text-sm text-white placeholder-zinc-700 outline-none transition-all resize-none focus:border-emerald-500/50 focus:bg-zinc-900/80 focus:ring-1 focus:ring-emerald-500/50 disabled:opacity-50"
                  ></textarea>
                </div>
              </div>

              {/* Action Buttons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <button 
                  type="submit" 
                  disabled={isSending}
                  className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-4 text-sm font-bold text-zinc-950 transition-all hover:bg-emerald-400 active:scale-[0.98] overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Initialize Send
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
                </button>

                <a 
                  href="https://wa.me/918208266645?text=Hi%20Murtaza,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect!" 
                  target="_blank" 
                  rel="noreferrer"
                  onClick={() => triggerHaptic()}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-4 text-sm font-bold text-[#25D366] transition-all hover:bg-[#25D366] hover:text-white active:scale-[0.98]"
                >
                  Chat on WhatsApp
                  <SiWhatsapp className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </a>
              </div>
            </form>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MOBILE EXCLUSIVE UI: iOS Style Segmented App Control        */}
        {/* ------------------------------------------------------------- */}
        <div className="lg:hidden flex flex-col">
          
          {/* iOS-Style Segmented Tab Switcher */}
          <div className="flex w-full p-1 bg-zinc-900/80 border border-zinc-800/80 rounded-2xl mb-6 backdrop-blur-xl relative">
            <button 
              onClick={() => { triggerHaptic(); setMobileTab("form"); }}
              className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-3 text-xs font-bold transition-colors ${mobileTab === "form" ? "text-white" : "text-zinc-500"}`}
            >
              <MessageSquareText className="h-4 w-4" />
              Direct Message
            </button>
            <button 
              onClick={() => { triggerHaptic(); setMobileTab("info"); }}
              className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-3 text-xs font-bold transition-colors ${mobileTab === "info" ? "text-white" : "text-zinc-500"}`}
            >
              <UserCircle className="h-4 w-4" />
              Contact Info
            </button>
            
            {/* Sliding Tab Indicator Background */}
            <motion.div 
              className="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-xl bg-zinc-800 border border-zinc-700 shadow-md"
              initial={false}
              animate={{ x: mobileTab === "form" ? "0%" : "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          </div>

          {/* Tab Content Display Area */}
          <div className="relative min-h-[480px]">
            <AnimatePresence mode="wait">
              
              {/* MOBILE FORM VIEW */}
              {mobileTab === "form" && (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <form onSubmit={handleSubmit} className="flex flex-col space-y-5 rounded-3xl border border-zinc-800/60 bg-zinc-900/40 p-5 sm:p-8 backdrop-blur-md shadow-2xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="group">
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1.5 transition-colors group-focus-within:text-emerald-400">Your Name</label>
                        <input 
                          type="text" 
                          required
                          disabled={isSending}
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="John Doe" 
                          className="w-full rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-3.5 text-sm text-white placeholder-zinc-700 outline-none transition-all focus:border-emerald-500/50 focus:bg-zinc-900/80 focus:ring-1 focus:ring-emerald-500/50 disabled:opacity-50"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1.5 transition-colors group-focus-within:text-emerald-400">Your Email</label>
                        <input 
                          type="email" 
                          required
                          disabled={isSending}
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="john@example.com" 
                          className="w-full rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-3.5 text-sm text-white placeholder-zinc-700 outline-none transition-all focus:border-emerald-500/50 focus:bg-zinc-900/80 focus:ring-1 focus:ring-emerald-500/50 disabled:opacity-50"
                        />
                      </div>
                    </div>
                    <div className="group flex-1">
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1.5 transition-colors group-focus-within:text-emerald-400">Message Payload</label>
                      <textarea 
                        rows={4} 
                        required
                        disabled={isSending}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell me about your project, timeline, and goals..." 
                        className="w-full rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-4 text-sm text-white placeholder-zinc-700 outline-none transition-all resize-none focus:border-emerald-500/50 focus:bg-zinc-900/80 focus:ring-1 focus:ring-emerald-500/50 disabled:opacity-50"
                      ></textarea>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <button 
                        type="submit" 
                        disabled={isSending}
                        className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3.5 text-sm font-bold text-zinc-950 transition-all hover:bg-emerald-400 active:scale-[0.98] overflow-hidden disabled:opacity-50"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          Initialize Send <Send className="h-4 w-4" />
                        </span>
                      </button>
                      <a 
                        href="https://wa.me/918208266645?text=Hi%20Murtaza,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect!" 
                        target="_blank" 
                        rel="noreferrer"
                        onClick={() => triggerHaptic()}
                        className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-3.5 text-sm font-bold text-[#25D366] transition-all hover:bg-[#25D366] hover:text-white active:scale-[0.98]"
                      >
                        Chat on WhatsApp <SiWhatsapp className="h-4 w-4" />
                      </a>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* MOBILE CONTACT INFO VIEW */}
              {mobileTab === "info" && (
                <motion.div
                  key="info"
                  initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col space-y-3"
                >
                  <motion.div 
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleCopy("murtazadawoodjee.connect@gmail.com", "email")}
                    className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-800/60 bg-zinc-900/40 p-5 backdrop-blur-md transition-all hover:border-emerald-500/40 hover:bg-zinc-900/80 active:bg-zinc-800"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-zinc-800/80 text-emerald-400">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-0.5">Email Address</p>
                        <p className="text-sm font-medium text-zinc-200 truncate">murtazadawoodjee.connect<br/>@gmail.com</p>
                      </div>
                      <div className="shrink-0 text-zinc-600">
                        {copiedField === "email" ? <Check className="h-5 w-5 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleCopy("+91 8208266645", "phone")}
                    className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-800/60 bg-zinc-900/40 p-5 backdrop-blur-md transition-all hover:border-emerald-500/40 hover:bg-zinc-900/80 active:bg-zinc-800"
                  >
                    <div className="flex items-center gap-4 mb-1">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-zinc-800/80 text-emerald-400">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-0.5">Phone Number</p>
                        <p className="text-base font-medium text-zinc-200">+91 8208266645</p>
                      </div>
                      <div className="shrink-0 text-zinc-600">
                        {copiedField === "phone" ? <Check className="h-5 w-5 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                      </div>
                    </div>
                  </motion.div>

                  <div className="relative overflow-hidden rounded-3xl border border-zinc-800/60 bg-zinc-900/40 p-5 backdrop-blur-md">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-zinc-800/80 text-emerald-400">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-0.5">Location</p>
                        <p className="text-sm font-medium text-zinc-200">Ratlam (M.P), India</p>
                      </div>
                    </div>
                  </div>

                  {/* MOBILE SOCIAL GRID */}
                  <div className="grid grid-cols-4 gap-3 pt-1">
                    <motion.a 
                      whileTap={{ scale: 0.95 }}
                      href="https://github.com/murtzdev07" 
                      target="_blank" 
                      rel="noreferrer"
                      onClick={() => triggerHaptic()}
                      className="flex h-14 items-center justify-center rounded-2xl border border-zinc-800/60 bg-zinc-900/40 text-zinc-400 transition-all hover:bg-zinc-800 hover:text-white active:bg-zinc-800"
                    >
                      <SiGithub className="h-6 w-6" />
                    </motion.a>
                    <motion.a 
                      whileTap={{ scale: 0.95 }}
                      href="https://linkedin.com/in/murtaza-dawoodjee" 
                      target="_blank" 
                      rel="noreferrer"
                      onClick={() => triggerHaptic()}
                      className="flex h-14 items-center justify-center rounded-2xl border border-zinc-800/60 bg-zinc-900/40 text-zinc-400 transition-all hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/30 active:bg-zinc-800"
                    >
                      <FaLinkedin className="h-6 w-6" />
                    </motion.a>
                    <motion.a 
                      whileTap={{ scale: 0.95 }}
                      href="https://instagram.com/murtaza_0710" 
                      target="_blank" 
                      rel="noreferrer"
                      onClick={() => triggerHaptic()}
                      className="flex h-14 items-center justify-center rounded-2xl border border-zinc-800/60 bg-zinc-900/40 text-zinc-400 transition-all hover:bg-pink-500/10 hover:text-pink-400 hover:border-pink-500/30 active:bg-zinc-800"
                    >
                      <SiInstagram className="h-6 w-6" />
                    </motion.a>
                    <motion.a 
                      whileTap={{ scale: 0.95 }}
                      href="https://wa.me/918208266645?" 
                      target="_blank" 
                      rel="noreferrer"
                      onClick={() => triggerHaptic()}
                      className="flex h-14 items-center justify-center rounded-2xl border border-zinc-800/60 bg-zinc-900/40 text-zinc-400 transition-all hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/30 active:bg-zinc-800"
                    >
                      <SiWhatsapp className="h-6 w-6" />
                    </motion.a>
                  </div>
                  
                  {/* Mobile Footer Tag */}
                  <div className="pt-4 pb-12 text-center text-[10px] font-mono text-zinc-600">
                    © {new Date().getFullYear()} Murtaza Dawoodjeewala.<br/>All rights reserved.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>

      {/* ------------------------------------------------------------- */}
      {/* FULL SCREEN TERMINAL BOOT SEQUENCE OVERLAY (Form Submission)  */}
      {/* ------------------------------------------------------------- */}
      <AnimatePresence>
        {isSending && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-zinc-950/90"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-zinc-700/50 bg-zinc-900/90 shadow-2xl shadow-emerald-950/20 backdrop-blur-2xl z-10 flex flex-col p-8 font-mono text-sm text-emerald-400 min-h-[40vh]"
            >
              <div className="flex gap-2 mb-8">
                <div className="h-3 w-3 rounded-full bg-red-500/80 border border-red-500/50"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500/80 border border-yellow-500/50"></div>
                <div className="h-3 w-3 rounded-full bg-green-500/80 border border-green-500/50"></div>
              </div>
              <div className="space-y-2">
                {sendLogs.map((log, i) => (
                  <div key={i} className="animate-[fadeIn_0.1s_ease-out]">{log}</div>
                ))}
                <span className="animate-pulse font-bold">_</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}