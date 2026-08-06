---
/**
 * rss.xml.ts — Feed RSS
 *
 * Gera um feed RSS para todos os projetos publicados (doc 3, seção 17).
 */

import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '@config/site';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const projects = await getCollection('projects', ({ data }) => {
    return data.published && data.locale === 'pt';
  });

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: projects
      .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
      .map((project) => ({
        title: project.data.title,
        pubDate: project.data.date,
        description: project.data.summary,
        link: `/arquivo/${project.data.slug}/`,
      })),
    customData: `<language>pt-BR</language>`,
  });
}
