---
title: Teia de Ideias V2
summary: "Eu criei a Teia para ligar ideias, ações, decisões, experimentos e resultados num fluxo visual que continua editável."
category: Produto próprio
status: Publicado e validado
year: "2025 a 2026"
role: Conceito, produto, arquitetura e validação
proof: "V2 publicada depois de uma reescrita em React e TypeScript, com correções feitas a partir de uso e exportação."
featured: true
order: 2
liveUrl: https://leothaylor.github.io/9ideia-v2/
repoUrl: https://github.com/leothaylor/9ideia-v2
tags: [React, TypeScript, React Flow, localStorage, produto, visual thinking]
accent: "#9A8CFF"
accent2: "#63D4FF"
surface: "#17182B"
ink: "#F7F5FF"
media:
  - url: https://raw.githubusercontent.com/leothaylor/9ideia-v2/main/public/og.png
    alt: Interface visual da Teia de Ideias V2
    caption: Visão geral da Teia de Ideias V2.
    fit: cover
metrics:
  - value: "V2"
    label: reconstrução atual
  - value: "JSON"
    label: backup exportável
  - value: "PNG"
    label: exportação visual
  - value: "AUTO"
    label: salvamento local
---
## O que eu queria enxergar

A V1 nasceu como um canvas para criar nós e conexões. Com o uso, comecei a usar a tela para acompanhar outra coisa: como uma ideia passava por ação, decisão, correção e resultado.

Isso virou o foco da V2.

## Reconstrução

Eu troquei o motor manual da primeira versão por React, TypeScript e React Flow. A nova versão trouxe múltiplas teias, tipos de nó, status, tags, descrições, links, conexões direcionais, busca, autosave, backup em JSON, minimapa e exportação PNG.

## Um bug que apareceu usando a ferramenta

A primeira exportação PNG funcionava. Depois de mover um nó e exportar novamente, a segunda imagem podia sair errada. O fluxo de teste mostrou que a implementação não acompanhava a sequência normal de uso.

A correção passou a manter uma imagem preparada em memória e invalidá-la sempre que o grafo muda. Esse ajuste resolveu a segunda exportação sem exigir que o usuário recarregasse a página.

## Histórico preservado

A V1 continua registrada. Eu prefiro manter a versão antiga como parte do histórico e deixar a V2 mostrar claramente o que mudou.
