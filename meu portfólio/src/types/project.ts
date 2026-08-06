/**
 * project.ts — Tipagem completa de um projeto (doc 3, seção 7)
 *
 * Todos os campos obrigatórios e opcionais definidos no PRD.
 * Esta tipagem é a fonte de verdade para o Content Collection schema.
 */

import type { Category } from '@config/categories';

// ─── Campos obrigatórios ──────────────────────────────────────────────────────

export interface ProjectRequired {
  /** Título do projeto */
  title: string;
  /** Subtítulo / tagline */
  subtitle: string;
  /** Resumo curto (usado em cards e listagens) */
  summary: string;
  /** Slug único para URL */
  slug: string;
  /** Idioma do conteúdo */
  locale: 'pt' | 'en';
  /** Categorias (múltiplas permitidas) */
  categories: Category[];
  /** Data de criação / finalização */
  date: Date;
  /** Imagem de capa */
  cover: ImageMeta;
  /** Status de publicação */
  published: boolean;
}

// ─── Metadados de imagem ──────────────────────────────────────────────────────

export interface ImageMeta {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  author?: string;
  year?: number;
  project?: string;
}

// ─── Crédito de equipe ────────────────────────────────────────────────────────

export interface CreditEntry {
  role: string;
  name: string;
  link?: string;
}

// ─── Referência bibliográfica ─────────────────────────────────────────────────

export interface BibliographyEntry {
  authors: string;
  title: string;
  year?: number;
  publisher?: string;
  url?: string;
  type: 'book' | 'article' | 'film' | 'website' | 'other';
}

// ─── Campos opcionais ─────────────────────────────────────────────────────────

export interface ProjectOptional {
  /** Imagens adicionais */
  images?: ImageMeta[];
  /** URLs de vídeo externo (YouTube / Vimeo) */
  videos?: VideoMeta[];
  /** Texto principal (conteúdo MDX) */
  body?: string;
  /** Tags livres */
  tags?: string[];
  /** Contexto / situação inicial */
  context?: string;
  /** Problema identificado */
  problem?: string;
  /** Processo de pesquisa */
  research?: string;
  /** Referências visuais e conceituais */
  references?: string;
  /** Moodboard */
  moodboard?: ImageMeta[];
  /** Storyboard */
  storyboard?: ImageMeta[];
  /** Protótipos */
  prototypes?: ImageMeta[];
  /** Bastidores */
  behindTheScenes?: ImageMeta[];
  /** Processo de desenvolvimento */
  process?: string;
  /** Galeria geral */
  gallery?: ImageMeta[];
  /** Ficha técnica (texto livre) */
  technicalSheet?: string;
  /** Créditos de equipe */
  credits?: CreditEntry[];
  /** Referências bibliográficas */
  bibliography?: BibliographyEntry[];
  /** Links externos */
  externalLinks?: ExternalLink[];
  /** Premiações */
  awards?: string[];
  /** Editais relacionados */
  relatedGrantCalls?: string[];
  /** Projetos relacionados (slugs) */
  relatedProjects?: string[];
  /** Notas de processo (sidebar) */
  processNotes?: ProcessNote[];
  /** SEO específico do projeto */
  seo?: ProjectSEO;
}

// ─── Tipos auxiliares ─────────────────────────────────────────────────────────

export interface VideoMeta {
  url: string;
  platform: 'youtube' | 'vimeo';
  title?: string;
  thumbnail?: string;
}

export interface ExternalLink {
  label: string;
  url: string;
}

export interface ProcessNote {
  content: string;
  position?: 'left' | 'right';
}

export interface ProjectSEO {
  title?: string;
  description?: string;
  ogImage?: string;
  twitterImage?: string;
  canonical?: string;
  keywords?: string[];
}

// ─── Tipo completo de projeto ──────────────────────────────────────────────────

export type Project = ProjectRequired & ProjectOptional;
