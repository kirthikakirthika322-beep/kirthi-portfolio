import React, { useState } from "react";
import { Github, ExternalLink, Sparkles, MessageSquare, ShieldAlert, BadgeHelp, CheckCircle2, Bot, Play, User } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Lead {
  id: string;
  name: string;
  phone: string;
  status: "New" | "Contacted" | "Qualified" | "Closed";
  query: string;
  aiClassification: string;
  aiSuggestedReply: string;
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"overview" | "sandbox">("overview");
  const [leads, setLeads] = useState<Lead[]>([
    {
      id: "1",
      name: "Rohan Sharma",
      phone: "+91 98765 43210",
      status: "New",
      query: "Looking to integrate your payment gateways into my e-commerce site. What are the costs?",
      aiClassification: "High Intent Purchase",
      aiSuggestedReply: "Hello Rohan! Thank you for reaching out. Our e-commerce integration plan starts at custom rates, but we support all major credit cards and local UPI transfers with less than 1.5% transaction fee. Would you like a catalog?",
    },
    {
      id: "2",
      name: "Divya Patel",
      phone: "+91 87654 32109",
      status: "Contacted",
      query: "Hi, do you offer customized CRM designs for real estate agencies?",
      aiClassification: "Custom Development Inquiry",
      aiSuggestedReply: "Hi Divya, yes we do! We have pre-built modules for real estate agencies including buyer tracking and auto-reminders. I can schedule a quick 10-minute demo for you this afternoon.",
    },
    {
      id: "3",
      name: "Amit Patel",
      phone: "+91 76543 21098",
      status: "Qualified",
      query: "Can your system handle high volume broadcasts without getting banned by Meta?",
      aiClassification: "Compliance & Scale",
      aiSuggestedReply: "Hello Amit! Our CRM relies exclusively on the official Meta WhatsApp Cloud API which guarantees 100% compliance. Your templates are approved beforehand to avoid blocks.",
    },
  ]);

  const [selectedLead, setSelectedLead] = useState<Lead | null>(leads[0]);
  const [isReplying, setIsReplying] = useState(false);
  const [replySuccess, setReplySuccess] = useState(false);

  // Simple Kanban simulator: updates status
  const updateStatus = (leadId: string, newStatus: Lead["status"]) => {
    setLeads(leads.map(l => l.id === leadId ? { ...l, status: newStatus } : l));
    if (selectedLead?.id === leadId) {
      setSelectedLead({ ...selectedLead, status: newStatus });
    }
  };

  const handleSendAiReply = () => {
    if (!selectedLead) return;
    setIsReplying(true);
    setTimeout(() => {
      setIsReplying(false);
      setReplySuccess(true);
      setTimeout(() => setReplySuccess(false), 3000);
    }, 1500);
  };

  return (
    <section id="project" className="relative py-20 bg-slate-950 border-t border-slate-900 overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-blue-600/[0.02] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-purple-600/[0.02] blur-[100px] pointer-events-none" />

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
            <span>Showcase Spotlight</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Featured <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Project</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full origin-left"
          />
        </div>

        {/* Project Section Panel */}
        <div className="glass-panel rounded-3xl overflow-hidden border border-indigo-500/10">
          
          {/* Panel Menu Navigation (Overview vs Interactive Sandbox) */}
          <div className="flex border-b border-slate-900 bg-slate-950/40">
            <button
              onClick={() => setActiveTab("overview")}
              className={`flex-1 sm:flex-initial px-6 py-4 text-xs font-mono font-bold tracking-wider uppercase border-b-2 transition-all cursor-pointer ${
                activeTab === "overview"
                  ? "border-blue-500 text-white bg-slate-900/40"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              Project Overview
            </button>
            <button
              onClick={() => setActiveTab("sandbox")}
              className={`flex-1 sm:flex-initial px-6 py-4 text-xs font-mono font-bold tracking-wider uppercase border-b-2 transition-all cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === "sandbox"
                  ? "border-indigo-500 text-white bg-slate-900/40"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              <Bot className="w-4 h-4 text-indigo-400" />
              <span>Interactive Simulator</span>
            </button>
          </div>

          <div className="p-6 sm:p-8 lg:p-10 bg-slate-950/20">
            <AnimatePresence mode="wait">
              {activeTab === "overview" ? (
                <motion.div
                  key="overview-tab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
                >
                  {/* Left Column: Visual Mockup */}
                  <div className="lg:col-span-6 relative group">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-500 opacity-20 group-hover:opacity-30 blur-md transition-all duration-500" />
                    <div className="relative rounded-2xl border border-indigo-500/20 overflow-hidden bg-slate-900 aspect-video shadow-2xl">
                      <img
                        src="/project_crm.jpg"
                        alt="AI-Powered WhatsApp Lead Management CRM Platform Dashboard"
                        className="w-full h-full object-cover transform group-hover:scale-105 duration-700 select-none"
                        referrerPolicy="no-referrer"
                      />
                      {/* Interactive hover overlay */}
                      <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 transition-opacity duration-300">
                        <button 
                          onClick={() => setActiveTab("sandbox")}
                          className="flex items-center gap-1.5 px-4.5 py-2.5 rounded-full bg-indigo-600 text-white font-mono font-bold text-xs tracking-wider uppercase shadow-lg shadow-indigo-500/25 hover:bg-indigo-500 transition-colors"
                        >
                          <Play className="w-3.5 h-3.5" />
                          Try Sandbox Simulator
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Descriptions */}
                  <div className="lg:col-span-6 space-y-6">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-indigo-400 font-bold uppercase">
                        Generative AI Integration Project
                      </span>
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight mt-1">
                        AI-Powered WhatsApp Lead Management CRM Platform
                      </h3>
                    </div>

                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                      An intelligent enterprise-grade CRM environment designed to automate and simplify client acquisition pipelines via WhatsApp. By leveraging Generative AI, the system classifies incoming client queries on-the-fly and generates context-aware replies matching company guidelines, saving hours of manual sales follow-up.
                    </p>

                    {/* Key features bullets */}
                    <ul className="space-y-2.5 text-slate-300 text-xs sm:text-sm">
                      <li className="flex items-start gap-2.5">
                        <span className="p-0.5 rounded-full bg-blue-500/10 text-blue-400 flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4" />
                        </span>
                        <span>**Real-time Lead Classification**: Identifies purchase intent, pricing queries, or support needs.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="p-0.5 rounded-full bg-blue-500/10 text-blue-400 flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4" />
                        </span>
                        <span>**AI Suggestion Engine**: Automatically drafts tailored, hyper-contextual responses.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="p-0.5 rounded-full bg-blue-500/10 text-blue-400 flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4" />
                        </span>
                        <span>**Responsive UI Pipeline**: Drag-and-drop Kanban tracking to move leads from cold to qualified.</span>
                      </li>
                    </ul>

                    {/* Technologies tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {["React", "Vite", "Tailwind CSS", "Generative AI", "Vercel", "Meta API"].map(tag => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2.5 py-1 bg-slate-900 text-slate-300 rounded-md border border-slate-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-4 pt-4">
                      <a
                        href="https://github.com/kirthikakirthika322-beep"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 text-xs font-mono font-bold tracking-wider uppercase rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                      <button
                        onClick={() => setActiveTab("sandbox")}
                        className="flex items-center gap-2 px-5 py-3 text-xs font-mono font-bold tracking-wider uppercase rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-500/20 hover:from-blue-500 hover:to-indigo-500 transition-all cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo Simulator
                      </button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* Interactive Sandbox Simulator */
                <motion.div
                  key="sandbox-tab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-900 pb-4">
                    <div>
                      <h4 className="font-display font-bold text-lg text-white">Interactive Lead Sandbox</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Simulate actual CRM workflows. Click a lead below to classify queries and draft suggestions using mockup AI nodes.</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono uppercase tracking-wide flex items-center gap-1.5 animate-pulse">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Simulation Engine Online
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Sandbox LHS: Lead List */}
                    <div className="lg:col-span-5 space-y-3">
                      <span className="block text-[10px] font-mono uppercase text-slate-500 tracking-wider">
                        Select Client Queue
                      </span>
                      {leads.map(lead => (
                        <div
                          key={lead.id}
                          onClick={() => setSelectedLead(lead)}
                          className={`p-4 rounded-xl border transition-all cursor-pointer text-left flex justify-between items-start gap-4 ${
                            selectedLead?.id === lead.id
                              ? "bg-slate-900 border-indigo-500/40 shadow-md shadow-indigo-500/5"
                              : "bg-slate-950/50 border-slate-900 hover:bg-slate-900/50 hover:border-slate-800"
                          }`}
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-white text-sm">{lead.name}</span>
                              <span className="text-[9px] font-mono bg-slate-950 text-slate-400 px-1.5 py-0.5 rounded border border-slate-800">
                                {lead.status}
                              </span>
                            </div>
                            <p className="text-slate-400 text-xs truncate max-w-[200px] sm:max-w-[300px]">
                              {lead.query}
                            </p>
                          </div>
                          
                          <span className="text-[9px] font-mono tracking-wider font-bold text-indigo-400 uppercase bg-indigo-500/10 px-2 py-0.5 rounded-full">
                            {lead.aiClassification}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Sandbox RHS: Lead Workspace detail / AI Generator */}
                    <div className="lg:col-span-7 bg-slate-950/60 rounded-2xl border border-slate-900 p-6 space-y-6">
                      {selectedLead ? (
                        <>
                          <div className="flex justify-between items-start gap-4 flex-wrap border-b border-slate-900 pb-4">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-indigo-600/10 text-indigo-400 rounded-lg">
                                <User className="w-5 h-5" />
                              </div>
                              <div>
                                <h5 className="font-semibold text-white text-base">{selectedLead.name}</h5>
                                <p className="text-slate-400 text-xs font-mono">{selectedLead.phone}</p>
                              </div>
                            </div>

                            {/* Status controls */}
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-mono text-slate-500 mr-1.5">Pipeline:</span>
                              {(["New", "Contacted", "Qualified"] as Lead["status"][]).map(st => (
                                <button
                                  key={st}
                                  onClick={() => updateStatus(selectedLead.id, st)}
                                  className={`px-2 py-1 text-[10px] font-mono rounded cursor-pointer transition-colors ${
                                    selectedLead.status === st
                                      ? "bg-indigo-600 text-white font-bold"
                                      : "bg-slate-900 text-slate-400 hover:text-slate-200"
                                  }`}
                                >
                                  {st}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Chat Query Box */}
                          <div className="space-y-2">
                            <span className="block text-[10px] font-mono uppercase text-slate-500 tracking-wider">
                              Incoming WhatsApp Message
                            </span>
                            <div className="p-4 rounded-xl bg-slate-900 text-slate-200 text-xs sm:text-sm italic leading-relaxed border border-slate-850">
                              "{selectedLead.query}"
                            </div>
                          </div>

                          {/* AI Assistant node */}
                          <div className="space-y-3 bg-indigo-950/20 border border-indigo-500/20 p-5 rounded-xl">
                            <div className="flex items-center gap-2 text-xs font-mono text-indigo-300 uppercase font-bold">
                              <Bot className="w-4 h-4 text-indigo-400" />
                              <span>Generative AI Helper Node</span>
                            </div>

                            <div className="space-y-1">
                              <span className="text-[10px] text-slate-400 block font-mono">Auto Category Classification</span>
                              <div className="text-xs font-bold text-emerald-400 font-mono">
                                {selectedLead.aiClassification}
                              </div>
                            </div>

                            <div className="space-y-1 pt-1.5">
                              <span className="text-[10px] text-slate-400 block font-mono">Suggested WhatsApp Reply Draft</span>
                              <p className="text-slate-300 text-xs leading-relaxed italic bg-slate-950/50 p-3 rounded-lg border border-indigo-500/5">
                                "{selectedLead.aiSuggestedReply}"
                              </p>
                            </div>

                            <div className="pt-2">
                              <button
                                onClick={handleSendAiReply}
                                disabled={isReplying || replySuccess}
                                className={`w-full py-2.5 px-4 text-xs font-mono font-bold tracking-wider uppercase rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer ${
                                  replySuccess
                                    ? "bg-emerald-600 text-white"
                                    : "bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-50"
                                }`}
                              >
                                {isReplying ? (
                                  <>
                                    <div className="w-4.5 h-4.5 rounded-full border-2 border-indigo-200 border-t-transparent animate-spin" />
                                    <span>Generating & Dispatching...</span>
                                  </>
                                ) : replySuccess ? (
                                  <>
                                    <CheckCircle2 className="w-4 h-4" />
                                    <span>Reply Dispatched to WhatsApp!</span>
                                  </>
                                ) : (
                                  <>
                                    <MessageSquare className="w-4 h-4" />
                                    <span>Approve & Auto-Reply</span>
                                  </>
                                )}
                              </button>
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="h-48 flex flex-col items-center justify-center text-slate-500 gap-2">
                          <BadgeHelp className="w-10 h-10 text-slate-600" />
                          <span>Click a lead on the left to begin simulation</span>
                        </div>
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
