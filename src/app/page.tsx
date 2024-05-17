import About from "@/components/home/about";
import Academics from "@/components/home/academics";
import MissionAndValues from "@/components/home/mission-values";
import Video from "@/components/home/video";
import Why from "@/components/home/why";

const page = () => {
  return (
    <>
      <About />
      <Academics />
      <MissionAndValues />
      <Video />
      <Why />
    </>
  );
};

export default page;
