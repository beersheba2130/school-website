import Banner from "@/components/banner";
import Branches from "@/components/branches";
import FounderMessage from "@/components/message/founder-message";
import Video from "@/components/video";
import React from "react";

const page = () => {
  return (
    <>
      <Banner
        title="Message"
        description="Beersheba - Haldwani"
        source="/assets/image/aboutImage.jpg"
      />
      <FounderMessage />
      <Branches />
      <Video source="/assets/videos/video.mp4" />
    </>
  );
};

export default page;
