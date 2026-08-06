# TASK 002 — DESIGN TOKENS

**Status:** `[ ] Pendente`
**Prioridade:** Alta
**Etapa do Development Guide:** Etapa 3 — Design Tokens
**Dependência:** `001-setup.md` concluída

---

## Objetivo

Criar o sistema completo de Design Tokens: cores, tipografia, espaçamentos, bordas, animações e breakpoints. Nenhuma página ou componente deve ser criado nesta etapa.

---

## Checklist

- [ ] Criar `src/styles/tokens/colors.css` — paleta de cores completa
- [ ] Criar `src/styles/tokens/typography.css` — escala tipográfica
- [ ] Criar `src/styles/tokens/spacing.css` — escala de espaçamentos (múltiplos de 8px)
- [ ] Criar `src/styles/tokens/borders.css` — raios, espessuras
- [ ] Criar `src/styles/tokens/motion.css` — durações, easings de animação
- [ ] Criar `src/styles/tokens/breakpoints.css` — pontos de quebra
- [ ] Criar `src/styles/global.css` — importa todos os tokens, resets, base
- [ ] Configurar extensão do Tailwind com os tokens

---

## Paleta de Cores (conforme Design System)

```css
/* Base */
--color-paper:       /* Papel claro quente */
--color-ink:         /* Preto quente */
--color-graphite:    /* Cinza grafite */
--color-brown:       /* Marrom profundo */

/* Destaques */
--color-rust:        /* Vermelho queimado */
--color-burnt:       /* Laranja queimado */
--color-ochre:       /* Ocre */

/* Utilidade */
--color-muted:       /* Texto secundário */
--color-border:      /* Bordas e divisores */
--color-surface:     /* Fundos de seções alternadas */
```

---

## Escala Tipográfica

- Fonte serifada: para títulos, introduções, citações
- Fonte grotesca: para menus, legendas, interface, metadados

---

## Escala de Espaçamento

Baseada em múltiplos de 8px:
`8 / 16 / 24 / 32 / 48 / 64 / 96 / 128`

---

## Breakpoints

```
mobile:  < 640px
tablet:  640px – 1024px
notebook: 1024px – 1280px
desktop:  1280px – 1536px
wide:    > 1536px
```

---

## Referências

- `02-design-system.md` § 7, § 8, § 9, § 10
- `05-software-architecture.md` § 22, § 23, § 24

---

## Próxima tarefa

→ `003-layout.md`
