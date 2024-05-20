import React from "react";
import Slider from "../swiper/slider";

const HeroSection = () => {
  const src = [
    "/assets/image/unsplash_d1Wj9qU5C-o.png",
    "/assets/image/unsplash_fwfobhsF1Kw.png",
    "/assets/image/unsplash_gvptKmonylk.png",
  ];
  return (
    <section>
      <Slider source={src} />
    </section>
  );
};

export default HeroSection;
