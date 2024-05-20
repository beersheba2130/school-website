import Image from "next/image";
import React from "react";
import Heading2 from "../heading2";

const facilitiesData = [
  {
    title: "Library",
    description:
      "Well-resourced, aesthetically designed Primary School Library and Senior School Library are air-conditioned facilities with colourful, age-appropriate furniture that creates an inviting ambience for the young readers. These libraries have dedicated highspeed internet browsing facilities for the students to access various online resources. A dedicated story-telling corner in the Primary Library makes it a special place for the students.",
    images: [
      "/assets/image/image 35.png",
      "/assets/image/image 37.png",
      "/assets/image/image 36.png",
    ],
  },
  {
    title: "Library",
    description:
      "Well-resourced, aesthetically designed Primary School Library and Senior School Library are air-conditioned facilities with colourful, age-appropriate furniture that creates an inviting ambience for the young readers. These libraries have dedicated highspeed internet browsing facilities for the students to access various online resources. A dedicated story-telling corner in the Primary Library makes it a special place for the students.",
    images: [
      "/assets/image/image 35.png",
      "/assets/image/image 37.png",
      "/assets/image/image 36.png",
    ],
  },
  {
    title: "Library",
    description:
      "Well-resourced, aesthetically designed Primary School Library and Senior School Library are air-conditioned facilities with colourful, age-appropriate furniture that creates an inviting ambience for the young readers. These libraries have dedicated highspeed internet browsing facilities for the students to access various online resources. A dedicated story-telling corner in the Primary Library makes it a special place for the students.",
    images: [
      "/assets/image/image 35.png",
      "/assets/image/image 37.png",
      "/assets/image/image 36.png",
    ],
  },
  {
    title: "Library",
    description:
      "Well-resourced, aesthetically designed Primary School Library and Senior School Library are air-conditioned facilities with colourful, age-appropriate furniture that creates an inviting ambience for the young readers. These libraries have dedicated highspeed internet browsing facilities for the students to access various online resources. A dedicated story-telling corner in the Primary Library makes it a special place for the students.",
    images: [
      "/assets/image/image 35.png",
      "/assets/image/image 37.png",
      "/assets/image/image 36.png",
    ],
  },
  {
    title: "Library",
    description:
      "Well-resourced, aesthetically designed Primary School Library and Senior School Library are air-conditioned facilities with colourful, age-appropriate furniture that creates an inviting ambience for the young readers. These libraries have dedicated highspeed internet browsing facilities for the students to access various online resources. A dedicated story-telling corner in the Primary Library makes it a special place for the students.",
    images: [
      "/assets/image/image 35.png",
      "/assets/image/image 37.png",
      "/assets/image/image 36.png",
    ],
  },
  {
    title: "Library",
    description:
      "Well-resourced, aesthetically designed Primary School Library and Senior School Library are air-conditioned facilities with colourful, age-appropriate furniture that creates an inviting ambience for the young readers. These libraries have dedicated highspeed internet browsing facilities for the students to access various online resources. A dedicated story-telling corner in the Primary Library makes it a special place for the students.",
    images: [
      "/assets/image/image 35.png",
      "/assets/image/image 37.png",
      "/assets/image/image 36.png",
    ],
  },
];

const Facilities = () => {
  return (
    <section className="p-5 lg:p-10">
      {facilitiesData.map((facility, index) => (
        <div
          key={index}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10`}
        >
          <div
            className={` ${index + (1 % 2) === 0 ? "order-1" : "lg:order-2"}`}
          >
            <Image
              src={facility.images[0]}
              alt={facility.title}
              width={600}
              height={300}
            />
            <div className="flex">
              <Image
                src={facility.images[1]}
                alt={facility.title}
                width={300}
                height={300}
              />
              <Image
                src={facility.images[2]}
                alt={facility.title}
                width={300}
                height={300}
              />
            </div>
          </div>
          <div
            className={`flex justify-center flex-col gap-5 p-1 ${
              index + (1 % 2) !== 0 ? "order-2" : "lg:order-1"
            }`}
          >
            <Heading2 title={facility.title} />
            <p className="text-sm md:text-base">{facility.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Facilities;
