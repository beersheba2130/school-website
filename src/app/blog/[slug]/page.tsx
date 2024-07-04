import { server_query_function } from "@/lib/graphql";
import { gql } from "graphql-request";
import Image from "next/image";
import React from "react";

const page = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const query = gql`
    query MyQuery {
      blogs(where: { slug: "${params.slug}" }) {
        id
        mainImage {
          url
        }
        title
        shortDesc
        content {
          html
        }
      }
    }
  `;

  const response = (await server_query_function(query)) as SingleBlogType;

  return (
    <>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Image
          width={1200}
          height={500}
          src={response.blogs[0]?.mainImage.url}
          alt="banner"
          className="h-80 w-full object-cover object-center"
        />

        <h1 className="text-3xl font-bold mt-6">{response.blogs[0]?.title}</h1>

        <div
          className="mt-6"
          dangerouslySetInnerHTML={{ __html: response.blogs[0]?.content?.html }}
        />
      </section>
    </>
  );
};

export default page;
