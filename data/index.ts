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

export const experience = [
  {
    company: "Wellhub",
    role: "Senior Software Engineer",
    duration: "Jan 2025 - Present",
    location: "Remote | São Paulo, Brazil",
    description: "Designing and optimizing backend architectures with Rust and Golang to handle high-traffic systems. Implementing scalable, efficient APIs and enhancing system reliability."
  },
  {
    company: "Wiley",
    role: "Senior Fullstack Developer | Java | Node | React",
    duration: "Oct 2023 - Jan 2025",
    location: "Remote | Curitiba, Brazil",
    description: "Led backend optimization initiatives using Golang and Node.js, improving API performance and system stability. Designed scalable microservices and enhanced DevOps processes."
  },
  {
    company: "TUI",
    role: "Senior UI Engineer",
    duration: "May 2021 - Oct 2023",
    location: "Hannover, Germany",
    description: "Developed and maintained micro front-ends, reducing page load times from 4s to less than 1s. Mentored junior developers and introduced best practices for frontend optimization."
  },
  {
    company: "HeroSpark",
    role: "Front-end Developer",
    duration: "Aug 2020 - May 2021",
    location: "Curitiba, Brazil",
    description: "Revamped the company's flagship product architecture, increasing scalability and performance. Migrated CI/CD pipelines from GitLab to GitHub Actions."
  },
  {
    company: "Orange Trade",
    role: "Full-stack Developer",
    duration: "Feb 2020 - Aug 2020",
    location: "São Paulo, Brazil",
    description: "Developed a smart payment terminal using Golang, Node.js, and Vue.js. Designed and deployed cloud infrastructure with AWS and Kubernetes."
  },
  {
    company: "B2Beauty Group",
    role: "Full-stack Developer",
    duration: "Jul 2019 - Aug 2020",
    location: "Curitiba, Brazil",
    description: "Led migration from Azure to AWS, cutting costs by 30%. Developed scalable cloud applications using VueJS, Node, and Golang."
  },
  {
    company: "Vidya Technology",
    role: "Front-end Developer Intern",
    duration: "May 2018 - Feb 2019",
    location: "Curitiba, Brazil",
    description: "Built responsive UI components for corrosion analysis software using Vue.js and Vuetify, improving performance and reliability."
  }
];


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
