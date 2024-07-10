import React from "react";
import Slider from "../swiper/slider";

const HeroSection = () => {
  const src = [
    {
      url: "/assets/image/beershiba-1.jpeg",
      heading: "WELCOME TO BEERSHEEBA SCHOOL (HALDWANI)",
      content:
        "Empowering students with knowledge and skills for a brighter future.",
    },
    {
      url: "/assets/image/beershiba-3.jpeg",
      heading: "WELCOME TO BEERSHEEBA SCHOOL (HALDWANI)",
      content:
        "Cultivating adaptability and resilience to thrive in a changing world.",
    },
    {
      url: "/assets/image/beershiba-4.jpeg",
      heading: "WELCOME TO BEERSHEEBA SCHOOL (HALDWANI)",
      content:
        "Fostering holistic development to build well-rounded individuals.",
    },
  ];
  return (
    <section>
      <Slider source={src} />
    </section>
  );
};

export default HeroSection;
