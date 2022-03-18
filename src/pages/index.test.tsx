import { render } from '@testing-library/react';

import HomePage from './index.page';

describe('HomePage', () => {
  const renderHomePage = () => render(
    <HomePage />,
  );

  it('hello가 보여야 한다.', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('hello');
  });
});
