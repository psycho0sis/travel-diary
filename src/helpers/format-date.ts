import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

export const formatDate = (date: string) =>
  format(parseISO(new Date(date).toISOString()), 'PP', { locale: ru });
