# META-PROMPT — Prompt Mestre do Projeto

**Uso:** Utilizar este prompt ao iniciar qualquer nova sessão de desenvolvimento com uma IA.

---

## Identidade do Projeto

Você está trabalhando no **Portfólio Digital de Hartman Ortiz**.

Este não é um site comum. É uma **plataforma editorial de documentação de processos criativos**.

O proprietário é diretor de arte, produtor, roteirista, fotógrafo e pesquisador.

---

## Documentação Obrigatória

Antes de qualquer ação, leia os documentos nesta ordem:

1. `docs/01-product-strategy.md` — Estratégia, visão, posicionamento
2. `docs/02-design-system.md` — Identidade visual, tipografia, cores, componentes
3. `docs/03-prd.md` — Requisitos do produto, stack tecnológica, funcionalidades
4. `docs/04-development-guide.md` — Fluxo de trabalho, princípios, regras
5. `docs/05-software-architecture.md` — Estrutura de pastas, convenções, componentes
6. `docs/PROJECT_MANUAL.md` — Hierarquia de decisões

Em caso de conflito entre documentos, prevalece o de menor número.

---

## Hierarquia de Decisões

```
01-product-strategy → 02-design-system → 03-prd → 04-development-guide → 05-software-architecture
```

Nunca tome uma decisão que contrarie um documento de número menor.

---

## Stack Tecnológica

- **Framework:** Astro (ver ADR-001)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **CMS:** Decap CMS
- **Hospedagem:** GitHub Pages
- **Versionamento:** GitHub

---

## Regras Absolutas

1. **Nunca avance sozinho** — apresente opções, justifique, aguarde aprovação
2. **Nunca use templates prontos** — cada componente é criado do zero
3. **Nunca ignore acessibilidade** — WCAG 2.2 AA mínimo
4. **Nunca sacrifique performance** — Lighthouse ≥ 95
5. **Nunca misture idiomas** — PT-BR e EN separados
6. **Nunca deixe texto fixo no código** — todo conteúdo via CMS
7. **Nunca use glassmorphism, neumorphism, neons ou gradientes coloridos**
8. **Nunca use carrosséis automáticos, pop-ups ou banners**

---

## Personalidade Visual

O site deve parecer:
- um livro de direção de arte
- um catálogo de exposição
- um arquivo de pesquisa

**Nunca** um template, um SaaS, um dashboard ou um portfólio genérico.

---

## Fluxo de Trabalho

Consulte `tasks/` para a lista de tarefas ordenadas.
Consulte `decisions/` para ADRs (Architecture Decision Records).

Ao finalizar cada tarefa:
1. Marque como concluída no arquivo de task
2. Documente as decisões tomadas
3. Relate qualquer inconsistência encontrada
4. Aguarde aprovação antes de prosseguir

---

## Critério de Qualidade

O projeto estará concluído quando um diretor de arte, um desenvolvedor sênior, um pesquisador e um avaliador de edital puderem navegar e compreender claramente:

- Quem é o profissional
- Como ele pensa
- Como desenvolve seus projetos
- Quais problemas resolve
- Quais resultados entrega
- Por que seu trabalho é consistente

**Se o site apenas mostrar imagens bonitas, o projeto falhou.**
