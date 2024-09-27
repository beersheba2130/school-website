import React from "react";
import Heading2 from "../heading2";
import VideoCard from "./video-card";

const Video = () => {
  return (
    <section className="container relative  bg-[#DED4F2] grid grid-cols-1 lg:grid-cols-2 pt-20 pb-96 lg:pb-48">
      <div>
        <Heading2
          title="Leading School in City
Since 1977"
        />
        <p className="text-gray-600 my-5">
          Pioneering excellence in education since 1977, Beersheba School in
          Haldwani remains committed to shaping young minds with a rich heritage
          of academic achievement and holistic development.
        </p>
      </div>
      <div className=" flex justify-center ">
        <video
          src="/assets/image/Beersheba Senior Secondary School, Haldwani-(1080p) (1).mp4"
          muted
          height={500}
          width={500}
          className="h-60 w-80 md:w-full md:h-80 max-w-[40rem] object-center object-contain  md:object-cover"
          autoPlay
          loop
        />
      </div>
      <div className="absolute lg:-bottom-24 -bottom-52 flex justify-evenly items-center w-full flex-wrap gap-2">
        <VideoCard
          title="Campus"
          desc="Exploring our expansive campus and its facilities."
          source="/assets/image/icon cool-icon-l19.svg"
        />
        <VideoCard
          title=" Teacher"
          desc="Meet our dedicated faculty members."
          source="/assets/image/icon cool-icon-l22.svg"
        />
        <VideoCard
          title="Library"
          desc="Discover our vast collection of books."
          source="/assets/image/icon cool-icon-l25.svg"
        />
        <VideoCard
          title="Smart School"
          desc="Embrace technology in education."
          source="/assets/image/icon cool-icon-l28.svg"
        />
      </div>
    </section>
  );
};

export default Video;
