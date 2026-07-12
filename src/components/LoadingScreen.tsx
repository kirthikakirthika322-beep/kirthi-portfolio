import React, { useEffect, useState, useRef } from "react";
import { Terminal } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const isMounted = useRef(true); // Component unmount aanal handle panna

  useEffect(() => {
    isMounted.current = true;
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          if (isMounted.current) {
            setTimeout(onComplete, 300);
          }
          return 100;
        }
        // Randomization-ai reduce panni smooth-aaka mathi irukken
        const increment = Math.floor(Math.random() * 10) + 3;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => {
      isMounted.current = false;
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center p-4"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-indigo-600/10 blur-[80px] pointer-events-none" />

      <div className="max-w-xs w-full text-center space-y-6 relative z-10">
        <motion.div
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto p-3.5 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white w-fit shadow-lg shadow-indigo-500/20"
        >
          <Terminal className="w-8 h-8" />
        </motion.div>

        <div className="space-y-1">
          <h1 className="font-display font-black text-2xl tracking-widest text-white uppercase">
            V. Kirthika
          </h1>
          <p className="text-[10px] font-mono tracking-widest text-indigo-400 uppercase">
            Compiling Portfolio Environment
          </p>
        </div>

        <div className="space-y-2 pt-4">
          <div className="h-1 w-full bg-slate-900 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ type: "tween", ease: "linear", duration: 0.1 }}
            />
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
            <span>LOADING...</span>
            <span>{progress}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}