import React from "react";
import { Code2, Globe, Laptop, GitBranch, Github, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface SkillItem {
  name: string;
  level: number;
  icon: React.ReactNode;
  desc: string;
}

export default function Skills() {
  const frontendSkills: SkillItem[] = [
    {
      name: "React.js",
      level: 85,
      icon: <Code2 className="w-5 h-5 text-blue-400" />,
      desc: "SPA development, hooks, state management, components, & context",
    },
    {
      name: "Vite",
      level: 80,
      icon: <Laptop className="w-5 h-5 text-indigo-400" />,
      desc: "Next-gen fast frontend tooling, configuration, & production building",
    },
    {
      name: "HTML5",
      level: 90,
      icon: <Globe className="w-5 h-5 text-amber-500" />,
      desc: "Semantic elements, web standards, structuring rich web layouts",
    },
    {
      name: "CSS3 & Tailwind",
      level: 88,
      icon: <Globe className="w-5 h-5 text-cyan-400" />,
      desc: "Responsive stylesheets, flexbox, grid, Tailwind utility configs",
    },
    {
      name: "JavaScript",
      level: 82,
      icon: <Code2 className="w-5 h-5 text-yellow-500" />,
      desc: "Modern ES6+ syntax, asynchronous programming, DOM manipulations",
    },
    {
      name: "Responsive Design",
      level: 92,
      icon: <Laptop className="w-5 h-5 text-emerald-400" />,
      desc: "Adaptive UI layout strategies, media queries, mobile-first approach",
    },
  ];

  const toolsSkills: SkillItem[] = [
    {
      name: "Git",
      level: 85,
      icon: <GitBranch className="w-5 h-5 text-orange-500" />,
      desc: "Local version control, staging, commits, branch management",
    },
    {
      name: "GitHub",
      level: 88,
      icon: <Github className="w-5 h-5 text-white" />,
      desc: "Remote repositories, pull requests, collaboration, project flows",
    },
  ];

  return (
    <section id="skills" className="relative py-20 bg-slate-950 border-t border-slate-900 overflow-hidden">
      {/* Decorative background lights */}
      <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] rounded-full bg-blue-600/[0.02] blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-500/10 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Technical Capabilities</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Skills & <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Technologies</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full origin-left"
          />
        </div>

        {/* Skills Sub-Grids */}
        <div className="space-y-12">
          
          {/* Frontend Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b border-slate-900 pb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <h3 className="font-display font-bold text-lg text-white tracking-wide">
                Frontend Development
              </h3>
              <span className="text-xs font-mono text-slate-500 ml-2">({frontendSkills.length} skills)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="glass-panel p-6 rounded-2xl hover:bg-slate-900/40 relative overflow-hidden group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 group-hover:text-white group-hover:border-indigo-500/20 transition-all duration-300">
                        {skill.icon}
                      </div>
                      <h4 className="font-display font-bold text-white text-base tracking-wide">
                        {skill.name}
                      </h4>
                    </div>
                    <span className="text-xs font-mono font-bold text-indigo-400">
                      {skill.level}%
                    </span>
                  </div>

                  <p className="text-slate-400 text-xs leading-relaxed mb-4 min-h-[32px]">
                    {skill.desc}
                  </p>

                  {/* Level Progress Bar Wrapper */}
                  <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools & Workflow Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b border-slate-900 pb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
              <h3 className="font-display font-bold text-lg text-white tracking-wide">
                Tools & Version Control
              </h3>
              <span className="text-xs font-mono text-slate-500 ml-2">({toolsSkills.length} skills)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {toolsSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="glass-panel p-6 rounded-2xl hover:bg-slate-900/40 relative overflow-hidden group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 group-hover:text-white group-hover:border-indigo-500/20 transition-all duration-300">
                        {skill.icon}
                      </div>
                      <h4 className="font-display font-bold text-white text-base tracking-wide">
                        {skill.name}
                      </h4>
                    </div>
                    <span className="text-xs font-mono font-bold text-indigo-400">
                      {skill.level}%
                    </span>
                  </div>

                  <p className="text-slate-400 text-xs leading-relaxed mb-4 min-h-[32px]">
                    {skill.desc}
                  </p>

                  {/* Level Progress Bar Wrapper */}
                  <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
