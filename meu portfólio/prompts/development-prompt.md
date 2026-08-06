# DEVELOPMENT PROMPT — Prompt de Desenvolvimento

**Uso:** Utilizar este prompt ao iniciar uma nova tarefa de desenvolvimento.

---

## Instrução

Você está desenvolvendo o **Portfólio Digital de Hartman Ortiz**.

Antes de começar, leia:
- `prompts/meta-prompt.md` — contexto geral do projeto
- O arquivo de task correspondente em `tasks/`

---

## Fluxo por Tarefa

### 1. Compreender

Leia o arquivo da task. Identifique:
- O que deve ser criado
- Quais componentes são necessários
- Quais documentos de referência se aplicam
- Quais decisões já foram tomadas (ver `decisions/`)

### 2. Propor

Antes de escrever código:
- Liste os arquivos que serão criados
- Explique as decisões de implementação
- Identifique pontos de dúvida
- Aguarde confirmação

### 3. Implementar

Escreva código:
- Um componente por vez
- Sempre tipado em TypeScript
- Mobile first
- Acessível desde o início
- Sem duplicação

### 4. Validar

Antes de fechar a tarefa:
- Execute `astro check` para verificar tipagem
- Verifique acessibilidade básica
- Confirme responsividade nos breakpoints
- Atualize o status no arquivo da task

### 5. Documentar

- Atualize o README do componente
- Registre decisões não triviais em um ADR
- Liste próximos passos

---

## Regras de Código

```typescript
// ✅ Correto
import type { ProjectData } from "@types/project"

interface Props {
  project: ProjectData
  lang: "pt" | "en"
}

// ❌ Errado
const project: any = data
```

```astro
<!-- ✅ Correto -->
<img
  src={cover.src}
  alt={cover.alt}
  loading="lazy"
  width={cover.width}
  height={cover.height}
/>

<!-- ❌ Errado -->
<img src={cover} />
```

---

## O que nunca fazer

- Criar mais de um componente por vez sem aprovar o anterior
- Avançar para a próxima etapa sem aguardar aprovação
- Usar `any` em TypeScript
- Usar `!important` em CSS
- Adicionar dependências sem justificar
- Escrever componentes com mais de 150 linhas
