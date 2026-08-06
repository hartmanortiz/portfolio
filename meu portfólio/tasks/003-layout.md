# TASK 003 — SISTEMA DE LAYOUTS

**Status:** `[ ] Pendente`
**Prioridade:** Alta
**Etapa do Development Guide:** Etapa 4 → Etapa 5
**Dependência:** `002-design-tokens.md` concluída

---

## Objetivo

Criar os layouts base do projeto. Os layouts são responsáveis apenas por estrutura — nunca por conteúdo.

---

## Checklist

- [ ] Criar `src/layouts/LayoutBase.astro` — base HTML, meta tags, head, body wrapper
- [ ] Criar `src/layouts/LayoutEditorial.astro` — grid editorial com sidebar e margens
- [ ] Criar `src/layouts/LayoutProject.astro` — página de projeto / estudo de caso
- [ ] Criar `src/layouts/LayoutPhotography.astro` — galeria fotográfica
- [ ] Criar `src/layouts/LayoutResearch.astro` — página de pesquisa / texto longo
- [ ] Criar `src/layouts/LayoutArchive.astro` — índice do arquivo / listagem
- [ ] Criar `src/layouts/LayoutLanding.astro` — página home

---

## Especificações

### LayoutBase

- Slots: `head`, `default`
- Props: `title`, `description`, `ogImage`, `canonical`, `lang`
- Inclui: fontes, tokens, reset, viewport

### LayoutEditorial

- Grid de 12 colunas
- Área de conteúdo: 6–8 colunas
- Sidebar opcional: 3–4 colunas
- Grandes margens laterais no desktop

### LayoutProject

- Breadcrumb no topo
- Navegação anterior/próximo no rodapé
- Suporte a blocos reordenáveis

---

## Mobile First

Todos os layouts devem ser projetados primeiro para mobile (< 640px) e expandidos para telas maiores.

---

## Referências

- `02-design-system.md` § 6, § 15, § 20, § 21
- `05-software-architecture.md` § 7

---

## Próxima tarefa

→ `004-components.md`
