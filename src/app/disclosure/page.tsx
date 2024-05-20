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

      <section className="container p-5 lg:p-10">
        <Heading3 title="Mandatory Disclosure" />
        <div className="lg:p-10">
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full my-10 text-[#3B2565] border-collapse">
              <tbody>
                <tr className=" border-2  border-[#3B2565]">
                  <td className=" text-lg lg:text-xl font-semibold  py-2 px-5">
                    Affiliation/Extension
                  </td>
                  <td className="border-l-2 border-[#3B2565] py-2 px-5 flex justify-center items-center">
                    <Button>View Details</Button>
                  </td>
                </tr>
                <tr className=" border-2  border-[#3B2565]">
                  <td className=" text-lg lg:text-xl font-semibold  py-2 px-5">
                    NOC
                  </td>
                  <td className="border-l-2 border-[#3B2565] py-2 px-5 flex justify-center items-center">
                    <Button>View Details</Button>
                  </td>
                </tr>
                <tr className=" border-2  border-[#3B2565]">
                  <td className=" text-lg lg:text-xl font-semibold  py-2 px-5">
                    Bank Account Type
                  </td>
                  <td className="border-l-2 border-[#3B2565] py-2 px-5 flex justify-center items-center">
                    <Button>View Details</Button>
                  </td>
                </tr>
                <tr className=" border-2  border-[#3B2565]">
                  <td className=" text-lg lg:text-xl font-semibold  py-2 px-5">
                    Building SafetyView Details
                  </td>
                  <td className="border-l-2 border-[#3B2565] py-2 px-5 flex justify-center items-center">
                    <Button>View Details</Button>
                  </td>
                </tr>
                <tr className=" border-2  border-[#3B2565]">
                  <td className=" text-lg lg:text-xl font-semibold  py-2 px-5">
                    Fire SafetyView Details
                  </td>
                  <td className="border-l-2 border-[#3B2565] py-2 px-5 flex justify-center items-center">
                    <Button>View Details</Button>
                  </td>
                </tr>
                <tr className=" border-2  border-[#3B2565]">
                  <td className=" text-lg lg:text-xl font-semibold  py-2 px-5">
                    General Information
                  </td>
                  <td className="border-l-2 border-[#3B2565] py-2 px-5 flex justify-center items-center">
                    <Button>View Details</Button>
                  </td>
                </tr>
                <tr className=" border-2  border-[#3B2565]">
                  <td className=" text-lg lg:text-xl font-semibold  py-2 px-5">
                    Committees and Incharges 2022-23
                  </td>
                  <td className="border-l-2 border-[#3B2565] py-2 px-5 flex justify-center items-center">
                    <Button>View Details</Button>
                  </td>
                </tr>
                <tr className=" border-2  border-[#3B2565]">
                  <td className=" text-lg lg:text-xl font-semibold  py-2 px-5">
                    Safe water condition and sanitary condition
                  </td>
                  <td className="border-l-2 border-[#3B2565] py-2 px-5 flex justify-center items-center">
                    <Button>View Details</Button>
                  </td>
                </tr>
                <tr className=" border-2  border-[#3B2565]">
                  <td className=" text-lg lg:text-xl font-semibold  py-2 px-5">
                    Recognition Certificate Under RTE Act 2009
                  </td>
                  <td className="border-l-2 border-[#3B2565] py-2 px-5 flex justify-center items-center">
                    <Button>View Details</Button>
                  </td>
                </tr>
                <tr className=" border-2  border-[#3B2565]">
                  <td className=" text-lg lg:text-xl font-semibold  py-2 px-5">
                    Annual Academic Calender 2023-24
                  </td>
                  <td className="border-l-2 border-[#3B2565] py-2 px-5 flex justify-center items-center">
                    <Button>View Details</Button>
                  </td>
                </tr>
                <tr className=" border-2  border-[#3B2565]">
                  <td className=" text-lg lg:text-xl font-semibold  py-2 px-5">
                    Society Registration
                  </td>
                  <td className="border-l-2 border-[#3B2565] py-2 px-5 flex justify-center items-center">
                    <Button>View Details</Button>
                  </td>
                </tr>
                <tr className=" border-2  border-[#3B2565]">
                  <td className=" text-lg lg:text-xl font-semibold  py-2 px-5">
                    Club and Committees 2023-24 
                  </td>
                  <td className="border-l-2 border-[#3B2565] py-2 px-5 flex justify-center items-center">
                    <Button>View Details</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
