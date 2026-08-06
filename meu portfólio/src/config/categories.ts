/**
 * categories.ts — Sistema de categorias e tags (doc 3, seções 8 e 9)
 *
 * Categorias são extensíveis sem alterar código de componentes.
 * Tags são livres e não são listadas aqui — apenas as categorias são tipadas.
 */

export const CATEGORIES = [
  'Direção de Arte',
  'Cinema',
  'Fotografia',
  'Pesquisa',
  'Instalações',
  'Produção',
  'Documentário',
  'Videoclipe',
  'Espetáculo',
  'Infância',
  'Universidade',
  'Editais',
] as const;

export type Category = (typeof CATEGORIES)[number];

export const CATEGORIES_EN: Record<Category, string> = {
  'Direção de Arte': 'Art Direction',
  'Cinema': 'Cinema',
  'Fotografia': 'Photography',
  'Pesquisa': 'Research',
  'Instalações': 'Installations',
  'Produção': 'Production',
  'Documentário': 'Documentary',
  'Videoclipe': 'Music Video',
  'Espetáculo': 'Performing Arts',
  'Infância': 'Childhood',
  'Universidade': 'University',
  'Editais': 'Grants',
};
