import React, { useState } from "react";
import { Mail, Phone, Github, MapPin, Send, CheckCircle, AlertTriangle, Sparkles, User, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-blue-400" />,
      label: "Email Address",
      value: "kirthikakirthika322@gmail.com",
      href: "mailto:kirthikakirthika322@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5 text-purple-400" />,
      label: "Phone Number",
      value: "+91 8870844230",
      href: "tel:+918870844230",
    },
    {
      icon: <Github className="w-5 h-5 text-pink-400" />,
      label: "GitHub Profile",
      value: "github.com/kirthikakirthika322-beep",
      href: "https://github.com/kirthikakirthika322-beep",
    },
    {
      icon: <MapPin className="w-5 h-5 text-emerald-400" />,
      label: "Work Location",
      value: "Tamil Nadu, India",
      href: null,
    },
  ];

  const validate = (): boolean => {
    const tempErrors: Partial<FormData> = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject line is required";
    if (!formData.message.trim()) tempErrors.message = "Message cannot be empty";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof FormData]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API submit delay
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-slate-950 border-t border-slate-900 overflow-hidden">
      {/* Glow ambient background element */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-600/[0.02] blur-[100px] pointer-events-none" />

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
            <span>Get in touch</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Contact <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full origin-left"
          />
        </div>

        {/* Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Contact coordinates (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="space-y-3 text-center lg:text-left"
            >
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                Let's Build Something Great Together
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
                Have an internship opportunity, a frontend project, or just want to say hi? Feel free to contact me via email, phone, or drop a message here!
              </p>
            </motion.div>

            {/* Coordinates list */}
            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-panel p-4.5 rounded-2xl flex items-center gap-4 hover:bg-slate-900/40 hover:border-indigo-500/15 transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-900 text-slate-300 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="space-y-0.5 min-w-0">
                    <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block">
                      {info.label}
                    </span>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="font-display font-semibold text-white hover:text-indigo-400 text-xs sm:text-sm break-all transition-colors block"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="font-display font-semibold text-white text-xs sm:text-sm block">
                        {info.value}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: Validated Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="glass-panel p-6 sm:p-8 rounded-3xl space-y-5 border border-indigo-500/10">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    <span>Your Name</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-slate-950/60 border text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-1 transition-all ${
                      errors.name
                        ? "border-rose-500/40 focus:border-rose-500 focus:ring-rose-500/20"
                        : "border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20"
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[10px] text-rose-400 font-mono flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    <span>Your Email</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-slate-950/60 border text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-1 transition-all ${
                      errors.email
                        ? "border-rose-500/40 focus:border-rose-500 focus:ring-rose-500/20"
                        : "border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[10px] text-rose-400 font-mono flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Subject</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Internship opportunity, frontend role, etc."
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-slate-950/60 border text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-1 transition-all ${
                    errors.subject
                      ? "border-rose-500/40 focus:border-rose-500 focus:ring-rose-500/20"
                      : "border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20"
                  }`}
                />
                {errors.subject && (
                  <span className="text-[10px] text-rose-400 font-mono flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" />
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Your Message</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Hey V. Kirthika, I'd love to chat with you about..."
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-slate-950/60 border text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-1 transition-all ${
                    errors.message
                      ? "border-rose-500/40 focus:border-rose-500 focus:ring-rose-500/20"
                      : "border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20"
                  }`}
                />
                {errors.message && (
                  <span className="text-[10px] text-rose-400 font-mono flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" />
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Form Status Messages */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs sm:text-sm flex items-center gap-2.5"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span>Your message has been sent successfully! Thank you for reaching out.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting || submitSuccess}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-mono tracking-wider font-bold uppercase rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 disabled:opacity-50 transition-all duration-300 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4.5 h-4.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
