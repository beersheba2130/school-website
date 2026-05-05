"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { poppins } from "@/utils/font";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface EventPopupProps {
  event: {
    id: string;
    newsHeading: string;
    newsImage: { url: string };
  } | null;
}

const EventPopup = ({ event }: EventPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (!event) return;

    setShouldRender(true);
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 600);
    return () => clearTimeout(timer);
  }, [event]);

  const closePopup = () => {
    setIsOpen(false);
    setTimeout(() => setShouldRender(false), 300); // Wait for fade out
  };

  if (!event || !shouldRender) return null;

  return (
    <div className={cn(poppins.className, "fixed inset-0 z-[10000] flex items-center justify-center p-4 isolate")}>
      {/* Backdrop - Simplified for performance */}
      <div 
        className={cn(
          "absolute inset-0 bg-black/50 transition-opacity duration-300 ease-out will-change-opacity",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={closePopup}
      />
      
      {/* Modal Container - Hardware accelerated animations */}
      <div 
        className={cn(
          "relative w-full max-w-lg bg-white rounded-[2rem] shadow-2xl overflow-hidden transition-all duration-300 ease-out will-change-transform",
          isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"
        )}
      >
        {/* Close Button */}
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-[#3B2565] transition-all shadow-md active:scale-95"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="relative">
          {/* Image Section - Simplified */}
          <div className="relative h-60 sm:h-72 w-full bg-gray-50">
            <Image
              src={event.newsImage.url}
              alt={event.newsHeading}
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 768px) 100vw, 512px"
            />
          </div>

          {/* Text Section */}
          <div className="p-6 sm:p-8 text-center bg-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E74040]/10 text-[#E74040] text-[10px] font-black uppercase tracking-widest rounded-lg mb-4">
               <span className="w-1.5 h-1.5 rounded-full bg-[#E74040] animate-pulse" />
               Latest Event
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#3B2565] leading-tight mb-6 line-clamp-3">
              {event.newsHeading}
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link 
                href={`/news-event/${event.id}`}
                onClick={closePopup}
                className="px-8 py-3 bg-[#3B2565] hover:bg-[#2A1a4a] text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-[#3B2565]/20 active:scale-95"
              >
                View Details
              </Link>
              <button 
                onClick={closePopup}
                className="px-8 py-3 bg-gray-100 hover:bg-gray-200 text-[#3B2565] rounded-xl font-bold text-sm transition-all active:scale-95"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPopup;
