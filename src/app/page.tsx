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
export const revalidate = 0;

const page = async () => {
  const query = `
  query MyQuery {
  haldwaniBlogs {
    id
    mainImage {
      url
    }
     title
    slug
    shortDesc
  }
   haldwaniHomes {
    event {
      id
      day
      eventName
    }
  }
}

`;

  const res = (await server_query_function(query)) as BlogType;
  // console.log(res);

  const query1 = `
  query MyQuery {
  haldwaniHomes {
    homeGallery {
      homeGalleryImage {
        url
      }
    }
  }
}
  `;

  const response = (await server_query_function(query1)) as HomeType;

  return (
    <>
      <HeroSection />
      <Video />
      <About />
      <MissionAndValues />
      <Academics />
      <Why />
      <ToppersResult />
      <Branches />
      <Gallery
        image={response?.haldwaniHomes[0]?.homeGallery?.homeGalleryImage}
      />
      <Events blogs={res.haldwaniBlogs} events={res.haldwaniHomes[0]?.event} />
      <AdmissionEnquiry />
    </>
  );
};

export default page;
