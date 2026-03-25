"use client";

import React, { useState, useTransition } from "react";
import { verifyTransferCertificate } from "@/app/transfer-certificate/actions";
import {
  Search,
  Loader2,
  CheckCircle2,
  XCircle,
  FileText,
  User,
  Calendar,
  Hash,
  GraduationCap,
  ExternalLink,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";

const SEARCH_OPTIONS = [
  { value: "tcNumber", label: "TC Number" },
  { value: "studentNameDob", label: "Student Name & DOB" },
  { value: "admissionNumber", label: "Admission Number" },
];

const TCSearchForm = () => {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [searchCriteria, setSearchCriteria] = useState("tcNumber");
  const [hasSearched, setHasSearched] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setResult(null);
    setHasSearched(true);

    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      const response = await verifyTransferCertificate(formData);
      if (response.error) {
        setError(response.error);
      } else {
        setResult(response.data);
      }
    });
  };

  const isVerified = result?.verificationStatus?.toLowerCase() === "verified";

  return (
    <div className="w-full max-w-5xl mx-auto -mt-16 px-3 sm:px-4 relative z-20 pb-20">

      {/* Search Card */}
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        
        {/* Card Header */}
        <div className="bg-gradient-to-r from-[#3B2565]/5 to-transparent border-b border-gray-100 px-5 py-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#3B2565]/10 flex items-center justify-center">
            <Search size={18} className="text-[#3B2565]" />
          </div>
          <div>
            <h2 className="text-base font-bold text-[#3B2565]">Certificate Lookup</h2>
            <p className="text-xs text-gray-500">Search using TC number, name or admission number</p>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 lg:p-8">
          {/* Search Type Dropdown */}
          <div className="mb-5">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Search By</label>
            <select
              name="searchBy"
              value={searchCriteria}
              onChange={(e) => setSearchCriteria(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B2565]/30 focus:border-[#3B2565] text-sm font-semibold text-gray-700 bg-gray-50 focus:bg-white transition cursor-pointer"
            >
              {SEARCH_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          {/* Hidden field for searchBy */}
          <input type="hidden" name="searchBy" value={searchCriteria} />

          {/* Input fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {searchCriteria === "studentNameDob" ? (
              <>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Student Name</label>
                  <input
                    name="searchValue"
                    required
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B2565]/30 focus:border-[#3B2565] text-sm transition bg-gray-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Date of Birth</label>
                  <input
                    name="dobValue"
                    type="date"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B2565]/30 focus:border-[#3B2565] text-sm transition bg-gray-50 focus:bg-white"
                  />
                </div>
              </>
            ) : (
              <div className="md:col-span-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                  {searchCriteria === "tcNumber" ? "TC Number" : "Admission Number"}
                </label>
                <input
                  name="searchValue"
                  required
                  placeholder={searchCriteria === "tcNumber" ? "e.g. TC-2024-001" : "e.g. ADM-12345"}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B2565]/30 focus:border-[#3B2565] text-sm transition bg-gray-50 focus:bg-white"
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-gradient-to-r from-[#3B2565] to-[#5A3B8F] hover:from-[#2A1a4a] hover:to-[#4a2d7a] text-white font-extrabold py-4 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 text-sm uppercase tracking-wider disabled:opacity-70"
          >
            {isPending ? (
              <><Loader2 size={18} className="animate-spin" /> Verifying Certificate...</>
            ) : (
              <><Search size={18} /> Verify Certificate</>
            )}
          </button>
        </form>
      </div>

      {/* Error */}
      {error && (
        <div className="mt-6 p-5 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-4 animate-in fade-in zoom-in duration-300">
          <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
            <AlertCircle size={20} className="text-red-500" />
          </div>
          <div>
            <p className="font-bold text-red-700">Not Found</p>
            <p className="text-red-600 text-sm mt-0.5 leading-relaxed">{error}</p>
          </div>
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="mt-6 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-500">

          {/* Result Header */}
          <div className={`px-8 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${isVerified ? "bg-green-50 border-b border-green-100" : "bg-red-50 border-b border-red-100"}`}>
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isVerified ? "bg-green-100" : "bg-red-100"}`}>
                {isVerified
                  ? <ShieldCheck size={24} className="text-green-600" />
                  : <XCircle size={24} className="text-red-500" />
                }
              </div>
              <div>
                <p className={`text-xs font-black uppercase tracking-widest ${isVerified ? "text-green-600" : "text-red-600"}`}>
                  {isVerified ? "✓ Verified Certificate" : "⚠ Unverified Certificate"}
                </p>
                <h3 className="text-lg font-black text-gray-800">{result.studentName}</h3>
              </div>
            </div>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border ${isVerified ? "bg-green-100 text-green-700 border-green-200" : "bg-red-100 text-red-700 border-red-200"}`}>
              {isVerified ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
              {result.verificationStatus}
            </div>
          </div>

          {/* Result Details Grid */}
          <div className="p-6 lg:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: FileText, label: "TC Number", value: result.tcNumber },
                { icon: Hash, label: "Admission No.", value: result.admissionNumber },
                { icon: GraduationCap, label: "Class", value: result.studentClass },
                { icon: Calendar, label: "Date of Birth", value: new Date(result.dob).toLocaleDateString("en-IN") },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={14} className="text-[#3B2565]/60" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{label}</span>
                  </div>
                  <p className="text-[#3B2565] font-extrabold text-base">{value || "N/A"}</p>
                </div>
              ))}
            </div>

            {/* Download TC Button */}
            {isVerified && result.driveLink && (
              <div className="mt-6 flex justify-center">
                <a
                  href={result.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E74040] to-[#c23535] hover:from-[#c23535] hover:to-[#a02a2a] text-white font-extrabold px-8 py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm uppercase tracking-wider"
                >
                  <ExternalLink size={16} />
                  View / Download TC Certificate
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Info note at bottom */}
      <div className="mt-6 flex items-start gap-3 bg-[#3B2565]/5 border border-[#3B2565]/15 rounded-2xl px-5 py-4">
        <ShieldCheck size={18} className="text-[#3B2565] shrink-0 mt-0.5" />
        <p className="text-[#3B2565]/80 text-xs leading-relaxed">
          This verification system is provided by Beersheba Senior Secondary School for official use. For any discrepancies, please contact the school office directly.
        </p>
      </div>
    </div>
  );
};

export default TCSearchForm;
