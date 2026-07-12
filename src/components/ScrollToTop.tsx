import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // 300px-ku mela iruntha button-ai kaatum
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    // Mobile browsers-ku compatibility irukka behavior-ai handle seivom
    window.scrollTo({
      top: 0,
      behavior: typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches 
        ? 'auto' 
        : 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={scrollToTop}
          // Mobile-il button touch target-a perusaa irukkanum (p-4)
          className="fixed bottom-8 right-8 z-[100] p-4 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-lg hover:scale-110 transition-transform duration-300 border border-indigo-400/20 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}