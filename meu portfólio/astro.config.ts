import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://hartmanortiz.github.io',
  base: '/',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'pt',
        locales: {
          pt: 'pt-BR',
          en: 'en-US',
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
  image: {
    // Optimização automática de imagens — preferência WebP/AVIF
    domains: ['hartmanortiz.github.io'],
  },
  build: {
    assets: '_assets',
  },
  vite: {
    css: {
      devSourcemap: true,
    },
  },
});
