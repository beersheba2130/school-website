import React from "react";
import Heading3 from "../heading3";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { poppins } from "@/utils/font";
import { Button } from "../ui/button";
import Heading2 from "../heading2";

const Academics = () => {
  return (
    <section className="container p-5 lg:p-10">
      <Heading3 title="Academics" />

      <div className="py-5 lg:p-5">
        <Tabs defaultValue="early-years">
          <TabsList className="">
            <TabsTrigger value="early-years">EARLY YEARS</TabsTrigger>
            <TabsTrigger value="elementry-school">ELEMENTRY SCHOOL</TabsTrigger>
            <TabsTrigger value="middle-school">MIDDLE SCHOOL</TabsTrigger>
            <TabsTrigger value="high-school">HIGH SCHOOL</TabsTrigger>
            <TabsTrigger value="examination">EXAMINATION</TabsTrigger>
          </TabsList>

          <TabsContent value="early-years" className="my-7">
            <div className=" lg:p-10 gap-7 grid grid-cols-1 lg:grid-cols-2">
              <div className=" flex justify-center items-center">
                <Image
                  src={"/assets/image/college2.jpg"}
                  alt="About Image"
                  width={330}
                  height={330}
                  className="object-cover z-10"
                />
              </div>
              <div className="md:px-10">
                <p
                  className={`${poppins.className} text-2xl font-medium text-[#DB2F2F]`}
                >
                  About
                </p>

                <Heading2 title="Beersheba School" />

                <p className="text-gray-600 mt-5">
                  Beersheba School, located in Haldwani, was established on July
                  4, 1977, in the heart of the city with an initial enrollment
                  of only 60 children. This co-educational English Medium school
                  was founded by the late Shri. and Smt. N.N.D. Bhatt. The
                  school&apos;s origin, existence, and development can be
                  attributed to the unwavering efforts of the late Mr. N.N.D.
                  Bhatt. His dedication and inspiration left a lasting impact on
                  numerous individuals. May his vision and the great work he
                  initiated continue to be blessed.
                </p>

                <Button className="mt-5">Read More</Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="elementry-school" className="my-7">
            <div className=" lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-7">
              <div className=" flex justify-center items-center">
                <Image
                  src={"/assets/image/college2.jpg"}
                  alt="About Image"
                  width={330}
                  height={330}
                  className="object-cover z-10"
                />
              </div>
              <div className="md:px-10">
                <p
                  className={`${poppins.className} text-2xl font-medium text-[#DB2F2F]`}
                >
                  About
                </p>

                <Heading2 title="Beersheba School" />

                <p className="text-gray-600 mt-5">
                  Beersheba School, located in Haldwani, was established on July
                  4, 1977, in the heart of the city with an initial enrollment
                  of only 60 children. This co-educational English Medium school
                  was founded by the late Shri. and Smt. N.N.D. Bhatt. The
                  school&apos;s origin, existence, and development can be
                  attributed to the unwavering efforts of the late Mr. N.N.D.
                  Bhatt. His dedication and inspiration left a lasting impact on
                  numerous individuals. May his vision and the great work he
                  initiated continue to be blessed.
                </p>

                <Button className="mt-5">Read More</Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="middle-school" className="my-7">
            <div className=" lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-7">
              <div className=" flex justify-center items-center">
                <Image
                  src={"/assets/image/college2.jpg"}
                  alt="About Image"
                  width={330}
                  height={330}
                  className="object-cover z-10"
                />
              </div>
              <div className="md:px-10">
                <p
                  className={`${poppins.className} text-2xl font-medium text-[#DB2F2F]`}
                >
                  About
                </p>

                <Heading2 title="Beersheba School" />

                <p className="text-gray-600 mt-5">
                  Beersheba School, located in Haldwani, was established on July
                  4, 1977, in the heart of the city with an initial enrollment
                  of only 60 children. This co-educational English Medium school
                  was founded by the late Shri. and Smt. N.N.D. Bhatt. The
                  school&apos;s origin, existence, and development can be
                  attributed to the unwavering efforts of the late Mr. N.N.D.
                  Bhatt. His dedication and inspiration left a lasting impact on
                  numerous individuals. May his vision and the great work he
                  initiated continue to be blessed.
                </p>

                <Button className="mt-5">Read More</Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="high-school" className="my-7">
            <div className=" lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-7">
              <div className=" flex justify-center items-center">
                <Image
                  src={"/assets/image/college2.jpg"}
                  alt="About Image"
                  width={330}
                  height={330}
                  className="object-cover z-10"
                />
              </div>
              <div className="md:px-10">
                <p
                  className={`${poppins.className} text-2xl font-medium text-[#DB2F2F]`}
                >
                  About
                </p>

                <Heading2 title="Beersheba School" />

                <p className="text-gray-600 mt-5">
                  Beersheba School, located in Haldwani, was established on July
                  4, 1977, in the heart of the city with an initial enrollment
                  of only 60 children. This co-educational English Medium school
                  was founded by the late Shri. and Smt. N.N.D. Bhatt. The
                  school&apos;s origin, existence, and development can be
                  attributed to the unwavering efforts of the late Mr. N.N.D.
                  Bhatt. His dedication and inspiration left a lasting impact on
                  numerous individuals. May his vision and the great work he
                  initiated continue to be blessed.
                </p>

                <Button className="mt-5">Read More</Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="examination" className="my-7">
            <div className=" lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-7">
              <div className=" flex justify-center items-center">
                <Image
                  src={"/assets/image/college2.jpg"}
                  alt="About Image"
                  width={330}
                  height={330}
                  className="object-cover z-10"
                />
              </div>
              <div className="md:px-10">
                <p
                  className={`${poppins.className} text-2xl font-medium text-[#DB2F2F]`}
                >
                  About
                </p>

                <Heading2 title="Beersheba School" />

                <p className="text-gray-600 mt-5">
                  Beersheba School, located in Haldwani, was established on July
                  4, 1977, in the heart of the city with an initial enrollment
                  of only 60 children. This co-educational English Medium school
                  was founded by the late Shri. and Smt. N.N.D. Bhatt. The
                  school&apos;s origin, existence, and development can be
                  attributed to the unwavering efforts of the late Mr. N.N.D.
                  Bhatt. His dedication and inspiration left a lasting impact on
                  numerous individuals. May his vision and the great work he
                  initiated continue to be blessed.
                </p>

                <Button className="mt-5">Read More</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Academics;
