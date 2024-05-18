"use client";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

const HeroSection = () => {
  const refSwiper = useSwiper();

  console.log(refSwiper, "🟢🟢🟢🟢🟢");

  return (
    <section className="py-10 container">
      <Swiper modules={[Pagination]} className="h-64">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

      <div className="bg-red-500 p-5 rounded-full">1</div>
      <div className="bg-red-500 p-5 rounded-full">2</div>
      <div className="bg-red-500 p-5 rounded-full">3</div>
    </section>
  );
};

export default HeroSection;
