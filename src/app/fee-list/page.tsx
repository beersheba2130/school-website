import React from "react";
import { poppins } from "@/utils/font";
import { GraduationCap, BookOpen, Shield, Activity, BadgeIndianRupee, Info, Phone, Sparkles } from "lucide-react";

const FEE_DATA = [
  {
    icon: Shield,
    category: "Registration Fee",
    description: "One-time payment required at the time of admission",
    amount: "1,500",
    tag: "One-time",
    gradient: "from-blue-500 to-blue-600",
    lightBg: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
  },
  {
    icon: Shield,
    category: "Security Deposit",
    description: "Fully refundable deposit returned at time of leaving",
    amount: "5,000",
    tag: "Refundable",
    gradient: "from-emerald-500 to-emerald-600",
    lightBg: "bg-emerald-50",
    textColor: "text-emerald-600",
    borderColor: "border-emerald-200",
  },
  {
    icon: BookOpen,
    category: "Tuition Fee",
    description: "Monthly tuition fee for students in Class 1 to 5",
    amount: "3,200",
    tag: "Class I–V · Monthly",
    gradient: "from-violet-500 to-violet-600",
    lightBg: "bg-violet-50",
    textColor: "text-violet-600",
    borderColor: "border-violet-200",
  },
  {
    icon: GraduationCap,
    category: "Tuition Fee",
    description: "Monthly tuition fee for students in Class 6 to 10",
    amount: "4,500",
    tag: "Class VI–X · Monthly",
    gradient: "from-indigo-500 to-indigo-600",
    lightBg: "bg-indigo-50",
    textColor: "text-indigo-600",
    borderColor: "border-indigo-200",
  },
  {
    icon: GraduationCap,
    category: "Tuition Fee",
    description: "Monthly tuition fee for students in Class 11 to 12",
    amount: "5,800",
    tag: "Class XI–XII · Monthly",
    gradient: "from-rose-500 to-rose-600",
    lightBg: "bg-rose-50",
    textColor: "text-rose-600",
    borderColor: "border-rose-200",
  },
  {
    icon: Activity,
    category: "Activity Fee",
    description: "Annual fee covering sports, cultural events & extra-curriculars",
    amount: "2,500",
    tag: "Yearly",
    gradient: "from-amber-500 to-amber-600",
    lightBg: "bg-amber-50",
    textColor: "text-amber-600",
    borderColor: "border-amber-200",
  },
];

const FeeListPage = () => {
  return (
    <main className={`min-h-screen bg-[#F7F4FD] ${poppins.className}`}>

      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-[#3B2565] via-[#4D2E85] to-[#2D1B50] overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E74040]/15 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-2xl -translate-x-1/3 translate-y-1/3" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwSDMwdi02aDZ2NnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />

        <div className="relative container mx-auto px-6 py-20 lg:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-8">
            <Sparkles size={13} />
            Academic Year 2026–27
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-white leading-none tracking-tight mb-5">
            Fee Structure
          </h1>
          <p className="text-white/60 text-base lg:text-xl max-w-lg mx-auto leading-relaxed">
            Transparent, affordable and clearly structured fees — designed to support every family.
          </p>

          {/* Quick stats */}
          <div className="mt-12 grid grid-cols-3 max-w-sm mx-auto gap-4">
            {[
              { label: "Starting At", value: "₹3,200" },
              { label: "One-time", value: "₹6,500" },
              { label: "Yearly Extra", value: "₹2,500" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-xl py-3 px-2 border border-white/10">
                <p className="text-white font-black text-lg">{s.value}</p>
                <p className="text-white/50 text-[10px] font-semibold mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fee Cards */}
      <div className="container mx-auto px-5 lg:px-16 py-16 lg:py-24 -mt-8">

        {/* Section title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#3B2565]/10 text-[#3B2565] text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <BadgeIndianRupee size={13} />
            Detailed Breakdown
          </div>
          <h2 className="text-3xl font-black text-[#3B2565]">All Fee Categories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {FEE_DATA.map((fee, i) => {
            const Icon = fee.icon;
            return (
              <div
                key={i}
                className={`group relative bg-white rounded-3xl border ${fee.borderColor} overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col`}
              >
                {/* Top gradient bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${fee.gradient}`} />

                <div className="p-7 flex flex-col gap-5 flex-1">
                  <div className="flex items-start justify-between">
                    <div className={`w-13 h-13 p-3 rounded-2xl ${fee.lightBg} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={24} className={fee.textColor} />
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${fee.lightBg} ${fee.textColor} border ${fee.borderColor}`}>
                      {fee.tag}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-[#3B2565] font-extrabold text-xl leading-snug">
                      {fee.category}
                    </h3>
                    <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                      {fee.description}
                    </p>
                  </div>

                  {/* Amount */}
                  <div className={`rounded-2xl ${fee.lightBg} border ${fee.borderColor} px-5 py-4 flex items-center justify-between`}>
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">Amount</span>
                    <span className={`text-3xl font-black ${fee.textColor}`}>
                      ₹{fee.amount}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary strip */}
        <div className="max-w-6xl mx-auto mt-10 rounded-3xl bg-gradient-to-r from-[#3B2565] to-[#5A3B8F] p-8 lg:p-10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15 text-center">
          {[
            { label: "Starting Monthly Fee", value: "₹3,200", sub: "Class I to V" },
            { label: "One-Time Admission Fees", value: "₹6,500", sub: "Registration + Security Deposit" },
            { label: "Annual Activity Fee", value: "₹2,500", sub: "Sports & Cultural Events" },
          ].map((s) => (
            <div key={s.label} className="py-4 md:py-0 md:px-8">
              <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">{s.label}</p>
              <p className="text-4xl font-black text-white">{s.value}</p>
              <p className="text-white/50 text-sm mt-1">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Info + Contact row */}
        <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-6 py-5">
            <Info size={18} className="text-amber-600 shrink-0 mt-0.5" />
            <p className="text-amber-800 text-sm leading-relaxed">
              <strong>Note:</strong> Fee structure is subject to change. Security deposit is fully refundable at the time of leaving the school.
            </p>
          </div>
          <div className="flex items-start gap-3 bg-[#3B2565]/5 border border-[#3B2565]/15 rounded-2xl px-6 py-5">
            <Phone size={18} className="text-[#3B2565] shrink-0 mt-0.5" />
            <p className="text-[#3B2565] text-sm leading-relaxed">
              <strong>Need Help?</strong> Contact our school office for the most accurate and up-to-date fee information before admission.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default FeeListPage;
