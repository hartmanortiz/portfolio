/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          light: 'var(--color-paper-light, #F7F5F0)',
          warm: 'var(--color-paper-warm, #EFECE6)',
          dim: 'var(--color-paper-dim, #E5E0D8)',
        },
        ink: {
          deep: 'var(--color-ink-deep, #141312)',
          warm: 'var(--color-ink-warm, #1A1918)',
          muted: 'var(--color-ink-muted, #5A5652)',
          faint: 'var(--color-ink-faint, #8C8780)',
        },
        accent: {
          ochre: 'var(--color-accent-ochre, #C98A2C)',
          rust: 'var(--color-accent-rust, #A34828)',
          brown: 'var(--color-accent-brown, #2D2621)',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif, "Newsreader")', 'Georgia', 'serif'],
        sans: ['var(--font-sans, "Inter")', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono, "JetBrains Mono")', 'monospace'],
      },
      screens: {
        mobile: '320px',
        tablet: '768px',
        laptop: '1024px',
        desktop: '1280px',
        wide: '1536px',
      },
    },
  },
  plugins: [],
};
