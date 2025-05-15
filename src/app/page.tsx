import AdmissionEnquiry from "@/components/admission-enquiry";
import Branches from "@/components/branches";
import About from "@/components/home/about";
import Academics from "@/components/home/academics";
import Events from "@/components/home/events";
import Gallery from "@/components/home/gallery";
import HeroSection from "@/components/home/hero-section";
import MissionAndValues from "@/components/home/mission-values";
import NewSection from "@/components/home/new-section";
import ToppersResult from "@/components/home/toppers-result";
import Video from "@/components/home/video";
import Why from "@/components/home/why";
import { server_query_function } from "@/lib/graphql";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const page = async () => {
  const bannerVideoQuery = `
  query MyQuery {
    haldwaniHomes {
      homeVideoBanner {
        url
      }
    }
  }
  `;

  const featuredNewsQuery = `
  query MyQuery {
    newsEvents(where: {featured: true}) {
      id
      newsHeading
      newsImage {
        url
      }
    }
  }
  `;

  const blogsEventsQuery = `
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

  type BlogType = {
    haldwaniBlogs: Array<{
      id: string;
      mainImage: {
        url: string;
      };
      title: string;
      slug: string;
      shortDesc: string;
    }>;
    haldwaniHomes: Array<{
      event: Array<{
        id: string;
        day: string;
        eventName: string;
      }>;
    }>;
  };

  const galleryQuery = `
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

  type NewsEventType = {
    newsEvents: Array<{
      id: string;
      newsHeading: string;
      newsImage: {
        url: string;
      };
    }>;
  };

  type HomeType = {
    haldwaniHomes: Array<{
      homeGallery: {
        homeGalleryImage: Array<{
          url: string;
        }>;
      };
    }>;
  };

  type homeBannerType = {
    haldwaniHomes: Array<{
      homeVideoBanner: Array<{
        url: string;
      }>;
    }>;
  };

  // Fetch all data in parallel using Promise.all
  const [videoBanner, featuredResponse, res, response] = await Promise.all([
    server_query_function(bannerVideoQuery) as Promise<homeBannerType>,
    server_query_function(featuredNewsQuery) as Promise<NewsEventType>,
    server_query_function(blogsEventsQuery) as Promise<BlogType>,
    server_query_function(galleryQuery) as Promise<HomeType>,
  ]);

  return (
    <>
      <HeroSection video={videoBanner?.haldwaniHomes} />
      <Video featured={featuredResponse?.newsEvents} />
      <About />
      <MissionAndValues />
      <Academics />
      <Why />
      <NewSection />
      <ToppersResult />
      <Branches />
      <Gallery
        image={response?.haldwaniHomes[0]?.homeGallery?.homeGalleryImage}
      />
      <Events blogs={res?.haldwaniBlogs} events={res?.haldwaniHomes[0]?.event} />
      <AdmissionEnquiry />
    </>
  );
};

export default page;
