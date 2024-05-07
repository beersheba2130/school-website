import { poppins } from "@/utils/font";
import React from "react";

const TopHeader = () => {
  return (
    <div
      className={`${poppins.className} bg-primary flex justify-between items-center flex-col lg:flex-row text-white py-1 px-5 lg:px-10 text-xs lg:text-sm font-medium`}
    >
      <div className="flex gap-2 lg:gap-5 flex-col lg:flex-row">
        <div className="flex gap-2 items-center">
          <img src="/assets/image/email.svg" alt="email" />
          <p>beershebaschool_hld@rediffmail.com</p>
        </div>
        <div className="flex gap-2 items-center">
          <img src="/assets/image/call.svg" alt="call" />
          <p>05946-223030, 05946-222256, 9634374446</p>
        </div>
      </div>
      <div className="lg:flex gap-5 hidden">
        <p>Online Registration</p>
        <p>|</p>
        <p>Haldwani</p>
      </div>
    </div>
  );
};

export default TopHeader;
