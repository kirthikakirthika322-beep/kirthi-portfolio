import React from "react";
import { GraduationCap, Award, Brain, Flame, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-blue-400" />,
      title: "Academic Focus",
      desc: "Final-year Computer Science & Engineering Student",
      meta: "Sardar Raja College of Engineering",
    },
    {
      icon: <Award className="w-5 h-5 text-purple-400" />,
      title: "Dual Internships",
      desc: "Completed Front-End Dev & Generative AI Internships",
      meta: "Industry Exposure",
    },
    {
      icon: <Brain className="w-5 h-5 text-pink-400" />,
      title: "Leadership & Communication",
      desc: "Skilled in organizing, managing, and collaborating in teams",
      meta: "Key Core Attributes",
    },
  ];

  const handleLearnMore = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const skillsSection = document.querySelector("#skills");
    if (skillsSection) {
      const navHeight = 80;
      const targetPos = skillsSection.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPos,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="about" className="relative py-20 bg-slate-950 border-t border-slate-900 overflow-hidden">
      {/* Decorative ambient spot */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-indigo-600/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/10 text-blue-300 text-xs font-mono uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Get to Know Me</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            About <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full origin-left"
          />
        </div>

        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Biography */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                I am a final-year Computer Science and Engineering student at{" "}
                <span className="text-blue-400">Sardar Raja College of Engineering</span>.
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                I am deeply passionate about Front-End Development, specialized in translating elegant wireframes and prototypes into clean, responsive user interfaces. My journey as a student has been fueled by constant curiosity, prompting me to work extensively with the modern React ecosystem.
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Over the course of my education, I have completed internships in both Frontend Development and Generative AI, allowing me to bridge the gap between polished user experiences and cutting-edge artificial intelligence capabilities.
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Beyond my technical competence, I possess strong communication and leadership skills. I thrive in collaborative team environments, having spearheaded college workshops and team initiatives that solve practical problems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-4"
            >
              <a
                href="#skills"
                onClick={handleLearnMore}
                className="inline-flex items-center gap-2 group text-sm font-mono tracking-wider text-indigo-400 hover:text-indigo-300 font-bold uppercase transition-colors"
              >
                <span>Explore my skill set</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Key stats cards / Highlights */}
          <div className="lg:col-span-6 space-y-4">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl flex items-start gap-4 hover:bg-slate-900/60 transition-all duration-300 group"
              >
                {/* Icon wrapper */}
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-300 group-hover:scale-110 group-hover:bg-indigo-950/40 group-hover:border-indigo-500/30 group-hover:text-indigo-400 transition-all duration-300">
                  {item.icon}
                </div>
                {/* Text description */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono tracking-widest text-indigo-400 uppercase font-bold">
                      {item.meta}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-white text-base">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
