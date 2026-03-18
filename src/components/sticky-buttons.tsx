"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BookText, CircleDollarSign, Plus, X, ClipboardList, Send, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { poppins } from "@/utils/font";

const StickyButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", classInterested: "", message: "" });

  const items = [
    {
      label: "Book List",
      href: "/book-list",
      icon: <BookText className="w-5 h-5" />,
      color: "bg-[#3B2565]",
      textColor: "text-white",
      isForm: false,
    },
    {
      label: "Fee List",
      href: "/fee-list",
      icon: <CircleDollarSign className="w-5 h-5" />,
      color: "bg-[#F8EF2E]",
      textColor: "text-primary",
      isForm: false,
    },
    {
      label: "Enquiry",
      href: "#",
      icon: <ClipboardList className="w-5 h-5" />,
      color: "bg-[#E74040]",
      textColor: "text-white",
      isForm: true,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setShowForm(false);
        setFormData({ name: "", phone: "", classInterested: "", message: "" });
      }, 3000);
    } catch {
      alert("Something went wrong. Please try again or call the school directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Enquiry Modal */}
      {showForm && (
        <div className={cn(poppins.className, "fixed inset-0 z-[1000] flex items-end sm:items-center justify-center p-4 sm:p-0")}>
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => { setShowForm(false); setSubmitted(false); }}
          />

          {/* Form Card */}
          <div className="relative z-10 bg-white rounded-3xl shadow-2xl w-full max-w-md p-6 sm:p-8 animate-in slide-in-from-bottom-10 duration-300">
            {/* Close */}
            <button
              onClick={() => { setShowForm(false); setSubmitted(false); }}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
            >
              <X size={16} />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} className="text-green-500" />
                </div>
                <h3 className="text-xl font-black text-[#3B2565] mb-2">Enquiry Submitted!</h3>
                <p className="text-gray-500 text-sm">We'll get back to you shortly. Thank you for your interest in Beersheba School!</p>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 bg-[#E74040]/10 text-[#E74040] text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                    <ClipboardList size={12} />
                    Basic Enquiry
                  </div>
                  <h3 className="text-2xl font-black text-[#3B2565]">Get in Touch</h3>
                  <p className="text-gray-500 text-sm mt-1">Fill in your details and we'll contact you soon.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5 block">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B2565]/30 focus:border-[#3B2565] text-sm transition"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5 block">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B2565]/30 focus:border-[#3B2565] text-sm transition"
                    />
                  </div>

                  {/* Class */}
                  <div>
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5 block">Class Interested In</label>
                    <select
                      value={formData.classInterested}
                      onChange={(e) => setFormData({ ...formData, classInterested: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B2565]/30 focus:border-[#3B2565] text-sm transition text-gray-600"
                    >
                      <option value="">Select a class</option>
                      {["Nursery", "LKG", "UKG", ...Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`)].map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5 block">Message (Optional)</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Any specific questions or information..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B2565]/30 focus:border-[#3B2565] text-sm transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#3B2565] to-[#5A3B8F] hover:from-[#2A1a4a] hover:to-[#4a2d7a] text-white font-extrabold py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                  >
                    {loading ? (
                      <><Loader2 size={16} className="animate-spin" /> Submitting...</>
                    ) : (
                      <><Send size={16} /> Submit Enquiry</>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* Floating Buttons */}
      <div
        className={cn(poppins.className, "fixed right-6 bottom-10 z-[999] flex flex-col items-end gap-3")}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Action Items */}
        <div
          className={cn(
            "flex flex-col gap-3 transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] origin-bottom-right",
            isOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-10 scale-0 pointer-events-none"
          )}
        >
          {items.map((item, index) =>
            item.isForm ? (
              <button
                key={index}
                onClick={() => setShowForm(true)}
                className={cn(
                  "flex items-center gap-4 px-6 py-4 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-x-3 hover:shadow-2xl group/item relative overflow-hidden backdrop-blur-sm",
                  item.color,
                  item.textColor
                )}
                style={{ transitionDelay: isOpen ? `${index * 100}ms` : "0ms" }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity" />
                <span className="font-extrabold text-sm tracking-widest whitespace-nowrap uppercase">{item.label}</span>
                <div className="p-2 bg-white/20 rounded-xl group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300 shadow-inner">
                  {item.icon}
                </div>
              </button>
            ) : (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center gap-4 px-6 py-4 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-x-3 hover:shadow-2xl group/item relative overflow-hidden backdrop-blur-sm",
                  item.color,
                  item.textColor
                )}
                style={{ transitionDelay: isOpen ? `${index * 100}ms` : "0ms" }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity" />
                <span className="font-extrabold text-sm tracking-widest whitespace-nowrap uppercase">{item.label}</span>
                <div className="p-2 bg-white/20 rounded-xl group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300 shadow-inner">
                  {item.icon}
                </div>
              </Link>
            )
          )}
        </div>

        {/* Main Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-16 h-16 rounded-3xl flex items-center justify-center shadow-2xl transition-all duration-500 relative group/main overflow-hidden backdrop-blur-md border border-white/20",
            isOpen ? "bg-red-500 rotate-180" : "bg-gradient-to-br from-[#3B2565] to-[#2a1a4a]"
          )}
          aria-label="Quick Access Menu"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover/main:opacity-100 transition-opacity" />

          <div className="relative w-8 h-8 flex items-center justify-center">
            <Plus className={cn("w-8 h-8 text-white transition-all duration-500 absolute", isOpen ? "rotate-45 opacity-0 scale-0" : "rotate-0 opacity-100 scale-100")} />
            <X className={cn("w-8 h-8 text-white transition-all duration-500 absolute", isOpen ? "rotate-0 opacity-100 scale-100" : "-rotate-45 opacity-0 scale-0")} />
          </div>

          {!isOpen && (
            <div className="absolute inset-0 rounded-3xl bg-[#3B2565] animate-ping opacity-20 -z-10" />
          )}
        </button>
      </div>
    </>
  );
};

export default StickyButtons;
