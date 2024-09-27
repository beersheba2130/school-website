import React from "react";
import Heading3 from "../heading3";
import Image from "next/image";
import { poppins } from "@/utils/font";
import { CircleCheckBig } from "lucide-react";

const MissionAndValues = () => {
  return (
    <section className="container p-2 lg:p-10">
      <Heading3 title=" Vision & Our Values" />

      <div className="my-5 p-2 lg:p-10 grid grid-cols-2 lg:grid-cols-4 gap-2">
        <div className="col-span-2 p-3 lg:p-5 rounded-lg bg-[#D6C9EF]/80">
          <div className="flex gap-5 items-center">
            <Image
              src={"/assets/image/accountability (2) 1.png"}
              alt="logo Mission and Values"
              width={60}
              height={60}
            />
            <h4
              className={`${poppins.className} text-[#3B2565] text-lg font-bold underline underline-offset-4 text-balance`}
            >
              Our Core Values
            </h4>
          </div>
          <p className="text-[#3B2565] lg:text-base my-3 font-medium">
            At Beersheba School, we are committed to fostering a nurturing and
            inclusive environment where every student can thrive. We emphasize
            the importance of holistic development, ensuring that our students
            are well-prepared for the challenges of the future
          </p>
          <div className="text-[#3B2565] ">
            <div className="flex gap-5 items-center my-2">
              <CircleCheckBig size={20} color="#DE4848" />{" "}
              <p className="text-base">Honesty and Respect</p>
            </div>
            <div className="flex gap-5 items-center my-2">
              <CircleCheckBig size={20} color="#DE4848" />{" "}
              <p className="text-base"> Creativity and Excellence</p>
            </div>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Image
            src={"/assets/image/vision (1).jpg"}
            alt="About"
            width={250}
            height={200}
            className=" w-full h-80 flex rounded-md justify-center items-center"
          />
        </div>
        <div className="col-span-2 lg:col-span-1 p-5 rounded-lg bg-[#D6C9EF]/80 text-[#3B2565]">
          <div className="flex gap-5 items-center">
            <Image
              src={"/assets/image/ep_view.png"}
              alt="logo Mission and Values"
              width={60}
              height={60}
            />
            <h4
              className={`${poppins.className} text-[#3B2565] text-lg font-bold underline underline-offset-4 text-balance`}
            >
              Our Vision
            </h4>
          </div>
          <p className="text-[rgb(59,37,101)] text-sm lg:text-base my-3">
            To unlock each student&apos;s potential through innovative and
            responsive teaching practices. We foster adaptability, critical
            thinking, and lifelong learning, preparing students for academic
            success and to thrive in a changing global landscape.
          </p>
        </div>
        <div className="col-span-2">
          <Image
            src={"/assets/image/mission (1).jpg"}
            alt="About"
            width={600}
            height={300}
            className="h-80 w-full flex justify-center object-cover items-center rounded-md"
          />
        </div>
        <div className="col-span-2 p-3 rounded-lg bg-[#D6C9EF]/80">
          <div className="flex gap-5 items-center">
            <Image
              src={"/assets/image/Vector-icon.png"}
              alt="logo Mission and Values"
              width={60}
              height={60}
            />
            <h4
              className={`${poppins.className}text-[#3B2565] text-lg font-bold underline underline-offset-4 text-balance`}
            >
              Our Mission
            </h4>
          </div>
          <p className="text-[#3B2565] text-sm lg:text-base my-3">
            Beersheba School is dedicated to providing a comprehensive education
            that nurtures the intellectual, physical, and social development of
            every student. We strive to create a supportive and stimulating
            learning environment that encourages curiosity, creativity, and
            critical thinking. Our mission is to equip students with the skills
            and values needed to succeed in a rapidly evolving world.
          </p>
          <div className="text-[#3B2565] ">
            <div className="flex gap-5 items-center my-2">
              <CircleCheckBig color="#DE4848" /> <p> Holistic Development</p>
            </div>
            <div className="flex gap-5 items-center my-2">
              <CircleCheckBig color="#DE4848" /> <p> Lifelong Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionAndValues;
