"use client";
import { client_query_function } from "@/lib/graphql";
import { gql } from "graphql-request";
import Image from "next/image";
import React, { useState } from "react";

const Page = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const query = gql`
    query MyQuery {
      imageGallery(where: { id: "${params.id}" }) {
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

  const { imageGallery } = (await client_query_function(query)) as {
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

  // Modal state
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg overflow-hidden">
        <Image
          src={imageGallery?.banner?.url}
          alt={imageGallery?.heading}
          width={1920}
          height={1080}
          className="w-full h-96 object-cover"
        />
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {imageGallery?.heading}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {imageGallery?.images.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(image.url)} // Open modal with image
              >
                <Image
                  src={image.url}
                  alt={`Gallery image ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative bg-black/50 p-4 rounded-lg">
            <button
              className="absolute top-4 right-4 text-white text-xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <Image
              src={selectedImage}
              alt="Large view"
              width={800}
              height={600}
              className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
