---
name: apps-iocyene
description: Cria mini-aplicativos web de arquivo único (HTML+CSS+JS) para a psicanalista Iocyene Barbosa: respiração guiada, escrita livre, preparação para a primeira sessão, lembrete de sessão, um minuto de pausa. Use quando pedirem app, ferramenta, página interativa, "algo para a pessoa usar" ou link para a bio. Depende de identidade-marca-iocyene. Nunca cria teste, questionário de avaliação ou qualquer coisa que pareça diagnóstico. Exemplo pronto em assets/respirar.html.
---

# Apps simples: Iocyene Barbosa

## 1. Limites (não negociáveis)
- Nada que avalie, pontue ou classifique a pessoa. Sem "teste de ansiedade", "qual seu nível de", "descubra se você tem", nem quiz com resultado. Isso é avaliação psicológica, reservada a psicólogos.
- Nada que substitua a sessão. O app apoia, convida, prepara. Não interpreta.
- Nada de dado pessoal no servidor. Tudo no navegador (localStorage) ou em lugar nenhum. Sem login, sem e-mail, sem analytics.
- Rodapé obrigatório: "Esta ferramenta não substitui atendimento. Em crise, ligue CVV 188 (24h, gratuito) ou SAMU 192." + "Iocyene Barbosa · Psicanalista Clínica · CBPC 2022-6892".
- Linguagem da skill de identidade. Sem "terapia", "psicóloga", "diagnóstico".

## 2. Stack
- Um único `.html`, CSS e JS inline, sem framework, sem build.
- Funciona offline após o primeiro carregamento (fontes com fallback Georgia/Arial).
- Mobile-first, largura máxima 480 px, texto mínimo 16 px, botões com 44 px ou mais, foco visível, contraste AA.
- Hospedagem: Vercel, Netlify ou GitHub Pages. Link na bio ou no site.

## 3. Tokens CSS
```css
:root{--champanhe:#EFE3D1;--areia:#F7F1E7;--marfim:#FBF8F2;--dourado:#C9B48A;--dourado2:#B49B6C;--verde:#0F3B36;--verde2:#1E5A52;--texto:#1C2A28;--serif:'Cormorant Garamond',Georgia,serif;--titulo:'Cinzel',Georgia,serif;--ui:'Montserrat',Arial,sans-serif}
```

## 4. Estrutura padrão
`<header>` marca + CBPC · `<main>` título em Cinzel, frase de abertura em Cormorant itálico, a ferramenta · `<footer>` aviso CVV/SAMU, assinatura, botão WhatsApp discreto (`https://wa.me/5562981494324?text=...` com a mensagem padrão da skill do site).

## 5. Catálogo
| App | Para quê | Dados guardados |
|---|---|---|
| Respiração guiada (pronto: assets/respirar.html) | acalmar antes de dormir ou em crise de ansiedade; padrão 4-7-8, 4 ciclos | nenhum |
| Antes da primeira sessão | acordeão com "O que acontece", "O que levar" (nada, só você), "Se for online" (ambiente privado, internet, fone; o link chega pelo WhatsApp), "Sigilo"; botão WhatsApp | nenhum |
| Escrita livre | textarea sem formatação, cronômetro opcional de 5 min, contador de palavras discreto; botões "Guardar aqui" (localStorage), "Apagar tudo" (confirmação), "Baixar .txt"; sem "enviar". Abertura: "Escreva sem corrigir. O que vier, vale." | texto no navegador |
| Um minuto de pausa | mostra uma pergunta de 30 (banco da skill de conteúdo) por 60 s com círculo que esvazia; depois "Fique com isso. Se quiser, me conte na sessão."; botão "Outra pergunta" | nenhum |
| Minha sessão | a pessoa escolhe modalidade e horário entre os disponíveis (sábado 10/11/12; terça 16–20; quinta 16–18), salva no navegador, mostra "Próxima sessão: terça, 17h, online" com botão de confirmar no WhatsApp. É lembrete, não agendamento. | dia e hora no navegador |

Ordem sugerida: Respiração → Antes da primeira sessão → Escrita livre.

## 6. Checagem antes de publicar
- [ ] Não pontua, não classifica, não interpreta
- [ ] Aviso CVV 188 / SAMU 192 visível
- [ ] Nenhum dado sai do navegador
- [ ] Assinatura com CBPC 2022-6892
- [ ] Palavras proibidas: zero
- [ ] Testado a 375 px de largura e com Tab até o botão
- [ ] WhatsApp 5562981494324
