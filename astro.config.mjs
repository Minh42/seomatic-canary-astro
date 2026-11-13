import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://minh42.github.io',
  base: '/seomatic-canary-astro',
  trailingSlash: 'always',
  integrations: [sitemap()],
})
