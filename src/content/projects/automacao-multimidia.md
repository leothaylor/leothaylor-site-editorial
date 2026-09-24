---
title: Ferramentas locais para tarefas repetitivas
summary: "Quando uma tarefa de imagem, áudio ou vídeo começa a se repetir, tento transformar aquilo numa ferramenta simples de usar: colocar o arquivo, dar duplo clique e pegar o resultado."
category: Ferramentas
status: Em uso
year: "2026"
role: Definição dos problemas, fluxo de uso, testes e refinamento com apoio de IA
proof: "A coleção reúne ferramentas usadas em material real: remoção de fundo, extração de B-roll e fotos, cortes de aulas, áudio e geração de versões de Reels."
featured: false
order: 9
tags: [automação, vídeo, imagem, áudio, IA, Windows]
accent: "#55C6D9"
accent2: "#F2B84B"
surface: "#102128"
ink: "#F4FCFF"
metrics:
  - value: "3"
    label: versões de Reel por execução
  - value: "25"
    label: takes em teste real 4K
  - value: "20"
    label: fotos no mesmo teste
  - value: "4K"
    label: resolução preservada
---
## A ideia

Essas ferramentas nasceram de tarefas que eu precisava repetir.

Em vez de abrir programas diferentes, refazer as mesmas configurações ou depender de uma IA toda vez que surgia a mesma necessidade, comecei a transformar alguns desses processos em pequenas ferramentas locais.

O padrão que mais gosto é simples:

**arquivo em ENTRADA → duplo clique → resultado em SAIDA**

## Exemplos que realmente me são úteis

### Remover fundo de imagem

Uma tarefa recorrente é receber uma foto e precisar do sujeito isolado. Tenho um fluxo local que usa remoção automática de fundo para evitar abrir uma ferramenta online ou repetir o processo manualmente toda vez.

### Tirar B-rolls e fotos de uma gravação longa

O Extrator de B-roll recebe vídeos brutos e gera candidatos de takes e fotografias.

Num teste real com quatro vídeos de iPhone em 4K, uma execução gerou **25 takes e 20 fotos**. As imagens finais foram extraídas dos arquivos originais em resolução cheia e os takes preservaram o áudio.

### Deixar uma aula de BJJ mais direta

Eu também gravo aulas contínuas. Uma ferramenta procura pausas longas com pouco movimento e silêncio para entregar uma versão mais enxuta para revisão ou compartilhamento.

Ela não entende jiu-jitsu. É uma automação para retirar trechos mortos segundo regras que fui calibrando com vídeos reais.

### Criar três ritmos para o mesmo Reel

Outro módulo recebe B-rolls em ordem e uma música e devolve três versões do mesmo conteúdo:

- Dinâmico;
- Equilibrado;
- Cinematográfico.

As fontes e a ordem continuam iguais. O que muda é o tempo que cada take permanece na tela.

### Outras tarefas pequenas

Também mantenho ferramentas para cortar áudio, baixar faixas quando preciso trabalhar com elas localmente, gerar contact sheets e preparar materiais para outros fluxos.

A regra para aparecer aqui é simples: a ferramenta precisa resolver um problema que outra pessoa consiga entender sem conhecer toda a organização do meu computador.

## Como eu construo esse tipo de ferramenta

Eu começo pela necessidade e pelo comportamento que quero no uso final.

Uso IA para ajudar a transformar isso em código, corrigir erros e modificar a automação. Ferramentas locais como Python, FFmpeg, PowerShell e modelos específicos executam partes do processamento.

Meu trabalho fica principalmente em definir o que precisa acontecer, testar com arquivos reais, identificar onde falha e refinar até a ferramenta deixar de atrapalhar e começar a economizar tempo.

## O que eu não quero que essa coleção vire

Não quero transformar o site num inventário técnico das dezenas de pastas que existem no meu PC.

Aqui faz mais sentido mostrar apenas ferramentas cujo problema é fácil de entender e cuja utilidade não depende de conhecer minha organização interna.

Se uma ferramenta só é interessante porque eu conheço todo o contexto por trás dela, ela não precisa aparecer no portfólio.
