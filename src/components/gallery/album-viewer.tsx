"use client";

import React, { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import Image from "next/image";
import { getOptimizedImage } from "@/utils/image-optimization";
import { cn } from "@/lib/utils";

interface AlbumViewerProps {
  heading: string;
  images: Array<{ url: string }>;
  bannerUrl?: string;
}

const AlbumViewer = ({ heading, images, bannerUrl }: AlbumViewerProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = "unset";
  }, []);

  const navigate = useCallback(
    (direction: "next" | "prev") => {
      if (selectedIndex === null) return;
      if (direction === "next") {
        setSelectedIndex((selectedIndex + 1) % images.length);
      } else {
        setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
      }
    },
    [selectedIndex, images.length]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigate("next");
      if (e.key === "ArrowLeft") navigate("prev");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, navigate, closeLightbox]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
        {/* Banner Section */}
        {bannerUrl && (
          <div className="relative h-[300px] md:h-[450px] w-full overflow-hidden group">
            <Image
              src={getOptimizedImage(bannerUrl, { width: 1200, height: 600, fit: "crop" })}
              alt={heading}
              fill
              priority
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 right-10">
              <h1 className="text-4xl md:text-6xl font-black text-white drop-shadow-lg tracking-tight">
                {heading}
              </h1>
            </div>
          </div>
        )}

        {/* Gallery Grid Section */}
        <div className="p-8 md:p-12 bg-slate-50/50">
          {!bannerUrl && (
            <h1 className="text-3xl font-bold text-[#3B2565] mb-8 border-l-4 border-[#E74040] pl-6">
              {heading}
            </h1>
          )}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div
                key={`${image.url}-${index}`}
                onClick={() => openLightbox(index)}
                className="group relative h-72 cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-95 ring-1 ring-black/5"
              >
                <Image
                  src={getOptimizedImage(image.url, { width: 500, height: 400, fit: "crop" })}
                  alt={`Album image ${index + 1}`}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Maximize2 className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox / Popup */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-300">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-[110] p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white border border-white/20 active:scale-90"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={() => navigate("prev")}
            className="absolute left-4 md:left-8 z-[110] p-4 rounded-full bg-white/5 hover:bg-white/10 transition-all text-white border border-white/10 group active:scale-90"
          >
            <ChevronLeft className="w-10 h-10 group-hover:-translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => navigate("next")}
            className="absolute right-4 md:right-8 z-[110] p-4 rounded-full bg-white/5 hover:bg-white/10 transition-all text-white border border-white/10 group active:scale-90"
          >
            <ChevronRight className="w-10 h-10 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Image Container */}
          <div className="relative w-full h-full p-4 md:p-16 flex items-center justify-center select-none">
            <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
              <Image
                src={getOptimizedImage(images[selectedIndex].url, { width: 1600, height: 1200, fit: "max" })}
                alt={`Selected gallery image ${selectedIndex + 1}`}
                width={1200}
                height={900}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
                priority
              />
              
              {/* Counter */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-white font-medium border border-white/20">
                {selectedIndex + 1} / {images.length}
              </div>
            </div>
          </div>
          
          {/* Click background to close */}
          <div className="absolute inset-0 z-10" onClick={closeLightbox} />
        </div>
      )}
    </div>
  );
};

export default AlbumViewer;
