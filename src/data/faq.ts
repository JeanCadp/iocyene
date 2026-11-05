import { site } from './site';

export interface FaqItem {
  pergunta: string;
  resposta: string;
}

export const faq: FaqItem[] = [
  {
    pergunta: 'O que é a psicanálise e como ela funciona?',
    resposta:
      'É um método de escuta e investigação do funcionamento psíquico. Através da fala livre, compreendemos as causas profundas dos desconfortos, padrões de repetição e angústias, promovendo autoconhecimento e transformações duradouras.',
  },
  {
    pergunta: 'Qual a duração e a frequência das sessões?',
    resposta:
      'As sessões têm de 45 a 50 minutos. A frequência padrão é semanal. Em momentos de maior necessidade, pode ser combinada diretamente com a analista.',
  },
  {
    pergunta: 'Qual a diferença entre presencial e online?',
    resposta:
      'Nenhuma em qualidade técnica, rigor ético e sigilo. O atendimento presencial acontece em Goiânia (às terças na Revine Saúde e Bem-estar no Setor Sul, e aos sábados no Jardim América), e o atendimento online é realizado por videochamada.',
  },
  {
    pergunta: 'Como sei se a psicanálise é indicada para mim?',
    resposta:
      'Se você sente necessidade de falar sobre o que vive e busca mais clareza e equilíbrio diante de ansiedade, angústia, relacionamentos, lutos, divórcio, impulsividades ou ciclos que se repetem, a psicanálise pode ser um caminho.',
  },
  {
    pergunta: 'Como funciona o sigilo?',
    resposta:
      'O sigilo é um pilar inegociável. Tudo o que é dito em sessão, presencial ou online, é rigorosamente confidencial e protegido pela ética profissional.',
  },
  {
    pergunta: 'Qual o valor e a forma de pagamento?',
    resposta:
      'Os valores e as formas de pagamento (Pix, transferência ou cartão) são informados de forma transparente no primeiro contato.',
  },
  {
    pergunta: 'Atende por plano de saúde?',
    resposta:
      'Os atendimentos são particulares. Forneço recibo para que você solicite reembolso ao seu plano, caso ele ofereça essa modalidade.',
  },
  {
    pergunta: 'Como agendar a primeira sessão?',
    resposta: `Clicando no ícone do WhatsApp aqui do site ou adicionando o contato ${site.telefoneRodape}. Escolha a modalidade e o melhor horário entre os disponíveis.`,
  },
];
