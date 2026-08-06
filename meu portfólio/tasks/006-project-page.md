# TASK 006 — PÁGINA DE PROJETO

**Status:** `[ ] Pendente`
**Prioridade:** Alta
**Etapa do Development Guide:** Etapa 5
**Dependência:** `005-home.md` concluída

---

## Objetivo

Criar o template de página de projeto individual. Cada projeto é um estudo de caso independente com blocos configuráveis.

---

## Estrutura de blocos disponíveis

Conforme PRD § 12 (todos opcionais, exceto os marcados):

| Bloco | Obrigatório |
|-------|-------------|
| Título e subtítulo | ✅ |
| Resumo | ✅ |
| Capa | ✅ |
| Contexto | — |
| Problema | — |
| Objetivos | — |
| Pesquisa | — |
| Moodboard | — |
| Storyboard | — |
| Referências Visuais | — |
| Processo | — |
| Galeria | — |
| Vídeo | — |
| Resultado | — |
| Bastidores | — |
| Ficha Técnica | — |
| Créditos | — |
| Bibliografia | — |
| Links | — |
| Notas Laterais | — |
| Projetos Relacionados | — |

---

## Checklist

- [ ] Criar rota dinâmica `src/pages/arquivo/[slug].astro`
- [ ] Criar rota dinâmica `src/pages/en/archive/[slug].astro`
- [ ] Criar layout `LayoutProject.astro` com slots para cada bloco
- [ ] Breadcrumb: Início → Arquivo → [Nome do Projeto]
- [ ] Navegação anterior/próximo projeto
- [ ] Metadados laterais (ano, categoria, cliente, edital, equipe)
- [ ] SEO completo por projeto
- [ ] Schema.org: `CreativeWork`
- [ ] Botão de compartilhamento discreto
- [ ] Índice automático para projetos longos
- [ ] Modo de visualização para editais (reordenar blocos)

---

## Modelo de frontmatter do Markdown

```yaml
---
title: ""
subtitle: ""
summary: ""
slug: ""
lang: "pt" | "en"
category: []
date: ""
cover: ""
images: []
videos: []
status: "draft" | "review" | "published"
seo:
  title: ""
  description: ""
  ogImage: ""
---
```

---

## Referências

- `03-prd.md` § 7, § 12
- `05-software-architecture.md` § 9, § 10

---

## Próxima tarefa

→ `007-cms.md`
