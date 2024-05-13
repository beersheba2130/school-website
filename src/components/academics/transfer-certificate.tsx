import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const TransferCertificate = () => {
  return (
    <section className="py-10 px-5">
      <div className="p-10 bg-gray-300 max-w-4xl mx-auto rounded-lg flex gap-10">
        <p className="text-xl font-semibold ">Enter Serial No.</p>
        <div className="flex gap-5">
          <Input placeholder="Enter Serial Number" className="W-96" />
          <Button>Search</Button>
        </div>
      </div>
    </section>
  );
};

export default TransferCertificate;
