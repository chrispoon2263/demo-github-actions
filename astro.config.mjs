import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

export default defineConfig({
  integrations: [tailwind(), sitemap(), prefetch()],
  site: "https://chrispoon2263.github.io",
  base: "/demo-github-actions",
});
