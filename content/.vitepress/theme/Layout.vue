<script setup lang="ts">
import { useData, Content } from "vitepress";
import ArticlesList from "./components/ArticlesList.vue";

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter, theme } = useData();

const navigation = theme.value.nav || [];
</script>

<template>
  <header>
    <nav class="text-center max-w-[100px] mx-auto my-8">
      <ul class="justify-between flex items-center list-none">
        <li v-for="item in navigation">
          <a :href="item.link">{{ item.text }}</a>
        </li>
      </ul>
    </nav>
  </header>
  <main class="mx-[20%] max-[600px]:mx-[5%]">
  <div v-if="frontmatter.layout == 'home'">
    <h1 class="text-center font-black text-4xl mb-5 text-black dark:text-white">{{ site.title }}</h1>
    <p class="text-center">{{ site.description }}</p>
    <ArticlesList />
  </div>
  <div v-else>
    <Content />
  </div>
  </main>
</template>
