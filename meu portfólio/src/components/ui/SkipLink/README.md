# SkipLink

Componente de acessibilidade para navegação por teclado (WCAG 2.2 — 2.4.1 Bypass Blocks).

Permite que usuários de leitores de tela ou navegando exclusivamente por teclado pulem diretamente o menu de navegação e acessem a área principal `#main-content`.

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `targetId` | `string` | `"main-content"` | ID do container principal da página |
| `lang` | `"pt" \| "en"` | `"pt"` | Idioma para o rótulo padrão |
| `label` | `string` | Automático por idioma | Rótulo personalizado caso necessário |

## Uso

```astro
---
import { SkipLink } from "@components/ui/SkipLink"
---

<SkipLink lang="pt" />
```
