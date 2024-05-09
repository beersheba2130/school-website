import React from "react";
import { poppins } from "@/utils/font";
import Heading2 from "../heading2";
import Image from "next/image";

const About = () => {
  return (
    <section className="container relative mx-auto grid grid-cols-1  lg:grid-cols-2 gap-4 py-10 px-5 md:px-10">
      {/* <Image
        src={"/assets/image/decoration.jpg"}
        alt="decoration bg"
        width={600}
        height={500}
        className="absolute h-72 w-24 object-cover"
      /> */}
      <div className="md:px-10">
        <p
          className={`${poppins.className} text-2xl font-medium text-[#DB2F2F]`}
        >
          About
        </p>

        <Heading2 title="Beersheba School" />

        <p className="text-gray-600 mt-5">
          Beersheba School, located in Haldwani, was established on July 4,
          1977, in the heart of the city with an initial enrollment of only 60
          children. This co-educational English Medium school was founded by the
          late Shri. and Smt. N.N.D. Bhatt. The school's origin, existence, and
          development can be attributed to the unwavering efforts of the late
          Mr. N.N.D. Bhatt. His dedication and inspiration left a lasting impact
          on numerous individuals. May his vision and the great work he
          initiated continue to be blessed.
        </p>
        <p className="text-gray-600 mt-5">
          Beersheba School, located in Haldwani, was established on July 4,
          1977, in the heart of the city with an initial enrollment of only 60
          children. This co-educational English Medium school was founded by the
          late Shri. and Smt. N.N.D. Bhatt. The school's origin, existence, and
          development can be attributed to the unwavering efforts of the late
          Mr. N.N.D. Bhatt. His dedication and inspiration left a lasting impact
          on numerous individuals. May his vision and the great work he
          initiated continue to be blessed.
        </p>
      </div>
      <div
        className="relative h-[70vh] md:h-full
      "
      >
        <Image
          src={"/assets/image/about image.jpg"}
          alt="About Image"
          width={400}
          height={400}
          className="rounded-lg absolute top-0 left-0 md:left-24 w-60 h-80 object-cover"
        />
        <Image
          src={"/assets/image/about image 2.jpg"}
          alt="About Image"
          width={400}
          height={400}
          className="rounded-lg absolute bottom-0 right-0 md:right-24 w-60 h-80 object-cover"
        />
      </div>
    </section>
  );
};

export default About;
