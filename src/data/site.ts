const nome = 'Iocyene Barbosa';
const titulo = 'Psicanalista Clínica';
const cbpc = 'CBPC 2022-6892';

const telefone = '62 98149-4324';
const telefoneRodape = telefone.replace(/^(\d{2})\s/, '($1) ');
const telefoneE164 = `55${telefone.replace(/\D/g, '')}`;

const whatsappMensagem =
  'Olá, Iocyene! Conheci seu site e gostaria de saber mais sobre os atendimentos em psicanálise e a disponibilidade de horários.';
const whatsappUrl = `https://wa.me/${telefoneE164}?text=${encodeURIComponent(whatsappMensagem)}`;

const logradouro = 'Av. C-205, nº 400';
const bairro = 'Jardim América';
const cidade = 'Goiânia – GO';
const cep = 'CEP 74270-020';

export const site = {
  nome,
  titulo,
  cbpc,
  assinatura: `${nome} · ${titulo} · ${cbpc}`,
  assinaturaPipe: `${nome} | ${titulo} | ${cbpc}`,
  fraseMarca: 'Onde a sua fala encontra espaço, a sua mente encontra alívio.',
  formacao: `Certificada pelo Instituto Superior de Psicanálise do Brasil (ISPB). Filiada ao Conselho Brasileiro de Psicanálise Clínica (${cbpc}).`,

  telefone,
  telefoneRodape,
  telefoneE164,
  whatsappMensagem,
  whatsappUrl,
  botaoWhatsappRotulo: 'AGENDE PELO WHATSAPP',

  instagram: '@iocyene.psicanalista',
  instagramUrl: 'https://www.instagram.com/iocyene.psicanalista/',

  cidade,
  bairro,
  endereco: {
    logradouro,
    bairro,
    cidadeEstado: cidade,
    cep,
    completo: `${logradouro} · ${bairro} · ${cidade} · ${cep}`,
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Av.+C-205,+400,+Jardim+Am%C3%A9rica,+Goi%C3%A2nia',

  siteUrl: import.meta.env.SITE ?? 'https://iocyene.vercel.app',
  themeColor: '#0F3B36',
  meta: {
    title: 'Iocyene Barbosa | Psicanalista Clínica em Goiânia, GO',
    description:
      'Iocyene Barbosa, psicanalista clínica (CBPC 2022-6892). Atendimento psicanalítico para adultos, presencial em Goiânia e online. Um espaço de escuta, ética e acolhimento.',
    ogTitle: 'Iocyene Barbosa | Psicanalista Clínica em Goiânia',
    ogDescription: 'Onde a sua fala encontra espaço, a sua mente encontra alívio.',
    locale: 'pt_BR',
  },

  menu: [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Psicanálise', href: '#psicanalise' },
    { label: 'Atendimentos', href: '#atendimentos' },
    { label: 'Agenda', href: '#agenda' },
    { label: 'Dúvidas', href: '#duvidas' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Contato', href: '#contato' },
  ],
  ctaMenu: 'Agendar atendimento',
  a11y: {
    irParaConteudo: 'Ir para o conteúdo principal',
    navegacaoPrincipal: 'Navegação principal',
    navegacaoRodape: 'Navegação do rodapé',
    abrirMenu: 'Abrir menu de navegação',
    fecharMenu: 'Fechar menu de navegação',
    irParaInicio: 'Iocyene Barbosa — Voltar ao início',
  },
} as const;
