import React from "react";
import Heading2 from "../heading2";
import VideoCard from "./video-card";

const Video = () => {
  return (
    <section className="container relative  bg-[#DED4F2] grid grid-cols-1 lg:grid-cols-2 ">
      <div>
        <Heading2
          title="Leading School in City
Since 1977"
        />
        <p className="text-gray-600 my-5">
          Beersheba School's Early Years program provides a caring and safe
          environment that meets the specific needs of young learners. This
          program focuses on developing fundamental literacy.
        </p>
      </div>
      <div className=" flex items-center justify-center">
        <video
          src="/assets/videos/3258365-hd_1920_1080_30fps.mp4"
          controls
          height={400}
          width={500}
        />
      </div>
      <div className="absolute -bottom-24 flex justify-evenly items-center w-full flex-wrap">
        <VideoCard
          title="Campus"
          desc="The gradual accumulation of information about"
          source="/assets/image/icon cool-icon-l19.svg"
        />
        <VideoCard
          title="Expert Teacher"
          desc="The gradual accumulation of information about"
          source="/assets/image/icon cool-icon-l22.svg"
        />
        <VideoCard
          title="Book's Library"
          desc="The gradual accumulation of information about"
          source="/assets/image/icon cool-icon-l25.svg"
        />
        <VideoCard
          title="Smart School"
          desc="The gradual accumulation of information about"
          source="/assets/image/icon cool-icon-l28.svg"
        />
      </div>
    </section>
  );
};

export default Video;
