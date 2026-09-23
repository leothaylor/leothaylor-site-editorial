# Configuração no ChatGPT: GPT

## Nota de disponibilidade

Em setembro de 2026, a criação de **novos GPTs** no ChatGPT está disponível em ambientes de trabalho Business, Enterprise e Edu quando as permissões do workspace permitem. Contas pessoais Free, Go, Plus e Pro não podem criar novos GPTs; GPTs existentes podem continuar disponíveis e editáveis conforme plano e permissões.

Se sua conta não permitir criar um novo GPT, use o guia de Gemini Gem ou Claude Project deste kit.

## Configuração

1. Abra a área de GPTs no ChatGPT pela web e crie um GPT, caso sua conta tenha permissão.
2. Use **Kimono Fusion Design Engine** como nome, ou outro nome de sua preferência.
3. Copie integralmente o conteúdo de:
   `01-INSTRUCTIONS/KIMONO-FUSION-INSTRUCTIONS.md`
   para o campo **Instructions**.
4. Em **Knowledge**, envie os nove arquivos de `02-KNOWLEDGE/`.
5. Não mova regras comportamentais para Knowledge: o núcleo de comportamento deve permanecer em Instructions.
6. Se houver seletor de recursos, habilite geração/uso de imagens conforme a capacidade disponível no seu ambiente. O kit em si não depende de browsing ou execução de código.
7. Salve e teste na visualização com uma arte própria.

## Teste mínimo

Envie uma arte e peça:

> Transforme esta arte em um kimono premium de BJJ e me entregue o MASTER PROMPT.

A resposta esperada é **um único MASTER PROMPT em Markdown**, com um produto canônico, arte interna, placements, materiais, continuidade e série de imagens.

## Validação

Verifique principalmente:

- se a arte continua reconhecível;
- se o exterior continua um BJJ gi real;
- se o interior concentra a HERO ART;
- se os símbolos externos derivam da própria referência;
- se o `MASTER_PRODUCT_ID` e os invariantes permanecem iguais em todas as vistas;
- se não aparecem temas inventados, texto aleatório ou variantes não solicitadas.

## Observação

Os limites e a interface do ChatGPT podem mudar. Se os nomes dos campos mudarem, preserve a separação conceitual: **Instructions = comportamento; Knowledge = especificação de referência**.
