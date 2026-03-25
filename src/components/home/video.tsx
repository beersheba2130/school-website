import Heading2 from "../heading2";
import VideoCard from "./video-card";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";

// Define the Featured item type for better type safety
type FeaturedItem = {
  id: string;
  newsHeading: string;
  newsImage: { url: string };
};

const Video = ({ featured }: { featured: FeaturedItem[] }) => {
  return (
    <section className="relative mt-8 mb-12 lg:mb-16 overflow-hidden">
      {/* Dynamic Mesh Background */}
      <div className="absolute inset-x-0 top-0 bottom-0 -z-20 bg-[#FDFCFE]" />
      <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-[#3B2565]/5 to-transparent -z-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#DED4F2]/30 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#E74040]/5 rounded-full blur-3xl -z-10" />
      
      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10" style={{ backgroundImage: 'radial-gradient(#3B2565 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Main Content Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="space-y-5 lg:space-y-7 max-w-2xl mx-auto lg:mx-0">
              <div className="relative">
                <Heading2
                  title="Leading School in City Since 1977"
                  className="text-2xl sm:text-3xl lg:text-5xl font-black text-[#3B2565] leading-[1.1]"
                />
              </div>

              <p className="text-gray-500 text-sm lg:text-base leading-relaxed font-medium">
                Empowering Minds, Inspiring Futures: Since 1977, Beersheba School in
                Haldwani has been a beacon of educational excellence. With a rich
                legacy spanning over four decades, we shape tomorrow&apos;s leaders
                through academic rigor and holistic development.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                <Link href={"/news-event"}>
                  <Button className="bg-[#3B2565] hover:bg-[#2A1a4a] text-white px-8 h-12 rounded-2xl transition-all shadow-xl shadow-[#3B2565]/20 text-sm font-bold active:scale-95">
                    Explore Highlights
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Carousel Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10">
              <Carousel className="w-full max-w-[300px] sm:max-w-[340px] mx-auto lg:mr-0 group">
                <div className="absolute -inset-4 bg-[#3B2565]/5 rounded-[3rem] -z-10 blur-xl group-hover:bg-[#3B2565]/10 transition-colors duration-500" />
                <CarouselContent>
                  {featured.length > 0 ? featured.map((item, index) => (
                    <CarouselItem key={item.id}>
                      <Card className="border-none shadow-2xl rounded-[2.5rem] overflow-hidden bg-white cursor-pointer ring-1 ring-black/5">
                        <CardContent className="p-0">
                          <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-50">
                             <Image
                              src={item.newsImage.url}
                              alt={`Featured news: ${item.newsHeading}`}
                              fill
                              priority={index === 0}
                              className="object-contain p-4 transition-transform duration-700 hover:scale-105"
                            />
                          </div>
                          <div className="p-5 text-center bg-white">
                            <Link href={`/news-event/${item.id}`}>
                              <p className="text-base font-bold text-[#3B2565] line-clamp-2 hover:text-[#E74040] transition-colors leading-tight mb-2">
                                 {item.newsHeading}
                              </p>
                              <span className="inline-block text-[9px] font-black uppercase tracking-[0.15em] text-[#E74040] px-3 py-1 bg-[#E74040]/5 rounded-lg group-hover/btn:bg-[#E74040] group-hover/btn:text-white transition-all">
                                👉 More Details
                              </span>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  )) : (
                    <CarouselItem>
                      <Card className="border-none shadow-xl rounded-[2.5rem] overflow-hidden bg-white p-20 text-center">
                         <p className="text-gray-400 font-medium italic">Discover our highlights</p>
                      </Card>
                    </CarouselItem>
                  )}
                </CarouselContent>
                
                {/* Refined Navigation */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 flex gap-4">
                   <CarouselPrevious className="static translate-x-0 translate-y-0 h-10 w-10 border-[#3B2565]/10 bg-white/80 backdrop-blur-md hover:border-[#3B2565] hover:bg-[#3B2565] hover:text-white transition-all shadow-lg" />
                   <CarouselNext className="static translate-x-0 translate-y-0 h-10 w-10 border-[#3B2565]/10 bg-white/80 backdrop-blur-md hover:border-[#3B2565] hover:bg-[#3B2565] hover:text-white transition-all shadow-lg" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards Grid */}
      <div className="container mx-auto px-4 mt-16 mb-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <VideoCard
            title="Modern Campus"
            desc="Innovative learning spaces designed for academic growth."
            source="/assets/image/icon cool-icon-l19.svg"
            link="/image-gallery/cm5mnfbsx02mx07o1cneh7g2p"
          />
          <VideoCard
            title="Expert Faculty"
            desc="Passionate educators committed to student success."
            source="/assets/image/icon cool-icon-l22.svg"
            link="/image-gallery/cm5mnegp902d807o727z5rmcy"
          />
          <VideoCard
            title="Rich Library"
            desc="Extensive resources and digital learning tools."
            source="/assets/image/icon cool-icon-l25.svg"
            link="/image-gallery/cm5moi6bh037107o75b1f654h"
          />
          <VideoCard
            title="Smart Learning"
            desc="Next-gen technology integrated into every classroom."
            source="/assets/image/icon cool-icon-l28.svg"
            link="/image-gallery/cm5moitf803ei07o1bwivnwd7"
          />
        </div>
      </div>
    </section>
  );
};

export default Video;
