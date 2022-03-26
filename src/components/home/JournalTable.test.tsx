import { render } from '@testing-library/react';

import { journal as FIXTURE_JOURNAL } from '@/fixtures/journal';
import useFetchJournals from '@/hooks/api/useFetchJournals';

import JournalTable from './JournalTable';

jest.mock('@/hooks/api/useFetchJournals');

describe('JournalTable', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useFetchJournals as jest.Mock).mockImplementation(() => ({
      data: given.data,
    }));
  });

  const renderJournalTable = () => render((
    <JournalTable />
  ));

  context('data fetching 중이거나 실패하면', () => {
    it('로딩중 문구가 나와야 한다.', () => {
      const { container } = renderJournalTable();

      expect(container).toHaveTextContent('loading...');
    });
  });

  context('data fetching이 완료되면', () => {
    given('data', () => [FIXTURE_JOURNAL]);

    it('journal table이 보여야 한다.', () => {
      const { container } = renderJournalTable();

      expect(container).toHaveTextContent('날짜');
      expect(container).toHaveTextContent('내용');
    });
  });
});
