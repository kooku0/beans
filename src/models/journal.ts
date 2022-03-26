import { LatLng } from './common';

export interface JournalForm {
  date: Date;
  price: number;
  location: LatLng;
  contents: string;
}

export interface Journal extends Omit<JournalForm, 'date'> {
  id: string;
  date: string;
  createdAt: string;
}
