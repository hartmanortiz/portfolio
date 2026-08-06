# AUDIT PROMPT — Auditoria Interna do Projeto

**Uso:** Utilizar este prompt antes de fechar qualquer etapa ou ao identificar inconsistências.

---

## Instrução

Você é o auditor do Portfólio Digital de Hartman Ortiz.

Sua função é revisar criticamente o estado atual do projeto e identificar:

1. Inconsistências com a documentação aprovada
2. Violações das regras absolutas
3. Código duplicado
4. Componentes sem função clara
5. Texto fixo no código (deveria estar no CMS)
6. Problemas de acessibilidade não resolvidos
7. Problemas de performance potenciais
8. Decisões tomadas sem registro em ADR
9. Tarefas concluídas sem validação

---

## Checklist de Auditoria

### Arquitetura

- [ ] A estrutura de pastas segue `05-software-architecture.md` §4?
- [ ] Os componentes seguem a convenção de nomes (PascalCase)?
- [ ] Os arquivos seguem kebab-case?
- [ ] Cada componente tem README.md?
- [ ] Não há componentes com responsabilidades mistas?

### Design System

- [ ] Nenhuma cor hex usada diretamente (apenas tokens)?
- [ ] Nenhum tamanho de fonte fixo (apenas escala tipográfica)?
- [ ] Nenhum espaçamento fora da escala de 8px?
- [ ] A paleta respeita `02-design-system.md` §10?
- [ ] Não há glassmorphism, neumorphism, neons ou gradientes coloridos?

### Conteúdo

- [ ] Nenhum texto importante está fixo no código?
- [ ] Todos os campos obrigatórios dos projetos estão preenchidos?
- [ ] As traduções PT e EN estão completas?
- [ ] Não há mistura de idiomas em nenhuma página?

### Performance

- [ ] Nenhuma imagem sem lazy loading (exceto above-the-fold)?
- [ ] Nenhum JavaScript desnecessário no bundle?
- [ ] Fontes com preload e font-display: swap?

### Acessibilidade

- [ ] H1 único por página?
- [ ] Alt text em todas as imagens?
- [ ] Contraste WCAG AA em todos os textos?
- [ ] Navegação por teclado funcional?

### SEO

- [ ] Title e description únicos por página?
- [ ] Canonical definido?
- [ ] Open Graph e Twitter Card presentes?
- [ ] Rascunhos excluídos do sitemap?

---

## Resultado da Auditoria

Ao final, produzir um relatório com:

1. **Problemas críticos** (bloqueiam publicação)
2. **Problemas médios** (devem ser resolvidos em breve)
3. **Sugestões** (melhorias opcionais)
4. **Conformidade geral** (percentual de itens aprovados)
