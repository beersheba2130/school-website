type TopperImageType = {
  url: string;
};

type TopperDetailsType = {
  id: string;
  name: string;
  percentage: number;
  subject: string;
  topperImage: TopperImageType;
};

type TopperType = {
  class: string;
  id: string;
  topperDetails: TopperDetailsType[];
};

type homeGallery = {
  homeGalleryImage: {
    url: string;
  }[];
}[];

type HomeType = {
  homes: {
    toppers: TopperType[];
    homeGallery: homeGalleryType;
  }[];
};

type blogType = {
  blogs: {
    id: string;
    mainImage: {
      url: string;
    };
    title: string;
    shortDesc: string;
    slug: string;
  }[];
};
type SingleBlogType = {
  blogs: {
    id: string;
    mainImage: {
      url: string;
    };
    title: string;
    shortDesc: string;
    slug: string;
    content: htm;
  }[];
};
