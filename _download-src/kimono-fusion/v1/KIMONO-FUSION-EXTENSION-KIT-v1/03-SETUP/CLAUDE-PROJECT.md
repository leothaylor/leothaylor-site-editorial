# Configuração no Claude: Project

## Disponibilidade

Projects estão disponíveis nos planos pagos do Claude. Um Project permite definir **Project Instructions** e adicionar arquivos à **Project Knowledge**.

## Configuração

1. Crie um novo Project no Claude.
2. Abra **Project Instructions**.
3. Copie integralmente o conteúdo de:
   `01-INSTRUCTIONS/KIMONO-FUSION-INSTRUCTIONS.md`
   para as instruções do projeto.
4. Na base de **Project Knowledge**, envie os nove arquivos de `02-KNOWLEDGE/`.
5. Inicie um novo chat dentro do Project e teste com uma arte própria.

## Teste mínimo

Envie uma arte e peça:

> Transforme esta arte em um kimono premium de BJJ e me entregue o MASTER PROMPT.

A resposta esperada é **um único MASTER PROMPT em Markdown** seguindo o blueprint do kit.

## Adaptação para Claude

O Kimono Fusion foi originalmente estruturado como uma extensão com Instructions + Knowledge. No Claude, o equivalente funcional é:

```text
Instructions do framework → Project Instructions
Knowledge técnico → Project Knowledge
```

Não trate o histórico de chats como substituto dos arquivos de Knowledge. O núcleo deve continuar explícito no projeto.

## Validação

Verifique:

- reconhecimento da referência;
- preservação do meio visual e da paleta;
- BJJ gi canônico e fabricável;
- continuidade entre vistas;
- QA e vetos aplicados;
- uma única saída MASTER PROMPT quando esse for o pedido.

## Observação

A adaptação preserva a lógica do framework, mas não garante comportamento idêntico entre modelos. A qualidade final depende do modelo, da interpretação dos arquivos e do gerador de imagens usado depois.
