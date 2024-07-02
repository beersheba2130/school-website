import React from "react";
import Slider from "../swiper/slider";

const HeroSection = () => {
  const src = [
    "/assets/image/beershiba-1.jpeg",
    "/assets/image/beershiba-3.jpeg",
    "/assets/image/beershiba-4.jpeg",
  ];
  return (
    <section>
      <Slider source={src} />
    </section>
  );
};

export default HeroSection;
