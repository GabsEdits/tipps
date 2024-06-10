import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tipps",
  description: "Share your tips and tricks!",

  themeConfig: {
    author: {
      name: "Gabriel Cozma",
      link: "https://gxbs.me/",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Use", link: "/use" },
      { text: "About", link: "/about" },
    ],
  },
});
