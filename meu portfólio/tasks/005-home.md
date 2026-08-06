# TASK 005 — HOME

**Status:** `[ ] Pendente`
**Prioridade:** Alta
**Etapa do Development Guide:** Etapa 5
**Dependência:** `004-components.md` concluída

---

## Objetivo

Criar a página inicial (Home) do portfólio. A Home deve funcionar como a porta de entrada editorial para o acervo.

---

## Estrutura da Página

Conforme PRD § 11, em ordem:

1. **Hero editorial** — projeto em destaque, grande, silencioso
2. **Sequência de projetos recentes** — editorial, não em grade de cards
3. **Breve apresentação** — quem é, o que faz, como pensa
4. **Projetos em destaque** — seleção curada
5. **Categorias** — navegação temática
6. **Linha do tempo** — trajetória cronológica
7. **Fotografia em destaque** — imagem de grande formato
8. **Contato** — discreto, sem formulário pesado
9. **Rodapé**

---

## Checklist

- [ ] Criar `src/pages/index.astro` (PT-BR)
- [ ] Criar `src/pages/en/index.astro` (EN)
- [ ] Hero com projeto em destaque (vindo do CMS)
- [ ] Lista de projetos recentes
- [ ] Bloco de apresentação breve
- [ ] Bloco de categorias
- [ ] Componente Timeline
- [ ] Fotografia em destaque
- [ ] Bloco de contato
- [ ] SEO completo: title, description, OG, Twitter Card, Schema
- [ ] Responsividade validada em todos os breakpoints
- [ ] Performance: sem JavaScript desnecessário

---

## Direção Visual

- Sensação de folhear um livro de direção de arte
- Ritmo lento, blocos bem definidos
- Nunca acelerar a navegação
- Nunca excesso de informações simultâneas

---

## Referências

- `01-product-strategy.md` § 13
- `02-design-system.md` § 5, § 15
- `03-prd.md` § 11

---

## Próxima tarefa

→ `006-project-page.md`
