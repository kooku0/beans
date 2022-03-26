import { render } from '@testing-library/react';

import { journal as FIXTURE_JOURNAL } from '@/fixtures/journal';
import useFetchJournal from '@/hooks/api/useFetchJournal';

import Journal from './Journal';

jest.mock('@/hooks/api/useFetchJournal');

describe('Journal', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useFetchJournal as jest.Mock).mockImplementation(() => ({
      data: given.data,
    }));
  });

  const renderJournal = () => render((
    <Journal id="journal-id" />
  ));

  context('data fetching 중이거나 실패하면', () => {
    it('로딩중 문구가 나와야 한다.', () => {
      const { container } = renderJournal();

      expect(container).toHaveTextContent('loading...');
    });
  });

  context('data fetching이 완료되면', () => {
    given('data', () => FIXTURE_JOURNAL);

    it('journal이 보여야 한다.', () => {
      const { container } = renderJournal();

      expect(container).toHaveTextContent('journal');
    });
  });
});
