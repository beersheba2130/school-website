import React from "react";
import { poppins } from "@/utils/font";
import { BookOpen, Bell, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

const BookListPage = () => {
  return (
    <main className={`min-h-screen bg-gradient-to-br from-[#F9F7FF] via-white to-[#FFF5F5] flex items-center justify-center px-5 ${poppins.className}`}>
      <div className="max-w-2xl w-full text-center py-20">

        {/* Animated Icon */}
        <div className="relative w-28 h-28 mx-auto mb-8">
          <div className="absolute inset-0 bg-[#3B2565]/10 rounded-full animate-ping" />
          <div className="relative w-28 h-28 bg-gradient-to-br from-[#3B2565] to-[#5A3B8F] rounded-full flex items-center justify-center shadow-2xl">
            <BookOpen size={50} className="text-white" />
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#E74040]/10 text-[#E74040] text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          <Clock size={13} />
          Coming Soon
        </div>

        {/* Headline */}
        <h1 className="text-4xl lg:text-5xl font-black text-[#3B2565] leading-tight mb-4">
          Book List<br />
          <span className="text-[#E74040]">2026–27</span> is on its way!
        </h1>

        <p className="text-gray-500 text-base lg:text-lg max-w-md mx-auto leading-relaxed mb-10">
          We're preparing the official book list for the new academic session. It will be available here very soon. Stay tuned!
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["Class 1–5", "Class 6–10", "Class 11–12", "All Subjects"].map((label) => (
            <span
              key={label}
              className="px-4 py-2 bg-white border border-gray-200 text-[#3B2565] font-semibold text-sm rounded-full shadow-sm"
            >
              {label}
            </span>
          ))}
        </div>

        {/* Notification card */}
        <div className="bg-white border border-purple-100 rounded-2xl shadow-lg p-6 flex items-center gap-4 text-left mb-10 max-w-md mx-auto">
          <div className="w-12 h-12 bg-[#3B2565]/10 rounded-xl flex items-center justify-center shrink-0">
            <Bell size={20} className="text-[#3B2565]" />
          </div>
          <div>
            <p className="text-[#3B2565] font-extrabold text-sm">Stay Updated</p>
            <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">
              Contact the school office or visit again soon to get the latest book list for your child's class.
            </p>
          </div>
        </div>

        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 bg-[#3B2565] hover:bg-[#2A1a4a] text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg text-sm">
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default BookListPage;
