import Banner from "@/components/banner";
import Heading3 from "@/components/heading3";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <>
      <Banner
        source="/assets/image/aboutImage.jpg"
        title="Disclosure"
        description="Beersheba - Haldwani"
      />

      <section className="container p-5 lg:p-10 ">
        <Heading3 title="Mandatory Disclosure" />
        <div className="lg:p-10 ">
          <div className="max-w-4xl mx-auto">
            <table className="w-full my-10 text-[#3B2565] border-collapse">
              <tr>
                <td className="border-2 text-xl font-semibold border-[#3B2565] py-3 px-5">
                  Affiliation/Extension
                </td>
                <td className="border-2 border-[#3B2565] py-3 px-5">
                  <Button>View Details</Button>
                </td>
              </tr>
              <tr>
                <td className="border-2 text-xl font-semibold border-[#3B2565] py-3 px-5">
                  NOC
                </td>
                <td className="border-2 border-[#3B2565] py-3 px-5">
                  <Button>View Details</Button>
                </td>
              </tr>
              <tr>
                <td className="border-2 text-xl font-semibold border-[#3B2565] py-3 px-5">
                  Bank Account Type
                </td>
                <td className="border-2 border-[#3B2565] py-3 px-5">
                  <Button>View Details</Button>
                </td>
              </tr>
              <tr>
                <td className="border-2 text-xl font-semibold border-[#3B2565] py-3 px-5">
                Building SafetyView Details
                </td>
                <td className="border-2 border-[#3B2565] py-3 px-5">
                  <Button>View Details</Button>
                </td>
              </tr>
              <tr>
                <td className="border-2 text-xl font-semibold border-[#3B2565] py-3 px-5">
                Building SafetyView Details
                </td>
                <td className="border-2 border-[#3B2565] py-3 px-5">
                  <Button>View Details</Button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
