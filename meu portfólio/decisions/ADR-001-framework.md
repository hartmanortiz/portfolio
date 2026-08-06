# ADR-001 — Escolha do Framework

**Data:** 2026-08-06
**Status:** Aceito
**Decisores:** Hartman Ortiz

---

## Contexto

O portfólio é uma plataforma editorial com foco em documentação de processos criativos. Exige:

- Excelente performance (Lighthouse ≥ 95)
- SEO de primeira classe
- Suporte a Markdown/MDX para conteúdo
- Geração estática (sem banco de dados)
- Suporte a TypeScript
- Escalabilidade para centenas de projetos

---

## Alternativas avaliadas

| Framework | SSG | MDX | TS | i18n | CMS | Complexidade |
|-----------|-----|-----|----|------|-----|--------------|
| **Astro** | ✅  | ✅  | ✅ | ✅   | ✅  | Baixa        |
| Next.js   | ✅  | ✅  | ✅ | ✅   | ✅  | Alta         |
| Nuxt 3    | ✅  | ✅  | ✅ | ✅   | ✅  | Média        |
| Eleventy  | ✅  | ✅  | ⚠️ | ⚠️  | ⚠️  | Média        |
| Hugo      | ✅  | ❌  | ❌ | ✅   | ⚠️  | Baixa        |

---

## Decisão

**Astro** foi escolhido como framework principal.

### Justificativa

1. **Zero JS por padrão**: Astro não envia JavaScript ao cliente a menos que necessário. Isso garante performance máxima para um site majoritariamente editorial.
2. **Islands Architecture**: Permite adicionar interatividade apenas onde necessário (busca, filtros, galeria), sem penalizar o restante do site.
3. **Content Collections**: Sistema nativo para organizar Markdown com tipagem TypeScript, ideal para o modelo de conteúdo definido no PRD.
4. **Compatível com Decap CMS**: Integração direta com o CMS escolhido via arquivos Markdown.
5. **SEO nativo**: HTML semântico gerado por padrão, sem necessidade de configuração adicional.
6. **Simples de manter**: Menor complexidade que Next.js, com a mesma capacidade para este caso de uso.

---

## Consequências

### Positivas
- Build extremamente rápido
- HTML limpo e semântico
- JavaScript mínimo no cliente
- Escalabilidade garantida por arquitetura estática

### Negativas
- Menor ecossistema de componentes que React/Next.js
- Funcionalidades dinâmicas complexas exigem mais cuidado

---

## Alternativa de contingência

Caso Astro apresente limitações críticas no futuro: migrar para **Next.js** com App Router e geração estática (`output: export`).

---

## Referências

- `03-prd.md` § Stack Tecnológica
- `05-software-architecture.md` § Arquitetura Geral
