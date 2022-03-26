import { render } from '@testing-library/react';

import { journal as FIXTURE_JOURNAL } from '@/fixtures/journal';

import JournalItem from './JournalItem';

describe('JournalItem', () => {
  const renderJournalItem = () => render((
    <table>
      <tbody>
        <JournalItem journal={FIXTURE_JOURNAL} />
      </tbody>
    </table>
  ));

  it('journal 내용일 보여야 한다.', () => {
    const { container } = renderJournalItem();

    expect(container).toHaveTextContent(FIXTURE_JOURNAL.contents);
  });
});
