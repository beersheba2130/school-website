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
    <div>
      <Slider source={slides} />
    </div>
  );
};

export default HeroSection;
