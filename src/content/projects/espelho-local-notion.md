---
title: Espelho Local do Notion
summary: "Eu mantenho uma cópia local do meu Notion em Markdown e CSV, com histórico no Git e atualização por duplo clique."
category: Sistema interno
status: Validado
year: "2026"
role: Especificação, arquitetura e validação operacional
proof: "414 páginas, 33 bases e 512 arquivos versionados no checkpoint, com 0 erros e idempotência comprovada."
featured: false
order: 8
tags: [Python, Notion API, Git, backup, dados, automação]
accent: "#F0F0EA"
accent2: "#4CAF79"
surface: "#111311"
ink: "#F0F0EA"
metrics:
  - value: "414"
    label: páginas
  - value: "33"
    label: bases
  - value: "512"
    label: arquivos
  - value: "0"
    label: erros
---
## Por que eu fiz

Meu Notion concentra projetos, tarefas, ideias, conteúdo, estudos, decisões, experimentos, aulas de BJJ e vários contextos de trabalho. Eu queria uma cópia que continuasse acessível fora da interface do Notion e que também mostrasse o histórico de mudanças.

## Como funciona

O script usa a API oficial do Notion para descobrir páginas e bases compartilhadas com a integração. Páginas viram arquivos Markdown. Bases geram schema, índice e CSV. A saída fica em uma pasta local chamada `NOTION_MIRROR`.

A atualização acontece por duplo clique em `ESPELHAR_NOTION.bat`. Na primeira execução, o próprio fluxo prepara o ambiente Python isolado. O token fica no `.env` e não entra no Git.

## O que foi validado

No checkpoint de 15/08/2026, o espelho processou 414 páginas e 33 bases. A saída ficou em 479 arquivos Markdown e 33 CSV, totalizando 512 arquivos versionados.

A execução levou cerca de 7 minutos. Depois das correções, o relatório registrou 0 erros e 0 blocos degradados.

## Idempotência

Duas execuções seguidas, sem mudança no Notion, terminaram com `git diff` vazio. O conteúdo só é regravado quando alguma coisa muda, o que evita commits artificiais causados pelo próprio backup.

## Papel dentro do meu sistema

O fluxo completo fica assim: captura rápida, triagem, organização no Notion e cópia local versionada. O backup protege os arquivos; o histórico do Git ajuda a recuperar quando e como o conteúdo mudou.
