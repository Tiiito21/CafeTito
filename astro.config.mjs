import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'http://elcafetito.es',
  integrations: [tailwind(), react(),sitemap()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});