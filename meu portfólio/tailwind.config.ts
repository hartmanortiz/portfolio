import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // ─── Design Tokens — Cores ───────────────────────────────────────────────
      // Definidas aqui como fonte única de verdade (doc 5, seção 23)
      // Paleta quente: preto quente, papel, grafite, vermelho/laranja queimado, ocre
      colors: {
        // Base
        ink:   '#1a1714', // Preto quente
        paper: '#f5f0e8', // Papel claro
        graphite: {
          DEFAULT: '#3d3a35',
          light:   '#6b6560',
          muted:   '#9e9890',
        },
        // Destaques
        crimson: {
          DEFAULT: '#8b2020', // Vermelho queimado
          light:   '#b33030',
          dark:    '#6b1818',
        },
        ember: {
          DEFAULT: '#b85c20', // Laranja queimado
          light:   '#d4732a',
          dark:    '#8f4418',
        },
        ochre: {
          DEFAULT: '#b89040', // Ocre
          light:   '#d4ae58',
          dark:    '#8f7030',
        },
        // Utilitárias
        surface: {
          1: '#f5f0e8', // paper
          2: '#ede8e0', // ligeiramente mais escura
          3: '#e2ddd4', // separadores suaves
        },
      },

      // ─── Design Tokens — Tipografia ──────────────────────────────────────────
      fontFamily: {
        // Serifada editorial → títulos, introduções, citações
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        // Grotesca contemporânea → menus, legendas, interface, metadados
        sans:  ['"Inter"', 'system-ui', 'sans-serif'],
        // Mono → ficha técnica, metadados técnicos
        mono:  ['"JetBrains Mono"', 'monospace'],
      },

      // ─── Design Tokens — Escala tipográfica ──────────────────────────────────
      fontSize: {
        'display':   ['clamp(3rem, 7vw, 6rem)',   { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'heading-1': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.1',  letterSpacing: '-0.01em' }],
        'heading-2': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2' }],
        'heading-3': ['clamp(1.125rem, 2vw, 1.5rem)', { lineHeight: '1.3' }],
        'body':      ['1rem',    { lineHeight: '1.75' }],
        'body-sm':   ['0.875rem', { lineHeight: '1.6'  }],
        'caption':   ['0.75rem',  { lineHeight: '1.5', letterSpacing: '0.04em' }],
        'note':      ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.06em' }],
        'label':     ['0.6875rem', { lineHeight: '1',   letterSpacing: '0.12em', textTransform: 'uppercase' }],
      },

      // ─── Design Tokens — Espaçamento (múltiplos de 8px, doc 2, seção 7) ─────
      spacing: {
        '1':  '8px',
        '2':  '16px',
        '3':  '24px',
        '4':  '32px',
        '6':  '48px',
        '8':  '64px',
        '12': '96px',
        '16': '128px',
        '24': '192px',
        '32': '256px',
      },

      // ─── Design Tokens — Breakpoints (doc 3, seção 22) ───────────────────────
      screens: {
        'sm':  '480px',  // Mobile largo
        'md':  '768px',  // Tablet
        'lg':  '1024px', // Notebook
        'xl':  '1280px', // Desktop
        '2xl': '1600px', // Ultra-wide
      },

      // ─── Design Tokens — Grid ────────────────────────────────────────────────
      maxWidth: {
        'text':    '65ch',     // Largura máxima de texto confortável
        'article': '800px',    // Artigos / estudos de caso
        'canvas':  '1400px',   // Container principal
      },

      // ─── Design Tokens — Animações (doc 2, seção 16) ─────────────────────────
      transitionDuration: {
        'fast':   '150ms',
        'base':   '300ms',
        'slow':   '600ms',
        'slower': '900ms',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'enter':     'cubic-bezier(0, 0, 0.2, 1)',
        'exit':      'cubic-bezier(0.4, 0, 1, 1)',
      },

      // ─── Design Tokens — Bordas ──────────────────────────────────────────────
      borderRadius: {
        'none': '0',
        'sm':   '2px',
        'md':   '4px',
        'lg':   '8px',
      },
      borderWidth: {
        DEFAULT: '1px',
        'thin':  '0.5px',
        'thick': '2px',
      },
    },
  },
  plugins: [],
};

export default config;
