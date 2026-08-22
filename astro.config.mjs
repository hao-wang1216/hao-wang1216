// @ts-check
import { defineConfig } from "astro/config";
import { site } from "./src/site.config.js";

// A static site: everything is rendered to HTML at build time and the output
// in dist/ can be served by any host. There is no server and no runtime
// framework — the only JavaScript that ships is the handful of lines in the
// components.
export default defineConfig({
  // Where the site will live — set in src/site.config.js, and detected
  // automatically from your Pages settings when the GitHub Pages workflow
  // builds it.
  site: site.url,
  base: site.base,

  build: {
    // Hashed asset filenames, so they can be cached forever
    assets: "assets",
  },

  // Fonts use system fallbacks in src/styles/index.css, so builds do not need
  // to fetch metadata or font files from Google Fonts.
});
