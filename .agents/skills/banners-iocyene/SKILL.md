---
name: banners-iocyene
description: Gera a arte de posts, carrosséis e stories da psicanalista Iocyene Barbosa como SVG editável nos tamanhos do Instagram, mais prompts de imagem para Gemini ou ChatGPT. Use quando pedirem banner, arte, post de agenda, capa de carrossel, story, template ou "faz a imagem" para ela. Depende de identidade-marca-iocyene e recebe a nota de arte de conteudo-instagram-iocyene. Modelos prontos em assets/.
---

# Banners: Iocyene Barbosa

## 1. Como entregar
Saída sempre em **SVG completo** (abre em navegador, Figma, Canva, Illustrator). Para PNG: abrir no Chrome e exportar, ou `inkscape arquivo.svg -o arquivo.png -w 1080`, ou `pip install cairosvg` e `cairosvg arquivo.svg -o arquivo.png`. Fontes via Google Fonts (`@import` no `<style>`); offline, instalar Cinzel, Cormorant Garamond, Montserrat, Pinyon Script. Nunca entregar descrição no lugar do SVG. Se o modelo precisa de foto, usar `<image href="foto.jpg">`.

## 2. Tamanhos e grade
| Peça | Tamanho | Margem | Observação |
|---|---|---|---|
| Feed retrato | 1080×1350 | 80 px | padrão |
| Feed quadrado | 1080×1080 | 80 px | |
| Story / capa de reels | 1080×1920 | 100 px lateral | 250 px no topo e 300 px na base livres |
| Carrossel slide | 1080×1350 | 90 px | |
Texto em no máximo 8 de 12 colunas. Logo até 130 px no feed, 160 px no story.

## 3. Tokens
--champanhe:
#EFE3D1 --areia:
#F7F1E7 --marfim:
#FBF8F2
--dourado:
#C9B48A --dourado2:
#B49B6C --verde:
#0F3B36 --verde2:
#1E5A52
Títulos: Cinzel 500/600 caixa alta | Frases: Cormorant Garamond itálico
UI: Montserrat 400/500/600 | Script: Pinyon Script, só stories, 1 palavra


## 4. Modelos (arquivos em assets/)
- **A · agenda.svg** (1080×1350): foto à esquerda com fade para champanhe, coluna de informação à direita (AGENDA ABERTA em Cinzel, ícones em círculo, três dias, botão WhatsApp, assinatura, frase da marca). Precisa de `foto.jpg` na mesma pasta. Filtro `quente` esquenta a foto; remover se quiser a foto crua.
- **B · frase.svg** (1080×1350): champanhe, frase em Cormorant itálico verde + dourado, filetes, divã em marca d'água. Para "Não é X. É Y.". Trocar as 4 linhas de texto.
- **C · carrossel**: gerar a partir de B. Capa e último slide em verde #0F3B36 com texto marfim; miolo em areia com texto verde; número do slide em Cinzel dourado no canto superior direito (72 px).
- **D · story-agenda.svg** (1080×1920): champanhe, lockup, chips de horário. Ocupado: trocar `fill="#0F3B36"` do chip por `fill="#B49B6C"` e riscar o texto.
- **E · sem foto**: variação de A com a área da foto em verde e o divã dourado a 35% de opacidade + frase da marca.

## 4a. Diferenciação em relação à referência de mercado
A referência comum usa foto lateral, script grande, ícones em caixas com sombra, folha no canto. Nós usamos: Cinzel caixa alta com filete (sem script no feed); ícones em círculo com borda dourada; o divã da logo como marca d'água; arco dourado como detalhe; verde nos botões e dias, dourado só decora; nunca folha de planta. Fundo verde inteiro só em 1 a cada 5 posts.

## 5. Prompts de imagem (Gemini / ChatGPT)
Sem pessoas reconhecíveis, sem texto na imagem (o texto entra pelo SVG).
- **Consultório:** `Fotografia editorial de um consultório de psicanálise, divã clássico em veludo verde-escuro (#0F3B36), parede champanhe, luz natural suave da janela à esquerda, planta grande, detalhes em latão fosco, estética minimalista e acolhedora, sem pessoas, sem texto, 4:5.`
- **Textura:** `Textura de papel artesanal champanhe (#EFE3D1), grão sutil, luz lateral suave, sem objetos, sem texto, 4:5.`
- **Ansiedade:** `Line art dourado (#B49B6C) sobre champanhe (#EFE3D1): um perfil humano de onde saem linhas que se emaranham e depois se alinham, traço fino, elegante, sem texto, 4:5.`
- **Repetição:** `Line art dourado sobre champanhe: uma espiral que se abre em uma linha reta, traço único e contínuo, sem texto, 4:5.`
- **Recomeço:** `Line art dourado sobre champanhe: duas linhas que caminham juntas, se separam e uma delas floresce em uma folha, traço único, sem texto, 4:5.`
Nunca: pessoas chorando, cérebro, cabeça com engrenagem, stock genérico.

## 6. Checagem antes de exportar
- [ ] Tamanho e área segura corretos
- [ ] Logo verde sobre claro, dourada sobre verde
- [ ] CBPC 2022-6892 presente
- [ ] "Sessões de psicanálise", nunca "terapia"
- [ ] Horários: sábado 10/11/12 presencial; terça 16–20 e quinta 16–18 online
- [ ] WhatsApp 62 98149-4324
- [ ] Texto igual ao aprovado na skill de conteúdo
- [ ] Fontes carregadas (conferir Cinzel no navegador)
