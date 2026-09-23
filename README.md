# Leo Thaylor — experimento editorial

Base própria na internet para reunir projetos reais, notas autorais e o caminho direto para o jiu-jitsu.

## Arquitetura

- **Home** — três portas principais: Jiu-Jitsu, Projetos e Notas.
- **Projetos** — cases públicos, sistemas internos e laboratório com estado de maturidade explícito.
- **Notas** — publicações autorais; a rede social funciona como distribuição, não como arquivo principal.
- **Jiu-Jitsu** — direciona para o site oficial já existente.

Não existe página `/sobre` na V1. A identidade aparece pelo que está construído e publicado.

## Destaques da Home

1. Radar Vacinal ACS
2. Teia de Ideias V2
3. ROTINA ACS
4. Neural Concursos
5. Jussan Silva
6. Cristiano Matos

## Stack

- Astro 7
- conteúdo em Markdown via Content Collections
- CSS próprio, sem framework visual
- GitHub Pages
- analytics opcional por `PUBLIC_GA_ID`

## Desenvolvimento

```bash
npm install
npm run dev
npm run build
```

## Publicação

O workflow `.github/workflows/deploy.yml` gera e envia `dist/` para GitHub Pages a cada push na `main`.

Para a primeira publicação, se o GitHub não ativar Pages automaticamente, abra **Settings → Pages → Build and deployment → Source → GitHub Actions**.

URL prevista enquanto não houver domínio próprio:

`https://leothaylor.github.io/leothaylor-site-editorial/`

## Domínio próprio

Quando o domínio pessoal for escolhido, atualizar `site` e remover/ajustar `base` em `astro.config.mjs`. Os projetos externos permanecem independentes; esta V1 apenas os referencia.
