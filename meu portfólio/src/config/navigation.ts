/**
 * navigation.ts — Estrutura de navegação do site
 *
 * Fonte única de verdade para itens de menu (doc 1, seção 17).
 * Menus são renderizados a partir deste arquivo — nunca hardcoded.
 */

import type { Locale } from './site';

export interface NavItem {
  key: string;
  href: {
    pt: string;
    en: string;
  };
  label: {
    pt: string;
    en: string;
  };
}

export const NAV_ITEMS: NavItem[] = [
  {
    key: 'home',
    href: { pt: '/', en: '/en' },
    label: { pt: 'Início', en: 'Home' },
  },
  {
    key: 'archive',
    href: { pt: '/arquivo', en: '/en/archive' },
    label: { pt: 'Arquivo', en: 'Archive' },
  },
  {
    key: 'direction',
    href: { pt: '/direcao-de-arte', en: '/en/art-direction' },
    label: { pt: 'Direção de Arte', en: 'Art Direction' },
  },
  {
    key: 'films',
    href: { pt: '/filmes', en: '/en/films' },
    label: { pt: 'Filmes', en: 'Films' },
  },
  {
    key: 'photography',
    href: { pt: '/fotografia', en: '/en/photography' },
    label: { pt: 'Fotografia', en: 'Photography' },
  },
  {
    key: 'research',
    href: { pt: '/pesquisa', en: '/en/research' },
    label: { pt: 'Pesquisa', en: 'Research' },
  },
  {
    key: 'about',
    href: { pt: '/sobre', en: '/en/about' },
    label: { pt: 'Sobre', en: 'About' },
  },
  {
    key: 'curriculum',
    href: { pt: '/curriculo', en: '/en/curriculum' },
    label: { pt: 'Currículo', en: 'Curriculum' },
  },
  {
    key: 'contact',
    href: { pt: '/contato', en: '/en/contact' },
    label: { pt: 'Contato', en: 'Contact' },
  },
] as const;

export function getNavItem(key: string, locale: Locale): { href: string; label: string } | undefined {
  const item = NAV_ITEMS.find((n) => n.key === key);
  if (!item) return undefined;
  return { href: item.href[locale], label: item.label[locale] };
}

export function getNavItems(locale: Locale): Array<{ key: string; href: string; label: string }> {
  return NAV_ITEMS.map((item) => ({
    key: item.key,
    href: item.href[locale],
    label: item.label[locale],
  }));
}
