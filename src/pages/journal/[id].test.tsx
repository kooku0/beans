import { render } from '@testing-library/react';

import ReactQueryWrapper from '@/test/ReactQueryWrapper';

import JournalDetailsPage from './[id].page';

jest.mock('next/router', () => ({
  useRouter() {
    return ({
      query: {
        id: 'journal-id',
      },
    });
  },
}));

describe('JournalDetailsPage', () => {
  const renderJournalDetailsPage = () => render((
    <ReactQueryWrapper>
      <JournalDetailsPage />
    </ReactQueryWrapper>
  ));

  it('journal 문구가 보여야 한다.', () => {
    const { container } = renderJournalDetailsPage();

    expect(container).toHaveTextContent('journal');
  });
});
