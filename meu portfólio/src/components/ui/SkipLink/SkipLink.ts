/**
 * SkipLink types
 * Acessibilidade de navegação por teclado (WCAG 2.2 — 2.4.1 Bypass Blocks)
 */

export interface SkipLinkProps {
  targetId?: string
  lang?:     "pt" | "en"
  label?:    string
}
