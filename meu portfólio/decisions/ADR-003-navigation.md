# ADR-003 — Estratégia de Navegação

**Data:** 2026-08-06
**Status:** Aceito
**Decisores:** Hartman Ortiz

---

## Contexto

O portfólio é uma plataforma editorial com conteúdo denso. A navegação precisa ser sempre acessível, sem esconder o menu, mas também sem competir com o conteúdo — especialmente em mobile.

---

## Decisão

### Desktop

**Menu lateral fixo** à esquerda ou à direita.

- Sempre visível durante o scroll
- Nunca esconde completamente
- Contém: logo, links de seção, seletor de idioma
- Largura: 3–4 colunas do grid (estreito, discreto)

### Mobile

**Menu inferior fixo** (bottom navigation).

- Padrão de apps editoriais e leitores digitais
- Itens principais: Início, Arquivo, Sobre, Contato
- Não sobrepõe o conteúdo quando em scroll

### Navegação contextual

- **Breadcrumb** em páginas internas
- **Próximo / Anterior** ao final de cada projeto
- **Projetos relacionados** ao final de cada projeto

---

## Justificativa

### Por que lateral no desktop?

- Padrão editorial: revistas digitais, arquivos museológicos, publicações independentes usam navegação lateral
- Libera a área de conteúdo verticalmente, sem barra superior competindo com o conteúdo
- Permite menu mais rico sem sacrificar espaço

### Por que inferior no mobile?

- Alcance natural do polegar
- Não interrompe a leitura em scroll
- Padrão estabelecido em apps de leitura
- Melhor que menu "hambúrguer" que esconde a navegação

---

## Consequências

### Positivas
- Navegação sempre visível
- Experiência editorial consistente
- Acessibilidade melhorada (sem conteúdo oculto por padrão)

### Negativas
- Layout mais complexo no desktop (two-column layout)
- Requer atenção especial à transição desktop/mobile

---

## Referências

- `02-design-system.md` § 15
- `03-prd.md` § 22
- `05-software-architecture.md` § 20
