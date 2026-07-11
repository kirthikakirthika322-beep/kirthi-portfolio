import { Briefcase, Calendar, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string[];
  skills: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      role: "Frontend Development Intern",
      company: "Qbatsclay",
      duration: "15 Days",
      description: [
        "Worked on modular, highly responsive user interface component designs using React and Vite.",
        "Collaborated with senior developers to transform wireframes into modern, responsive, pixel-perfect frontend elements.",
        "Optimized client-side rendering structures and maintained pristine source code standards in the workspace.",
      ],
      skills: ["React.js", "Vite", "Tailwind CSS", "Responsive UI", "Collaborative Git"],
    },
    {
      role: "Generative AI Intern",
      company: "AI Developer Program",
      duration: "15 Days",
      description: [
        "Contributed to designing and developing an AI-powered WhatsApp Lead Management CRM Platform.",
        "Created modern React interface modules to manage lead pipelines and monitor intelligent chatbot responses.",
        "Learned prompt structuring and explored interfacing backend models with the frontend client to optimize user interactions.",
      ],
      skills: ["Generative AI Concepts", "React Frontend", "CRM UX Design", "API Integrations"],
    },
  ];

  return (
    <section id="experience" className="relative py-20 bg-slate-950 border-t border-slate-900 overflow-hidden">
      {/* Dynamic light spot */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] rounded-full bg-purple-600/[0.02] blur-[110px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
            <span>Professional Milestones</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Work <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Experience</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full origin-left"
          />
        </div>

        {/* Timeline Line & Cards Container */}
        <div className="relative border-l border-slate-900 ml-4 md:ml-32 pl-8 md:pl-12 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Dot (Floating indicator) */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-purple-400 transition-all duration-300">
                <Briefcase className="w-3 h-3 text-indigo-400 group-hover:text-purple-300" />
              </div>

              {/* Company Logo Side-Stamp on Desktop */}
              <div className="hidden md:block absolute -left-44 top-1 text-right w-28">
                <p className="font-display font-bold text-slate-200 text-sm">{exp.company}</p>
                <div className="flex items-center gap-1 justify-end text-slate-500 text-[10px] font-mono mt-1">
                  <Calendar className="w-3 h-3" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Experience Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl relative overflow-hidden hover:bg-slate-900/40 hover:border-indigo-500/25 transition-all duration-300">
                
                {/* Duration/Company Header (Mobile Only) */}
                <div className="md:hidden flex flex-wrap justify-between items-center gap-2 mb-4 border-b border-slate-900 pb-3">
                  <span className="font-display font-bold text-white text-sm">{exp.company}</span>
                  <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                    <Calendar className="w-3 h-3" />
                    {exp.duration}
                  </span>
                </div>

                {/* Job Title */}
                <h4 className="font-display font-bold text-xl text-white tracking-wide group-hover:text-indigo-400 transition-colors duration-300">
                  {exp.role}
                </h4>
                
                {/* Desktop subtitle fallback for simple layout */}
                <p className="hidden md:block text-xs font-mono text-indigo-400 mt-1 uppercase tracking-wide">
                  Internship
                </p>

                {/* Accomplishment details */}
                <ul className="mt-5 space-y-2.5 text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                  {exp.description.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="mt-1.5 p-0.5 rounded-full bg-indigo-500/10 text-indigo-400 flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills used */}
                <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-slate-900">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono px-2.5 py-1 bg-slate-950 text-indigo-300 rounded-md border border-indigo-500/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
