import AdmissionEnquiry from "@/components/admission-enquiry";
import Branches from "@/components/branches";
import About from "@/components/home/about";
import Academics from "@/components/home/academics";
import Events from "@/components/home/events";
import Gallery from "@/components/home/gallery";
import HeroSection from "@/components/home/hero-section";
import MissionAndValues from "@/components/home/mission-values";
import ToppersResult from "@/components/home/toppers-result";
import Video from "@/components/home/video";
import Why from "@/components/home/why";
import { server_query_function } from "@/lib/graphql";

export const dynamic = "force-dynamic";

const page = async () => {
  const query = `
query MyQuery {
  blogs(first: 5) {
    id
    mainImage {
      url
    }
    title
    slug
    shortDesc
  }
     homes {
    event {
      id
      day
      eventName
    }
  }
}

`;

  const response = (await server_query_function(query)) as BlogType;

  return (
    <>
      <HeroSection />
      <About />
      <MissionAndValues />
      <Academics />
      <Video />
      <Why />
      <ToppersResult />
      <Branches />
      <Gallery />
      <Events blogs={response.blogs} events={response.homes[0]?.event} />
      <AdmissionEnquiry />
    </>
  );
};

export default page;
