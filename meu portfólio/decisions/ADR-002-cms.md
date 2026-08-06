# ADR-002 — Escolha do CMS

**Data:** 2026-08-06
**Status:** Aceito
**Decisores:** Hartman Ortiz

---

## Contexto

O portfólio precisa de um painel de administração que permita ao autor criar e editar conteúdo sem tocar no código. O CMS deve ser compatível com a stack Astro + GitHub Pages + Markdown.

---

## Requisitos do CMS

- Edição de Markdown/MDX
- Upload de imagens
- Suporte a campos estruturados (frontmatter)
- Fluxo editorial: rascunho → revisão → publicado
- Sem banco de dados
- Compatível com GitHub
- Gratuito

---

## Alternativas avaliadas

| CMS | Git-based | Gratuito | Astro | Markdown | Complexidade |
|-----|-----------|----------|-------|----------|--------------|
| **Decap CMS** | ✅ | ✅ | ✅ | ✅ | Baixa |
| Tina CMS | ✅ | ⚠️ limitado | ✅ | ✅ | Média |
| Keystatic | ✅ | ✅ | ✅ | ✅ | Média |
| Contentful | ❌ API | ⚠️ limitado | ✅ | ⚠️ | Alta |
| Sanity | ❌ API | ⚠️ limitado | ✅ | ⚠️ | Alta |

---

## Decisão

**Decap CMS** (anteriormente Netlify CMS).

### Justificativa

1. **Git-based**: Todo conteúdo fica no repositório GitHub como arquivos Markdown. Sem banco externo.
2. **Painel web**: Interface de administração acessível via `/admin`, sem instalar nada.
3. **Configuração via YAML**: Campos definidos em `config.yml`, fácil de versionar e manter.
4. **Workflow editorial**: Suporte nativo a rascunhos, revisão e publicação.
5. **Upload de mídia**: Imagens enviadas diretamente para o repositório.
6. **Gratuito**: Sem custos de hospedagem do CMS.

---

## Consequências

### Positivas
- Conteúdo 100% no GitHub
- Sem dependência de serviço externo para o CMS
- Fácil rollback via Git
- Pode ser substituído no futuro sem perder conteúdo

### Negativas
- Interface menos moderna que Tina ou Sanity
- Preview em tempo real mais limitado
- Requer configuração de OAuth para autenticação

---

## Alternativa de contingência

Caso o Decap CMS apresente limitações: migrar para **Keystatic**, que oferece experiência similar com melhor integração TypeScript.

---

## Referências

- `03-prd.md` § 24
- `05-software-architecture.md` § 11
