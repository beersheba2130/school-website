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
  haldwaniHomes: {
    toppers: TopperType[];
    homeGallery: homeGalleryType;
  }[];
};

// type blogType = {
//   blogs: {
//     id: string;
//     mainImage: {
//       url: string;
//     };
//     title: string;
//     shortDesc: string;
//     slug: string;
//   }[];
//   homes: {
//     events: {
//       id: string;
//       day: string;
//       eventName: string;
//     }[];
//   }[];
// };

type Blog = {
  id: string;
  mainImage: {
    url: string;
  };
  title: string;
  slug: string;
  shortDesc: string;
};

type Event = {
  id: string;
  day: string;
  eventName: string;
};

type BlogType = {
  haldwaniBlogs: Blog[];
  haldwaniHomes: {
    event: Event[];
  }[];
};

type SingleBlogType = {
  haldwaniBlogs: {
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

type galleryType = {
  haldwaniImageGalleries: {
    imageGallery: {
      imageCategoryName: string;
      image: {
        url: string;
      }[];
    }[];
  }[];
};

type DisclosureType = {
  id: string;
  title: string;
  url: string;
}[];
