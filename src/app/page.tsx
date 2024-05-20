import AdmissionEnquiry from "@/components/admission-enquiry";
import Branches from "@/components/branches";
import About from "@/components/home/about";
import Academics from "@/components/home/academics";
import Events from "@/components/home/events";
import Gallery from "@/components/home/gallery";
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
      <Gallery />
      <Events />
      <AdmissionEnquiry />
    </>
  );
};

export default page;
