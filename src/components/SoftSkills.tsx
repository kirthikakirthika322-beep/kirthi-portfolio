import React from "react";
import { MessageSquare, Crown, Zap, Handshake, Lightbulb, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface SoftSkillItem {
  name: string;
  desc: string;
  icon: React.ReactNode;
  colorClass: string;
}

export default function SoftSkills() {
  const softSkills: SoftSkillItem[] = [
    {
      name: "Communication",
      desc: "Articulates technical concepts clearly, actively listens, and writes structured documentation.",
      icon: <MessageSquare className="w-5 h-5" />,
      colorClass: "from-blue-500/10 to-indigo-500/10 text-blue-400 border-blue-500/20",
    },
    {
      name: "Leadership",
      desc: "Takes proactive ownership, guides initiatives, and coordinates team tasks effectively.",
      icon: <Crown className="w-5 h-5" />,
      colorClass: "from-purple-500/10 to-pink-500/10 text-purple-400 border-purple-500/20",
    },
    {
      name: "Quick Learner",
      desc: "Rapidly absorbs new libraries, tools, and technical specifications with active curiosity.",
      icon: <Zap className="w-5 h-5" />,
      colorClass: "from-amber-500/10 to-orange-500/10 text-amber-400 border-amber-500/20",
    },
    {
      name: "Teamwork",
      desc: "Collaborates fluidly across diverse skill levels, respecting feedback and contributions.",
      icon: <Handshake className="w-5 h-5" />,
      colorClass: "from-emerald-500/10 to-teal-500/10 text-emerald-400 border-emerald-500/20",
    },
    {
      name: "Problem Solving",
      desc: "Deconstructs complex system challenges systematically into modular, solvable blocks.",
      icon: <Lightbulb className="w-5 h-5" />,
      colorClass: "from-cyan-500/10 to-blue-500/10 text-cyan-400 border-cyan-500/20",
    },
  ];

  return (
    <section id="soft-skills" className="relative py-20 bg-slate-950 border-t border-slate-900 overflow-hidden">
      {/* Backlighting */}
      <div className="absolute top-1/3 right-0 w-[350px] h-[350px] rounded-full bg-purple-600/[0.02] blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/10 text-purple-300 text-xs font-mono uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Core Attributes</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Soft <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full origin-left"
          />
        </div>

        {/* Soft Skills Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`glass-panel p-6 rounded-2xl border flex flex-col justify-between group hover:bg-slate-900/45 transition-all duration-300 ${skill.colorClass.split(" ").slice(-1)[0]}`}
            >
              <div className="space-y-4">
                {/* Icon wrapper with custom gradients */}
                <div className={`p-3 rounded-xl border w-fit bg-gradient-to-br transition-all duration-300 group-hover:scale-110 ${skill.colorClass}`}>
                  {skill.icon}
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-display font-bold text-white text-base">
                    {skill.name}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed font-sans min-h-[64px]">
                    {skill.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
