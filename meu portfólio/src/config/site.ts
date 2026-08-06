/**
 * site.ts — Configuração global do site
 *
 * Fonte única de verdade para metadados, URLs, idiomas e identidade.
 * Nenhum dado de configuração deve ficar fixo em componentes.
 */

export const SITE = {
  name: 'Hartman Ortiz',
  title: 'Hartman Ortiz — Arquivo Vivo',
  description:
    'Plataforma editorial de documentação de processos criativos. Direção de arte, cinema, fotografia, pesquisa e artes da cena.',
  url: 'https://hartmanortiz.github.io',
  author: 'Hartman Ortiz',
  email: 'contato@hartmanortiz.com',
  locale: 'pt-BR',
  twitterHandle: '@hartmanortiz',
} as const;

export const LOCALES = {
  pt: {
    code: 'pt',
    label: 'Português',
    hreflang: 'pt-BR',
    dir: 'ltr',
  },
  en: {
    code: 'en',
    label: 'English',
    hreflang: 'en-US',
    dir: 'ltr',
  },
} as const;

export type Locale = keyof typeof LOCALES;

export const DEFAULT_LOCALE: Locale = 'pt';
