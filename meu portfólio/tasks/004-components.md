# TASK 004 — COMPONENTES

**Status:** `[ ] Pendente`
**Prioridade:** Alta
**Etapa do Development Guide:** Etapa 4
**Dependência:** `003-layout.md` concluída

---

## Objetivo

Criar todos os componentes reutilizáveis do projeto, organizados por nível conforme a arquitetura de software.

---

## Estrutura de cada componente

```
src/components/[categoria]/[Nome]/
  [Nome].astro      ← template
  [Nome].css        ← estilos (se necessário)
  [Nome].ts         ← lógica e tipos
  index.ts          ← exportação
  README.md         ← documentação
```

---

## Nível 1 — UI (Primitivos)

- [ ] `Button` — discreto, sem aparência tecnológica
- [ ] `Badge` — categoria, tag
- [ ] `Divider` — separador editorial
- [ ] `Icon` — traço fino, minimalista
- [ ] `Input` — busca e formulários

## Nível 2 — Compostos

- [ ] `Header` — navegação lateral no desktop, inferior no mobile
- [ ] `Footer` — créditos, links, idioma
- [ ] `Sidebar` — metadados, notas laterais
- [ ] `Hero` — bloco editorial de entrada
- [ ] `Gallery` — layouts variados (2, 3, 4 imagens, mosaico)
- [ ] `Timeline` — linha do tempo vertical
- [ ] `Quote` — bloco de citação em destaque
- [ ] `Breadcrumb` — navegação contextual
- [ ] `Tag` — etiqueta de categoria ou tag livre
- [ ] `Filter` — filtro cumulativo por categoria, ano, tipo

## Nível 3 — Editorial

- [ ] `CaseStudy` — estrutura do estudo de caso
- [ ] `ResearchBlock` — bloco de pesquisa com referências
- [ ] `Moodboard` — grid livre de referências visuais
- [ ] `Storyboard` — sequência horizontal
- [ ] `Bibliography` — referências em formato acadêmico
- [ ] `Credits` — ficha técnica e equipe
- [ ] `TechnicalSheet` — ficha técnica organizada
- [ ] `ProcessSection` — bloco de processo criativo
- [ ] `SidebarNote` — nota marginal de processo

## Componentes Exclusivos

- [ ] `ArchiveIndex` — índice automático do acervo
- [ ] `ImageSequence` — sequência editorial de imagens
- [ ] `ProcessDiagram` — linha de evolução Problema→Resultado
- [ ] `MetadataPanel` — painel de metadados (ano, local, cliente, edital)
- [ ] `ProjectNavigation` — anterior / próximo projeto
- [ ] `VideoBlock` — vídeo incorporado (YouTube/Vimeo), sem autoplay

---

## Regras de Componentes

- Toda imagem com `alt` obrigatório
- Toda imagem com suporte a legenda, autor e data
- Motion isolado, nunca dentro do componente
- Animações respeitam `prefers-reduced-motion`
- Nenhum componente depende de outro do mesmo nível
- Toda prop deve ser tipada em TypeScript

---

## Referências

- `02-design-system.md` § 14, § 25, § 29
- `05-software-architecture.md` § 5, § 8, § 21

---

## Próxima tarefa

→ `005-home.md`
