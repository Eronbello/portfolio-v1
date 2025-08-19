/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/quotes */
export const navbarData = {
  homeTitle: "Eron Bello",
};

export const footerData = {
  author: "Eron Bello",
  aboutAuthor:
    "Hey! I'm Eron Bello, a Senior Software Engineer and Vue.js Specialist with 6+ years of experience building high-performance, scalable applications across Europe, the US, and Brazil. Currently helping product teams at Wellhub deliver fast, accessible, and maintainable user experiences.",
  authorInterest:
    "I enjoy working with Vue 3, Nuxt, TypeScript, and frontend architecture patterns like micro frontends, SSR/SSG, and design systems. On the backend, I leverage Node.js, Rust, and Go to deliver scalable APIs and cloud-native systems.",
  aboutTheSite:
    "This portfolio and blog is built with Nuxt 3, TailwindCSS, Nuxt Content, and Nuxt Icon, and deployed on Vercel. I share practical insights on Vue, Nuxt, TypeScript, performance, accessibility, and modern full-stack development.",
};

export const homePage = {
  title: "Building Fast, Scalable, and Accessible Applications with Vue.js & Nuxt",
  description:
    "Hands-on guides, architecture deep dives, and real-world lessons on Vue 3, Nuxt, TypeScript, and full-stack engineering. Focused on performance, accessibility, and clean code for production-ready software.",
};

export const blogsPage = {
  title: "All Blog Posts",
  description:
    "Explore tutorials, guides, and insights on Vue.js, Nuxt.js, TypeScript, frontend architecture, micro frontends, performance, and full-stack development.",
};

export const categoryPage = {
  title: "Categories",
  description:
    "Browse by category — Vue, Nuxt, TypeScript, frontend architecture, performance optimization, accessibility, and more.",
};

export const aboutPage = {
  title: "Eron Bello",
  description: "Senior Software Engineer | Vue.js Specialist | Full Stack",
  aboutMe:
    "I’m a Senior Software Engineer with 6+ years of experience designing and delivering scalable applications. My expertise lies in Vue.js, Nuxt, and TypeScript, complemented by full-stack skills in Node.js, Rust, and Go. I’ve worked with distributed teams across the UK, Germany, Spain, Portugal, the US, and Brazil, consistently improving system performance, reducing costs, and leading high-performing teams. Passionate about building accessible, fast, and future-proof software, I enjoy mentoring, contributing to open source, and sharing knowledge through writing.",
};

export const seoData = {
  description:
    "Eron Bello — Senior Software Engineer and Vue.js Specialist. Sharing insights on Vue 3, Nuxt 3, TypeScript, frontend architecture, performance, and full-stack development.",
  ogTitle:
    "Eron Bello — Vue.js Specialist • Frontend Architecture & Full Stack Engineering",
  twitterDescription:
    "Articles and guides on Vue.js, Nuxt 3, TypeScript, frontend performance, accessibility, and scalable full-stack systems.",
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
    duration: "Jan 2025 – Present",
    location: "Remote | São Paulo, Brazil",
    description:
      "Architecting and developing frontend and backend modules with React/Vue and Node.js. Leading the migration of an external platform into an internal product on AWS. Focused on accessibility, performance optimization, and production-grade CI/CD pipelines.",
  },
  {
    company: "Wiley",
    role: "Senior Fullstack Developer (Java · Node.js · React)",
    duration: "Oct 2023 – Jan 2025",
    location: "Remote | Curitiba, Brazil",
    description:
      "Founded and led a 7-person engineering team. Decoupled legacy microservices with Spring Boot, improving maintainability. Designed and launched a React/Tailwind platform, cutting production incidents by 30%. Advocated for Clean Architecture and TDD across teams.",
  },
  {
    company: "TUI Group",
    role: "Senior UI Engineer (Vue.js · Nuxt.js)",
    duration: "May 2021 – Oct 2023",
    location: "Hannover, Germany / London, UK",
    description:
      "Developed and maintained micro frontends across 5+ global products, reducing load times from 4s to under 1s. Built a frontend quality control system that reduced rework and improved code health. Mentored developers in Vue, Nuxt, and clean code practices.",
  },
  {
    company: "HeroSpark",
    role: "Front-end Developer (Vue.js · Tailwind CSS)",
    duration: "Aug 2020 – May 2021",
    location: "Curitiba, Brazil",
    description:
      "Rebuilt the architecture of the flagship product for scalability and maintainability. Migrated CI/CD pipelines from GitLab to GitHub Actions, reducing release time by 60%. Increased test coverage with Jest and Cypress.",
  },
  {
    company: "Orange Trade",
    role: "Full-stack Developer",
    duration: "Feb 2020 – Aug 2020",
    location: "São Paulo, Brazil",
    description:
      "Developed a smart payment terminal using Node.js, Vue.js, and Golang. Designed and deployed AWS cloud infrastructure with Kubernetes, improving scalability and deployment speed.",
  },
  {
    company: "B2Beauty Group",
    role: "Full-stack Developer",
    duration: "Mar 2019 – Aug 2020",
    location: "Curitiba, Brazil",
    description:
      "Migrated the company’s cloud infrastructure from Azure to AWS, reducing costs by 30%. Built new features with Vue.js, Node.js, and Golang. Introduced Kubernetes for improved application performance.",
  },
  {
    company: "Vidya Technology",
    role: "Front-end Developer Intern",
    duration: "May 2018 – Feb 2019",
    location: "Curitiba, Brazil",
    description:
      "Built responsive UI components for corrosion analysis software using Vue.js, Vuetify, and Bootstrap. Improved platform performance and reliability by implementing clean code practices.",
  },
];

export const siteMetaData = [
  {
    name: "description",
    content: seoData.description,
  },
  { property: "og:site_name", content: seoData.mySite },
  { property: "og:type", content: "website" },
  { property: "og:url", content: seoData.mySite },
  { property: "og:title", content: seoData.ogTitle },
  { property: "og:description", content: seoData.description },
  { property: "og:image", content: seoData.image },
  { name: "twitter:site", content: seoData.twitterHandle },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:url", content: seoData.mySite },
  { name: "twitter:title", content: seoData.ogTitle },
  { name: "twitter:description", content: seoData.twitterDescription },
  { name: "twitter:image", content: seoData.image },
];
