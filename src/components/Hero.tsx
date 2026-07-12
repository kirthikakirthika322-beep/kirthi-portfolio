import React, { useState } from "react";
import { Download, Mail, Sparkles, Code, Smartphone, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ResumeModal from "./ResumeModal";

export default function Hero() {
  const [imgError, setImgError] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleContactScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsResumeOpen(false);
    document.body.style.overflow = "auto";
    
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-x-hidden bg-slate-950"
    >
      {/* Backlighting effect */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none animate-pulse duration-[8s]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none animate-pulse duration-[10s]" />
      
      {/* Background Tech Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #4f46e5 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/40 border border-indigo-500/20 text-indigo-300 text-xs font-mono tracking-wider uppercase"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              <span>Available for Front-End Internships & Roles</span>
            </motion.div>

            <div className="space-y-3">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="block text-sm sm:text-base font-mono tracking-widest text-indigo-400 uppercase font-bold"
              >
                Hello, My name is
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
              >
                <span className="text-white">V. </span>
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Kirthika
                </span>
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg sm:text-2xl md:text-3xl font-semibold text-slate-300 font-display flex items-center justify-center lg:justify-start gap-3 mt-1"
              >
                <Code className="w-5 h-5 text-blue-500" />
                <span>Front-End Developer</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-sm sm:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 font-sans"
            >
              Building responsive, modern, and user-friendly web experiences. Focused on clean user interfaces, modular components, and fluid animations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <button
                onClick={() => setIsResumeOpen(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-mono tracking-wider font-bold uppercase rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/45 transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </button>

              <button
                onClick={handleContactScroll}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-mono tracking-wider font-bold uppercase rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-850 hover:border-slate-700 transition-all duration-300 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </button>
            </motion.div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="relative group"
            >
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-2 bg-slate-950 border border-indigo-500/30 overflow-hidden shadow-2xl flex items-center justify-center">
                {!imgError ? (
                  <img
                    src="./profile1.jpg"
                    alt="V. Kirthika Profile Photo"
                    className="w-full h-full object-cover rounded-full select-none"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 flex flex-col items-center justify-center p-6">
                    <Terminal className="w-8 h-8 text-indigo-400 mb-3" />
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">VK</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isResumeOpen && (
          <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        )}
      </AnimatePresence>
    </section>
  );
}