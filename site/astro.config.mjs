import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://as215207.net",
  integrations: [tailwind(), sitemap(), prefetch(), svelte()],
});
