# Skills: Iocyene Barbosa, Psicanalista Clínica

Seis skills no padrão aberto SKILL.md (agentskills.io). Funcionam em Claude, Gemini e ChatGPT.

## Ordem de carga
1. identidade-marca-iocyene (base de tudo)
2. etica-publicidade-iocyene (prevalece em conflito)
3. conteudo-instagram-iocyene
4. banners-iocyene
5. apps-iocyene
6. site-iocyene

## Instalar
- **Claude** (Free ou pago): Customize > Skills > Add > Upload. Suba cada pasta zipada (ou o SKILL.md). Precisa de "Code execution and file creation" ligado.
- **Gemini** (web, gemini.google.com): Configurações > Skills > Upload SKILL.md. Uma por vez.
- **ChatGPT** (Plus ou superior): perfil > Skills > Create > Upload from your computer. Se não aparecer, o plano não tem.
- **Claude Code / Gemini CLI / Codex**: copiar as pastas para `~/.claude/skills`, `~/.gemini/skills` ou `~/.codex/skills`.

## exemplos/
- agenda.svg: post de agenda com foto (precisa de foto.jpg ao lado). Abrir no Chrome.
- frase.svg: post de frase única.
- story-agenda.svg: story de horários.
- respirar.html: app de respiração guiada, pronto para publicar.
- legenda-agenda.txt: legenda do post de agenda.

SVG para PNG: `pip install cairosvg` e `cairosvg agenda.svg -o agenda.png`, ou Inkscape, ou print do Chrome.

## Pendências
- URL do site quando publicar (skills 1 e 6).
- Confirmar fonte original da logo (Cinzel é a aproximação).
