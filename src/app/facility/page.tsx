import AdmissionEnquiry from "@/components/admission-enquiry";
import Facilities from "@/components/facility/facilities";
import Video from "@/components/video";
import React from "react";

const page = () => {
  return (
    <>
      <Facilities />
      <Video source="/assets/image/beersheba-video.mp4" />
      <AdmissionEnquiry />
    </>
  );
};

export default page;
