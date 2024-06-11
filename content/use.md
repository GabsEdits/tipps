# Guide on how to use it

This is a simple guide on how to use the Tipps theme. It is designed to be easy to use and easy to extend. It is perfect for sharing your knowledge with the world.

## Installation

First, you have to open the repository [GabsEdits/tipps](https://github.com/GabsEdits/tipps) and click on the "Use this template" button. This will create a new repository with the Tipps theme. 

You can follow [the guide by GitHub](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) to create a new repository from a template.

## Configuration

If you have your newly created repository, you can start configuring the theme. You can find the configuration file in the `.vitepress` folder. The file is called `config.mts`.

Here is an example of the configuration file:

```typescript
import { link } from "fs";
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tipps",
  description: "Share your tips and tricks!",

  themeConfig: {
    author: "Gabriel Cozma",
    nav: [
      { text: "Home", link: "/" },
      { text: "My Website", link: "https://gabrielcozma.com" },
    ],
  },
});
```
