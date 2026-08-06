/**
 * Button types
 */

export type ButtonVariant = "default" | "ghost" | "link" | "editorial"
export type ButtonSize    = "sm" | "md" | "lg"

export interface ButtonProps {
  variant?:  ButtonVariant
  size?:     ButtonSize
  href?:     string
  type?:     "button" | "submit" | "reset"
  disabled?: boolean
  label:     string
  external?: boolean
  lang?:     "pt" | "en"
}
