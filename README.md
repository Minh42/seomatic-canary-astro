# SEOmatic canary: Astro

A small static Astro directory site used to test SEOmatic on Astro. Tools come from `data/tools.json`; the blog is an Astro content collection in `src/content/blog/*.md`. Every page renders through `src/layouts/Base.astro`, which takes `title` and `description` props. Sitemap from `@astrojs/sitemap` at `/sitemap-index.xml`.

Planted gaps for SEOmatic to find: weak home description, `/pricing` (title only) and `/best` (no props at all) without a meta description, template pages (`/alternatives/[slug]`) without descriptions, the `headless-cms-guide` post with no `description` in its frontmatter, no structured data.
