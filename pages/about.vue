<script setup lang="ts">
import { aboutPage, experience, footerData, navbarData } from '~/data';

useHead({
  title: 'About',
  meta: [
    {
      name: 'description',
      content: footerData.aboutAuthor,
    },
  ],
});

defineOgImageComponent('About', {
  headline: 'Greetings 👋',
  title: navbarData.homeTitle,
  description: 'Rust & Go enthusiast, building scalable backend systems.',
  link: '/eron.jpeg',
});
</script>

<template>
  <div class="py-5">
    <div class="sm:grid grid-cols-8 px-6 py-5 sm:py-9 gap-5 container max-w-5xl mx-auto">
      <div class="col-span-5 max-w-md">
        <div class="flex justify-between">
          <div>
            <h1 class="text-xl sm:text-4xl pb-2 font-bold">
              {{ aboutPage.title }}
            </h1>

            <div class="my-3 space-x-2 md:space-x-3 pb-10">
              <NuxtLink
                to="https://github.com/eronbello"
                target="_blank"
                class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
                aria-label="Github"
              >
                <Icon name="fa:github" size="1em" />
              </NuxtLink>
              <NuxtLink
                to="https://www.linkedin.com/in/eronbello/"
                target="_blank"
                class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
                aria-label="LinkedIn"
              >
                <Icon name="fa:linkedin-square" size="1em" />
              </NuxtLink>
            </div>
          </div>
          <div class="sm:hidden block col-span-3 pb-5 dark:text-[#F1F2F4]">
            <NuxtImg src="/eron.jpeg" width="125" height="115" quality="50" class="rounded-md" />
          </div>
        </div>
        <h3 class="text-base sm:text-3xl font-semibold pb-7 sm:pb-12">
          {{ aboutPage.description }}
        </h3>
        <p>{{ aboutPage.aboutMe }}</p>

        <h2 class="text-xl font-bold mt-10">Experience</h2>
        <ul class="mt-5">
          <li v-for="job in experience" :key="job.company" class="mb-6">
            <h3 class="text-lg font-semibold">{{ job.role }} - {{ job.company }}</h3>
            <p class="text-sm text-gray-600">{{ job.duration }} | {{ job.location }}</p>
            <p class="mt-2">{{ job.description }}</p>
          </li>
        </ul>
      </div>
      <div class="hidden sm:block col-span-3">
        <NuxtImg src="/eron.jpeg" width="450" height="500" quality="50" class="rounded-md" />
      </div>
    </div>
  </div>
</template>
