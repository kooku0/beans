import { render, screen } from '@testing-library/react';

import lightTheme from '@/styles/theme';
import MockTheme from '@/test/MockTheme';

import NavbarItem from './NavbarItem';

describe('NavbarItem', () => {
  const renderNavbarItem = () => render((
    <MockTheme>
      <NavbarItem
        name="홈"
        href="/"
        pathName={given.pathName}
        width="50px"
      />
    </MockTheme>
  ));

  context('pathName이 href와 같은 경우', () => {
    given('pathName', () => '/');

    it(`border bottom 색상이 ${lightTheme.primary400}이어야만 한다`, () => {
      renderNavbarItem();

      expect(screen.getByTestId('navbar-item-wrapper')).toHaveStyle({
        'border-bottom': `2px solid ${lightTheme.primary400}`,
      });
    });
  });

  context('pathName이 href와 다른 경우', () => {
    given('pathName', () => '/test');

    it('border bottom 색상이 "transparent" 이어야만 한다', () => {
      renderNavbarItem();

      expect(screen.getByTestId('navbar-item-wrapper')).toHaveStyle({
        'border-bottom': '2px solid transparent',
      });
    });
  });
});
