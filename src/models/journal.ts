import { LatLng } from './common';

export interface Journal {
  date: Date;
  price: number;
  location: LatLng;
  contents: string;
}
