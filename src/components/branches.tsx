import React from "react";
import Heading3 from "./heading3";
import Image from "next/image";
import { poppins } from "@/utils/font";

const Branches = () => {
  return (
    <section className="bg-[#DED4F2]">
      <div className="container mx-auto py-10 ">
        <Heading3 title="Our Branches" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 py-10">
          <div className="rounded-xl  bg-white flex flex-col py-10 justify-center items-center">
            <Image
              src={"/assets/image/BEERSHIBA SCHOOL (2).png"}
              alt="logo"
              width={900}
              height={800}
              className="w-16 h-16 object-cover"
            />
            <h5
              className={`${poppins.className} text-lg lg:text-xl text-[#3B2565] pt-5 font-bold text-center`}
            >
              NNDM Beersheba School
            </h5>
            <p>Ranikhet</p>
          </div>
          <div className="rounded-xl  bg-white flex flex-col py-10 justify-center items-center">
            <Image
              src={"/assets/image/BEERSHIBA SCHOOL (2).jpg"}
              alt="logo"
              width={900}
              height={800}
              className="w-16 h-16 object-cover"
            />
            <h5
              className={`${poppins.className} text-lg lg:text-xl text-[#3B2565] pt-5 font-bold text-center`}
            >
              Beersheba School
            </h5>
            <p>Haldwani</p>
          </div>
          <div className="rounded-xl  bg-white flex flex-col py-10 justify-center items-center">
            <Image
              src={"/assets/image/ranikhet logo (1).png"}
              alt="logo"
              width={900}
              height={800}
              className="w-16 h-16 object-cover"
            />
            <h5
              className={`${poppins.className} text-lg lg:text-xl text-[#3B2565] pt-5 font-bold text-center`}
            >
              Beershiba School
            </h5>
            <p>Chaukhutia</p>
          </div>
          <div className="rounded-xl  bg-white flex flex-col py-10 justify-center items-center">
            <Image
              src={"/assets/image/ranikhet logo (1).png"}
              alt="logo"
              width={900}
              height={800}
              className="w-16 h-16 object-cover"
            />
            <h5
              className={`${poppins.className} text-lg lg:text-xl text-[#3B2565] pt-5 font-bold text-center`}
            >
              Beersheba Sr. Sec. School
            </h5>
            <p>Almora</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branches;
