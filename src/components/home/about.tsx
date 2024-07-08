import Image from "next/image";
import React from "react";
import Heading2 from "../heading2";
import { poppins } from "@/utils/font";
import { Button } from "../ui/button";
import Link from "next/link";

const About = () => {
  return (
    <section className="container p-5 lg:p-10 grid grid-cols-1 lg:grid-cols-2">
      <div className="p-5 relative flex justify-center items-center">
        <Image
          src={"/assets/image/beershiba-2.jpeg"}
          alt="About Image"
          width={330}
          height={330}
          className="object-cover z-10 rounded-md"
        />

        <div className="absolute top-0 left-0 lg:left-32 border-2 border-dashed border-[#DB2F2F] rounded-md h-64 w-64 lg:h-80 lg:w-80 -z-10"></div>
      </div>
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
          late Shri. and Smt. N.N.D. Bhatt. The school&apos;s origin, existence,
          and development can be attributed to the unwavering efforts of the
          late Mr. N.N.D. Bhatt. His dedication and inspiration left a lasting
          impact on numerous individuals. May his vision and the great work he
          initiated continue to be blessed.
        </p>

        <Link href={"/about"}>
          <Button className="mt-5">Read More</Button>
        </Link>
      </div>
    </section>
  );
};

export default About;
