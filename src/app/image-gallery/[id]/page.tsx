"use client";

import { useState, useEffect } from "react";
import { gql } from "graphql-request";
import Image from "next/image";

const Page = ({ params }: { params: { id: string } }) => {
  const [imageGallery, setImageGallery] = useState<{
    heading: string;
    banner: { url: string };
    images: { url: string }[];
  } | null>(null);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
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

      const response = await fetch("/api/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();
      setImageGallery(data?.data?.imageGallery || null);
    };

    fetchData();
  }, [params.id]);

  if (!imageGallery) return <p>Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg overflow-hidden">
        <Image
          src={imageGallery.banner.url}
          alt={imageGallery.heading}
          width={1920}
          height={1080}
          className="w-full h-96 object-cover"
        />
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {imageGallery.heading}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {imageGallery.images.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(image.url)}
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
