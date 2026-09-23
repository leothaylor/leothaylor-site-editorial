# Kimono Fusion Extension Kit v1

Framework gratuito para reconstruir o **Kimono Fusion Design Engine** em uma plataforma de IA que aceite instruções persistentes e arquivos de conhecimento.

O sistema recebe uma arte visual e produz um **MASTER PROMPT autossuficiente** para transformar essa referência em um kimono premium de Brazilian Jiu-Jitsu, preservando fidelidade visual, lógica de fabricação e continuidade entre múltiplos ângulos do mesmo produto.

## O que este kit resolve

Geradores de imagem tendem a alterar detalhes entre vistas, simplificar a arte original, inventar elementos temáticos e transformar um gi em uma peça genérica de moda. O Kimono Fusion foi estruturado para reduzir esse drift.

A arquitetura trabalha com três prioridades principais:

1. **fidelidade à arte**;
2. **consistência do produto**;
3. **realismo têxtil e de fabricação**.

Princípio central do sistema:

> A ARTE ENTRA NO PRODUTO. O PRODUTO NÃO VIRA UMA INTERPRETAÇÃO GENÉRICA DA ARTE.

E, para continuidade entre imagens:

> CAMERA CHANGES. PRODUCT DOES NOT.

## Fluxo de uso

```text
arte visual
   ↓
análise da referência
   ↓
extração de âncora, motivos, paleta, composição e linguagem visual
   ↓
tradução para um BJJ gi canônico e fabricável
   ↓
definição de placements, materiais e sistema visual
   ↓
continuity lock + anti-drift
   ↓
QA interno
   ↓
MASTER PROMPT único
   ↓
geração das diferentes vistas do mesmo produto
```

Não é necessário fornecer uma arte de exemplo junto do kit. O usuário envia a própria referência visual ao agente que construir.

## Conteúdo do pacote

```text
KIMONO-FUSION-EXTENSION-KIT-v1/
├── README.md
├── LICENSE.md
├── MANIFEST.md
├── 01-INSTRUCTIONS/
│   └── KIMONO-FUSION-INSTRUCTIONS.md
├── 02-KNOWLEDGE/
│   ├── 01_PRODUCT_CANON.md
│   ├── 02_ART_EXTRACTION_AND_FUSION.md
│   ├── 03_PLACEMENT_AND_MATERIAL_MAP.md
│   ├── 04_REFERENCE_FIDELITY_PROTOCOL.md
│   ├── 05_CONTINUITY_AND_ANTI_DRIFT.md
│   ├── 06_SHOT_LIBRARY.md
│   ├── 07_MANUFACTURING_REALISM.md
│   ├── 08_FAILURE_MODES_AND_QA.md
│   └── 09_MASTER_PROMPT_BLUEPRINT.md
├── 03-SETUP/
│   ├── CHATGPT.md
│   ├── GEMINI-GEM.md
│   └── CLAUDE-PROJECT.md
└── 04-EXAMPLES/
    └── README.md
```

## Arquitetura

### Instructions

`01-INSTRUCTIONS/KIMONO-FUSION-INSTRUCTIONS.md` define o comportamento do agente: missão, prioridades, fluxo, contratos, continuidade, QA, formato de saída e vetos.

### Knowledge

Os nove arquivos em `02-KNOWLEDGE/` funcionam como especificação técnica do sistema:

- **01_PRODUCT_CANON**: arquitetura imutável do BJJ gi;
- **02_ART_EXTRACTION_AND_FUSION**: leitura e tradução da arte para produto;
- **03_PLACEMENT_AND_MATERIAL_MAP**: zonas de aplicação e materiais;
- **04_REFERENCE_FIDELITY_PROTOCOL**: regras de fidelidade à referência;
- **05_CONTINUITY_AND_ANTI_DRIFT**: invariantes entre renders;
- **06_SHOT_LIBRARY**: série de imagens e objetivos de cada vista;
- **07_MANUFACTURING_REALISM**: plausibilidade de fabricação e textura;
- **08_FAILURE_MODES_AND_QA**: falhas comuns e scorecard de qualidade;
- **09_MASTER_PROMPT_BLUEPRINT**: arquitetura da saída final.

## Instalação

Escolha a plataforma que você usa:

- `03-SETUP/CHATGPT.md`
- `03-SETUP/GEMINI-GEM.md`
- `03-SETUP/CLAUDE-PROJECT.md`

As plataformas não são idênticas. O núcleo técnico permanece o mesmo, mas a forma de configurar Instructions e Knowledge muda.

## Entrada esperada

Uma arte visual suficientemente clara para identificar:

- tipo de arte;
- âncora principal;
- motivos secundários;
- paleta;
- composição;
- textura e linguagem de renderização;
- atmosfera.

O usuário pode também fornecer um kimono-base, caso queira travar forma, material ou cor do produto.

## Saída esperada

Por padrão, o agente devolve **um único MASTER PROMPT em Markdown**, contendo as seções definidas no blueprint e uma série coerente de vistas do mesmo `MASTER_PRODUCT_ID`.

A saída foi desenhada para ser usada em um modelo de geração de imagens. O resultado final ainda depende da capacidade do modelo escolhido e pode exigir iteração.

## Limitações

- o kit não inclui um modelo próprio de geração de imagens;
- o kit não garante reprodução pixel a pixel da arte de referência;
- diferentes modelos interpretam prompts e arquivos de conhecimento de formas diferentes;
- interfaces e recursos das plataformas podem mudar;
- a verificação final de coerência visual continua sendo responsabilidade do usuário.

## Uso e licença

O kit pode ser baixado, usado, adaptado privadamente e configurado em seus próprios agentes. Você também pode usar os agentes e os resultados gerados em trabalho pessoal ou comercial.

Você **não pode redistribuir, republicar, sublicenciar, vender ou empacotar este framework, seus arquivos-base ou adaptações substancialmente equivalentes como produto/template para terceiros**.

Leia `LICENSE.md` para os termos completos.

## Autoria

Criado por **Leo Thaylor**.

AI Extension Lab: projeto de experimentação com agentes especializados, sistemas de prompt, bases de conhecimento e validação por uso real.
