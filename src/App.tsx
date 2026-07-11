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

  // Track active section using IntersectionObserver
  useEffect(() => {
    if (isLoading) return;

    const sections = ["home", "about", "skills", "experience", "project", "education", "contact"];
    
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section occupies the sweet spot of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [isLoading]);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div key="loader" className="w-full h-full">
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col min-h-screen"
          >
            {/* Header / Navbar */}
            <Navbar activeSection={activeSection} />

            {/* Main portfolio flow */}
            <main className="flex-1">
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Education />
              <SoftSkills />
              <Contact />
            </main>

            {/* Footer */}
            <Footer />

            {/* Floating scroll-to-top button */}
            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
