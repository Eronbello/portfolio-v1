/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/quotes */
export const navbarData = {
  homeTitle: "Rust & Go: Backend Mastery",
};

export const footerData = {
  author: "Eron Bello",
  aboutAuthor:
    "Hey! I'm Eron Bello, a Senior Software Engineer specializing in Rust and Golang, with 7+ years of experience in backend development. Currently building scalable, high-performance systems at Wellhub. Passionate about concurrency, distributed systems, and writing fast, efficient code.",
  authorInterest:
    "I love working on Rust and Go projects, whether it's open-source, performance optimizations, or building robust backend architectures. If you've got an exciting idea, feel free to reach out!",
  aboutTheSite:
    "This blog is built with Nuxt3, TailwindCSS, NuxtContent, and Nuxt Icon, deployed on Vercel. It’s a space where I share insights on Rust, Golang, and backend engineering best practices.",
};

export const homePage = {
  title: "Rust & Go: Building Fast, Safe, and Scalable Backends",
  description:
    "Hands-on guides, deep dives, and real-world lessons on Rust and Golang—performance, concurrency, and everything backend devs love.",
};

export const blogsPage = {
  title: "All Blog Posts",
  description:
    "Explore articles, guides, and insights on Rust, Golang, and backend architecture.",
};

export const categoryPage = {
  title: "Categories",
  description:
    "Browse by category—Rust, Go, performance tuning, system design, and more.",
};

export const aboutPage = {
  title: "Eron Bello",
  description:
    "Senior Software Engineer | Rust & Golang Specialist",
  aboutMe:
    "Hello! I’m a backend engineer with 7+ years of experience designing scalable, high-performance systems. My work revolves around Rust and Golang, focusing on building fast, safe, and efficient backend architectures. Always exploring new tech, optimizing code, and contributing to open-source. Let's build something amazing together!",
};

export const seoData = {
  description:
    "Eron Bello, Senior Software Engineer specializing in Rust and Golang, sharing insights on high-performance backend development.",
  ogTitle:
    "Eron Bello - Blog on Rust, Golang, and Scalable Backend Engineering",
  twitterDescription:
    "My personal blog featuring in-depth articles on Rust, Golang, and modern backend development.",
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
