import React from "react";
import { Github, Mail, Heart, Terminal, Cpu } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  const currentYear = 2026;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navHeight = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-slate-900 pb-8">
          
          {/* Logo / Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-2 group"
            >
              <div className="p-1.5 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 text-white group-hover:scale-105 transition-transform duration-300">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-base tracking-wider text-white">
                V. KIRTHIKA
              </span>
            </a>
            <p className="text-slate-500 text-[10px] font-mono tracking-widest mt-1">
              FRONT-END DEVELOPER & UI/UX ENGINEER
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs font-mono text-slate-400">
            {["Home", "About", "Skills", "Experience", "Project", "Education", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, `#${item.toLowerCase()}`)}
                className="hover:text-indigo-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4 text-slate-400">
            <a
              href="https://github.com/kirthikakirthika322-beep"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-850 hover:text-white border border-slate-850 transition-all cursor-pointer"
              aria-label="GitHub"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
            <a
              href="mailto:kirthikakirthika322@gmail.com"
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-850 hover:text-white border border-slate-850 transition-all cursor-pointer"
              aria-label="Email"
            >
              <Mail className="w-4.5 h-4.5" />
            </a>
          </div>

        </div>

        {/* Legal / Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-[11px] font-mono text-slate-500">
          <p>© {currentYear} V. Kirthika. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built with React + Vite + Tailwind CSS</span>
            <Heart className="w-3 h-3 text-indigo-500 animate-pulse fill-indigo-500" />
          </p>
        </div>

      </div>
    </footer>
  );
}
