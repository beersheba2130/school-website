"use client";

import React, { useState, useEffect, useCallback, memo } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import Image from "next/image";
import { getOptimizedImage } from "@/utils/image-optimization";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";

// Performance-Isolated Lightbox Component
const Lightbox = memo(({ 
  images, 
  initialIndex, 
  onClose 
}: { 
  images: Array<{ url: string }>, 
  initialIndex: number, 
  onClose: () => void 
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    startIndex: initialIndex,
    duration: 20 // Faster animation for responsiveness
  });

  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setCurrentIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") emblaApi?.scrollNext();
      if (e.key === "ArrowLeft") emblaApi?.scrollPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, emblaApi]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-300">
      {/* Optimized Controls */}
      <button onClick={onClose} className="absolute top-6 right-6 z-[120] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white active:scale-90 transition-all">
        <X className="w-8 h-8" />
      </button>

      <button onClick={(e) => { e.stopPropagation(); emblaApi?.scrollPrev(); }} className="absolute left-4 md:left-8 z-[120] p-4 text-white hover:bg-white/5 rounded-full transition-all active:scale-90">
        <ChevronLeft className="w-10 h-10" />
      </button>
      
      <button onClick={(e) => { e.stopPropagation(); emblaApi?.scrollNext(); }} className="absolute right-4 md:right-8 z-[120] p-4 text-white hover:bg-white/5 rounded-full transition-all active:scale-90">
        <ChevronRight className="w-10 h-10" />
      </button>

      {/* Butter-Smooth Slider */}
      <div className="w-full h-full cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex h-full will-change-transform">
          {images.map((image, i) => (
            <div key={i} className="flex-[0_0_100%] h-full flex items-center justify-center relative p-2 md:p-8 will-change-transform">
              <div className="relative w-full h-full max-w-5xl flex items-center justify-center pointer-events-none">
                <Image
                  src={getOptimizedImage(image.url, { width: 1000, height: 800, fit: "max" })}
                  alt=""
                  fill
                  className="object-contain pointer-events-auto"
                  priority={currentIndex === i} 
                  sizes="100vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-white/5 rounded-full text-white/80 font-bold border border-white/10 pointer-events-none">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
});

Lightbox.displayName = "Lightbox";

const AlbumViewer = ({ heading, images, bannerUrl }: { heading: string, images: Array<{ url: string }>, bannerUrl?: string }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
        {/* Banner Section */}
        {bannerUrl && (
          <div className="relative h-[250px] md:h-[400px] w-full overflow-hidden">
            <Image
              src={getOptimizedImage(bannerUrl, { width: 1200, height: 600, fit: "crop" })}
              alt={heading}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h1 className="text-4xl md:text-5xl font-black text-white">{heading}</h1>
            </div>
          </div>
        )}

        <div className="p-6 md:p-10 bg-slate-50/50">
          {!bannerUrl && <h1 className="text-3xl font-bold text-[#3B2565] mb-8 border-l-4 border-[#E74040] pl-6">{heading}</h1>}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {images.map((image, index) => (
              <div key={index} onClick={() => openLightbox(index)} className="group relative h-64 cursor-pointer overflow-hidden rounded-xl bg-white shadow hover:shadow-lg transition-all active:scale-95">
                <Image src={getOptimizedImage(image.url, { width: 400, height: 300, fit: "crop" })} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="w-8 h-8 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedIndex !== null && <Lightbox images={images} initialIndex={selectedIndex} onClose={closeLightbox} />}
    </div>
  );
};

export default AlbumViewer;
