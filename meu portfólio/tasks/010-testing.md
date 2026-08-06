# TASK 010 — TESTES E VALIDAÇÃO

**Status:** `[ ] Pendente`
**Prioridade:** Alta
**Etapa do Development Guide:** Etapa 10
**Dependência:** `009-seo.md` concluída

---

## Objetivo

Validar a qualidade do projeto em performance, acessibilidade, responsividade, SEO e funcionamento geral antes do deploy.

---

## Checklist de Performance

- [ ] Lighthouse ≥ 95 em Performance
- [ ] Lighthouse = 100 em Accessibility
- [ ] Lighthouse ≥ 95 em Best Practices
- [ ] Lighthouse = 100 em SEO
- [ ] Todas as imagens em WebP ou AVIF
- [ ] Fontes com `font-display: swap`
- [ ] Sem JavaScript bloqueando renderização
- [ ] Lazy loading em imagens fora do viewport

---

## Checklist de Acessibilidade

- [ ] Contraste mínimo WCAG AA em todos os textos
- [ ] Navegação completa por teclado
- [ ] Todos os elementos interativos com `focus` visível
- [ ] Todos os formulários com `label` associado
- [ ] Todas as imagens com `alt` descritivo
- [ ] Hierarquia de headings correta (H1 único por página)
- [ ] ARIA apenas quando necessário e correto
- [ ] `prefers-reduced-motion` respeitado

---

## Checklist de Responsividade

- [ ] Mobile (320px – 639px)
- [ ] Tablet (640px – 1023px)
- [ ] Notebook (1024px – 1279px)
- [ ] Desktop (1280px – 1535px)
- [ ] Wide (≥ 1536px)

---

## Checklist de Conteúdo

- [ ] Sem links quebrados
- [ ] Sem imagens ausentes
- [ ] Metadados obrigatórios preenchidos em todos os projetos
- [ ] Traduções sem campos faltando
- [ ] Slugs únicos por idioma

---

## Checklist de Build

- [ ] Build sem erros
- [ ] Build sem warnings críticos
- [ ] Sitemap gerado corretamente
- [ ] Robots.txt configurado
- [ ] RSS feed funcionando

---

## Checklist de Deploy

- [ ] Branch `main` protegida
- [ ] CI/CD configurado (GitHub Actions)
- [ ] Build automático em cada push
- [ ] Deploy automático para GitHub Pages
- [ ] Em caso de erro de build, versão anterior preservada

---

## Ferramentas

- **Lighthouse** — Chrome DevTools
- **WAVE** — acessibilidade
- **axe DevTools** — acessibilidade
- **PageSpeed Insights** — performance real
- **broken-link-checker** — links
- **Astro check** — tipagem e erros

---

## Referências

- `03-prd.md` § 18, § 19, § 28
- `05-software-architecture.md` § 27, § 30
