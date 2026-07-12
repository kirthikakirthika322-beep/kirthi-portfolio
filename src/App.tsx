import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import SoftSkills from "./components/SoftSkills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";
import { AnimatePresence, motion } from "motion/react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (isLoading) return;

    // IMPORTANT: IDs here must EXACTLY match the IDs in the section tags below
    // Note: 'soft-skills' has a hyphen
    const sections = ["home", "about", "skills", "experience", "project", "education", "soft-skills", "contact"];
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { 
        if (entry.isIntersecting) setActiveSection(entry.target.id); 
      });
    }, { root: null, rootMargin: "-50px 0px -50% 0px", threshold: 0.1 });

    sections.forEach((id) => { 
      const el = document.getElementById(id); 
      if (el) observer.observe(el); 
    });

    return () => observer.disconnect();
  }, [isLoading]);

  return (
    <div className="w-full h-full">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div key="loader" className="w-full h-screen">
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          </motion.div>
        ) : (
          <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <Navbar activeSection={activeSection} />
            
            <main className="block w-full">
              <section id="home"><Hero /></section>
              <section id="about"><About /></section>
              <section id="skills"><Skills /></section>
              <section id="experience"><Experience /></section>
              <section id="project"><Projects /></section>
              <section id="education"><Education /></section>
              <section id="soft-skills"><SoftSkills /></section>
              <section id="contact"><Contact /></section>
            </main>
            
            <Footer />
            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}