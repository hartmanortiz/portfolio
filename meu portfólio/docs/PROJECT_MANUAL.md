# PROJECT MANUAL — Hartman Ortiz Portfolio

**Versão:** 1.0
**Última atualização:** 2026-08-06

---

## Hierarquia de Decisões

Toda decisão deve seguir esta ordem de precedência:

| Prioridade | Documento |
|-----------|-----------|
| 1 | `docs/01-product-strategy.md` — Visão, missão, posicionamento |
| 2 | `docs/02-design-system.md` — Identidade visual, princípios |
| 3 | `docs/03-prd.md` — Requisitos, funcionalidades, stack |
| 4 | `docs/04-development-guide.md` — Fluxo de trabalho, princípios de código |
| 5 | `docs/05-software-architecture.md` — Estrutura, componentes, convenções |

> Em caso de conflito entre documentos, prevalece o de menor número.
> Nunca tome decisões que contradigam qualquer documento.
> Sempre consulte a documentação antes de responder.

---

## Estrutura do Repositório

```
meu portfólio/
│
├── docs/                    ← Documentação do produto
│   ├── 01-product-strategy.md
│   ├── 02-design-system.md
│   ├── 03-prd.md
│   ├── 04-development-guide.md
│   ├── 05-software-architecture.md
│   └── PROJECT_MANUAL.md    ← Este arquivo
│
├── tasks/                   ← Tarefas de desenvolvimento (ordenadas)
│   ├── 001-setup.md
│   ├── 002-design-tokens.md
│   ├── 003-layout.md
│   ├── 004-components.md
│   ├── 005-home.md
│   ├── 006-project-page.md
│   ├── 007-cms.md
│   ├── 008-i18n.md
│   ├── 009-seo.md
│   └── 010-testing.md
│
├── decisions/               ← Architecture Decision Records
│   ├── ADR-001-framework.md
│   ├── ADR-002-cms.md
│   └── ADR-003-navigation.md
│
└── prompts/                 ← Prompts para sessões de IA
    ├── meta-prompt.md       ← Iniciar qualquer sessão com este
    ├── audit-prompt.md      ← Auditoria de qualidade
    ├── development-prompt.md ← Desenvolvimento de features
    └── refactor-prompt.md   ← Refatoração de código
```

---

## Como usar este repositório com IA

1. **Sempre** comece uma sessão com `prompts/meta-prompt.md`
2. Indique qual `tasks/` está sendo executada
3. Aguarde o relatório da etapa antes de avançar
4. Use `prompts/audit-prompt.md` ao fechar marcos importantes

---

## Fluxo de Trabalho

```
Leitura da documentação
→ Proposta de implementação
→ Aprovação
→ Desenvolvimento
→ Validação
→ Aprovação
→ Próxima tarefa
```

**Nunca pule etapas. Nunca avance sem aprovação.**

---

## Regras Absolutas

1. Sem templates prontos
2. Sem glassmorphism, neons ou gradientes coloridos
3. Sem carrosséis automáticos, pop-ups ou banners
4. Sem texto fixo no código
5. Sem mistura de idiomas
6. Sem JavaScript desnecessário
7. Sempre WCAG 2.2 AA
8. Sempre Lighthouse ≥ 95
9. Sempre mobile first
10. Sempre aguardar aprovação antes de avançar