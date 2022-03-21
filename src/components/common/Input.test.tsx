import { render, screen } from '@testing-library/react';

import lightTheme from '@/styles/theme';
import MockTheme from '@/test/MockTheme';

import Input from './Input';

describe('Input', () => {
  const renderInput = () => render((
    <MockTheme>
      <Input
        placeholder="input"
        isError={given.isError}
        error={given.error}
      />
    </MockTheme>
  ));

  context('에러가 존재하는 경우', () => {
    given('isError', () => 'isError');

    it('input의 border 색상이 warning300으로 변경되어야만 한다', () => {
      renderInput();

      expect(screen.getByPlaceholderText('input')).toHaveStyle({
        border: `1px solid ${lightTheme.warning300}`,
      });
    });
  });

  context('에러가 존재하는 경우', () => {
    given('error', () => 'error');

    it('에러 메시지가 나타나야만 한다', () => {
      const { container } = renderInput();

      expect(container).toHaveTextContent('error');
    });
  });

  context('에러가 존재하지 않는 경우', () => {
    given('error', () => '');

    it('input의 border 색상이 primary30으로 변경되어야만 한다', () => {
      renderInput();

      expect(screen.getByPlaceholderText('input')).toHaveStyle({
        border: `1px solid ${lightTheme.primary30}`,
      });
    });
  });
});
