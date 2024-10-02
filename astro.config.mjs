import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

//import node from "@astrojs/node";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: 'https://elcafetito.es',
  integrations: [tailwind(), react(), sitemap()],
  output: "server",
  adapter: netlify()
  // adapter: node({
  //   mode: "standalone"
  // })
});