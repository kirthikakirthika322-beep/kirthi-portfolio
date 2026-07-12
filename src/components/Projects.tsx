import React, { useState, useMemo } from "react";
import { Github, ExternalLink, Sparkles, MessageSquare, BadgeHelp, CheckCircle2, Bot, Play, User } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Neenga use panra Lead interface
interface Lead {
  id: string;
  name: string;
  status: "pending" | "resolved";
  message: string;
}

// Initial Data
const INITIAL_LEADS: Lead[] = [
  { id: "1", name: "Alice Johnson", status: "pending", message: "Hi, I have a project inquiry." },
  { id: "2", name: "Bob Smith", status: "resolved", message: "Thanks for the quick response!" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"overview" | "sandbox">("overview");
  const [leads, setLeads] = useState<Lead[]>(INITIAL_LEADS); 
  
  // Safe initial state handling
  const [selectedLeadId, setSelectedLeadId] = useState<string>(INITIAL_LEADS[0]?.id || "");
  const selectedLead = useMemo(() => leads.find(l => l.id === selectedLeadId), [leads, selectedLeadId]);
  
  const [isReplying, setIsReplying] = useState(false);
  const [replySuccess, setReplySuccess] = useState(false);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section - Same as before */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Projects & Sandbox</h2>
        </div>

        <div className="glass-panel rounded-3xl overflow-hidden border border-indigo-500/10 min-h-[600px]">
          {/* Tab Navigation */}
          <div className="flex border-b border-slate-800">
            <button onClick={() => setActiveTab("overview")} className={`px-6 py-4 ${activeTab === "overview" ? "border-b-2 border-indigo-500" : ""}`}>Overview</button>
            <button onClick={() => setActiveTab("sandbox")} className={`px-6 py-4 ${activeTab === "sandbox" ? "border-b-2 border-indigo-500" : ""}`}>Sandbox</button>
          </div>

          <div className="p-10">
            <AnimatePresence mode="wait">
              {activeTab === "sandbox" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-5 space-y-3">
                      {leads.map(lead => (
                        <div key={lead.id} onClick={() => setSelectedLeadId(lead.id)} className={`p-4 rounded-xl border cursor-pointer ${selectedLeadId === lead.id ? "bg-slate-900 border-indigo-500" : "bg-slate-950/50 border-slate-900"}`}>
                          <p className="text-white font-bold">{lead.name}</p>
                          <p className="text-xs text-slate-400">{lead.status}</p>
                        </div>
                      ))}
                    </div>

                    <div className="lg:col-span-7 bg-slate-950/60 rounded-2xl border border-slate-900 p-6">
                      {selectedLead ? (
                        <>
                          <h3 className="text-white font-bold mb-4">{selectedLead.name}</h3>
                          <p className="text-slate-400 mb-6">{selectedLead.message}</p>
                          <button onClick={handleSendAiReply} className="px-4 py-2 bg-indigo-600 rounded-lg text-white">
                            {isReplying ? "Sending..." : "Send AI Reply"}
                          </button>
                          {replySuccess && <p className="text-emerald-400 mt-2">Reply sent!</p>}
                        </>
                      ) : (
                        <p className="text-slate-500">Select a lead to view details.</p>
                      )}
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