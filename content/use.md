# Guide on how to use it

This is a simple guide on how to use the Tipps theme. It is designed to be easy to use and easy to extend. It is perfect for sharing your knowledge with the world.

## Installation

First, you have to open the repository [GabsEdits/tipps](https://github.com/GabsEdits/tipps) and click on the "Use this template" button. This will create a new repository with the Tipps theme.

> You can follow [the guide by GitHub](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) to create a new repository from a template.

## Configuration

If you have your newly created repository, you can start configuring the theme. You can find the configuration file in the `.vitepress` folder. The file is called `config.mts`.

Here is an example of the configuration file:

```typescript
import { link } from "fs";
import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Tipps",
  description: "Share your tips and tricks!",

  themeConfig: {
    author: {
      name: "Gabriel Cozma",
      link: "https://gxbs.dev",
    },
    }
    nav: [
      { text: "Home", link: "/" },
      { text: "My Website", link: "https://gxbs.dev" },
    ],
  },
});
```

Read more about the configuration in the [VitePress documentation](https://vitepress.dev/reference/site-config).

## Feed

The theme comes with an RSS feed. You can find the feed at `/atom.xml`. You can use this feed to share your content with the world. There is only one issue, you need to configure the feed with your own information.

Inside the `feed.ts` file, you can find the 6th to 11th line. Here is an example of the configuration:

```typescript
const title = "Tips";
const description = "Sharing my tips and tricks with the world";
const copyright = "Copyright (c) 2024-present, John Doe";
const image = "https://john.doe.example.org/image.png";
const baseUrl = `https://john.doe.example.org`;
```

That's it! You have successfully configured the Tipps theme. Now you can start sharing your knowledge with the world.

---

If you are looking for a more generic theme, you can check out [Aplós](https://aplos.gxbs.dev). It is a simple VitePress theme that is designed to be easy to use and easy to extend.
