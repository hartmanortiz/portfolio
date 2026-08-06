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

portfolio/

│

├── public/

│ ├── images/

│ ├── icons/

│ ├── fonts/

│ ├── favicons/

│ └── videos/

│

├── src/

│

├── assets/

│

├── components/

│ ├── ui/

│ ├── editorial/

│ ├── navigation/

│ ├── gallery/

│ ├── typography/

│ ├── seo/

│ ├── forms/

│ ├── motion/

│ └── cms/

│

├── layouts/

│

├── pages/

│

├── content/

│ ├── projects/

│ ├── photography/

│ ├── films/

│ ├── research/

│ ├── about/

│ └── curriculum/

│

├── styles/

│

├── lib/

│

├── utils/

│

├── config/

│

└── types/  
---

# **5\. Organização dos Componentes**

Cada componente deverá possuir:

Component/

Component.astro

Component.css

Component.ts

index.ts

README.md

Todo componente deve ser documentado.

---

# **6\. Convenção de Nomes**

Componentes:

PascalCase

ProjectGallery

Arquivos:

kebab-case

project-gallery.ts

Funções:

camelCase

createProjectCard()

Tipos:

PascalCase

ProjectData  
---

# **7\. Sistema de Layouts**

O projeto utilizará layouts independentes.

LayoutBase

LayoutEditorial

LayoutProject

LayoutPhotography

LayoutResearch

LayoutArchive

LayoutLanding

Cada layout será responsável apenas por estrutura.

Nunca por conteúdo.

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

Título

Resumo

Descrição

Contexto

Problema

Pesquisa

Referências

Moodboard

Processo

Resultado

Galeria

Vídeos

Ficha Técnica

Créditos

Bibliografia

Tags

SEO

Nem todos os projetos precisam utilizar todos os blocos.

---

# **11\. Modelagem do CMS**

Coleções:

Projetos

Fotografia

Pesquisa

Páginas

Menu

Categorias

Tags

Autores

Idiomas

SEO

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

WebP

AVIF

Vídeos:

YouTube

Vimeo

Nunca armazenar vídeos grandes no repositório.

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

A tipografia será controlada por Design Tokens.

Nunca utilizar tamanhos fixos espalhados pelo código.

---

# **23\. Sistema de Cores**

Todas as cores deverão existir apenas em:

tokens/colors.ts

Nunca utilizar hexadecimal diretamente.

---

# **24\. Espaçamento**

Todo espaçamento será tokenizado.

Exemplo:

space-xs

space-sm

space-md

space-lg

space-xl

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

Portfólio.

Versão 2

Blog.

Versão 3

Área de publicações.

Versão 4

Banco de referências.

Versão 5

Arquivo de pesquisas.

Versão 6

Mapa interativo da trajetória.

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

