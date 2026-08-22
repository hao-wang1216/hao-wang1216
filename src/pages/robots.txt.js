// robots.txt, generated from the `robots` block in src/site.config.js so the
// crawler rules and the site URL never drift apart.
import { site, absoluteUrl } from "../site.config.js";

// Named explicitly because some crawlers treat "not mentioned" as a reason to
// be conservative — being listed removes the ambiguity either way.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ClaudeBot",
  "PerplexityBot",
  "CCBot",
  "Google-Extended",
];

export function GET() {
  const rule = site.robots.indexing ? "Allow: /" : "Disallow: /";
  const aiRule = site.robots.aiCrawlers ? "Allow: /" : "Disallow: /";

  const body = [
    site.robots.indexing
      ? "# Everything is open to crawlers — an academic page exists to be found and cited."
      : "# Indexing is switched off in src/site.config.js.",
    `User-agent: *`,
    rule,
    "",
    site.robots.aiCrawlers
      ? "# AI crawlers, listed by name so none of them has to guess."
      : "# AI crawlers are asked to stay out. This is a request, not a barrier:\n# it only works for crawlers that choose to honour robots.txt.",
    ...AI_CRAWLERS.flatMap((bot) => [`User-agent: ${bot}`, aiRule, ""]),
    `Sitemap: ${absoluteUrl("sitemap.xml")}`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
