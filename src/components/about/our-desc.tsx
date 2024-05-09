import React from "react";
import Heading3 from "../heading3";
import IconCard from "./icon-card";

const OurDesc = () => {
  return (
    <section className="py-10 px-5 md:px-20">
      <Heading3 title="Our Description" />
      <p className=" text-gray-600 mt-3 md:mt-5">
        Beersheba School, located in Haldwani, was established on July 4, 1977,
        in the heart of the city with an initial enrollment of only 60 children.
        This co-educational English Medium school was founded by the late Shri.
        and Smt. N.N.D. Bhatt. The school's origin, existence, and development
        can be attributed to the unwavering efforts of the late Mr. N.N.D.
        Bhatt.unwavering efforts of the late
      </p>
      <IconCard />
    </section>
  );
};

export default OurDesc;
