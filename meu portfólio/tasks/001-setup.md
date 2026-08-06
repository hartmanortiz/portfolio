# TASK 001 — SETUP DO PROJETO

**Status:** `[ ] Pendente`
**Prioridade:** Alta
**Etapa do Development Guide:** Etapa 2 — Arquitetura

---

## Objetivo

Inicializar o projeto Astro com TypeScript e Tailwind CSS, configurar o repositório Git e preparar o ambiente de desenvolvimento local.

---

## Checklist

- [ ] Inicializar projeto Astro com `npx create-astro@latest`
- [ ] Selecionar template mínimo (sem exemplos)
- [ ] Configurar TypeScript estrito (`strict: true`)
- [ ] Instalar e configurar Tailwind CSS
- [ ] Configurar aliases de importação (`@components`, `@layouts`, `@utils`, `@content`)
- [ ] Criar estrutura de pastas conforme `05-software-architecture.md`
- [ ] Inicializar repositório Git
- [ ] Criar branches: `main`, `dev`
- [ ] Configurar `.gitignore`
- [ ] Configurar `.editorconfig`
- [ ] Configurar Prettier e ESLint
- [ ] Criar `README.md` inicial

---

## Estrutura de pastas esperada ao final

```
src/
  assets/
  components/
    ui/
    editorial/
    navigation/
    gallery/
    typography/
    seo/
    forms/
    motion/
    cms/
  layouts/
  pages/
  content/
    projects/
    photography/
    films/
    research/
    about/
    curriculum/
  styles/
  lib/
  utils/
  config/
  types/
public/
  images/
  icons/
  fonts/
  favicons/
  videos/
```

---

## Decisões a tomar antes de iniciar

- Confirmar versão do Astro (recomendado: mais recente estável)
- Confirmar versão do Tailwind CSS (recomendado: v3 ou v4)
- Confirmar se será usado `pnpm`, `npm` ou `yarn`

---

## Referências

- `03-prd.md` — Stack Tecnológica
- `05-software-architecture.md` — Estrutura de Pastas
- `04-development-guide.md` — Etapa 2

---

## Próxima tarefa

→ `002-design-tokens.md`
