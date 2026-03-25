import { server_query_function } from "@/lib/graphql";
import { gql } from "graphql-request";
import React from "react";
import AlbumViewer from "@/components/gallery/album-viewer";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const Page = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;
  const query = gql`
    query MyQuery {
      imageGallery(where: { id: "${id}" }) {
        heading
        banner {
          url
        }
        images {
          url
        }
      }
    }
  `;
  
  const { imageGallery } = (await server_query_function(query)) as {
    imageGallery: {
      heading: string;
      banner: {
        url: string;
      };
      images: Array<{
        url: string;
      }>;
    };
  };

  if (!imageGallery) {
    return <div className="p-10 text-center text-red-500 font-bold">Gallery not found</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50/30 py-8">
      <AlbumViewer 
        heading={imageGallery.heading} 
        images={imageGallery.images} 
        bannerUrl={imageGallery.banner?.url}
      />
    </div>
  );
};

export default Page;
