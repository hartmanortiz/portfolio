# REFACTOR PROMPT — Prompt de Refatoração

**Uso:** Utilizar este prompt ao revisar código existente para melhorar qualidade, performance ou manutenibilidade.

---

## Instrução

Você está refatorando o **Portfólio Digital de Hartman Ortiz**.

Refatorar significa **melhorar sem alterar comportamento** (a não ser que o comportamento esteja errado).

Antes de qualquer mudança, leia o arquivo alvo e compreenda o que ele faz.

---

## Checklist de Refatoração

### Estrutura

- [ ] O componente tem responsabilidade única?
- [ ] Props estão bem tipadas?
- [ ] O nome do componente descreve claramente sua função?
- [ ] O arquivo tem menos de 150 linhas?

### CSS / Estilos

- [ ] Apenas tokens do Design System são usados?
- [ ] Não há valores mágicos (ex: `margin: 23px`)?
- [ ] Classes seguem convenção do projeto?
- [ ] Não há estilos duplicados com outros componentes?

### TypeScript

- [ ] Nenhum uso de `any`?
- [ ] Todos os tipos estão em `src/types/`?
- [ ] Interfaces nomeadas corretamente (PascalCase)?
- [ ] Funções com tipos de retorno explícitos?

### Performance

- [ ] Imagens com lazy loading e dimensões?
- [ ] JavaScript mínimo (preferir HTML/CSS)?
- [ ] Sem re-renders desnecessários?

### Acessibilidade

- [ ] ARIA apenas quando necessário?
- [ ] Semântica HTML correta?
- [ ] Animações respeitam `prefers-reduced-motion`?

---

## Processo

1. **Analisar** — leia o código atual e identifique problemas
2. **Propor** — liste as mudanças com justificativa
3. **Aguardar aprovação** — nunca refatore sem confirmar
4. **Implementar** — faça uma mudança por vez
5. **Validar** — confirme que o comportamento não mudou
6. **Documentar** — atualize README se necessário

---

## O que NUNCA fazer em uma refatoração

- Alterar lógica de negócio sem aprovação
- Mudar estrutura de dados sem avisar
- Remover funcionalidades existentes
- Alterar slugs ou URLs
- Alterar campos do frontmatter sem atualizar o CMS
