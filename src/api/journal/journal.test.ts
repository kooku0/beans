import { addDoc } from 'firebase/firestore';

import FIXTURE_JOURNAL from '@/fixtures/journal';

import { createJournal } from '.';

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
    it('글을 추가해야 한다.', () => {
      createJournal(FIXTURE_JOURNAL);

      expect(addDoc).toBeCalledWith(undefined, {
        ...FIXTURE_JOURNAL,
        createdAt: new Date(),
      });
    });
  });
});
