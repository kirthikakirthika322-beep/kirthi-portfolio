import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Project", id: "project" },
    { name: "Education", id: "education" },
    { name: "Skills", id: "soft-skills" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-slate-950/80 backdrop-blur-md py-4 border-b border-slate-800" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <span className="text-white font-bold text-xl tracking-tighter">KIRTHIKA.DEV</span>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              className={`text-sm font-medium transition-colors ${
                activeSection === link.id ? "text-indigo-400" : "text-slate-300 hover:text-indigo-400"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 p-4 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              className={`block w-full text-left py-2 ${
                activeSection === link.id ? "text-indigo-400 font-bold" : "text-slate-300"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}