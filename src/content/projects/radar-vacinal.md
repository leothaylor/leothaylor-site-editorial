---
title: Radar Vacinal ACS
summary: "Eu criei um aplicativo instalável para o ACS acompanhar vacinação, busca ativa, histórico de doses e backups no próprio aparelho, inclusive offline."
category: Produto próprio
status: Publicado e validado
year: "2026"
role: Produto, arquitetura, implementação e evolução
proof: "PWA publicada, instalada e testada em Windows e iPhone, com persistência offline validada."
featured: true
order: 1
liveUrl: https://leothaylor.github.io/radar-vacinal-premium/
repoUrl: https://github.com/leothaylor/radar-vacinal-premium
tags: [PWA, local-first, saúde, produto, UX, GitHub Pages]
accent: "#43D6B3"
accent2: "#5BA6E6"
surface: "#092522"
ink: "#F4FFFC"
media:
  - url: https://raw.githubusercontent.com/leothaylor/FerramentasparaACSTiktok/main/assets/banner-radar-vacinal.png
    alt: Banner do Radar Vacinal ACS
    caption: Material visual usado no ecossistema ROTINA ACS.
    fit: cover
  - url: https://raw.githubusercontent.com/leothaylor/radar-vacinal-premium/main/logo-radar-acs1.png
    alt: Logo do Radar Vacinal ACS
    caption: Identidade da ferramenta publicada.
    fit: contain
metrics:
  - value: "2"
    label: plataformas testadas
  - value: "0"
    label: backend obrigatório
  - value: "LOCAL"
    label: dados no aparelho
  - value: "OFFLINE"
    label: uso validado
---
## De onde veio

Eu trabalhei como ACS e conhecia o atrito de acompanhar situação vacinal com informação espalhada, conferências repetidas e listas paralelas. O Radar começou como uma tentativa de colocar esse acompanhamento em uma interface que pudesse ser usada no dia a dia.

## O que a versão atual faz

A ferramenta é uma PWA instalável. Ela mantém os dados no aparelho, funciona sem internet e reúne cadastro, busca, filtros, Busca Ativa, histórico de doses, backup, restauração, exportação em PDF/JPG e compartilhamento nativo.

A base vacinal fica separada da interface. O motor de regras também foi isolado, o que facilita revisão, testes e migrações sem apagar histórico por conveniência.

## Teste em dispositivo

A validação passou por instalação e uso em Windows e iPhone. O ponto principal era conferir persistência depois de fechar o navegador, instalar como aplicativo e usar sem conexão. Essa etapa encontrou problemas que não apareceriam olhando apenas o código.

## Decisão de produto

A primeira direção comercial previa uma versão paga. Depois de analisar suporte, manutenção, responsabilidade e preço, eu mudei a estratégia. A versão ampliada passou a ser gratuita e entrou no ROTINA ACS como ferramenta de uso direto e também como uma forma de apresentar o restante do que eu vinha construindo.
