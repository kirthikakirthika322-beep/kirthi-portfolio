import React, { useState, useMemo } from "react";
import { Github, ExternalLink, Bot } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Lead {
  id: string;
  name: string;
  status: "pending" | "resolved";
  message: string;
}

const INITIAL_LEADS: Lead[] = [
  { id: "1", name: "Alice Johnson", status: "pending", message: "Hi, I have a project inquiry." },
  { id: "2", name: "Bob Smith", status: "resolved", message: "Thanks for the quick response!" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"overview" | "sandbox">("overview");
  const [leads, setLeads] = useState<Lead[]>(INITIAL_LEADS);
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
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Projects & Sandbox</h2>
        </div>

        <div className="glass-panel rounded-3xl overflow-hidden border border-indigo-500/10 min-h-[600px]">
          {/* Tab Navigation */}
          <div className="flex border-b border-slate-800">
            <button onClick={() => setActiveTab("overview")} className={`px-6 py-4 ${activeTab === "overview" ? "border-b-2 border-indigo-500 text-indigo-400" : "text-slate-400"}`}>Overview</button>
            <button onClick={() => setActiveTab("sandbox")} className={`px-6 py-4 ${activeTab === "sandbox" ? "border-b-2 border-indigo-500 text-indigo-400" : "text-slate-400"}`}>Sandbox</button>
          </div>

          <div className="p-10">
            <AnimatePresence mode="wait">
              {/* OVERVIEW TAB */}
              {activeTab === "overview" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="max-w-md mx-auto bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                    <img src="/procrm.jpg" alt="WA LeadConnect" className="w-full h-56 object-cover" />
                    <div className="p-6">
                      <h3 className="text-white font-bold text-xl mb-2">WA LeadConnect - AI CRM</h3>
                      <p className="text-slate-400 text-sm mb-4">Generative AI-powered lead management system for WhatsApp automation.</p>
                      <div className="flex gap-4">
                        <a href="#" className="flex items-center gap-2 text-indigo-400 hover:text-white transition"><Github size={18}/> Code</a>
                        <a href="#" className="flex items-center gap-2 text-indigo-400 hover:text-white transition"><ExternalLink size={18}/> Demo</a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* SANDBOX TAB */}
              {activeTab === "sandbox" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-5 space-y-3">
                      {leads.map(lead => (
                        <div key={lead.id} onClick={() => setSelectedLeadId(lead.id)} className={`p-4 rounded-xl border cursor-pointer transition ${selectedLeadId === lead.id ? "bg-slate-900 border-indigo-500" : "bg-slate-950/50 border-slate-900"}`}>
                          <p className="text-white font-bold">{lead.name}</p>
                          <p className="text-xs text-slate-400 capitalize">{lead.status}</p>
                        </div>
                      ))}
                    </div>

                    <div className="lg:col-span-7 bg-slate-950/60 rounded-2xl border border-slate-900 p-6">
                      {selectedLead ? (
                        <>
                          <h3 className="text-white font-bold mb-4 flex items-center gap-2"><Bot className="text-indigo-400" /> AI Agent Analysis</h3>
                          <p className="text-slate-400 mb-6">{selectedLead.message}</p>
                          <button onClick={handleSendAiReply} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white transition">
                            {isReplying ? "Sending..." : "Send AI Reply"}
                          </button>
                          {replySuccess && <p className="text-emerald-400 mt-2 font-medium">Reply successfully sent!</p>}
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