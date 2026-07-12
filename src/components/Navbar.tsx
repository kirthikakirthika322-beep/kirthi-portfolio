import React, { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Project", href: "#project" },
    { name: "Education", href: "#education" },
    { name: "Soft Skills", href: "#softskills" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        isScrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-indigo-500/20 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" onClick={(e) => handleClick(e, "#home")} className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
            <Terminal size={22} className="text-white" />
          </div>
          <div>
            <h1 className="text-white font-bold">V. KIRTHIKA</h1>
            <p className="text-xs text-indigo-400 font-mono">FRONT-END DEV</p>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} onClick={(e) => handleClick(e, item.href)} 
               className={`px-4 py-2 rounded-full text-sm transition ${activeSection === item.href.substring(1) ? "text-white bg-indigo-600/20" : "text-slate-400 hover:text-white"}`}>
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-3 text-white rounded-xl bg-slate-900 border border-slate-700">
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: "auto", opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }} 
            // Fix: Added max-h and overflow for mobile stability
            className="md:hidden bg-slate-950 border-t border-slate-800 overflow-y-auto max-h-[80vh] w-full"
          >
            <div className="p-5 space-y-2">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={(e) => handleClick(e, item.href)} 
                  className="block p-4 text-slate-300 hover:bg-slate-900 hover:text-white rounded-lg transition"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}