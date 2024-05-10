import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React from "react";
import Heading3 from "../heading3";
import Image from "next/image";
import { Quote, QuoteIcon, TextQuote } from "lucide-react";

const FounderMessage = () => {
  return (
    <section className="container p-2 lg:p-10">
      <Tabs
        defaultValue="founder"
        className="w-full lg:flex gap-5 shadow-lg rounded-xl lg:p-10"
      >
        <TabsList className="lg:flex flex-col h-full w-full lg:w-fit">
          <TabsTrigger value="founder" className="py-3">
            Founder’s Message
          </TabsTrigger>
          <TabsTrigger value="principal" className="py-3">
            Principal’s Message
          </TabsTrigger>
          <TabsTrigger value="manager" className="py-3">
            Manager’s Message
          </TabsTrigger>
          <TabsTrigger value="vicePrincipal" className="py-3">
            Vice Principal’s Message
          </TabsTrigger>
          <TabsTrigger value="schoolAdministrator" className="py-3">
            School Administrator Message
          </TabsTrigger>
          <TabsTrigger value="coordinator" className="py-3">
            Coordinator Senior Message
          </TabsTrigger>
        </TabsList>
        <TabsContent value="founder" className="p-5 w-full">
          <div className="text-center">
            <Heading3 title="Founder’s Message" />
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16 mt-10">
            <Image
              alt="founders"
              src={"/assets/image/founders.png"}
              width={500}
              height={400}
              className="rounded w-36 h-40 object-cover"
            />

            <div className="bg-gray-200 px-5 lg:px-20 py-5 relative">
              <p className="max-w-xl text-[#3B2565] text-lg">
                Our mission is to provide a caring, healthy and challenging
                environment where children prepare to meet with confidence,
                imagination and integrity the challenges of life.
              </p>
              <p className="pt-5">
                LATE MR. N.N.D BHATT - FOUNDER BEERSHEBA HALDWANI
              </p>
            </div>
          </div>
          <p className="mt-10 lg:px-10 text-lg">
            Educational Institutions are aplenty, all of which impart the
            learning, but it is our prayer that our students go out into the
            world with the strength, not only to reach and excel in their
            professional aspirations, but also to remain beautiful human beings.
            A school is always a ‘world in miniature’ where one receives a
            ‘training for life’, where effective, meaningful and joyful learning
            takes place. It is here that we begin to learn our lessons of life –
            to accept challenges, face competition, defeat and failure, and
            rejoice at victory and triumph. Beersheba Sr. Sec. School is a
            symbol of progressive and quality education.{" "}
          </p>
        </TabsContent>
        <TabsContent value="principal" className="p-5">
          <Heading3 title="Founder’s Message" />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default FounderMessage;
