import AdmissionEnquiry from "@/components/admission-enquiry";
import Branches from "@/components/branches";
import About from "@/components/home/about";
import Events from "@/components/home/events";
import Gallery from "@/components/home/gallery";
import HeroSection from "@/components/home/hero-section";
import MissionAndValues from "@/components/home/mission-values";
import NewSection from "@/components/home/new-section";
import ToppersResult from "@/components/home/toppers-result";
import Video from "@/components/home/video";
import Why from "@/components/home/why";
import { server_query_function } from "@/lib/graphql";
// AcademicsClient wraps Academics with ssr:false to fix Radix UI hydration mismatch
import Academics from "@/components/home/academics-client";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const page = async () => {
  const newsDataResult = (await server_query_function(`
    query {
      newsEvents(orderBy: updatedAt_DESC, first: 20) {
        id
        newsHeading
        newsImage {
          url
        }
        newsDesc {
         html
        }
      }
    }
  `)) as any;

  const query = `query MyQuery {
  imageGalleries(orderBy: createdAt_DESC, first: 12) {
    id
    heading
    images(orderBy: createdAt_DESC) {
      url
      createdAt
    }
    banner {
      url
    }
  }
    haldwaniBlogs(orderBy: createdAt_DESC, first: 10) {
      id
      title
      slug
      shortDesc
      mainImage {
        url
      }
    }
    haldwaniHomes(orderBy: updatedAt_DESC, first: 1) {
      homeVideoBanner {
        url
        mimeType
      }
      homeGallery {
        __typename
        ... on Image {
          id
          homeGalleryImage(first: 50, orderBy: createdAt_DESC) {
            url
            createdAt
          }
        }
      }
      classXTopperHeading
      classXTopperDesc
      classXiiTopperHeading
      classXiiTopperDesc
      toppers {
        id
        class
        topperDetails {
          id
          name
          percentage
          subject
          topperImage {
            url
          }
        }
      }
      event {
        id
        day
        eventName
      }
    }
  }
`;

  try {
    const response = (await server_query_function(query)) as any;
    const homeData = response?.haldwaniHomes?.[0];
    const newsData = newsDataResult?.newsEvents || [];
    const imageGalleryData = response?.imageGalleries || [];
    const blogsData = response?.haldwaniBlogs || [];
    const eventsData = homeData?.event || [];
    const heroSliders = response?.heroSliders || [];

    // Transform data for components
    const featuredNews = newsData.map((news: any) => {
      let teaserImage = news.newsImage?.url || "/assets/image/placeholder.jpg";
      

      return {
        id: news.id,
        newsHeading: news.newsHeading,
        newsImage: { url: teaserImage }
      };
    });


    let galleryImages = [];
    const rawGallery = homeData?.homeGallery;
    
    if (rawGallery) {
      const galleryArray = Array.isArray(rawGallery) ? rawGallery : [rawGallery];
      galleryImages = galleryArray
        .flatMap((item: any) => {
          if (item?.homeGalleryImage) {
             return Array.isArray(item.homeGalleryImage) ? item.homeGalleryImage : [item.homeGalleryImage];
          }
          if (item?.url) return [item];
          return [];
        })
        .map((img: any) => ({ url: img.url, createdAt: img.createdAt }))
        .filter((img: any) => img && img.url);
    }
    
    if (galleryImages.length === 0 && imageGalleryData.length > 0) {
      galleryImages = imageGalleryData.flatMap((item: any) => 
        item.images?.map((img: any) => ({ url: img.url, createdAt: img.createdAt })) || []
      ).filter((img: any) => img.url);
    }

    // Ensure everything is sorted by latest createdAt
    galleryImages.sort((a: any, b: any) => 
      new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
    );

    galleryImages = galleryImages.slice(0, 12);

    // fallback to homeVideoBanner from Hygraph (includes mimeType for correct video detection)
    const bannerVideos = homeData?.homeVideoBanner?.length
      ? homeData.homeVideoBanner
      : [{ url: "/assets/videos/video.mp4", mimeType: "video/mp4" }];
    const bannerData = bannerVideos.map((v: any) => ({ url: v.url, mimeType: v.mimeType }));

    const toppersData = {
      allToppers: homeData?.toppers || [],
      classXHeading: homeData?.classXTopperHeading,
      classXDesc: homeData?.classXTopperDesc,
      classXiiHeading: homeData?.classXiiTopperHeading,
      classXiiDesc: homeData?.classXiiTopperDesc
    };

    return (
      <>
        <HeroSection video={[{ homeVideoBanner: bannerData }] as any} />
        <Video featured={featuredNews} />
        <About 
          heading="Beersheba School" 
          description="Established on July 4, 1977, in the heart of Haldwani, Beersheba School started with just 60 children under the visionary leadership of the late Shri. and Smt. N.N.D. Bhatt. Their dedication and inspiration have been instrumental in shaping the school's growth and commitment to educational excellence. Today Beersheba School stands as a premier co-educational English Medium institution, known for its nurturing environment and comprehensive curriculum." 
        />
        <MissionAndValues />
        <Academics />
        <Why />
        <NewSection />
        <ToppersResult initialData={toppersData} />
        <Branches />
        <Gallery image={galleryImages} />
        <Events blogs={blogsData} events={eventsData} />
        <AdmissionEnquiry />
      </>
    );
  } catch (error) {
    console.error("❌ Homepage Fetch Error:", error);
    return (
      <>
        <HeroSection video={[{ homeVideoBanner: [{ url: "/assets/videos/video.mp4" }] }]} />
        <Video featured={[]} />
        <About />
        <MissionAndValues />
        <Academics />
        <Why />
        <NewSection />
        <ToppersResult />
        <Branches />
        <Gallery image={[]} />
        <Events blogs={[]} events={[]} />
        <AdmissionEnquiry />
      </>
    );
  }
};

export default page;
