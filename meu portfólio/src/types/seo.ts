/**
 * seo.ts — Tipos para SEO global
 */

export interface SEOMeta {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  locale?: string;
  alternateLocales?: { hreflang: string; href: string }[];
  keywords?: string[];
  noindex?: boolean;
  schemaType?: 'WebPage' | 'Article' | 'CreativeWork' | 'Person';
}
