# Exemplo de fluxo: sem arte incluída

Este kit não distribui uma arte de referência específica. Use uma imagem que você tenha direito de utilizar.

## Fluxo didático

### 1. Entrada

O usuário envia uma arte visual ao agente Kimono Fusion.

Ela pode ser, por exemplo:

- personagem;
- pintura;
- fotografia;
- paisagem;
- arte abstrata;
- símbolo;
- padrão;
- tatuagem;
- ilustração.

### 2. Análise interna

O sistema identifica e congela os elementos necessários para evitar drift:

- tipo de arte;
- âncora principal;
- motivos secundários;
- paleta;
- linguagem visual;
- composição;
- produto canônico;
- HERO ART;
- emblemas;
- labels;
- faixa;
- materiais.

### 3. Tradução para produto

A arte principal é tratada como HERO ART interna. O exterior permanece controlado e usa somente elementos derivados da referência.

### 4. MASTER PROMPT

O agente entrega um prompt único contendo:

```text
[MASTER_PRODUCT_ID]
[REFERENCE_ART_LOCK]
[FUSION_CONCEPT]
[PRODUCT_CANON]
[EXTERIOR_DESIGN]
[INTERIOR_HERO_ART]
[PLACEMENT_MAP]
[MATERIAL_AND_MANUFACTURING]
[COLOR_SYSTEM]
[CONTINUITY_LOCK]
[STUDIO_AND_LIGHTING]
[REQUIRED_IMAGE_SERIES]
[QUALITY_PRIORITY]
[VETO_LIST]
```

### 5. Geração

O MASTER PROMPT é usado no modelo de imagem escolhido para produzir diferentes vistas do mesmo produto.

O princípio que deve permanecer ativo em toda a série é:

> CAMERA CHANGES. PRODUCT DOES NOT.

### 6. Inspeção

Compare as vistas e verifique se permaneceram iguais:

- corte;
- cor-base;
- arte e crop;
- emblemas;
- patches;
- labels;
- faixa;
- materiais;
- joelhos;
- costuras;
- acabamentos.

Se algum desses elementos mudar sem solicitação, houve drift e a geração deve ser refeita mantendo o mesmo MASTER PRODUCT.
