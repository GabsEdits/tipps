import { defineConfig } from "vitepress";
import { genFeed } from "./feed.ts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tipps",
  description: "Share your tips and tricks with the world!",

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "author", content: "Gabriel Cozma" }],
    ["meta", { name: "twitter:card", content: "summary" }],
    ["meta", { name: "og:title", content: "Tipps" }],
    [
      "meta",
      {
        name: "og:description",
        content: "Share your tips and tricks with the world!",
      },
    ],
    ["meta", { name: "og:url", content: "https://tipps.gxbs.me/" }],
  ],

  themeConfig: {
    base: "https://tipps.gxbs.me/",
    author: {
      name: "Gabriel Cozma",
      link: "https://gxbs.me/",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Use", link: "/use" },
      { text: "About", link: "/about" },
      { text: "GitHub", link: "https://github.com/GabsEdits/tipps" },
    ],
  },
  buildEnd: genFeed,
});
