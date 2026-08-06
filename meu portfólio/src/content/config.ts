/**
 * config.ts — Astro Content Collections
 *
 * Define os schemas de validação para todo o conteúdo Markdown/MDX.
 * Garante integridade dos dados entre CMS e site.
 *
 * Coleções (doc 5, seção 11):
 *  - projects     → estudos de caso completos
 *  - photography  → séries fotográficas
 *  - films        → filmes referenciados / trabalhos audiovisuais
 *  - research     → pesquisas e textos acadêmicos
 *  - about        → páginas institucionais
 *  - curriculum   → currículo estruturado
 */

import { defineCollection, z } from 'astro:content';

// ─── Schema base compartilhado ────────────────────────────────────────────────

const imageSchema = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string().optional(),
  author: z.string().optional(),
  year: z.number().optional(),
  width: z.number().optional(),
  height: z.number().optional(),
});

const videoSchema = z.object({
  url: z.string().url(),
  platform: z.enum(['youtube', 'vimeo']),
  title: z.string().optional(),
  thumbnail: z.string().optional(),
});

const creditSchema = z.object({
  role: z.string(),
  name: z.string(),
  link: z.string().url().optional(),
});

const bibliographySchema = z.object({
  authors: z.string(),
  title: z.string(),
  year: z.number().optional(),
  publisher: z.string().optional(),
  url: z.string().url().optional(),
  type: z.enum(['book', 'article', 'film', 'website', 'other']),
});

const seoSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  ogImage: z.string().optional(),
  twitterImage: z.string().optional(),
  canonical: z.string().url().optional(),
  keywords: z.array(z.string()).optional(),
}).optional();

// ─── Collection: projects ─────────────────────────────────────────────────────

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    // Obrigatórios
    title:      z.string(),
    subtitle:   z.string(),
    summary:    z.string().max(300),
    slug:       z.string(),
    locale:     z.enum(['pt', 'en']),
    categories: z.array(z.string()).min(1),
    date:       z.coerce.date(),
    cover:      imageSchema,
    published:  z.boolean().default(false),

    // Opcionais
    tags:             z.array(z.string()).optional(),
    images:           z.array(imageSchema).optional(),
    videos:           z.array(videoSchema).optional(),
    context:          z.string().optional(),
    problem:          z.string().optional(),
    research:         z.string().optional(),
    references:       z.string().optional(),
    moodboard:        z.array(imageSchema).optional(),
    storyboard:       z.array(imageSchema).optional(),
    prototypes:       z.array(imageSchema).optional(),
    behindTheScenes:  z.array(imageSchema).optional(),
    process:          z.string().optional(),
    gallery:          z.array(imageSchema).optional(),
    technicalSheet:   z.string().optional(),
    credits:          z.array(creditSchema).optional(),
    bibliography:     z.array(bibliographySchema).optional(),
    externalLinks:    z.array(z.object({ label: z.string(), url: z.string().url() })).optional(),
    awards:           z.array(z.string()).optional(),
    relatedGrantCalls: z.array(z.string()).optional(),
    relatedProjects:  z.array(z.string()).optional(),
    processNotes:     z.array(z.object({
      content:  z.string(),
      position: z.enum(['left', 'right']).optional(),
    })).optional(),
    seo: seoSchema,
  }),
});

// ─── Collection: photography ──────────────────────────────────────────────────

const photography = defineCollection({
  type: 'content',
  schema: z.object({
    title:     z.string(),
    subtitle:  z.string().optional(),
    summary:   z.string().optional(),
    locale:    z.enum(['pt', 'en']),
    date:      z.coerce.date(),
    cover:     imageSchema,
    images:    z.array(imageSchema).optional(),
    tags:      z.array(z.string()).optional(),
    published: z.boolean().default(false),
    seo:       seoSchema,
  }),
});

// ─── Collection: films ────────────────────────────────────────────────────────

const films = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    subtitle:    z.string().optional(),
    summary:     z.string().optional(),
    locale:      z.enum(['pt', 'en']),
    date:        z.coerce.date(),
    cover:       imageSchema,
    videos:      z.array(videoSchema).optional(),
    categories:  z.array(z.string()).optional(),
    credits:     z.array(creditSchema).optional(),
    tags:        z.array(z.string()).optional(),
    published:   z.boolean().default(false),
    seo:         seoSchema,
  }),
});

// ─── Collection: research ─────────────────────────────────────────────────────

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title:        z.string(),
    subtitle:     z.string().optional(),
    summary:      z.string().optional(),
    locale:       z.enum(['pt', 'en']),
    date:         z.coerce.date(),
    cover:        imageSchema.optional(),
    bibliography: z.array(bibliographySchema).optional(),
    tags:         z.array(z.string()).optional(),
    published:    z.boolean().default(false),
    seo:          seoSchema,
  }),
});

// ─── Collection: about ────────────────────────────────────────────────────────

const about = defineCollection({
  type: 'content',
  schema: z.object({
    locale:    z.enum(['pt', 'en']),
    title:     z.string(),
    published: z.boolean().default(true),
    seo:       seoSchema,
  }),
});

// ─── Collection: curriculum ───────────────────────────────────────────────────

const curriculum = defineCollection({
  type: 'content',
  schema: z.object({
    locale:    z.enum(['pt', 'en']),
    title:     z.string(),
    published: z.boolean().default(true),
    seo:       seoSchema,
  }),
});

// ─── Exportação ───────────────────────────────────────────────────────────────

export const collections = {
  projects,
  photography,
  films,
  research,
  about,
  curriculum,
};
