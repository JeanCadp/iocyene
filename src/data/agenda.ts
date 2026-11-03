export type ModalidadeAgenda = 'online' | 'presencial';

export interface ItemAgenda {
  dia: string;
  dayOfWeekSchema: string;
  modalidade: ModalidadeAgenda;
  modalidadeRotulo: 'ONLINE' | 'PRESENCIAL';
  horarios: string[];
}

export const agenda: ItemAgenda[] = [
  {
    dia: 'Terça-feira',
    dayOfWeekSchema: 'Tuesday',
    modalidade: 'online',
    modalidadeRotulo: 'ONLINE',
    horarios: ['16h', '17h', '18h', '19h', '20h'],
  },
  {
    dia: 'Quinta-feira',
    dayOfWeekSchema: 'Thursday',
    modalidade: 'online',
    modalidadeRotulo: 'ONLINE',
    horarios: ['16h', '17h', '18h'],
  },
  {
    dia: 'Sábado',
    dayOfWeekSchema: 'Saturday',
    modalidade: 'presencial',
    modalidadeRotulo: 'PRESENCIAL',
    horarios: ['10h', '11h', '12h'],
  },
];

export function formatarHorarios(horarios: string[]): string {
  return horarios.join(' • ');
}

export function formatarLinhaAgenda(item: ItemAgenda): string {
  return `${item.dia} · ${item.modalidadeRotulo} · ${formatarHorarios(item.horarios)}`;
}

export function formatarResumoModalidade(
  modalidade: ModalidadeAgenda,
  separador = ' | ',
): string {
  return agenda
    .filter((item) => item.modalidade === modalidade)
    .map((item) => `${item.dia} · ${formatarHorarios(item.horarios)}`)
    .join(separador);
}
