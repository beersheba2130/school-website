"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface DisclosureItem {
  id: string;
  title: string;
  url: string;
}

const DisclosureRow = ({ disclosure, index }: { disclosure: DisclosureItem; index: number }) => (
  <tr className="group border-b border-[#3B2565]/10 hover:bg-[#3B2565]/5 transition-colors">
    <td className="py-4 px-6 text-[#3B2565] font-bold text-sm lg:text-base flex items-center gap-3">
       <div className="w-8 h-8 rounded-lg bg-[#3B2565]/10 flex items-center justify-center text-[#3B2565] shrink-0">
          <FileText size={16} />
       </div>
       {disclosure.title}
    </td>
    <td className="py-4 px-6 text-right">
      <Link href={disclosure.url}>
        <Button className="bg-[#3B2565] hover:bg-[#2A1a4a] text-white rounded-xl px-6 h-10 text-xs font-bold transition-all active:scale-95 shadow-lg shadow-[#3B2565]/10">
          View Details
        </Button>
      </Link>
    </td>
  </tr>
);

const DisclosureList = ({ disclosures }: { disclosures: DisclosureItem[] }) => {
  const [showAll, setShowAll] = useState(false);
  const initialCount = 10;
  const hasMore = disclosures.length > initialCount;
  
  const displayedItems = showAll ? disclosures : disclosures.slice(0, initialCount);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-[2rem] shadow-2xl shadow-[#3B2565]/5 border border-[#3B2565]/5 overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#3B2565] text-white">
              <th className="py-4 px-6 text-left text-xs font-black uppercase tracking-widest">Document Title</th>
              <th className="py-4 px-6 text-right text-xs font-black uppercase tracking-widest">Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedItems.map((item, index) => (
              <DisclosureRow key={item.id} disclosure={item} index={index} />
            ))}
          </tbody>
        </table>
      </div>

      {hasMore && !showAll && (
        <div className="mt-8 text-center animate-in fade-in slide-in-from-top-4 duration-700">
          <Button 
            onClick={() => setShowAll(true)}
            className="group bg-white border-2 border-[#3B2565] text-[#3B2565] hover:bg-[#3B2565] hover:text-white px-8 h-12 rounded-2xl font-black text-sm transition-all shadow-xl active:scale-95 flex items-center gap-2 mx-auto"
          >
            View More Documents
            <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          </Button>
          <p className="mt-3 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
            Showing {initialCount} of {disclosures.length} items
          </p>
        </div>
      )}

      {showAll && (
         <div className="mt-8 text-center">
            <p className="text-[#3B2565] text-xs font-black uppercase tracking-widest bg-[#3B2565]/5 inline-block px-4 py-2 rounded-full">
               All {disclosures.length} Documents Loaded
            </p>
         </div>
      )}
    </div>
  );
};

export default DisclosureList;
