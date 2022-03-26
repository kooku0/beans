import { addDoc, getDoc, getDocs } from 'firebase/firestore';

import { journal as FIXTURE_JOURNAL, journalForm as FIXTURE_JOURNAL_FORM } from '@/fixtures/journal';

import { createJournal, fetchJournal, fetchJournals } from '.';

jest.mock('firebase/firestore');

describe('journal', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date());
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  describe('createJournal', () => {
    it('journal을 추가해야 한다.', () => {
      createJournal(FIXTURE_JOURNAL_FORM);

      expect(addDoc).toBeCalledWith(undefined, {
        ...FIXTURE_JOURNAL_FORM,
        createdAt: new Date().toISOString(),
        date: FIXTURE_JOURNAL_FORM.date.toISOString(),
      });
    });
  });

  describe('fetchJournals', () => {
    beforeEach(() => {
      jest.clearAllMocks();

      (getDocs as jest.Mock).mockResolvedValue({
        docs: [
          {
            id: FIXTURE_JOURNAL.id,
            data: () => FIXTURE_JOURNAL,
          },
        ],
      });
    });

    it('journal들을 가져와야 한다.', async () => {
      const response = await fetchJournals();

      expect(response).toEqual([FIXTURE_JOURNAL]);
    });
  });

  describe('fetchJournal', () => {
    beforeEach(() => {
      jest.clearAllMocks();

      (getDoc as jest.Mock).mockResolvedValue({
        data: () => FIXTURE_JOURNAL,
      });
    });

    it('journal을 가져와야 한다.', async () => {
      const response = await fetchJournal('journal-id');

      expect(response).toEqual(FIXTURE_JOURNAL);
    });
  });
});
