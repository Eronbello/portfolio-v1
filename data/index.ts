/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/quotes */
export const navbarData = {
  homeTitle: "Eron's Blog",
};

export const footerData = {
  author: "Eron Bello",
  aboutAuthor:
    "Hi! I am Eron Bello, a Senior Software Engineer specializing in Golang and backend development, with over 7 years of professional experience. Currently working as a Senior Backend Developer at Wellhub. Passionate about technology, I love solving complex problems and creating scalable solutions. Let's connect!",
  authorInterest:
    "I have extensive knowledge in Golang, backend architecture, and JavaScript ecosystems. If you have an interesting idea, whether open source or paid, feel free to reach out.",
  aboutTheSite:
    "This is a personal blog site built with Nuxt3, TailwindCSS, NuxtContent, and Nuxt Icon. Currently, it's deployed on Vercel.",
};

export const homePage = {
  title: "Welcome to My Blog",
  description:
    "Here you will find articles, tips, and resources on backend development, Golang, Node.js, JavaScript, and other related topics.",
};

export const blogsPage = {
  title: "All Blog Posts",
  description:
    "Here you will find all the blog posts I have written and published on this site.",
};

export const categoryPage = {
  title: "Categories",
  description:
    "These categories are generated from all the tags mentioned in the different blog posts.",
};

export const aboutPage = {
  title: "Eron Bello",
  description:
    "Senior Software Engineer, Specialist in Golang and Backend Development.",
  aboutMe:
    "Hello! I am a Senior Software Engineer with over 7 years of experience, passionate about creating scalable and efficient backend solutions to complex problems. Currently working at Wellhub, and when I'm not coding, I'm learning new technologies or helping other developers improve their skills. If you are looking for a dedicated and highly qualified backend engineer, I’m available to collaborate on challenging projects.",
};

export const seoData = {
  description:
    "Eron Bello, Senior Software Engineer with over 7 years of experience, specializing in Golang and backend development.",
  ogTitle:
    "Eron Bello - Blog on Backend Development, Golang, Node.js, and More",
  twitterDescription:
    "My personal blog where I share resources, tips, and articles on Golang, backend development, and more.",
  image:
    "https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp",
  mySite: "https://eron.vercel.app",
  twitterHandle: "@eronbello",
  mailAddress: "eron.bello@gmail.com",
};

export const siteMetaData = [
  {
    name: "description",
    content: seoData.description,
  },
  { property: "og:site_name", content: seoData.mySite },
  { property: "og:type", content: "website" },
  {
    property: "og:url",
    content: seoData.mySite,
  },
  {
    property: "og:title",
    content: seoData.ogTitle,
  },
  {
    property: "og:description",
    content: seoData.description,
  },
  {
    property: "og:image",
    content: seoData.image,
  },
  { name: "twitter:site", content: seoData.twitterHandle },
  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:url",
    content: seoData.mySite,
  },
  {
    name: "twitter:title",
    content: seoData.ogTitle,
  },
  {
    name: "twitter:description",
    content: seoData.twitterDescription,
  },
  {
    name: "twitter:image",
    content: seoData.image,
  },
];
