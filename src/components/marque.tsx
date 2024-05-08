import React from "react";

const Marque = () => {
  return (
    <div className="container bg-primary grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-white  px-2 py-1 text-xs md:text-sm font-semibold ">
      <p className=" animate-marquee text-center whitespace-nowrap">
        Online Registration Open
      </p>
      <p className=" animate-marquee text-center whitespace-nowrap">
        Online Registration Open
      </p>
      <p className="hidden md:block animate-marquee text-center whitespace-nowrap">
        Online Registration Open
      </p>
      <p className=" animate-marquee hidden lg:block text-center whitespace-nowrap">
        Online Registration Open
      </p>
    </div>
  );
};

export default Marque;
