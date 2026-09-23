---
title: Inteligência com backup e contexto
summary: "Eu junto WhatsApp, GPT, Notion, um espelho local e Git para conseguir retomar projetos sem reconstruir a história toda."
date: 2026-09-15
category: Sistemas
order: 1
provenance: "Formulação atual consolidada em 2026. Registros antigos mostram antecedentes, mas não usam a formulação atual."
---
Meu painel central de trabalho hoje é o Notion. Projetos, tarefas, ideias, conteúdo, estudos, decisões, experimentos e registros de BJJ têm lugares diferentes dentro do OS Leo.

Só guardar tudo no Notion resolveria parte do problema. Eu queria também reduzir a fricção para capturar informação e manter uma cópia local do que fosse importante.

## 1. Captura rápida

Muita coisa começa no WhatsApp porque é onde eu consigo anotar sem organizar na hora. Posso mandar uma ideia bruta, uma observação de treino ou uma pendência em poucos segundos.

Depois eu jogo esse material para o GPT. A triagem separa o que merece virar projeto, tarefa, ideia, decisão, registro ou referência.

## 2. Notion como memória operacional

O Notion recebe o que precisa sobreviver ao dia. Um projeto guarda objetivo, estado, decisões e próximos passos. Uma decisão registra critério e consequência. Um experimento precisa ter hipótese, intervenção, medida e resultado.

Essa separação evita que o workspace vire uma página enorme de anotações misturadas.

## 3. Espelho local

Eu também construí um backup que lê o workspace pela API do Notion.

O script transforma páginas em Markdown e bases em CSV. O resultado fica numa pasta local e é versionado com Git. Para atualizar, eu dou duplo clique em `ESPELHAR_NOTION.bat`.

No checkpoint de 15/08/2026, o processo espelhou:

- 414 páginas;
- 33 bases;
- 479 arquivos Markdown;
- 33 CSV;
- 512 arquivos versionados;
- 0 erros depois das correções.

Duas execuções seguidas sem mudança no Notion terminaram com `git diff` vazio.

## 4. Por que isso me ajuda

Quando volto a um projeto antigo, eu consigo recuperar a decisão, o motivo, o que foi tentado e o que mudou depois. O backup resolve a parte de preservação. O contexto resolve a parte de entendimento.

Essa combinação é o que eu quero acumular ao longo dos anos.
