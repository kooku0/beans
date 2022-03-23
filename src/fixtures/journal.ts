import { CreateJournalRequest } from '@/api/journal/model';

const journal: CreateJournalRequest = {
  date: new Date(),
  price: 5000,
  location: '경복궁',
  contents: '너무 좋았다.',
};

export default journal;
