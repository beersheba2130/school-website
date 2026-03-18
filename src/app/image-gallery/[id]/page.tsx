import { server_query_function } from "@/lib/graphql";
import { gql } from "graphql-request";
import Link from "next/link";
import React from "react";
import { getOptimizedImage } from "@/utils/image-optimization";

export const dynamic = "force-dynamic";
export const revalidate = 0;


const Page = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;
  const query = gql`
  query MyQuery {
  imageGallery(where: {id: "${id}"}) {
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
    return <div className="p-10 text-center">Gallery not found</div>;
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg  overflow-hidden">
        <img
          src={getOptimizedImage(imageGallery?.banner?.url, { width: 1200, height: 600, fit: "max" })}
          alt={imageGallery?.heading}
          className="w-full h-96 object-contain"
          loading="eager"
        />
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {imageGallery?.heading}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {imageGallery?.images.map((image, index) => (
              <Link
                key={`${image.url}-${index}`}
                href={image.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative group overflow-hidden rounded-xl bg-gray-50 shadow-sm border border-gray-100">
                  <img
                    src={getOptimizedImage(image.url, { width: 500, height: 400, fit: "crop" })}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
