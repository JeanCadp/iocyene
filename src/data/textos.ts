import { formatarResumoModalidade } from './agenda';
import { site } from './site';

export const textos = {
  hero: {
    sobretitulo: 'Psicanálise clínica',
    titulo: site.fraseMarca,
    tituloPartes: {
      inicio: 'Onde a sua ',
      destaque1: 'fala',
      meio: ' encontra espaço, a sua mente encontra ',
      destaque2: 'alívio',
      fim: '.',
    },
    texto:
      'Um espaço seguro, ético e livre de julgamentos para compreender suas emoções, superar conflitos e reencontrar o equilíbrio psíquico.',
    botaoPrimario: 'Agendar uma conversa ↗',
    botaoSecundario: {
      label: 'Conheça meu trabalho',
      href: '#sobre',
    },
    linhaApoio1: site.assinatura,
    linhaApoio2: 'Atendimento presencial em Goiânia e online',
    fotoAlt: 'Retrato profissional de Iocyene Barbosa, psicanalista clínica em Goiânia',
  },

  sobre: {
    sobretitulo: 'Sobre mim',
    titulo: 'Uma escuta atenta à sua singularidade',
    paragrafos: [
      'Sou Iocyene Barbosa, psicanalista clínica. Meu trabalho é oferecer um ambiente seguro, ético e livre de julgamentos para quem busca compreender suas emoções, superar conflitos e reencontrar o equilíbrio psíquico.',
      'Acredito que a palavra tem um poder transformador. Muitas vezes, as dores que carregamos no corpo ou no cotidiano são sentimentos e pensamentos que ainda não encontraram um lugar para serem ditos. No processo analítico, construímos juntos esse espaço: um lugar onde a sua história é ouvida com respeito, no seu tempo e no seu ritmo.',
    ],
    selos: [
      'Formação pelo ISPB',
      'Escuta individualizada',
      'Presencial e online',
      site.cbpc,
    ],
    notaFormacaoLinhas: site.formacaoLinhas,
    notaFormacao: site.formacao,
  },

  psicanalise: {
    sobretitulo: 'O que é psicanálise?',
    titulo: 'Um lugar para o que ainda não foi dito',
    texto:
      'A psicanálise é um método de escuta e investigação do funcionamento psíquico. Através da fala livre, buscamos compreender as causas profundas dos desconfortos, dos padrões de repetição e das angústias. Diferente de abordagens focadas apenas no sintoma imediato, ela atua na origem das questões emocionais.',
    pilares: [
      {
        numero: '01',
        titulo: 'Fala',
        texto: 'A palavra livre abre caminho para o que ainda não tinha lugar.',
      },
      {
        numero: '02',
        titulo: 'Escuta',
        texto: 'Uma escuta atenta e analítica, focada na sua singularidade.',
      },
      {
        numero: '03',
        titulo: 'Tempo',
        texto: 'Cada processo tem o seu ritmo. Não há certo ou errado.',
      },
    ],
    simboloAlt: 'Símbolo da psicanalista Iocyene Barbosa',
  },

  atendimentos: {
    sobretitulo: 'Como posso te acompanhar',
    titulo: 'Atendimento psicanalítico para adultos',
    texto:
      'A análise não se trata de dar respostas prontas, mas de te acompanhar na descoberta das suas próprias respostas.',
    botaoCard: 'Consultar atendimento ↗',
  },

  modalidades: {
    sobretitulo: 'Modalidades',
    titulo: 'O cuidado no seu contexto',
    presencial: {
      rotuloIcone: 'PRESENCIAL',
      titulo: 'Atendimento presencial',
      texto:
        'Um ambiente preparado para acolher a sua história com escuta, ética e privacidade. Consultório no Jardim América, em Goiânia.',
      horarios: formatarResumoModalidade('presencial'),
      botaoMapa: 'Ver localização ↗',
      botaoAgendar: 'Agendar presencial ↗',
      iconeAlt: 'Ícone de divã representando atendimento presencial',
    },
    online: {
      rotuloIcone: 'ONLINE',
      titulo: 'Atendimento online',
      texto:
        'A profundidade da escuta psicanalítica no conforto do seu espaço. Sessões por videochamada, com o mesmo rigor ético, sigilo e qualidade técnica do presencial.',
      horarios: formatarResumoModalidade('online'),
      apoio:
        'Para a sua sessão online, recomendamos um ambiente privativo, conexão estável e fones de ouvido.',
      botaoAgendar: 'Agendar online ↗',
    },
  },

  agenda: {
    sobretitulo: 'Sessões de psicanálise',
    titulo: 'Agenda aberta',
    texto:
      'Sessões de 45 a 50 minutos, em um espaço sigiloso, onde a sua história é ouvida no seu tempo.',
    botaoWhatsapp: 'Agende seu horário',
  },

  citacao: {
    frase:
      'A análise não se trata de dar respostas prontas, mas de te acompanhar na descoberta das suas próprias respostas.',
    autoria: 'Iocyene Barbosa · Psicanalista Clínica',
  },

  duvidas: {
    sobretitulo: 'Dúvidas',
    titulo: 'Perguntas frequentes',
  },

  localizacao: {
    sobretitulo: 'Onde me encontrar',
    titulo: 'Um espaço de acolhimento em Goiânia',
    endereco: site.endereco.completo,
    texto: 'Atendimento presencial aos sábados, mediante agendamento.',
    mapaTitle: 'Mapa de localização do consultório de Iocyene Barbosa no Jardim América, em Goiânia',
    botaoMapa: 'Como chegar ↗',
    botaoWhatsapp: 'Agendar pelo WhatsApp',
  },

  contato: {
    sobretitulo: 'Vamos conversar?',
    titulo:
      'Se chegou o momento de dar voz ao que incomoda por dentro, estou aqui para te acompanhar.',
    texto:
      'Entre em contato para saber mais sobre os atendimentos e consultar a disponibilidade de horários.',
    botaoWhatsapp: 'Conversar com Iocyene no WhatsApp ↗',
    botaoInstagram: `Acompanhe no Instagram ${site.instagram} ↗`,
  },

  rodape: {
    logoAlt: 'Iocyene Barbosa · Psicanalista Clínica',
    colunaContatoTitulo: 'Contato',
    colunaNavegacaoTitulo: 'Navegação',
    linksNavegacao: [
      { label: 'Início', href: '#inicio' },
      { label: 'Sobre', href: '#sobre' },
      { label: 'Atendimentos', href: '#atendimentos' },
      { label: 'Agenda', href: '#agenda' },
      { label: 'Contato', href: '#contato' },
      { label: 'Política de privacidade', href: '#privacidade' },
    ],
    privacidade:
      'Este site não coleta dados por formulário. Ao acessar links de WhatsApp, Instagram ou Google Maps, aplicam-se as políticas dessas plataformas. O carregamento de fontes pode transmitir dados técnicos ao fornecedor.',
    copyright: `© ${new Date().getFullYear()} ${site.nome}. Todos os direitos reservados.`,
  },
} as const;
