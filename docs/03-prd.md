# **DOCUMENTO 3 — PRODUCT REQUIREMENTS DOCUMENT (PRD)**

**Projeto:** Portfólio Digital — Hartman Ortiz

**Versão:** 1.0

**Status:** Especificação Inicial

---

# **1\. Resumo Executivo**

## **Nome do Produto**

Portfólio Digital Hartman Ortiz

## **Tipo**

Aplicação Web Estática com CMS Headless.

## **Plataforma**

Website responsivo.

## **Idiomas**

Português (PT-BR)

Inglês (EN)

## **Objetivo**

Criar uma plataforma editorial capaz de documentar processos criativos, apresentar projetos e fortalecer a credibilidade profissional do autor.

---

# **2\. Objetivos do Produto**

O sistema deve permitir que o autor:

* publique novos projetos;  
* atualize conteúdos sem editar código;  
* apresente estudos de caso;  
* organize trabalhos por categorias;  
* apresente fotografias;  
* incorpore vídeos;  
* publique textos longos;  
* seja encontrado por mecanismos de busca.

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

## **CMS**

Decap CMS.

---

## **Banco de Dados**

Não utilizar banco tradicional.

Todo conteúdo será armazenado em arquivos Markdown (.md ou .mdx) versionados no GitHub.

---

## **Hospedagem**

GitHub Pages.

---

## **Versionamento**

GitHub.

---

# **5\. Arquitetura**

Usuário

↓

Astro (Content Collections tipadas com Zod)

↓

Layouts & Componentes Modulares

↓

Markdown / MDX (`src/content/`)

↓

Decap CMS (`public/admin/`)

↓

GitHub (Repositório)

↓

GitHub Actions (Build & Testes)

↓

GitHub Pages (Hospedagem Estática)  
---

# **6\. Estrutura de Pastas**

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

Toda a organização deve favorecer a escalabilidade e a separação clara entre conteúdo (`src/content/`), interface (`src/components/`), layout (`src/layouts/`) e configuração (`src/config/` e `src/tokens/`).

---

# **7\. Modelo de Conteúdo**

Cada projeto deverá possuir campos estruturados, permitindo consistência entre o CMS e o site através de schemas tipados com Zod no Astro.

Campos obrigatórios:

* título (`title`);  
* resumo (`description` / `summary`);  
* slug (`slug`);  
* idioma (`lang` — 'pt' | 'en');  
* chave de tradução (`translationKey` — vincula as versões PT e EN correspondentes);  
* categorias (`categories` — array de categorias, permitindo multi-classificação);  
* data (`date`);  
* capa (`cover`);  
* tags (`tags` — array de strings);  
* status de publicação (`published` / `draft`).

Campos opcionais (conteúdo modular — cada projeto inclui apenas o material existente):

* subtítulo (`subtitle`);  
* contexto (`context`);  
* problema (`problem`);  
* pesquisa (`research`);  
* referências (`references`);  
* imagens / galeria (`gallery` — lista de imagens com alt e legenda);  
* vídeos (`videos` — URLs externas YouTube/Vimeo);  
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

# **10\. Tipos de Conteúdo**

O CMS deverá permitir criar:

Projeto

Fotografia

Texto

Página

Livro

Filme Referenciado

Pesquisa

Cada tipo poderá possuir campos próprios.

---

# **11\. Estrutura da Home**

A Home deverá conter, em ordem:

Hero editorial com projeto em destaque.

Sequência de projetos recentes.

Breve apresentação.

Projetos em destaque.

Categorias.

Linha do tempo.

Fotografia em destaque.

Contato.

Rodapé.

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

Gallery

VideoBlock

ImageGrid

Quote

Timeline / ProcessDiagram

Bibliography

SidebarNote / ResearchNotes

Credits

Hero

Footer

Header

Tag

Filter

EditorialBlock / ProjectEntry (substitui o conceito de Card tradicional, mantendo estética editorial aberta sem bordas ou sombras pesadas)

ProjectNavigation / MetadataPanel

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

# **16\. Internacionalização**

Todo conteúdo deverá existir em:

Português.

Inglês.

Cada idioma possuirá:

URL própria.

SEO próprio.

Título próprio.

Descrição própria.

Slug próprio.

A troca de idioma deverá preservar, sempre que possível, o contexto da página correspondente.

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

# **20\. Segurança e Autenticação**

Sem autenticação pública para visualização do site.

Painel administrativo do Decap CMS protegido via fluxo de autenticação GitHub (OAuth PKCE Authorization Flow ou proxy bridge para GitHub Pages).

Deploy automatizado via GitHub Actions.

Dependências atualizadas.

Headers de segurança quando suportados pela hospedagem.

Validação de schema de conteúdo no processo de build via Zod.

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

# **24\. CMS**

O painel administrativo do Decap CMS (`/admin/`) deverá permitir:

Criar projeto.

Editar projeto.

Excluir projeto.

Enviar imagens e gerenciar assets.

Adicionar links de vídeos externos (YouTube/Vimeo).

Editar páginas institucionais.

Editar traduções em PT-BR e EN (gerenciadas por `translationKey`).

Editar menu e navegação.

Editar SEO e metadados.

Gerenciar categorias e tags.

Visualizar rascunhos antes da publicação.

---

# **25\. Fluxo Editorial**

O ciclo de publicação será:

Rascunho → Revisão → Publicado.

O CMS deverá permitir salvar conteúdos incompletos sem torná-los públicos.

---

# **26\. Deploy**

Cada alteração aprovada no repositório deverá gerar automaticamente uma nova versão do site.

Em caso de erro de compilação, a publicação deve ser interrompida, preservando a versão estável anterior.

---

# **27\. Escalabilidade**

O sistema deverá suportar:

Mais de 500 projetos.

Milhares de imagens.

Centenas de vídeos incorporados.

Novas categorias.

Novos idiomas.

Novos componentes.

Sem necessidade de reestruturação.

---

# **28\. Testes**

Antes de cada publicação, deverão existir verificações automáticas para:

Links quebrados.

Imagens ausentes.

Metadados obrigatórios.

Campos vazios.

Conflitos de tradução.

Erros de build.

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

* o CMS permitir criar um projeto completo sem editar código;  
* a interface funcionar integralmente em dispositivos móveis e desktops;  
* os dois idiomas estiverem plenamente operacionais;  
* os filtros e a busca retornarem resultados consistentes;  
* o desempenho atender às metas estabelecidas;  
* a experiência refletir a identidade editorial definida nos Documentos 1 e 2\.

---

# **31\. Melhorias Incorporadas à Especificação**

Requisitos refinados para o contexto de arquivo vivo:

**Sistema de relações entre projetos:** permitir vincular um projeto a outros relacionados ("Veja também"), por tema, técnica ou período.

**Índice automático:** gerar automaticamente um índice navegável em projetos longos, facilitando a leitura de estudos de caso.

**Modo de visualização para editais:** uma opção que reorganize a página destacando objetivos, processo, resultados, ficha técnica e créditos, facilitando o uso do site como material de apoio em avaliações.

**Gerenciamento de mídia:** além do upload, o sistema deve gerar automaticamente diferentes resoluções de imagem em WebP/AVIF, definir textos alternativos obrigatórios e permitir legendas e créditos de autoria.

**Busca estática enriquecida por conceitos:** localização rápida de projetos por conceitos metodológicos como "pesquisa", "infância", "cenografia" ou "materialidade", via metadados estruturados e indexação estática leve (Pagefind), sem sobrecarga de servidores.

