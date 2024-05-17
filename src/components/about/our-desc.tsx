import React from "react";
import Heading3 from "../heading3";
import IconCard from "./icon-card";
import { Eye, Goal } from "lucide-react";
import { poppins } from "@/utils/font";

const OurDesc = () => {
  return (
    <section className="container mx-auto py-10 px-5 md:px-20">
      <Heading3 title="Our Description" />
      <p className=" text-gray-600 mt-3 md:mt-5">
        Beersheba School, located in Haldwani, was established on July 4, 1977,
        in the heart of the city with an initial enrollment of only 60 children.
        This co-educational English Medium school was founded by the late Shri.
        and Smt. N.N.D. Bhatt. The school&apos;s origin, existence, and
        development can be attributed to the unwavering efforts of the late Mr.
        N.N.D. Bhatt.unwavering efforts of the late
      </p>
      <IconCard />
      <p className=" text-gray-600 mt-3 md:mt-5">
        Beersheba School, located in Haldwani, was established on July 4, 1977,
        in the heart of the city with an initial enrollment of only 60 children.
        This co-educational English Medium school was founded by the late Shri.
        and Smt. N.N.D. Bhatt. The school&apos;ws origin, existence, and
        development can be attributed to the unwavering efforts of the late Mr.
        N.N.D. Bhatt.unwavering efforts of the late
      </p>

      <div className="max-w-4xl mx-auto ">
        <table className="w-full my-10 text-[#3B2565] border-collapse">
          <tr>
            <td className="border-2 border-[#3B2565] py-3 px-5">
              Medium of Instruction :
            </td>
            <td className="border-2 border-[#3B2565] py-3 px-5">English</td>
          </tr>
          <tr>
            <td className="border-2 border-[#3B2565] py-3 px-5">
              Board Affiliated to:
            </td>
            <td className="border-2 border-[#3B2565] py-3 px-5">C.B.S.E.</td>
          </tr>
          <tr>
            <td className="border-2 border-[#3B2565] py-3 px-5">
              Affiliation No:
            </td>
            <td className="border-2 border-[#3B2565] py-3 px-5">3530013</td>
          </tr>
          <tr>
            <td className="border-2 border-[#3B2565] py-3 px-5">
              Affiliation Status:
            </td>
            <td className="border-2 border-[#3B2565] py-3 px-5">
              May 1, 2020 to April 2035
            </td>
          </tr>
          <tr>
            <td className="border-2 border-[#3B2565] py-3 px-5">
              Norms followed for Fixing Fees:
            </td>
            <td className="border-2 border-[#3B2565] py-3 px-5">
              As per State Government
            </td>
          </tr>
        </table>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
        <div className="">
          <div className="flex gap-5 items-center">
            <Goal size={60} className="text-[#DB2F2F]" />
            <h5
              className={`${poppins.className} text-[#3B2565] text-xl font-extrabold`}
            >
              Our Mission
            </h5>
          </div>
          <p className="py-3 text-gray-600">
            Beersheba School, located in Haldwani, was established on July 4,
            1977, in the heart of the city with an initial enrollment of only 60
            children. This co-educational English Medium school was founded by
            the late Shri. and Smt. N.N.D. Bhatt. English Medium school was
            founded by the late Shri. and Smt. N.N.D. Bhatt.{" "}
          </p>
        </div>
        <div className="">
          <div className="flex gap-5 items-center">
            <Eye size={60} className="text-[#DB2F2F]" />
            <h5
              className={`${poppins.className} text-[#3B2565] text-xl font-extrabold`}
            >
              Our Mission
            </h5>
          </div>
          <p className="py-3 text-gray-600">
            Beersheba School, located in Haldwani, was established on July 4,
            1977, in the heart of the city with an initial enrollment of only 60
            children. This co-educational English Medium school was founded by
            the late Shri. and Smt. N.N.D. Bhatt. English Medium school was
            founded by the late Shri. and Smt. N.N.D. Bhatt.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurDesc;
