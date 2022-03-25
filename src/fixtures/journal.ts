import { CreateJournalRequest } from '@/api/journal/model';

const journal: CreateJournalRequest = {
  date: new Date(),
  price: 5000,
  location: {
    latitude: 123,
    longitude: 123,
  },
  contents: '너무 좋았다.',
};

export default journal;
