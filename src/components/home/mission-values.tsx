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
            Beersheba School, located in Haldwani, was established on July 4,
            1977, in the heart of the city with an initial enrollment of only 60
            children. This co-educational English Medium school was founded by
            the late Shri. and Smt. N.N.D. Bhatt. The school&apos;s origin,
            existence, and development can be attributed to the unwavering
            efforts of the late Mr. N.N.D. Bhatt.
          </p>
          <div className="text-[#3B2565] ">
            <div className="flex gap-5 items-center my-2">
              <CircleCheckBig size={20} color="#DE4848" />{" "}
              <p className="text-base">Values 1</p>
            </div>
            <div className="flex gap-5 items-center my-2">
              <CircleCheckBig size={20} color="#DE4848" />{" "}
              <p className="text-base">Values 1</p>
            </div>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Image
            src={"/assets/image/about image.jpg"}
            alt="About"
            width={250}
            height={200}
            className=" w-full h-80 flex justify-center items-center"
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
          <p className="text-[#3B2565] text-sm lg:text-base my-3">
            Ended by the late Shri. and Smt. N.N.D. Bhatt. The school&apos;s
            origin, existence, and development can be attributed to the
            unwavering efforts of the late Mr. N.N.D. Bhatt. His dedication and
            inspiration left a lasting impact on numerous individuals.{" "}
          </p>
        </div>
        <div className="col-span-2">
          <Image
            src={"/assets/image/college.png"}
            alt="About"
            width={600}
            height={300}
            className="h-80 w-full flex justify-center items-center"
          />
        </div>
        <div className="col-span-2 p-3 rounded-lg bg-[#D6C9EF]/80">
          <div className="flex gap-5 items-center">
            <Image
              src={"/assets/image/vector.png"}
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
            Beersheba School, located in Haldwani, was established on July 4,
            1977, in the heart of the city with an initial enrollment of only 60
            children. This co-educational English Medium school was founded by
            the late Shri. and Smt. N.N.D. Bhatt. English Medium school was
            founded by the late Shri. and Smt. N.N.D. Bhatt.
          </p>
          <div className="text-[#3B2565] ">
            <div className="flex gap-5 items-center my-2">
              <CircleCheckBig color="#DE4848" /> <p>Values 1</p>
            </div>
            <div className="flex gap-5 items-center my-2">
              <CircleCheckBig color="#DE4848" /> <p>Values 1</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionAndValues;
