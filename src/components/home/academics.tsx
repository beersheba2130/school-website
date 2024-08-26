import React from "react";
import Heading3 from "../heading3";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { poppins } from "@/utils/font";
import { Button } from "../ui/button";
import Heading2 from "../heading2";

const Academics = () => {
  return (
    <section className="container p-5">
      <Heading3 title="Academics" />

      <div className="py-5 lg:p-5 ">
        <Tabs defaultValue="early-years">
          <TabsList className="">
            <TabsTrigger value="early-years">EARLY YEARS</TabsTrigger>
            <TabsTrigger value="elementry-school">ELEMENTARY </TabsTrigger>
            <TabsTrigger value="middle-school">MIDDLE SCHOOL</TabsTrigger>
            <TabsTrigger value="high-school">HIGH SCHOOL</TabsTrigger>
            <TabsTrigger value="examination">EXAMINATION</TabsTrigger>
          </TabsList>

          <TabsContent value="early-years" className="my-7">
            <div className=" lg:p-10 gap-7 grid grid-cols-1 lg:grid-cols-2">
              <div className=" flex justify-center items-center">
                <Image
                  src={"/assets/image/beershiba-2.jpeg"}
                  alt="About Image"
                  width={330}
                  height={330}
                  className="object-cover z-10 rounded-md"
                />
              </div>
              <div className="md:px-10">
                <p
                  className={`${poppins.className} text-2xl font-medium text-[#DB2F2F]`}
                >
                  Early Years
                </p>

                <Heading2 title="Beersheba School" />

                <p className="text-gray-600 mt-5">
                  Founded in 1977 by the late Shri. and Smt. N.N.D.
                  Bhatt&apos;s, Beersheba School in Haldwani began with just 60
                  children. From its inception, our co-educational English
                  Medium school has been dedicated to providing a nurturing
                  environment for early childhood development. Our Early Years
                  program focuses on fostering curiosity, creativity, and
                  foundational skills through engaging activities and
                  personalized attention. We continue to uphold Mr. N.N.D.
                  Bhatt&apos;s vision of holistic education, ensuring every
                  child&apos;s journey at Beersheba School begins with a strong
                  and supportive start.
                </p>

                {/* <Button className="mt-5">Read More</Button> */}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="elementry-school" className="my-7">
            <div className=" lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-7">
              <div className=" flex justify-center items-center">
                <Image
                  src={"/assets/image/elementary.jpg"}
                  alt="About Image"
                  width={330}
                  height={330}
                  className="object-cover z-10 rounded-md"
                />
              </div>
              <div className="md:px-10">
                <p
                  className={`${poppins.className} text-2xl font-medium text-[#DB2F2F]`}
                >
                  Elementry School
                </p>

                <Heading2 title="Beersheba School" />

                <p className="text-gray-600 mt-5">
                  Our Elementary School curriculum is structured to build
                  essential skills in reading, writing, mathematics, and
                  science. We emphasize a balanced approach to education,
                  integrating arts, physical education, and technology to create
                  a well-rounded learning experience. Our dedicated teachers
                  provide personalized attention, ensuring that each student
                  progresses at their own pace and develops a strong academic
                  foundation.
                </p>

                {/* <Button className="mt-5">Read More</Button> */}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="middle-school" className="my-7">
            <div className=" lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-7">
              <div className=" flex justify-center items-center">
                <Image
                  src={"/assets/image/middle.jpg"}
                  alt="About Image"
                  width={330}
                  height={330}
                  className="object-cover z-10 rounded-md"
                />
              </div>
              <div className="md:px-10">
                <p
                  className={`${poppins.className} text-2xl font-medium text-[#DB2F2F]`}
                >
                  Middle School
                </p>

                <Heading2 title="Beersheba School" />

                <p className="text-gray-600 mt-5">
                  In Middle School, we focus on developing critical thinking and
                  problem-solving skills. Our curriculum becomes more
                  specialized, allowing students to explore subjects in greater
                  depth. We encourage collaborative learning and provide
                  opportunities for students to engage in projects and
                  activities that promote teamwork and independent research.
                  This stage is crucial for preparing students for the academic
                  challenges of high school.
                </p>

                {/* <Button className="mt-5">Read More</Button> */}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="high-school" className="my-7">
            <div className=" lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-7">
              <div className=" flex justify-center items-center">
                <Image
                  src={"/assets/image/High.jpg"}
                  alt="About Image"
                  width={330}
                  height={330}
                  className="object-cover z-10 rounded-md"
                />
              </div>
              <div className="md:px-10">
                <p
                  className={`${poppins.className} text-2xl font-medium text-[#DB2F2F]`}
                >
                  High School
                </p>

                <Heading2 title="Beersheba School" />

                <p className="text-gray-600 mt-5">
                  High School at Beersheba School is designed to prepare
                  students for higher education and future careers. We offer a
                  diverse range of courses, including Humanities, Commerce,
                  Artificial Intelligence, Coding, Yoga, and Science, all
                  aligned with the CBSE curriculum. Our experienced faculty
                  guide students through rigorous academic programs while
                  fostering leadership skills and personal growth.
                  Extracurricular activities and sports are integral, ensuring a
                  balanced and enriching high school experience.
                </p>

                {/* <Button className="mt-5">Read More</Button> */}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="examination" className="my-7">
            <div className=" lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-7">
              <div className=" flex justify-center items-center">
                <Image
                  src={"/assets/image/examination.jpg"}
                  alt="About Image"
                  width={330}
                  height={330}
                  className="object-cover z-10 rounded-md"
                />
              </div>
              <div className="md:px-10">
                <p
                  className={`${poppins.className} text-2xl font-medium text-[#DB2F2F]`}
                >
                  Examination
                </p>

                <Heading2 title="Beersheba School" />

                <p className="text-gray-600 mt-5">
                  Our examination process is structured to assess students
                  understanding and mastery of the curriculum. Regular
                  assessments, projects, and practical exams ensure
                  comprehensive evaluation. We provide a supportive environment
                  that helps students manage exam stress and perform to the best
                  of their abilities. Continuous feedback and guidance from
                  teachers enable students to improve and excel in their
                  academic pursuits.
                </p>

                {/* <Button className="mt-5">Read More</Button> */}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Academics;
