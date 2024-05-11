import Image from "next/image";
import React from "react";
import Heading2 from "../heading2";

const Facilities = () => {
  return (
    <section className="grid grid-cols-2 gap-5 p-10">
      <div className="grid">
        <Image
          src={"/assets/image/image 35.png"}
          alt="Facilities"
          width={600}
          height={300}
        />

        <div className="flex">
          <Image
            src={"/assets/image/image 37.png"}
            alt="Facilities"
            width={300}
            height={300}
          />
          <Image
            src={"/assets/image/image 36.png"}
            alt="Facilities"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="flex justify-center flex-col gap-5 p-1">
        <Heading2 title="Library" />
        <p>
          Well-resourced, aesthetically designed Primary School Library and
          Senior School Library are air-conditioned facilities with colourful,
          age-appropriate furniture that creates an inviting ambience for the
          young readers. These libraries have dedicated highspeed internet
          browsing facilities for the students to access various online
          resources. A dedicated story-telling corner in the Primary Library
          makes it a special place for the students.
        </p>
      </div>
    </section>
  );
};

export default Facilities;
