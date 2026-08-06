/**
 * Header types
 * Fonte: docs/05-software-architecture.md — §6 (convenção de nomes)
 */

export interface NavLink {
  label: string
  href: string
  labelEn?: string
}

export interface HeaderProps {
  lang: "pt" | "en"
  currentPath: string
}
