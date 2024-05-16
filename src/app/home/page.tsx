import About from "@/components/home/about";
import MissionAndValues from "@/components/home/mission-values";
import Video from "@/components/home/video";
import Why from "@/components/home/why";
import React from "react";

const page = () => {
  return (
    <>
      <About />
      <MissionAndValues />
      <Video />
      <Why />
    </>
  );
};

export default page;
