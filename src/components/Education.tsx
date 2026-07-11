import { GraduationCap, Award, Calendar, BookOpen, Star, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function Education() {
  const highlights = [
    "Core focus on Algorithms, Database Systems, Software Engineering, and Web Architectures.",
    "Actively involved in technical events, coding clubs, and workshop coordination.",
    "Spearheaded practical projects combining core computing principles with creative frontend development.",
  ];

  return (
    <section id="education" className="relative py-20 bg-slate-950 border-t border-slate-900 overflow-hidden">
      {/* Decorative gradient glowing spot */}
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] rounded-full bg-blue-600/[0.02] blur-[90px] pointer-events-none animate-pulse duration-[6s]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
            <span>Academic Background</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Education & <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Qualifications</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full origin-left"
          />
        </div>

        {/* Education Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass-panel p-6 sm:p-10 rounded-3xl relative overflow-hidden group hover:border-blue-500/20"
        >
          {/* Subtle water-mark style background icon */}
          <div className="absolute right-6 bottom-6 opacity-[0.02] text-white pointer-events-none">
            <GraduationCap className="w-64 h-64" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative z-10">
            
            {/* Degree info LHS (4 cols) */}
            <div className="md:col-span-4 space-y-4">
              <div className="inline-flex p-3 bg-gradient-to-tr from-blue-600 to-indigo-600 text-white rounded-2xl shadow-lg shadow-indigo-500/10">
                <GraduationCap className="w-8 h-8" />
              </div>
              
              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-widest text-indigo-400 font-bold uppercase block">
                  Bachelor of Engineering (B.E.)
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white leading-tight">
                  Computer Science & Engineering
                </h3>
              </div>

              <div className="flex flex-col gap-2 font-mono text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-indigo-400" />
                  <span>Expected Graduation: 2027</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-indigo-400 animate-pulse" />
                  <span>Status: Final Year Student</span>
                </div>
              </div>
            </div>

            {/* University & Course Highlights RHS (8 cols) */}
            <div className="md:col-span-8 space-y-6">
              
              {/* Institution block */}
              <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-900">
                <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase block">
                  Institution
                </span>
                <h4 className="font-display font-bold text-lg sm:text-xl text-white mt-0.5">
                  Sardar Raja College of Engineering
                </h4>
                <p className="text-slate-400 text-xs mt-1.5 leading-relaxed font-sans">
                  SRCE is a premier engineering college in Tamil Nadu, dedicated to fostering high-quality technical expertise, innovative problem solving, and professional development.
                </p>
              </div>

              {/* Curricular & Extracurricular details */}
              <div className="space-y-3">
                <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase block">
                  Key Scholastic Highlights
                </span>

                <ul className="space-y-3">
                  {highlights.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-400 text-xs sm:text-sm leading-relaxed">
                      <span className="p-1 rounded-lg bg-indigo-500/10 text-indigo-400 flex-shrink-0 mt-0.5">
                        <BookOpen className="w-3.5 h-3.5" />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
