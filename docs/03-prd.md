# **DOCUMENTO 3 — PRODUCT REQUIREMENTS DOCUMENT (PRD)**

**Projeto:** Portfólio Digital — Hartman Ortiz

**Versão:** 1.0

**Status:** Especificação Inicial

---

# **1\. Resumo Executivo**

## **Nome do Produto**

Portfólio Digital Hartman Ortiz

## **Tipo**

Aplicação Web Estática (SSG — Static Site Generation).

## **Plataforma**

Website responsivo com publicação no GitHub Pages.

## **Idioma**

Português (PT-BR).

## **Objetivo**

Criar uma plataforma editorial capaz de documentar processos criativos, apresentar projetos e fortalecer a credibilidade profissional do autor.

---

# **2\. Objetivos do Produto**

O sistema deve permitir que o autor:

* publique novos projetos e estudos de caso adicionando arquivos Markdown/MDX e imagens diretamente no repositório Git;  
* apresente estudos de caso com profundidade e rigor metodológico;  
* organize trabalhos por categorias e temas;  
* apresente fotografias em alta qualidade com metadados de luz e composição;  
* incorpore vídeos com carregamento sob demanda de alta performance;  
* publique textos longos e ensaios de pesquisa;  
* seja indexado com excelência por mecanismos de busca (SEO).

---

# **3\. Objetivos Técnicos**

O projeto deverá:

* ser extremamente rápido;  
* funcionar offline parcialmente através do cache do navegador;  
* ser altamente acessível;  
* possuir excelente SEO;  
* ser facilmente expansível;  
* possuir manutenção simples.

---

# **4\. Stack Tecnológica**

## **Framework**

Astro.

---

## **Linguagem**

TypeScript.

---

## **Estilização**

Tailwind CSS integrado a Design Tokens em TypeScript e CSS Custom Properties (variáveis nativas).

Componentes reutilizáveis em Astro com CSS escopado quando necessário.

Sem uso de estilos genéricos ou bibliotecas de componentes pré-moldados.

---

## **Hospedagem & Deploy**

GitHub Pages com pipeline automatizado via GitHub Actions.

---

## **Versionamento**

GitHub.

---

# **5\. Arquitetura**

Usuário

↓

Astro (Content Collections tipadas com Zod)

↓

Layouts & Componentes Modulares (Tailwind CSS + Tokens)

↓

Markdown / MDX (`src/content/`) & Imagens Locais (`src/assets/`)

↓

GitHub (Repositório)

↓

GitHub Actions (Build, Otimização de Assets e Testes)

↓

GitHub Pages (Hospedagem Estática Global)  
---

# **6\. Estrutura de Pastas**

```text
portfolio/
├── public/
│   ├── fonts/
│   ├── favicons/
│   ├── icons/
│   └── robots.txt
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── photography/
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

Toda a organização garante a separação clara entre conteúdo (`src/content/`), imagens gerenciadas pelo Astro (`src/assets/`), componentes reutilizáveis (`src/components/`), layouts estruturais (`src/layouts/`) e tokens de design (`src/tokens/`).

---

# **7\. Modelo de Conteúdo**

Cada projeto deverá possuir campos estruturados no frontmatter, validados por schemas tipados com Zod no Astro.

Campos obrigatórios:

* título (`title`);  
* resumo (`description` / `summary`);  
* slug (`slug`);  
* categorias (`categories` — array de categorias: Direção de Arte, Cinema, Fotografia, Pesquisa, etc.);  
* data (`date`);  
* capa (`cover` — imagem local em `src/assets/`);  
* tags (`tags` — array de termos conceituais);  
* status de publicação (`published` / `draft`).

Campos opcionais (conteúdo modular — cada projeto inclui apenas o material existente):

* subtítulo (`subtitle`);  
* contexto (`context`);  
* problema (`problem`);  
* pesquisa (`research`);  
* referências (`references`);  
* imagens / galeria (`gallery` — lista de imagens com alt e legenda);  
* vídeos (`videos` — lista de URLs externas YouTube/Vimeo para reprodução via LiteEmbed);  
* moodboard (`moodboard`);  
* storyboard (`storyboard`);  
* protótipos (`prototypes`);  
* bastidores (`backstage`);  
* processo (`process`);  
* ficha técnica (`technicalSheet`);  
* créditos (`credits`);  
* referências bibliográficas (`bibliography`);  
* links externos (`links`);  
* anexos (`attachments`);  
* premiações (`awards`);  
* editais relacionados (`grants`).

---

# **8\. Sistema de Categorias**

Um projeto poderá pertencer simultaneamente a diversas categorias.

Categorias iniciais:

Direção de Arte

Cinema

Fotografia

Pesquisa

Instalações

Produção

Documentário

Videoclipe

Espetáculo

Infância

Universidade

Editais

Essas categorias poderão crescer sem necessidade de alterar o código.

---

# **9\. Sistema de Tags**

As tags serão livres.

Exemplo:

cor

luz

figurino

papel

cenografia

performance

materialidade

memória

infância

arquivo

processo

etc.

---

# **10\. Tipos de Conteúdo (Content Collections)**

As coleções gerenciadas em `src/content/` são:

* `projects` (Estudos de caso completos de projetos artísticos e audiovisuais)
* `photography` (Ensaios fotográficos e documentação visual)
* `films` (Obras audiovisuais com fichas técnicas e players LiteEmbed)
* `research` (Textos de pesquisa acadêmica, ensaios teóricos e cadernos de estudo)
* `about` (Biografia, manifesto e apresentação do autor)
* `curriculum` (Trajetória cronológica, formação, prêmios e histórico de editais)

---

# **11\. Estrutura da Home**

A Home deverá conter, em ordem rigorosa:

1. **Hero Editorial de Abertura:** Destaque para o projeto consagrado **"Instalações Dançantes"**, com imagem de grande impacto, síntese conceitual e chamada para o estudo de caso completo.
2. **Sequência de Projetos Recentes:** Linha editorial de projetos destacados.
3. **Breve Apresentação / Manifesto:** Declaração de posicionamento (*"Pesquisa como método de criação"*).
4. **Acervo em Destaque:** Seleção curatorial por categorias.
5. **Fotografia em Destaque:** Ensaio visual de grande respiro.
6. **Linha do Tempo Síntese:** Marcos da trajetória profissional.
7. **Contato & Rodapé:** Informações de comunicação e créditos editoriais.

---

# **12\. Página de Projeto**

Cada projeto será um estudo de caso independente.

A ordem dos blocos deverá ser configurável.

Blocos disponíveis:

Contexto.

Problema.

Objetivos.

Pesquisa.

Moodboard.

Storyboard.

Referências.

Processo.

Galeria.

Vídeo.

Resultado.

Bastidores.

Ficha Técnica.

Créditos.

Bibliografia.

Links.

Notas.

Cada projeto poderá utilizar apenas os blocos necessários.

---

# **13\. Sistema Modular**

Todo o site deverá ser composto por componentes reutilizáveis e editoriais.

Exemplos:

* `EditorialBlock / ProjectEntry` (substitui o conceito de Card tradicional, mantendo estética editorial aberta sem bordas ou sombras pesadas)
* `LiteEmbed` (reprodutor audiovisual leve para YouTube/Vimeo sob demanda)
* `EditalToggle` (botão interativo que alterna dinamicamente a página do projeto para a visualização sintetizada para avaliadores)
* `MenuDrawer` (gaveta / painel textual em tela cheia para navegação mobile)
* `Sidebar` (menu lateral fixo no desktop)
* `Gallery` & `ImageGrid` (galerias com proporção preservada)
* `Quote` (citações destacadas)
* `Timeline / ProcessDiagram` (linha evolutiva metodológica)
* `Bibliography` (referências bibliográficas)
* `SidebarNote / ResearchNotes` (notas marginais de processo)
* `Credits` & `TechnicalSheet` (equipe e dados de produção)
* `Hero` (abertura editorial)
* `Tag` & `Filter` (taxonomias e filtros cumulativos)
* `ProjectNavigation` / `MetadataPanel` (navegação entre projetos e metadados)

Esses componentes deverão aceitar parâmetros configuráveis para evitar duplicação de código.

---

# **14\. Busca**

A busca estática indexada deverá localizar:

Título.

Resumo.

Conteúdo textual.

Tags.

Categorias.

Ano.

Tipo de projeto.

Conceitos de pesquisa e metodologia.

Resultados instantâneos gerados no build (Pagefind), sem necessidade de servidor.

---

# **15\. Sistema de Filtros**

Filtros cumulativos.

Exemplo:

Direção de Arte

* 

Cinema

* 

2025

* 

Pesquisa

---

# **16\. Idioma e Roteamento**

O produto adota o idioma **Português do Brasil (PT-BR)** de forma integral e exclusiva, eliminando complexidades de sincronização bilíngue.

As rotas são diretas, limpas e semânticas:

* `/` (Home com destaque em *Instalações Dançantes*)
* `/sobre` (Apresentação institucional e manifesto)
* `/arquivo` (Acervo completo e filtros do arquivo vivo)
* `/direcao-de-arte` (Página temática de direção de arte e cenografia)
* `/filmes` (Página temática de cinema e obras audiovisuais)
* `/fotografia` (Página temática de ensaios fotográficos)
* `/pesquisa` (Página temática de investigações e artigos)
* `/curriculo` (Trajetória profissional, acadêmica e editais)
* `/contato` (Canais de comunicação)
* `/projetos/[slug]` (Página individual do estudo de caso)

---

# **17\. SEO**

Cada página deverá possuir:

Title.

Description.

Canonical.

Open Graph.

Twitter Card.

Schema.org.

Sitemap.

Robots.

RSS.

Meta tags automáticas.

URLs amigáveis.

---

# **18\. Performance**

Meta Lighthouse:

Performance ≥ 95

Accessibility ≥ 100

Best Practices ≥ 95

SEO ≥ 100

Práticas recomendadas:

Lazy loading.

Pré-carregamento seletivo de fontes.

Compressão de imagens.

Uso de formatos modernos (AVIF/WebP quando possível).

JavaScript mínimo.

Carregamento progressivo.

---

# **19\. Acessibilidade**

Compatibilidade com WCAG 2.2 AA.

Navegação por teclado.

Contraste adequado.

Texto alternativo obrigatório.

Foco visível.

Preferência por redução de movimento.

Hierarquia semântica correta.

---

# **20\. Segurança e Infraestrutura**

* Sem banco de dados ou autenticação de servidores (arquitetura 100% estática via Jamstack).
* Hospedagem segura e imutável no GitHub Pages via HTTPS nativo.
* Deploy automatizado via GitHub Actions com compilação e verificação de integridade no build.
* Dependências travadas e atualizadas via gerenciador de pacotes.
* Validação estrita de schema de conteúdo no processo de build via Zod.

---

# **21\. Analytics**

Integração opcional com:

Google Analytics 4.

Google Search Console.

Microsoft Clarity.

Plausible Analytics (alternativa focada em privacidade).

As integrações devem poder ser ativadas ou removidas sem alterar a estrutura do projeto.

---

# **22\. Responsividade**

O projeto deverá seguir abordagem mobile first.

Breakpoints sugeridos:

Mobile.

Tablet.

Notebook.

Desktop.

Ultra-wide.

Todos os componentes deverão ser testados individualmente em cada faixa de largura.

---

# **23\. Animações**

Animações deverão respeitar:

60 FPS sempre que possível.

Sem bloquear interação.

Sem interferir na leitura.

Desativação automática para usuários que preferem menos movimento (`prefers-reduced-motion`).

---

# **24\. Gestão de Conteúdo e Publicação**

A gestão de conteúdo é realizada de forma direta e controlada via repositório Git:

1. O autor adiciona ou edita arquivos Markdown/MDX na pasta `src/content/`.
2. As imagens correspondentes são adicionadas em `src/assets/`.
3. Ao realizar o commit/push para o repositório no GitHub, a GitHub Action compila o site, otimiza os assets e publica a versão estável no GitHub Pages.

---

# **25\. Fluxo de Atualização**

Edição Local / Rascunho → Commit / Push → Build & Validação Zod → Publicação no GitHub Pages.

Em caso de erro de sintaxe ou campo obrigatório ausente, a compilação é interrompida pelo Astro/Zod, prevenindo a publicação de páginas inconsistentes.

---

# **26\. Deploy**

Cada alteração aprovada no repositório deverá gerar automaticamente uma nova versão do site.

Em caso de erro de compilação, a publicação deve ser interrompida, preservando a versão estável anterior.

---

# **27\. Escalabilidade**

O sistema deverá suportar:

Mais de 500 projetos.

Milhares de imagens otimizadas em WebP/AVIF.

Centenas de vídeos incorporados via LiteEmbed.

Novas categorias e temas.

Novos componentes editoriais.

Sem necessidade de reestruturação.

---

# **28\. Testes**

Antes de cada publicação, deverão existir verificações automáticas para:

Links quebrados.

Imagens ausentes.

Metadados obrigatórios no frontmatter via Zod.

Erros de compilação do Astro.

---

# **29\. Manutenção**

O código deverá seguir princípios de alta legibilidade.

Arquivos pequenos.

Componentes independentes.

Nomenclatura consistente.

Documentação interna.

Evitar lógica duplicada.

---

# **30\. Critérios de Aceitação**

O projeto será considerado pronto quando:

* novos projetos puderem ser adicionados via arquivos Markdown com validação estática de schema;  
* a interface funcionar integralmente em dispositivos móveis (com gaveta textual em tela cheia) e desktops (com menu lateral fixo);  
* as páginas temáticas independentes (`/direcao-de-arte`, `/filmes`, `/fotografia`, `/pesquisa`) e o `/arquivo` estiverem plenamente funcionais;  
* o botão de **Modo Edital** alternar perfeitamente para a versão sintetizada;  
* os vídeos incorporados utilizarem `LiteEmbed` sem comprometer o carregamento inicial;  
* os filtros e a busca retornarem resultados consistentes;  
* o desempenho atingir Lighthouse ≥ 95 em todas as métricas;  
* a experiência refletir a identidade editorial definida nos Documentos 1 e 2.

---

# **31\. Melhorias Incorporadas à Especificação**

Requisitos refinados para o contexto de arquivo vivo:

**Alternador de Modo Edital:** botão interativo no topo do estudo de caso que reorganiza o conteúdo em formato conciso voltado a avaliadores de editais e comissões culturais (foco em objetivos, processo, resultados, ficha técnica e créditos), acompanhado de folha de estilos `@media print` para exportação impecável em PDF.

**LiteEmbed para Vídeos:** reprodutor de mídia sob demanda para YouTube e Vimeo que renderiza apenas a imagem de capa e dispara o player mediante interação, eliminando o carregamento de scripts pesados de terceiros no carregamento da página.

**Gaveta Editorial Mobile (MenuDrawer):** navegação mobile em painel textual de tela cheia que preserva a experiência de leitura de um índice impresso.

**Sistema de relações entre projetos:** vinculação de projetos relacionados ("Veja também") por intersecção temática, técnica ou período.

**Índice automático:** sumário de âncoras gerado dinamicamente para estudos de caso longos.

**Busca estática enriquecida por conceitos:** localização rápida de projetos por conceitos metodológicos ("pesquisa", "infância", "cenografia", "materialidade") via Pagefind sem necessidade de servidor.

