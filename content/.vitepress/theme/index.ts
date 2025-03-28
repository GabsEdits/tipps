// https://vitepress.dev/guide/custom-theme
import Layout from "./Layout.vue";
import type { Theme } from "vitepress";
import "@csstools/normalize.css";
import "tailwindcss/index.css";
import "tailwindcss/theme.css";
import "tailwindcss/utilities.css";
import "./style.scss";

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  },
} satisfies Theme;
