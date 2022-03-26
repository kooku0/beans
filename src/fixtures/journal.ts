import { Journal, JournalForm } from '@/models/journal';

export const journal: Journal = {
  id: '8EBo67zc4XCcd3SAGZq1',
  contents: '제주도 여행',
  createdAt: '2022-03-25T15:22:45.648Z',
  date: '2022-03-23T15:00:00.000Z',
  location: {
    latitude: 33.45058007771934,
    longitude: 126.57226436488588,
  },
  price: 3000,
};

export const journalForm: JournalForm = {
  date: new Date(),
  price: 5000,
  location: {
    latitude: 123,
    longitude: 123,
  },
  contents: '너무 좋았다.',
};
