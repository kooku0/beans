import { render } from '@testing-library/react';

import ReactQueryWrapper from '@/test/ReactQueryWrapper';

import JournalsSection from './JournalsSection';

describe('JournalsSection', () => {
  const renderJournalsSection = () => render((
    <ReactQueryWrapper>
      <JournalsSection />
    </ReactQueryWrapper>
  ));

  it('글 목록이 보여야 한다.', () => {
    const { container } = renderJournalsSection();

    expect(container).toHaveTextContent('글 목록');
  });
});
