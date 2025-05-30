import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://bogeonko.github.io/azure-portfolio/',
  base: '/azure-portfolio/',
  integrations: [tailwind()],
});
