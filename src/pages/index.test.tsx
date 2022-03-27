import { render } from '@testing-library/react';

import ReactQueryWrapper from '@/test/ReactQueryWrapper';

import HomePage from './index.page';

describe('HomePage', () => {
  const renderHomePage = () => render((
    <ReactQueryWrapper>
      <HomePage />
    </ReactQueryWrapper>
  ));

  it('"글 목록"이 보여야 한다.', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('글 목록');
  });
});
