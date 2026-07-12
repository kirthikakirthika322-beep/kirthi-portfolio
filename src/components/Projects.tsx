import React, { useState, useMemo } from "react";
import { Github, ExternalLink, Sparkles, MessageSquare, BadgeHelp, CheckCircle2, Bot, Play, User } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// ... (Lead interface and data remain same as you provided)

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"overview" | "sandbox">("overview");
  const [leads, setLeads] = useState<Lead[]>([...]); // (keep your initial data)
  
  // Directly index based access or ID tracking is better
  const [selectedLeadId, setSelectedLeadId] = useState<string>(leads[0].id);
  const selectedLead = useMemo(() => leads.find(l => l.id === selectedLeadId), [leads, selectedLeadId]);
  
  const [isReplying, setIsReplying] = useState(false);
  const [replySuccess, setReplySuccess] = useState(false);

  const updateStatus = (leadId: string, newStatus: Lead["status"]) => {
    setLeads(prev => prev.map(l => l.id === leadId ? { ...l, status: newStatus } : l));
  };

  const handleSendAiReply = () => {
    setIsReplying(true);
    setTimeout(() => {
      setIsReplying(false);
      setReplySuccess(true);
      setTimeout(() => setReplySuccess(false), 2000);
    }, 1500);
  };

  return (
    <section id="project" className="relative py-20 bg-slate-950 border-t border-slate-900 overflow-hidden">
      {/* ... (Keep decorative divs) */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ... (Keep Header) */}

        <div className="glass-panel rounded-3xl overflow-hidden border border-indigo-500/10 min-h-[600px]">
          {/* ... (Keep Tab Navigation) */}

          <div className="p-6 sm:p-8 lg:p-10 bg-slate-950/20">
            <AnimatePresence mode="wait">
              {activeTab === "overview" ? (
                // ... (Keep your Overview JSX)
              ) : (
                <motion.div
                  key="sandbox-tab"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  {/* ... (Keep Sandbox Header) */}

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-5 space-y-3">
                      {leads.map(lead => (
                        <div
                          key={lead.id}
                          onClick={() => setSelectedLeadId(lead.id)}
                          className={`p-4 rounded-xl border transition-all cursor-pointer ${
                            selectedLeadId === lead.id 
                              ? "bg-slate-900 border-indigo-500" 
                              : "bg-slate-950/50 border-slate-900"
                          }`}
                        >
                          {/* ... (Lead list items) */}
                        </div>
                      ))}
                    </div>

                    {/* RHS Workspace */}
                    <div className="lg:col-span-7 bg-slate-950/60 rounded-2xl border border-slate-900 p-6 min-h-[400px]">
                       {/* Use the 'selectedLead' variable here to render details */}
                       {/* ... (Your existing detail view logic) */}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}