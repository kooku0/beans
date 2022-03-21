import { render } from '@testing-library/react';

import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
  const renderErrorMessage = () => render((
    <ErrorMessage
      errorMessage={given.errorMessage}
    />
  ));

  context('에러 메시지가 존재하는 경우', () => {
    given('errorMessage', () => 'error');

    it('에러 메시지가 나타나야만 한다', () => {
      const { container } = renderErrorMessage();

      expect(container).toHaveTextContent('error');
    });
  });

  context('에러 메시지가 존재하지 않는 경우', () => {
    given('errorMessage', () => '');

    it('아무것도 보이지 않아야만 한다', () => {
      const { container } = renderErrorMessage();

      expect(container).toBeEmptyDOMElement();
    });
  });
});
