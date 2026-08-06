# Portfólio Digital — Hartman Ortiz

Plataforma editorial de documentação de processos criativos.

## Stack

- **Framework:** Astro
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **CMS:** Decap CMS
- **Hospedagem:** GitHub Pages
- **Conteúdo:** Markdown / MDX

## Documentação

Toda a tomada de decisão segue esta ordem de prioridade:

1. [`01-product-strategy.md`](docs/01-product-strategy.md.md)
2. [`02-design-system.md`](docs/02-design-system.md.md)
3. [`03-prd.md`](docs/03-prd.md.md)
4. [`04-development-guide.md`](docs/04-development-guide.md.md)
5. [`05-software-architecture.md`](docs/05-software-architecture.md.md)

Em caso de conflito, prevalece o documento de menor número.

## Pré-requisitos

- Node.js ≥ 20
- npm ≥ 10

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Estrutura

```
portfolio/
├── public/
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
│   │   ├── forms/
│   │   ├── motion/
│   │   └── cms/
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
│   ├── lib/
│   ├── utils/
│   ├── config/
│   └── types/
│
└── public/cms/
    └── config.yml
```

## Fluxo de Desenvolvimento

Seguir estritamente as etapas definidas no Documento 4:

1. Arquitetura ← *etapa atual*
2. Design Tokens
3. Componentes
4. Layouts
5. CMS
6. Conteúdo
7. Animações
8. SEO
9. Testes
