/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./content/**/*.{html,js,vue,ts,md}",
    "./content/.vitepress/**/*.{html,js,vue,ts,md}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    "text-red-500",
    "text-green-500",
    "text-blue-500",
    "text-yellow-500",
    "text-purple-500",
    "dark:text-red-100",
    "dark:text-green-100",
    "dark:text-blue-100",
    "dark:text-yellow-100",
    "dark:text-purple-100",
  ],
};
