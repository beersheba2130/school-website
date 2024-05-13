import Sessions from "@/components/academics/sessions";
import Uniform from "@/components/academics/uniform";
import Banner from "@/components/banner";
import React from "react";

const page = () => {
  return (
    <>
      <Banner
        title="Academics"
        description="Beersheba - Haldwani"
        source="/assets/image/aboutImage.jpg"
      />
      <Sessions />
      <Uniform />
    </>
  );
};

export default page;
