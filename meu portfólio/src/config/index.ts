/**
 * index.ts — Barrel de configuração
 *
 * Re-exporta tudo de src/config/ para imports limpos:
 * import { SITE, NAV_ITEMS, CATEGORIES } from '@config';
 */

export * from './site';
export * from './navigation';
export * from './categories';
