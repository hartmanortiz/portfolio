# Header

Navegação principal do portfólio.

## Comportamento

| Viewport | Comportamento |
|----------|--------------|
| Desktop (≥ 1024px) | Sidebar lateral fixa à esquerda |
| Mobile (< 1024px) | Barra inferior fixa |

## Props

| Prop | Tipo | Obrigatório | Descrição |
|------|------|-------------|-----------|
| `lang` | `"pt" \| "en"` | ✅ | Idioma atual da página |
| `currentPath` | `string` | ✅ | Caminho da URL atual (para estado ativo) |

## Uso

```astro
---
import { Header } from "@components/navigation/Header"
---

<Header lang="pt" currentPath={Astro.url.pathname} />
```

## Decisões

- **Sidebar no desktop**: conforme ADR-003. Menu lateral libera a área de conteúdo verticalmente.
- **Barra inferior no mobile**: alcance natural do polegar, não esconde conteúdo.
- **Links gerados internamente**: o array de navegação é a fonte única da verdade. Alterar aqui reflete em ambos os modos.
- **`aria-current="page"`**: aplicado automaticamente ao link ativo para leitores de tela.
- **Área de toque mínima**: `min-width/height: 44px` nos links mobile (WCAG 2.2).

## Restrições

- Não aceita ícones por padrão (identidade editorial, sem aparência de app)
- Links de navegação não são configuráveis por props — alterar diretamente em `Header.astro`
- O seletor de idioma assume apenas PT ↔ EN

## Referências

- `docs/02-design-system.md` § 15
- `decisions/ADR-003-navigation.md`
