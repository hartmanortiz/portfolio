/**
 * i18n.ts — Utilitários de internacionalização
 *
 * Funções para lidar com idioma, URLs e traduções (doc 3, seção 16; doc 5, seção 16).
 */

import type { Locale } from '@config/site';
import { DEFAULT_LOCALE, LOCALES } from '@config/site';

/**
 * Retorna o idioma a partir de um pathname de URL.
 * Ex: '/en/archive' → 'en'; '/arquivo' → 'pt'
 */
export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split('/')[1];
  if (segment && segment in LOCALES && segment !== DEFAULT_LOCALE) {
    return segment as Locale;
  }
  return DEFAULT_LOCALE;
}

/**
 * Retorna a URL correspondente ao idioma oposto.
 * Preserva o contexto da página quando possível.
 */
export function getAlternateUrl(pathname: string, targetLocale: Locale): string {
  const currentLocale = getLocaleFromPath(pathname);
  if (currentLocale === targetLocale) return pathname;

  if (targetLocale === DEFAULT_LOCALE) {
    // Remove o prefixo de idioma
    return pathname.replace(/^\/en/, '') || '/';
  } else {
    // Adiciona o prefixo de idioma
    return `/${targetLocale}${pathname}`;
  }
}

/**
 * Constrói uma URL correta para o idioma informado.
 */
export function localePath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) return clean;
  return `/${locale}${clean}`;
}

/**
 * Retorna o hreflang para uso em meta tags.
 */
export function getHreflang(locale: Locale): string {
  return LOCALES[locale].hreflang;
}
