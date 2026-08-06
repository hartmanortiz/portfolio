/**
 * Typography types
 */

export type HeadingLevel = "h1" | "h2" | "h3" | "h4"
export type TextVariant  = "body" | "lead" | "caption" | "meta" | "ui"
export type TextFamily   = "editorial" | "interface"

export interface HeadingProps {
  as:       HeadingLevel
  family?:  TextFamily
  class?:   string
}

export interface TextProps {
  as?:     "p" | "span" | "div" | "time" | "small"
  variant: TextVariant
  class?:  string
}
