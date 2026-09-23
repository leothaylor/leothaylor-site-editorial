---
title: "Da Teia V1 à V2: quando eu parei de remendar e reescrevi"
date: 2026-09-15
category: Produto
order: 3
summary: "Depois de usar a primeira Teia, percebi que precisava de outra estrutura. A V2 foi refeita em React, TypeScript e React Flow."
---
A primeira Teia de Ideias funcionava. Eu conseguia criar nós, mover elementos e ligar uma coisa à outra.

Depois de usar a ferramenta por algum tempo, ficou claro que eu queria representar mais do que um mapa mental. Eu estava tentando acompanhar relações entre ideia, ação, decisão, experimento, correção e resultado.

## O que mudou na V2

A reconstrução trouxe tipos de nó, múltiplas teias, status, tags, descrição, links, conexões direcionais, busca, autosave, backup em JSON, minimapa e exportação PNG.

Também troquei o motor manual do canvas por React Flow.

## O bug da segunda exportação

A exportação PNG parecia resolvida porque a primeira tentativa funcionava.

O problema aparecia numa sequência específica: exportar, mover um nó e exportar de novo. A segunda imagem podia falhar.

A solução passou a manter uma imagem preparada em memória e invalidá-la quando o grafo muda. Assim a próxima exportação é reconstruída depois de qualquer alteração.

## Por que mantive a V1

A primeira versão continua preservada porque mostra o caminho que levou à reescrita. Isso ajuda a lembrar quais decisões vieram do uso e quais só apareceram depois.
