import { render, screen } from '@testing-library/react';

import Navbar from './Navbar';

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    pathname: '/',
  })),
}));

describe('Navbar', () => {
  const renderNavbar = () => render((
    <Navbar />
  ));

  it('홈과 글 작성 아이템이 보여야 한다.', () => {
    renderNavbar();

    expect(screen.getByText('홈')).toHaveAttribute('href', '/');
    expect(screen.getByText('글 작성')).toHaveAttribute('href', '/post');
  });
});
