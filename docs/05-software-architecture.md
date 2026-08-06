# **DOCUMENTO 5 — ARQUITETURA DE SOFTWARE E CONTEÚDO**

**Projeto:** Portfólio Digital — Hartman Ortiz

**Versão:** 1.0

---

# **1\. Objetivo**

Este documento define toda a arquitetura do projeto.

Seu objetivo é garantir:

* organização;  
* escalabilidade;  
* manutenção;  
* reutilização;  
* baixo acoplamento;  
* alta coesão.

Nenhum desenvolvedor ou IA deverá criar novos arquivos ou componentes sem respeitar este documento.

---

# **2\. Filosofia da Arquitetura**

O projeto deverá seguir cinco princípios fundamentais:

## **Modularidade**

Cada parte deve ser independente.

Mudanças em uma área não podem quebrar outras.

---

## **Reutilização**

Todo componente criado deverá ser reutilizável.

Evitar componentes específicos quando um componente genérico resolver o problema.

---

## **Escalabilidade**

O projeto deverá suportar centenas de projetos publicados.

A arquitetura não poderá depender da quantidade atual de conteúdo.

---

## **Clareza**

Qualquer desenvolvedor deve compreender a estrutura em poucos minutos.

---

## **Separação de responsabilidades**

Conteúdo.

Interface.

Lógica.

Configuração.

Nunca misturados.

---

# **3\. Arquitetura Geral**

GitHub

↓

Astro

↓

Content Collections

↓

Layouts

↓

Componentes

↓

Páginas

↓

Build

↓

GitHub Pages  
---

# **4\. Estrutura de Pastas**

```text
portfolio/
├── public/
│   ├── admin/
│   │   ├── index.html
│   │   └── config.yml
│   ├── images/
│   ├── icons/
│   ├── fonts/
│   ├── favicons/
│   └── videos/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/
│   │   ├── editorial/
│   │   ├── navigation/
│   │   ├── gallery/
│   │   ├── typography/
│   │   ├── seo/
│   │   └── motion/
│   ├── layouts/
│   ├── pages/
│   ├── content/
│   │   ├── projects/
│   │   ├── photography/
│   │   ├── films/
│   │   ├── research/
│   │   ├── about/
│   │   └── curriculum/
│   ├── styles/
│   ├── tokens/
│   ├── lib/
│   ├── utils/
│   ├── config/
│   └── types/
```  
---

# **5\. Organização dos Componentes**

A organização dos componentes segue as práticas idiomáticas do Astro, evitando arquivos vazios desnecessários:

- **Componentes de UI / Atômicos (`ui/`, `typography/`):** Arquivo único auto-contido (`Component.astro`) encapsulando marcação, tipagem TypeScript e scoped CSS / classes utilitárias de tokens.
- **Componentes Compostos e Editoriais (`editorial/`, `gallery/`, `navigation/`):** Podem conter submódulo TypeScript auxiliar (`Component.ts`), estilos específicos e documentação `README.md` quando a complexidade funcional justificar.

Todo componente deve possuir tipagem TypeScript explícita em suas `Props`.

---

# **6\. Convenção de Nomes**

Componentes:

PascalCase

`ProjectGallery.astro`, `EditorialBlock.astro`

Arquivos auxiliares e utilitários:

kebab-case

`project-gallery.ts`, `format-date.ts`

Funções:

camelCase

`createEditorialBlock()`, `getRelatedProjects()`

Tipos e Interfaces:

PascalCase

`ProjectData`, `NavigationItem`  
---

# **7\. Sistema de Layouts**

O projeto utilizará layouts especializados e modulares:

LayoutBase (estrutura HTML global, SEO, fontes, metadados)

LayoutEditorial (páginas de conteúdo textual longo)

LayoutProject (estudos de caso de projetos com timeline e ficha técnica)

LayoutArchive (índice cronológico e filtrável do acervo)

LayoutPhotography (galerias fotográficas com visualização expandida)

LayoutFilms (grid audiovisual com players embutidos)

LayoutResearch (ensaios acadêmicos, notas e bibliografia)

LayoutAbout (apresentação institucional e biografia)

LayoutCurriculum (trajetória acadêmica, artística e profissional)

LayoutContact (canais de comunicação e agenciamento)

LayoutLanding (página inicial / Home editorial)

Cada layout será responsável apenas por estrutura e composição de casca.

Nunca por regras de negócio de conteúdo.

---

# **8\. Sistema de Componentes**

Os componentes serão classificados em níveis.

## **Nível 1**

UI

Button

Input

Badge

Divider

Icon

---

## **Nível 2**

Compostos

Gallery

Sidebar

Timeline

Quote

Hero

Breadcrumb

Footer

---

## **Nível 3**

Editorial

CaseStudy

ResearchBlock

Moodboard

Storyboard

Bibliography

Credits

TechnicalSheet

ProcessSection

---

# **9\. Organização do Conteúdo**

Todo conteúdo será Markdown.

Nunca HTML.

Cada projeto será independente.

---

Exemplo:

projects/

molas/

index.md

cover.webp

gallery/

01.webp

02.webp

03.webp

videos/

process.pdf

---

# **10\. Estrutura de um Projeto**

Campos tipados no Frontmatter (Zod):

* `title` (Título)
* `subtitle` (Subtítulo — opcional)
* `description` (Resumo)
* `slug` (Identificador de rota)
* `lang` ('pt' | 'en')
* `translationKey` (Chave de vinculação bilíngue)
* `categories` (Array de categorias: Direção de Arte, Cinema, Fotografia, Pesquisa, etc.)
* `date` (Data do projeto)
* `cover` (Imagem de capa)
* `tags` (Array de tags conceituais)
* `published` (Boolean)

Blocos modulares opcionais (conforme o acervo de cada obra):

* `context` (Contexto)
* `problem` (Problema)
* `research` (Pesquisa)
* `references` (Referências)
* `moodboard` (Moodboard)
* `process` (Processo)
* `result` (Resultado)
* `gallery` (Galeria de imagens com legendas)
* `videos` (Links incorporados YouTube/Vimeo)
* `technicalSheet` (Ficha Técnica)
* `credits` (Créditos da equipe)
* `bibliography` (Bibliografia)
* `seo` (Metadados customizados de SEO)

Nem todos os projetos precisam utilizar todos os blocos.

---

# **11\. Modelagem do CMS**

Coleções estruturadas no Decap CMS (`/admin/config.yml`):

* `projects` (Projetos e Estudos de Caso — PT e EN)
* `photography` (Ensaios Fotográficos — PT e EN)
* `films` (Obras Audiovisuais e Vídeos — PT e EN)
* `research` (Pesquisas, Artigos e Ensaios — PT e EN)
* `pages` (Páginas institucionais: Sobre, Currículo, Contato)
* `settings` (Configurações globais, Menu, Taxonomias de Categorias e SEO)

---

# **12\. Fluxo Editorial**

Novo Projeto

↓

Rascunho

↓

Revisão

↓

Preview

↓

Correções

↓

Publicação

↓

Indexação

---

# **13\. Sistema de Assets**

Imagens:

Formatos modernos: WebP e AVIF otimizados.

Vídeos:

Players externos embutidos: YouTube e Vimeo.

Vídeos pesados nunca serão versionados no repositório Git (apenas micro-animações/loops essenciais em `public/videos/`, caso indispensáveis).

---

# **14\. Versionamento**

Git Flow simplificado.

main

dev

feature/\*

Cada funcionalidade deverá possuir branch própria.

---

# **15\. Configuração**

Nenhum dado fixo.

Tudo deverá estar em:

config/

---

# **16\. Internacionalização**

pt/

en/

Nunca misturar idiomas.

---

# **17\. SEO**

Cada projeto possuirá:

title

description

slug

canonical

keywords

ogImage

twitterImage

---

# **18\. Busca**

Índice gerado automaticamente.

Pesquisa instantânea.

Sem servidor.

---

# **19\. Sistema de Filtros**

Categorias.

Ano.

Tipo.

Tags.

Idioma.

---

# **20\. Navegação**

Header.

Sidebar.

Footer.

Breadcrumb.

Próximo projeto.

Projeto anterior.

Projetos relacionados.

---

# **21\. Componentes Especiais**

Além dos componentes tradicionais, o projeto possuirá componentes exclusivos.

## **ArchiveIndex**

Gera automaticamente o índice do acervo.

---

## **ResearchNotes**

Notas laterais.

---

## **ImageSequence**

Sequência editorial.

---

## **ProcessDiagram**

Linha do tempo do projeto.

---

## **CreditsBlock**

Equipe.

---

## **BibliographyBlock**

Referências.

---

## **MetadataPanel**

Ano.

Categoria.

Local.

Cliente.

Edital.

Equipe.

---

# **22\. Sistema de Tipografia**

A tipografia será controlada por Design Tokens estruturados:

- Serifada editorial (Títulos, Citações, Introduções, Frases de Destaque).
- Grotesca contemporânea (Menus, Metadados, Legendas, Rótulos, Interface).

Nunca utilizar tamanhos ou famílias de fontes arbitrárias no código.

---

# **23\. Sistema de Cores**

Todas as cores deverão existir centralizadas em:

`src/tokens/colors.ts` (exportadas também para `tailwind.config.mjs` e CSS Custom Properties).

Paleta base: Preto quente, Papel claro, Cinza grafite, Marrom profundo.
Destaques: Vermelho queimado, Laranja queimado, Ocre.

Nunca utilizar valores hexadecimais soltos na marcação dos componentes.

---

# **24\. Espaçamento**

Todo espaçamento seguirá rigorosamente a escala de múltiplos de 8px:

`space-xs` (8px), `space-sm` (16px), `space-md` (24px), `space-lg` (32px), `space-xl` (48px), `space-2xl` (64px), `space-3xl` (96px), `space-4xl` (128px).

---

# **25\. Motion**

As animações deverão ficar isoladas.

Nunca misturadas ao componente.

---

# **26\. Performance**

Todos os componentes deverão informar:

Peso.

Dependências.

Lazy loading.

Renderização.

---

# **27\. Testes**

Cada componente deverá possuir checklist.

Desktop.

Tablet.

Mobile.

Dark Mode (caso exista).

Teclado.

Leitor de tela.

Performance.

---

# **28\. Documentação**

Todo componente importante possuirá README.

Exemplo:

Objetivo

Propriedades

Exemplos

Restrições

Uso recomendado

---

# **29\. Roadmap de Crescimento**

Versão 1

Portfólio Editorial & Arquivo Vivo de Processos.

Versão 2

Caderno de Ensaios e Pesquisa (Publicações, Artigos e Reflexões Metodológicas).

Versão 3

Área de Catálogos e Publicações Culturais.

Versão 4

Banco de Referências Visuais e Bibliográficas.

Versão 5

Acervo Arquivístico de Pesquisa Expandida.

Versão 6

Mapa Interativo da Trajetória e Cronologia Curatorial.

---

# **30\. Checklist de Engenharia**

Antes de qualquer Pull Request, verificar:

* Componentes reutilizáveis.  
* Código duplicado.  
* Imports não utilizados.  
* Performance.  
* Responsividade.  
* Acessibilidade.  
* SEO.  
* Tipagem.  
* Documentação.

Nenhum código poderá ser integrado à branch principal sem atender a todos os critérios.

