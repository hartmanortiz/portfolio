# Componentes de Motion

Animações isoladas em componentes próprios — nunca misturadas ao componente principal (doc 5, seção 25).

## Componentes previstos

| Componente        | Descrição                                   | Status  |
|-------------------|---------------------------------------------|---------|
| `FadeIn`          | Wrapper de fade-in ao entrar na viewport    | Etapa 8 |
| `SlideUp`         | Deslizamento suave de entrada               | Etapa 8 |
| `PageTransition`  | Transição entre páginas (fade)              | Etapa 8 |

## Regras

- Todas as animações respeitam `prefers-reduced-motion`.
- Nenhuma animação pode bloquear interação ou leitura.
- Velocidade: lenta, elegante.
