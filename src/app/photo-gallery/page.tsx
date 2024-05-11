import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <section className="container p-5 lg:p-10 grid grid-cols-3 gap-1">
        <Image
          src={"/assets/image/unsplash_fwfobhsF1Kw.png"}
          alt="Gallery Photo"
          className="w-full h-auto object-cover rounded-lg shadow-md"
          width={700}
          height={500}
        />
        <Image
          src={"/assets/image/unsplash_iwJscb2Ezsk.png"}
          alt="Gallery Photo"
          className="w-full h-auto object-cover rounded-lg shadow-md"
          width={700}
          height={500}
        />
        <Image
          src={"/assets/image/unsplash_9856jObeogs.png"}
          alt="Gallery Photo"
          className="w-full h-auto object-cover rounded-lg shadow-md"
          width={700}
          height={700}
        />
        <Image
          src={"/assets/image/unsplash_LAY19dUD_ro.png"}
          alt="Gallery Photo"
          className="w-full h-auto object-cover rounded-lg shadow-md col-span-2"
          width={700}
          height={700}
        />
        <div>
          <Image
            src={"/assets/image/unsplash_yQnyP1g5zl4.png"}
            alt="Gallery Photo"
            className="w-full h-auto object-cover rounded-lg shadow-md col-span-1 mb-1"
            width={700}
            height={700}
          />
          <Image
            src={"/assets/image/unsplash_yQnyP1g5zl4.png"}
            alt="Gallery Photo"
            className="w-full h-auto object-cover rounded-lg shadow-md col-span-1 mt-1"
            width={700}
            height={700}
          />
        </div>
      </section>
    </>
  );
};

export default page;
