import React from "react";
import Slider from "../swiper/slider";

const HeroSection = () => {
  const slides = [
    "/assets/image/unsplash_d1Wj9qU5C-o.png",
    "/assets/image/unsplash_d1Wj9qU5C-o.png",
    "/assets/image/unsplash_d1Wj9qU5C-o.png",
    "/assets/image/unsplash_d1Wj9qU5C-o.png",
    "/assets/image/unsplash_d1Wj9qU5C-o.png",
  ];
  return (
    <section>
      <Slider source={slides} />
    </section>
  );
};

export default HeroSection;
