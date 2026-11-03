# Referência de landing page: estrutura, comportamento e o que adaptar

Fonte analisada: https://lucianamedeirospsicanalista.vercel.app/ (psicanalista, RJ). Usar como modelo de **estrutura e comportamento**. Cores, textos, fotos e ícones são os da skill `identidade-marca-iocyene` e da skill `site-iocyene`, não os da referência.

## 1. Características gerais

- **Página única** com rolagem vertical e menu fixo por âncoras (`#inicio`, `#sobre`, `#psicanalise`, `#atendimentos`, `#duvidas`, `#localizacao`, `#contato`).
- **Mobile-first.** Menu vira hambúrguer (☰) no celular.
- `theme-color` definido (na referência, verde #314d3b; na Iocyene, #0F3B36).
- **Sem formulário, sem banco, sem analytics.** Toda conversão é um link `wa.me` com mensagem pré-preenchida, repetido em todas as seções.
- **Meta OG completas:** title, description, locale pt_BR, type website, twitter card summary_large_image.
- **Rodapé com aviso de privacidade** explicando que não coleta dados e que links externos (WhatsApp, Instagram, Maps) têm suas próprias políticas. Isso vale como política de privacidade mínima para LGPD num site sem formulário.
- Mapa é **link externo** para o Google Maps, não iframe. Mantém o site leve e sem cookie de terceiro.
- Tom do texto: sobretítulo pequeno em caixa alta + título grande em serifa + 1 parágrafo. Sempre essa tríade por seção.

## 2. Seções na ordem (com o padrão de cada uma)

| # | Seção | Padrão da referência | Adaptação para a Iocyene |
|---|---|---|---|
| 1 | Cabeçalho | logo + nome + "PSICANALISTA CLÍNICA", menu, botão "Agendar atendimento" | logo.png horizontal verde; mesmo botão |
| 2 | Hero | sobretítulo "Psicanálise clínica • Cidade"; título com palavras em *itálico* para ênfase; 1 parágrafo; 2 botões (WhatsApp primário, "Conheça meu trabalho" secundário); linha com nome e credencial; linha com modalidades; retrato profissional | título é a frase da marca, com "fala" e "alívio" em itálico; foto.jpg com tratamento quente; três estrelinhas douradas no canto |
| 3 | Sobre | sobretítulo "Sobre [nome]"; título; 2 parágrafos; 4 chips (anos, escuta, modalidades, CBPC) | textos da skill site-iocyene 4.2; chips: ISPB, escuta individualizada, presencial e online, CBPC 2022-6892 |
| 4 | O que é psicanálise | título; 1 parágrafo; 3 pilares numerados 01/02/03, cada um com nome e 1 frase | Fala, Escuta, Tempo (skill 4.3); simbolo.png abrindo a seção |
| 5 | Atendimentos | grade de cards com marcador ✦, título, 1 frase, botão "Consultar atendimento ↗" por card | 5 cards das demandas (skill 4.4); marcador vira a estrelinha dourada de 4 pontas |
| 6 | Modalidades | 2 cards lado a lado: presencial (cidade, "Ver localização") e online ("consulte disponibilidade") | presencial com sofa.png e "Sábado · 10h • 11h • 12h"; online com monitor e "Terça · 16h • 17h • 18h • 19h • 20h / Quinta · 16h • 17h • 18h" |
| 6a | Agenda (nova) | não existe na referência | seção própria com as três linhas de dia e botão WhatsApp, igual ao post de agenda |
| 7 | Citação | frase entre aspas, nome e título abaixo, fundo contrastante | frase da skill 4.6; fundo verde #0F3B36 com texto marfim; é a única seção escura da página |
| 8 | FAQ | acordeão com "＋", 7 perguntas, respostas de 1 a 2 frases | 8 perguntas da skill 4.7 |
| 9 | Localização | título; endereço em 3 linhas; horários; botões "Como chegar ↗" e "Agendar pelo WhatsApp" | endereço do Jardim América; "sábados, mediante agendamento" |
| 10 | Contato | sobretítulo "Vamos conversar?"; título; 1 parágrafo; botão WhatsApp grande; link do Instagram | textos da skill 4.9 |
| 11 | Rodapé | 3 colunas: marca + credencial + frase; contato (telefone clicável, Instagram, cidade); navegação + privacidade. Linha final com © e crédito | lockup da logo + CBPC; (62) 98149-4324; sem crédito de agência |

## 3. Comportamentos a reproduzir

- Rolagem suave ao clicar nas âncoras (`scroll-behavior: smooth`).
- Menu fixo com fundo que fica sólido ao rolar.
- Botão WhatsApp sempre visível no menu, mesmo no celular.
- Acordeão da FAQ abre um item por vez; o ícone "＋" vira "−".
- Cards com leve elevação no hover (sombra suave), sem animação chamativa.
- Links externos abrem em nova aba (`target="_blank" rel="noopener"`).
- Todos os botões de WhatsApp usam o mesmo link, com a mensagem pré-preenchida da skill site-iocyene.
- Imagens com `alt` descritivo ("Retrato profissional de Iocyene Barbosa...").

## 4. O que NÃO copiar

- Cores da referência (verde #314d3b, bege dela). Usar a paleta da identidade: champanhe #EFE3D1, areia #F7F1E7, verde #0F3B36, dourado #C9B48A / #B49B6C.
- Textos, nome, credencial, telefone, cidade.
- Marcador ✦ e qualquer ícone genérico: usar a estrelinha de 4 pontas, o sofá da logo e o monitor em traço fino.
- Crédito "Desenvolvido por" no rodapé.
- Card de "psicanálise infantil" e "escuta e acolhimento emocional": a Iocyene atende só adultos; os cards são as 5 demandas dela.

## 5. Ornamento e ritmo visual (padrão fechado no material)

- Sob cada título de seção: filete dourado 120 px + estrelinha 18 px + filete 120 px, centralizados.
- Títulos em Cinzel 600 caixa alta; frases em Cormorant Garamond itálico 600; corpo em Cormorant 500 ou Lora; rótulos em Montserrat 600, mínimo 16 px.
- CBPC sempre em verde escuro, nunca dourado claro.
- Proporção de cor: 65% champanhe/areia, 20% verde, 15% dourado. Só a Citação tem fundo verde inteiro.
- Botão WhatsApp: pílula verde, rótulo "AGENDE PELO WHATSAPP" em dourado 14 px, número "62 98149-4324" em marfim 24 px, ícone de telefone em círculo dourado.

## 6. Checagem antes de publicar

- [ ] Nenhuma ocorrência de: psicóloga, psicoterapia, terapia, CRP, laudo, diagnóstico, teste, cura, garantido, "registrada no conselho"
- [ ] CBPC 2022-6892 no hero, no Sobre e no rodapé; "filiada ao CBPC" onde houver verbo
- [ ] Todos os links wa.me com 5562981494324 e a mesma mensagem
- [ ] Agenda: terça, quinta, sábado; horários um a um com bolinha; quinta sem noturno
- [ ] Lighthouse: performance e acessibilidade acima de 90; contraste AA
- [ ] Testado a 375 px e a 1440 px
