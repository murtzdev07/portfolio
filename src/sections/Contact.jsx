import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Check, TerminalSquare, Copy } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [copiedField, setCopiedField] = useState(null);

  // Handle Form Submission (Opens native email client)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Hi Murtaza,\n\n${formData.message}\n\n---\nSender Email: ${formData.email}\nName: ${formData.name}`);
    window.location.href = `mailto:murtazadawoodjee.connect@gmail.com?subject=${subject}&body=${body}`;
  };

  // Handle Copy to Clipboard
  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="relative bg-zinc-950 px-6 py-32 text-white overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-0 -z-10 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center lg:text-left flex flex-col lg:flex-row justify-between items-center gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-mono mb-4">
              <TerminalSquare className="h-4 w-4" />
              <span>./initiate_connection</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Together</span>
            </h2>
          </div>
          
          {/* Status Indicator */}
          <div className="flex items-center gap-3 rounded-2xl border border-zinc-800/80 bg-zinc-900/50 px-5 py-3 backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <div className="flex flex-col text-left">
              <span className="text-sm font-bold text-white">Available for Work</span>
              <span className="text-xs text-zinc-400 font-mono">Accepting new projects</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          
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

            {/* Footer Tag */}
            <div className="pt-4 pl-2 text-xs font-mono text-zinc-600">
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
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe" 
                      className="w-full rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-3.5 text-sm text-white placeholder-zinc-700 outline-none transition-all focus:border-emerald-500/50 focus:bg-zinc-900/80 focus:ring-1 focus:ring-emerald-500/50"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-zinc-500 mb-2 transition-colors group-focus-within:text-emerald-400">Your Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@example.com" 
                      className="w-full rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-3.5 text-sm text-white placeholder-zinc-700 outline-none transition-all focus:border-emerald-500/50 focus:bg-zinc-900/80 focus:ring-1 focus:ring-emerald-500/50"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-zinc-500 mb-2 transition-colors group-focus-within:text-emerald-400">Message Payload</label>
                  <textarea 
                    rows={5} 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell me about your project, timeline, and goals..." 
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-4 text-sm text-white placeholder-zinc-700 outline-none transition-all resize-none focus:border-emerald-500/50 focus:bg-zinc-900/80 focus:ring-1 focus:ring-emerald-500/50"
                  ></textarea>
                </div>
              </div>

              {/* Action Buttons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <button 
                  type="submit" 
                  className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-4 text-sm font-bold text-zinc-950 transition-all hover:bg-emerald-400 active:scale-[0.98] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Initialize Send
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                  {/* Button shine effect */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
                </button>

                <a 
                  href="https://wa.me/918208266645?text=Hi%20Murtaza,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect!" 
                  target="_blank" 
                  rel="noreferrer"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-4 text-sm font-bold text-[#25D366] transition-all hover:bg-[#25D366] hover:text-white active:scale-[0.98]"
                >
                  Chat on WhatsApp
                  <SiWhatsapp className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}