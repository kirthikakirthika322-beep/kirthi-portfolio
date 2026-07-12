import React from "react";
// Ippo Framer Motion-ai import panniruken (ithu thaan correct method)
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <div className="relative mb-8">
          <div className="w-64 h-64 rounded-full border-4 border-indigo-500/20 p-2 overflow-hidden bg-slate-900">
            <img 
              src="/profile1.jpg" 
              alt="V. Kirthika" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          {/* React Badge */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            className="absolute top-4 -right-8 bg-slate-900 border border-indigo-500/30 px-4 py-2 rounded-full flex items-center gap-2 text-white shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            <span className="text-sm font-medium">React</span>
          </motion.div>

          {/* Tailwind Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            className="absolute bottom-4 -left-8 bg-slate-900 border border-pink-500/30 px-4 py-2 rounded-full flex items-center gap-2 text-white shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-pink-400"></span>
            <span className="text-sm font-medium">Tailwind</span>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <div className="inline-block px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm mb-4">
            Available for opportunities
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">V. Kirthika</h1>
          <p className="text-xl text-indigo-400 font-semibold mb-6">Front-End Developer</p>
          <p className="text-slate-400 text-lg leading-relaxed">
            Building responsive, modern, and user-friendly web experiences. 
            Final year Computer Science & Engineering student specializing in production-ready front-end development.
          </p>
        </motion.div>

      </div>
    </section>
  );
}