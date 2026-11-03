# Site — Iocyene Barbosa | Psicanalista Clínica (CBPC 2022-6892)

Landing page estática construída com **Astro 5 + Tailwind CSS 4 + TypeScript**.  
Sem servidor, sem formulário e sem coleta de dados. Todos os textos, horários e informações de contato ficam centralizados em `src/data/`.

---

## 1. Como rodar localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento (http://localhost:4321)
npm run dev

# Gerar build estático de produção (pasta dist/)
npm run build

# Visualizar o build de produção localmente
npm run preview
```

---

## 2. Onde editar horários, textos e contatos

Nenhum texto, horário ou telefone está escrito direto nos componentes `.astro`. Para atualizar o conteúdo:

- **Horários e dias de atendimento (`src/data/agenda.ts`):**  
  Edite o array `agenda`. Essa única alteração atualiza automaticamente:
  - A seção **Agenda**
  - Os cards da seção **Modalidades**
  - A pergunta 3 da **FAQ**
  - Os horários estruturados do **JSON-LD (`ProfessionalService`)** no `<head>`
- **Telefone, WhatsApp, endereço, Instagram e menu (`src/data/site.ts`):**  
  Altere `telefone` ou `whatsappMensagem` no topo do arquivo; o link `whatsappUrl`, o telefone do rodapé `(62) ...` e o formato internacional `5562...` são derivados automaticamente.
- **Domínio definitivo (`SITE_URL`):**  
  Quando houver domínio próprio, defina a variável de ambiente `SITE_URL=https://seudominio.com.br` no painel da Vercel (ou em `.env`). O `astro.config.mjs`, o `sitemap-index.xml`, o `robots.txt` e as tags Open Graph/JSON-LD passarão a usá-lo automaticamente.
- **Cards de demandas atendidas (`src/data/demandas.ts`):**  
  Edite os 5 cards da seção *Atendimentos*.
- **Perguntas frequentes (`src/data/faq.ts`):**  
  Edite as 8 perguntas e respostas do acordeão.
- **Títulos, sobretítulos e parágrafos das seções (`src/data/textos.ts`):**  
  Edite os textos de *Hero*, *Sobre*, *Psicanálise*, *Atendimentos*, *Modalidades*, *Agenda*, *Citação*, *Dúvidas*, *Localização*, *Contato* e *Rodapé*.

---

## 3. Como trocar a foto ou imagens

As imagens otimizadas pelo `<Image>` do Astro ficam em `src/assets/`:

- `src/assets/foto.jpg` — Retrato profissional exibido na seção inicial (Hero). Para trocar, substitua o arquivo mantendo o nome `foto.jpg` (proporção vertical recomendada, ex.: 4:5). O filtro quente e a transição suave para o fundo champanhe são aplicados automaticamente pelo componente `Hero.astro`.
- `src/assets/logo.png` — Logo horizontal verde (cabeçalho e rodapé).
- `src/assets/simbolo.png` — Símbolo (divã + perfil humano) que abre as seções *Psicanálise* e *Citação*.
- `src/assets/sofa.png` — Ícone do card presencial.
- `public/favicon.svg` e `public/og.jpg` — Favicon e imagem de compartilhamento (Open Graph 1200×630).

