import { X, Printer, Mail, Phone, MapPin, Github, Briefcase, GraduationCap, Code } from "lucide-react";
import { motion } from "motion/react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      {/* Container */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border border-indigo-500/20 bg-slate-900 shadow-2xl flex flex-col print:p-0 print:border-none print:bg-white print:text-slate-950 print:max-h-full"
      >
        {/* Modal Header (Hidden during Print) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-indigo-500/10 bg-slate-900/50 print:hidden">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
              <Briefcase className="w-5 h-5" />
            </span>
            <h3 className="font-display font-bold text-lg text-white">Interactive Professional Resume</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold tracking-wider uppercase rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Box (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-8 sm:p-10 bg-slate-900 text-slate-100 print:overflow-visible print:bg-white print:text-slate-950 print:p-0">
          <div className="max-w-3xl mx-auto space-y-8">
            
            {/* Header / Contact Info */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-indigo-500/10 pb-8 print:border-slate-300">
              <div>
                <h1 className="font-display text-4xl font-bold tracking-tight text-white print:text-slate-900">
                  V. Kirthika
                </h1>
                <p className="font-mono text-indigo-400 text-sm mt-1 uppercase tracking-wider font-bold print:text-indigo-600">
                  Front-End Developer
                </p>
                <p className="text-slate-400 text-sm mt-2 max-w-md print:text-slate-600">
                  Computer Science and Engineering student passionate about crafting clean, responsive, and elegant digital experiences.
                </p>
              </div>
              <div className="space-y-2 text-xs sm:text-sm font-mono text-slate-300 print:text-slate-700">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-indigo-400 print:text-indigo-600" />
                  <a href="mailto:kirthikakirthika322@gmail.com" className="hover:underline">kirthikakirthika322@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-indigo-400 print:text-indigo-600" />
                  <a href="tel:+918870844230" className="hover:underline">+91 8870844230</a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-indigo-400 print:text-indigo-600" />
                  <span>Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-indigo-400 print:text-indigo-600" />
                  <a href="https://github.com/kirthikakirthika322-beep" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/kirthikakirthika322-beep</a>
                </div>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="space-y-3">
              <h2 className="font-display text-lg font-bold tracking-wider text-white uppercase border-l-2 border-indigo-500 pl-3 print:text-slate-950 print:border-slate-800">
                Education
              </h2>
              <div className="bg-slate-950/40 p-4 rounded-xl border border-indigo-500/5 print:border-none print:bg-transparent print:p-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-white text-base print:text-slate-900">
                      Bachelor of Engineering (B.E.)
                    </h3>
                    <p className="text-slate-300 text-sm print:text-slate-700">
                      Computer Science and Engineering
                    </p>
                    <p className="text-indigo-400 text-xs font-mono mt-1 print:text-indigo-600">
                      Sardar Raja College of Engineering
                    </p>
                  </div>
                  <span className="text-xs bg-indigo-500/10 text-indigo-300 px-2.5 py-1 rounded-full font-mono print:border print:border-slate-300 print:text-slate-700">
                    Final Year
                  </span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <h2 className="font-display text-lg font-bold tracking-wider text-white uppercase border-l-2 border-indigo-500 pl-3 print:text-slate-950 print:border-slate-800">
                Experience
              </h2>
              <div className="space-y-6">
                {/* Exp 1 */}
                <div className="bg-slate-950/40 p-5 rounded-xl border border-indigo-500/5 print:border-none print:bg-transparent print:p-0">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="font-semibold text-white text-base print:text-slate-900">
                        Frontend Development Intern
                      </h3>
                      <p className="text-indigo-400 font-mono text-xs mt-1 print:text-indigo-600">
                        Qbatsclay
                      </p>
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2 py-1 rounded-md border border-slate-800 print:border-none print:p-0">
                      15 Days
                    </span>
                  </div>
                  <ul className="list-disc list-inside mt-3 space-y-1.5 text-slate-300 text-sm print:text-slate-600">
                    <li>Developed highly responsive user interface components using React and Vite.</li>
                    <li>Collaborated on wireframes and converted figma prototypes into pixel-perfect web elements.</li>
                    <li>Maintained clean, semantic, and modular source code.</li>
                  </ul>
                </div>

                {/* Exp 2 */}
                <div className="bg-slate-950/40 p-5 rounded-xl border border-indigo-500/5 print:border-none print:bg-transparent print:p-0">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="font-semibold text-white text-base print:text-slate-900">
                        Generative AI Intern
                      </h3>
                      <p className="text-indigo-400 font-mono text-xs mt-1 print:text-indigo-600">
                        AI Developer Program
                      </p>
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2 py-1 rounded-md border border-slate-800 print:border-none print:p-0">
                      15 Days
                    </span>
                  </div>
                  <ul className="list-disc list-inside mt-3 space-y-1.5 text-slate-300 text-sm print:text-slate-600">
                    <li>Worked on integrating Generative AI features with traditional CRM workflows.</li>
                    <li>Contributed to designing an AI-Powered WhatsApp Lead Management Platform.</li>
                    <li>Learned modern practices for structuring prompts and consuming AI APIs.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills & Technologies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h2 className="font-display text-lg font-bold tracking-wider text-white uppercase border-l-2 border-indigo-500 pl-3 print:text-slate-950 print:border-slate-800">
                  Technical Skills
                </h2>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["React.js", "Vite", "HTML5", "CSS3", "JavaScript", "Responsive Design", "Git", "GitHub"].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-3 py-1.5 bg-slate-950 text-indigo-300 rounded-lg border border-indigo-500/10 print:bg-transparent print:text-slate-800 print:border-slate-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-lg font-bold tracking-wider text-white uppercase border-l-2 border-indigo-500 pl-3 print:text-slate-950 print:border-slate-800">
                  Professional Attributes
                </h2>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["Communication", "Leadership", "Teamwork", "Quick Learner", "Problem Solving"].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-3 py-1.5 bg-slate-950 text-indigo-300 rounded-lg border border-indigo-500/10 print:bg-transparent print:text-slate-800 print:border-slate-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
