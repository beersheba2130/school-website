import Branches from "@/components/branches";
import About from "@/components/home/about";
import Academics from "@/components/home/academics";
import HeroSection from "@/components/home/hero-section";
import MissionAndValues from "@/components/home/mission-values";
import ToppersResult from "@/components/home/toppers-result";
import Video from "@/components/home/video";
import Why from "@/components/home/why";

const page = () => {
  return (
    <>
      <HeroSection />
      <About />
      <MissionAndValues />
      <Academics />
      <Video />
      <Why />
      <ToppersResult />
      <Branches />
    </>
  );
};

export default page;
