import Banner from "@/components/banner";
import Heading3 from "@/components/heading3";
import { server_query_function } from "@/lib/graphql";
import DisclosureList from "@/components/disclosure/disclosure-list";

export const dynamic = "force-dynamic";

interface DisclosureItem {
  id: string;
  title: string;
  url: string;
}

const DISCLOSURE_QUERY = `
  query GetDisclosurePages {
    disclosurePages(first: 100) {
      haldwaniDisclosure(first: 100) {
        id
        title
        url
      }
    }
  }
`;

const page = async () => {
  try {
    const response = await server_query_function(DISCLOSURE_QUERY);
    const disclosure = (response as any)?.disclosurePages?.[0]
      ?.haldwaniDisclosure as DisclosureItem[];

    if (!disclosure?.length) {
      return (
        <>
          <Banner
            source="/assets/image/aboutImage.jpg"
            title="Disclosure"
            description="Beersheba - Haldwani"
          />
          <section className="container p-5 lg:p-10">
            <Heading3 title="Mandatory Disclosure" />
            <p className="text-center text-gray-600 mt-10">
              No disclosure documents available.
            </p>
          </section>
        </>
      );
    }

    return (
      <>
        <Banner
          source="/assets/image/aboutImage.jpg"
          title="Disclosure"
          description="Beersheba - Haldwani"
        />

        <section className="container p-5 lg:p-10 mb-20">
          <Heading3 title="Mandatory Disclosure" />
          <div className="mt-10">
            <DisclosureList disclosures={disclosure} />
          </div>
        </section>
      </>
    );
  } catch (error) {
    console.error("Error fetching disclosure data:", error);
    return (
      <>
        <Banner
          source="/assets/image/aboutImage.jpg"
          title="Disclosure"
          description="Beersheba - Haldwani"
        />
        <section className="container p-5 lg:p-10">
          <Heading3 title="Mandatory Disclosure" />
          <p className="text-center text-red-600 mt-10">
            Error loading disclosure documents.
          </p>
        </section>
      </>
    );
  }
};

export default page;
