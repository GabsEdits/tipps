<template>
    <div class="mt-5">
      <noscript>
        <small>To use the filter you need JavaScript to be enabled.</small>
      </noscript>
      <div class="mb-10 text-sm">
        <button @click="filterPosts('')" id="all-tags" class="px-2 py-1 bg-zinc-100 border-2 transition-colors hover:bg-zinc-200 border-zinc-200 mx-2 rounded-3xl font-bold">All</button>
        <button v-for="tag in uniqueTags" :key="tag" @click="filterPosts(tag)" class="px-2 py-1 bg-zinc-100 border-2 transition-colors hover:bg-zinc-200 border-zinc-200 mx-2 rounded-3xl">
          <span class="hashtag">#</span>{{ tag }}
        </button>
      </div>
      <div class="post-container">
        <article v-for="post in filteredPosts" :key="post.title" class="p-10 max-w-full rounded-xl bg-zinc-50 border-2 border-zinc-200 mb-2">
          <h3 class="font-extrabold text-2xl mb-3 mt-0">
            <a
              :href="`posts/${post.title
                .toLowerCase()
                .replace(/\s+/g, '-')}.html`"
              >{{ post.title }}</a
            >
          </h3>
          <p>{{ post.description }}</p>
          <div class="text-right mt-5 text-sm">
            <span v-if="typeof post.tags === 'string'" :key="post.tags" class="px-2 py-1 bg-zinc-50 border-2 transition-colors hover:bg-zinc-200 border-zinc-200 mx-2 rounded-3xl"
              >#{{ post.tags }}</span
            >
            <span v-else v-for="tag in post.tags" :key="tag" class="px-2 py-1 bg-zinc-100 border-2 transition-colors hover:bg-zinc-200 border-zinc-200 mx-2 rounded-3xl">#{{ tag }}</span>
          </div>
        </article>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { data as posts } from "../posts.data.mts";
  import { computed, ref } from "vue";
  
  const selectedTag = ref(null);
  
  const allTags = computed(() => {
    return posts.reduce((tags, post) => {
      return tags.concat(Array.isArray(post.tags) ? post.tags : [post.tags]);
    }, []);
  });
  
  const uniqueTags = computed(() => {
    const tags = [...new Set(allTags.value)];
    return tags.filter((tag) => tag !== "");
  });
  
  const filteredPosts = computed(() => {
    return selectedTag.value === null
      ? posts
      : posts.filter((post) =>
          Array.isArray(post.tags)
            ? post.tags.includes(selectedTag.value)
            : post.tags === selectedTag.value
        );
  });
  
  function filterPosts(tag: string) {
    selectedTag.value = tag === "" ? null : tag;
  }
  </script>