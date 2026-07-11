import React, { useEffect, useState } from "react";
import { Terminal } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400); // slight pause at 100%
          return 100;
        }
        // randomized increment for realistic speed variation
        const increment = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-center p-4">
      {/* Soft backlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-indigo-600/10 blur-[80px] pointer-events-none" />

      <div className="max-w-xs w-full text-center space-y-6 relative z-10">
        
        {/* Animated logo node */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto p-3.5 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white w-fit shadow-lg shadow-indigo-500/20"
        >
          <Terminal className="w-8 h-8 animate-pulse" />
        </motion.div>

        {/* Brand Text */}
        <div className="space-y-1">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-display font-black text-2xl tracking-widest text-white uppercase"
          >
            V. Kirthika
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.3 }}
            className="text-[10px] font-mono tracking-widest text-indigo-400 uppercase"
          >
            Compiling Portfolio Environment
          </motion.p>
        </div>

        {/* Loading Progress indicators */}
        <div className="space-y-2 pt-4">
          <div className="h-1 w-full bg-slate-900 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
            <span>STATIC ASSETS</span>
            <span>{progress}%</span>
          </div>
        </div>

      </div>
    </div>
  );
}
