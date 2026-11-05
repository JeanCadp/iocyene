const nome = 'Iocyene Barbosa';
const titulo = 'Psicanalista Clínica';
const cbpc = 'CBPC 2022-6892';

const telefone = '62 98149-4324';
const telefoneRodape = telefone.replace(/^(\d{2})\s/, '($1) ');
const telefoneE164 = `55${telefone.replace(/\D/g, '')}`;

const whatsappMensagem =
  'Olá, Iocyene! Conheci seu site e gostaria de saber mais sobre os atendimentos em psicanálise e a disponibilidade de horários.';
const whatsappUrl = `https://wa.me/${telefoneE164}?text=${encodeURIComponent(whatsappMensagem)}`;

const enderecoJardimAmerica = {
  id: 'ispb',
  nome: 'Instituto Superior de Psicanálise do Brasil',
  dia: 'Sábado',
  diasResumo: 'Sábado · 10h às 12h',
  modalidade: 'Presencial e online',
  logradouro: 'Av. C-205, nº 400',
  bairro: 'Jardim América',
  cidade: 'Goiânia – GO',
  cep: 'CEP 74270-020',
  linha1: 'Av. C-205, nº 400 · Jardim América',
  linha2: 'Goiânia – GO · CEP 74270-020',
  completo: 'Av. C-205, nº 400 · Jardim América · Goiânia – GO · CEP 74270-020',
  mapsUrl: 'https://maps.app.goo.gl/z2EKtc8k4B73asrY9',
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.5388561548434!2d-49.285381!3d-16.6999441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef1dc13efa5a3%3A0x9542aecacc7073c3!2sInstituto%20Superior%20de%20Psican%C3%A1lise%20do%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1793730448454!5m2!1spt-BR!2sbr',
};

const enderecoRevine = {
  id: 'revine',
  nome: 'Revine Saúde e Bem-estar',
  dia: 'Terça-feira',
  diasResumo: 'Terça-feira · 15h às 18h',
  modalidade: 'Presencial e online',
  logradouro: 'R. 126, 41',
  bairro: 'Setor Sul',
  cidade: 'Goiânia – GO',
  cep: 'CEP 74093-080',
  linha1: 'R. 126, 41 · Setor Sul',
  linha2: 'Goiânia – GO · CEP 74093-080',
  completo: 'R. 126, 41 · Setor Sul · Goiânia – GO · CEP 74093-080',
  mapsUrl:
    'https://www.google.com/maps?q=Revine+Sa%C3%BAde+e+Bem-estar,+R.+126,+41,+Setor+Sul,+Goi%C3%A2nia+-+GO',
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d401.7092166132815!2d-49.25634578155106!3d-16.6907058129829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef17095336569%3A0x8ab3888e5ade1b74!2sRevine%20Sa%C3%BAde%20e%20Bem%20estar!5e0!3m2!1spt-BR!2sbr!4v1793907079454!5m2!1spt-BR!2sbr',
};

export const locais = [enderecoRevine, enderecoJardimAmerica] as const;

export const site = {
  nome,
  titulo,
  cbpc,
  assinatura: `${nome} · ${titulo} · ${cbpc}`,
  assinaturaPipe: `${nome} | ${titulo} | ${cbpc}`,
  fraseMarca: 'Onde a sua fala encontra espaço, a sua mente encontra alívio.',
  formacaoLinhas: [
    'Certificada pelo Instituto Superior de Psicanálise do Brasil (ISPB).',
    `Filiada ao Conselho Brasileiro de Psicanálise Clínica (${cbpc}).`,
  ],
  formacao: `Certificada pelo Instituto Superior de Psicanálise do Brasil (ISPB). Filiada ao Conselho Brasileiro de Psicanálise Clínica (${cbpc}).`,

  telefone,
  telefoneRodape,
  telefoneE164,
  whatsappMensagem,
  whatsappUrl,
  botaoWhatsappRotulo: 'AGENDE PELO WHATSAPP',

  instagram: '@iocyene.psicanalista',
  instagramUrl: 'https://www.instagram.com/iocyene.psicanalista/',

  cidade: 'Goiânia – GO',
  bairro: 'Setor Sul e Jardim América',
  endereco: {
    logradouro: enderecoRevine.logradouro,
    bairro: enderecoRevine.bairro,
    cidadeEstado: enderecoRevine.cidade,
    cep: enderecoRevine.cep,
    completo: `${enderecoRevine.completo} | ${enderecoJardimAmerica.completo}`,
  },
  enderecoRevine,
  enderecoJardimAmerica,
  locais,
  mapsUrl: enderecoRevine.mapsUrl,
  mapsEmbedUrl: enderecoRevine.mapsEmbedUrl,

  siteUrl: import.meta.env.SITE ?? 'https://iocyene.vercel.app',
  themeColor: '#0F3B36',
  meta: {
    title: 'Iocyene Barbosa | Psicanalista Clínica em Goiânia, GO',
    description:
      'Iocyene Barbosa, psicanalista clínica (CBPC 2022-6892). Atendimento psicanalítico para adultos, presencial em Goiânia (Setor Sul e Jardim América) e online. Um espaço de escuta, ética e acolhimento.',
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
    whatsappCabecalho: 'Conversar pelo WhatsApp',
    instagramCabecalho: 'Acessar perfil no Instagram',
  },
} as const;
