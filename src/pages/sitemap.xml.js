// sitemap.xml, built by listing the pages that actually exist — add a page
// under src/pages/ and it appears here without anything else to remember.
import { absoluteUrl } from "../site.config.js";

const routes = Object.keys(import.meta.glob("./**/*.astro"))
  .map((file) =>
    file
      .replace(/^\.\//, "")
      .replace(/index\.astro$/, "")
      .replace(/\.astro$/, "/"),
  )
  .filter((route) => !route.startsWith("404"))
  .sort();

export function GET() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = routes
    .map(
      (route) => `  <url>
    <loc>${absoluteUrl(route)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === "" ? "1.0" : "0.7"}</priority>
  </url>`,
    )
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
