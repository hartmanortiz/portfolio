/**
 * content.ts — Utilitários para busca e filtragem de conteúdo
 *
 * Funções auxiliares para trabalhar com Content Collections do Astro.
 */

import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '@config/site';

/**
 * Retorna projetos publicados filtrados por idioma, opcionalmente por categoria.
 */
export async function getPublishedProjects(
  locale: Locale,
  category?: string
): Promise<CollectionEntry<'projects'>[]> {
  const all = await getCollection('projects', ({ data }) => {
    return data.published && data.locale === locale;
  });

  const filtered = category
    ? all.filter(({ data }) => data.categories.includes(category))
    : all;

  return filtered.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );
}

/**
 * Retorna todos os projetos relacionados por slug.
 */
export async function getRelatedProjects(
  slugs: string[],
  locale: Locale
): Promise<CollectionEntry<'projects'>[]> {
  const all = await getCollection('projects', ({ data }) => {
    return data.published && data.locale === locale && slugs.includes(data.slug);
  });
  return all;
}

/**
 * Retorna todas as categorias presentes nos projetos publicados.
 */
export async function getUsedCategories(locale: Locale): Promise<string[]> {
  const projects = await getPublishedProjects(locale);
  const set = new Set<string>();
  for (const { data } of projects) {
    for (const cat of data.categories) {
      set.add(cat);
    }
  }
  return Array.from(set).sort();
}

/**
 * Retorna todas as tags presentes nos projetos publicados.
 */
export async function getUsedTags(locale: Locale): Promise<string[]> {
  const projects = await getPublishedProjects(locale);
  const set = new Set<string>();
  for (const { data } of projects) {
    for (const tag of data.tags ?? []) {
      set.add(tag);
    }
  }
  return Array.from(set).sort();
}
