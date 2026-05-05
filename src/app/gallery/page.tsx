import Banner from "@/components/banner";
import { server_query_function } from "@/lib/graphql";
import React from "react";
import AlbumViewer from "@/components/gallery/album-viewer";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const page = async () => {
  const query = `query MyQuery {
  imageGalleries(orderBy: createdAt_DESC, first: 1) {
    id
    heading
    banner {
      url
    }
    images(orderBy: createdAt_DESC) {
      url
    }
  }
}`;

  try {
    const response = (await server_query_function(query)) as any;
    const album = response?.imageGalleries?.[0]; 
    const images = album?.images;

    if (!images || images.length === 0) {
      return (
        <>
          <Banner
            title="Gallery"
            description="Beersheba - Haldwani"
            source="/assets/image/aboutImage.jpg"
          />
          <div className="p-20 text-center font-bold text-gray-500">
            No gallery images found.
          </div>
        </>
      );
    }

    return (
      <div className="bg-slate-50/30 min-h-screen">
        <Banner
          title="Gallery"
          description="Beersheba - Haldwani"
          source="/assets/image/aboutImage.jpg"
        />
        <div className="py-8">
          <AlbumViewer 
             heading={album.heading} 
             images={images} 
          />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching gallery from Hygraph:", error);
    return (
      <>
        <Banner
          title="Gallery"
          description="Beersheba - Haldwani"
          source="/assets/image/aboutImage.jpg"
        />
        <div className="p-20 text-center text-red-500 font-bold">
          Error loading gallery.
        </div>
      </>
    );
  }
};

export default page;
