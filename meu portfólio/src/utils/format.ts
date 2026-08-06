/**
 * format.ts — Utilitários de formatação
 */

import type { Locale } from '@config/site';

/**
 * Formata uma data de acordo com o idioma ativo.
 */
export function formatDate(date: Date | string, locale: Locale): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale === 'pt' ? 'pt-BR' : 'en-US', {
    year: 'numeric',
    month: 'long',
  }).format(d);
}

/**
 * Formata apenas o ano de uma data.
 */
export function formatYear(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.getFullYear().toString();
}

/**
 * Trunca um texto ao limite de caracteres informado.
 */
export function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return text.slice(0, max).trimEnd() + '…';
}

/**
 * Converte um string para slug URL-friendly.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}
