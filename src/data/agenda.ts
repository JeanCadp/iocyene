export interface LinhaHorario {
  rotulo: string;
  horarios: string[];
  nota?: string;
}

export interface ItemAgenda {
  dia: string;
  dayOfWeekSchema: string;
  linhas: LinhaHorario[];
  localPresencial?: string;
}

export const agenda: ItemAgenda[] = [
  {
    dia: 'Terça-feira',
    dayOfWeekSchema: 'Tuesday',
    localPresencial: 'Revine Saúde e Bem-estar (Setor Sul)',
    linhas: [
      {
        rotulo: 'Presencial e online',
        horarios: ['14h', '15h', '16h', '17h', '18h'],
        nota: 'Presencial na Revine Saúde e Bem-estar · Setor Sul',
      },
      {
        rotulo: 'Exclusivamente online',
        horarios: ['19h', '20h'],
      },
    ],
  },
  {
    dia: 'Quinta-feira',
    dayOfWeekSchema: 'Thursday',
    linhas: [
      {
        rotulo: 'Exclusivamente online',
        horarios: ['16h', '17h', '18h'],
      },
    ],
  },
  {
    dia: 'Sábado',
    dayOfWeekSchema: 'Saturday',
    localPresencial: 'Instituto Superior de Psicanálise do Brasil (Jardim América)',
    linhas: [
      {
        rotulo: 'Presencial e online',
        horarios: ['10h', '11h', '12h'],
        nota: 'Presencial no Instituto Superior de Psicanálise do Brasil · Jardim América',
      },
    ],
  },
];

export function formatarHorarios(horarios: string[]): string {
  return horarios.join(' • ');
}

export function formatarLinhaAgenda(item: ItemAgenda): string {
  return `${item.dia} · ${item.linhas.map((l) => `${l.rotulo}: ${formatarHorarios(l.horarios)}`).join(' | ')}`;
}

export function formatarResumoModalidade(
  modalidade: 'presencial' | 'online',
  separador = ' | ',
): string {
  if (modalidade === 'presencial') {
    return 'Terça-feira (14h às 18h · Setor Sul) e Sábado (10h às 12h · Jardim América)';
  }
  return 'Terça-feira (14h às 20h), Quinta-feira (16h às 18h) e Sábado (10h às 12h)';
}
