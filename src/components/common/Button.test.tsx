import { ComponentProps } from 'react';

import { render, screen } from '@testing-library/react';

import theme from '@/styles/theme';
import MockTheme from '@/test/MockTheme';

import Button from './Button';

describe('Button', () => {
  const renderButton = ({ color, size }: ComponentProps<typeof Button>) => render((
    <MockTheme>
      <Button
        color={color}
        size={size}
      >
        버튼
      </Button>
    </MockTheme>
  ));

  describe('버튼 사이즈에 따라서 스타일 속성이 다르다', () => {
    context('사이즈가 "xLarge"인 경우', () => {
      it('height가 "54px"이어야만 한다', () => {
        renderButton({ size: 'xLarge' });

        expect(screen.getByText('버튼')).toHaveStyle({
          height: '54px',
        });
      });
    });

    context('사이즈가 "large"인 경우', () => {
      it('height가 "48px"이어야만 한다', () => {
        renderButton({ size: 'large' });

        expect(screen.getByText('버튼')).toHaveStyle({
          height: '48px',
        });
      });
    });

    context('사이즈가 "medium"인 경우', () => {
      it('height가 "40px"이어야만 한다', () => {
        renderButton({ size: 'medium' });

        expect(screen.getByText('버튼')).toHaveStyle({
          height: '40px',
        });
      });
    });

    context('사이즈가 "small"인 경우', () => {
      it('height가 "32px"이어야만 한다', () => {
        renderButton({ size: 'small' });

        expect(screen.getByText('버튼')).toHaveStyle({
          height: '32px',
        });
      });
    });

    context('사이즈가 "xSmall"인 경우', () => {
      context('color가 "outline"이 아닌 경우', () => {
        it('fontSize가 "14px"이어야만 한다', () => {
          renderButton({ size: 'xSmall' });

          expect(screen.getByText('버튼')).toHaveStyle({
            'font-size': '14px',
          });
        });
      });

      context('color가 "outline"인 경우', () => {
        it('fontSize가 "12px"이어야만 한다', () => {
          renderButton({ size: 'xSmall', color: 'outline' });

          expect(screen.getByText('버튼')).toHaveStyle({
            'font-size': '12px',
          });
        });
      });
    });
  });

  describe('버튼 색상 속성에 따라서 스타일 속성이 다르다', () => {
    context('색상 속성이 "subGrey"인 경우', () => {
      it(`배경색이 ${theme.primary40} 이어야만 한다`, () => {
        renderButton({ color: 'subGrey' });

        expect(screen.getByText('버튼')).toHaveStyle({
          'background-color': theme.primary40,
        });
      });
    });

    context('색상 속성이 "primary"인 경우', () => {
      it(`배경 색상이 ${theme.success300} 이어야만 한다`, () => {
        renderButton({ color: 'primary' });

        expect(screen.getByText('버튼')).toHaveStyle({
          'background-color': theme.success300,
        });
      });
    });

    context('색상 속성이 "darkGrey"인 경우', () => {
      it(`배경 색상이 ${theme.primary400} 이어야만 한다`, () => {
        renderButton({ color: 'darkGrey' });

        expect(screen.getByText('버튼')).toHaveStyle({
          'background-color': theme.primary400,
        });
      });
    });

    context('색상 속성이 "secondary"인 경우', () => {
      it(`배경 색상이 ${theme.primary20} 이어야만 한다`, () => {
        renderButton({ color: 'secondary' });

        expect(screen.getByText('버튼')).toHaveStyle({
          'background-color': theme.primary20,
        });
      });
    });

    context('색상 속성이 "yellow"인 경우', () => {
      it(`배경 색상이 ${theme.yellow10} 이어야만 한다`, () => {
        renderButton({ color: 'yellow' });

        expect(screen.getByText('버튼')).toHaveStyle({
          'background-color': theme.yellow10,
        });
      });
    });

    context('색상 속성이 "lightGrey"인 경우', () => {
      it(`폰트 색상이 ${theme.primary200} 이어야만 한다`, () => {
        renderButton({ color: 'lightGrey' });

        expect(screen.getByText('버튼')).toHaveStyle({
          color: theme.primary200,
        });
      });
    });

    context('색상 속성이 "outline"인 경우', () => {
      it(`폰트 색상이 ${theme.primary200} 이어야만 한다`, () => {
        renderButton({ color: 'outline' });

        expect(screen.getByText('버튼')).toHaveStyle({
          color: theme.primary200,
        });
      });
    });

    context('색상 속성이 "warning"인 경우', () => {
      it(`배경 색상이 ${theme.warning300} 이어야만 한다`, () => {
        renderButton({ color: 'warning' });

        expect(screen.getByText('버튼')).toHaveStyle({
          'background-color': theme.warning300,
        });
      });
    });

    context('색상 속성이 "warningSecondary"인 경우', () => {
      it(`폰트 색상이 ${theme.warning300} 이어야만 한다`, () => {
        renderButton({ color: 'warningSecondary' });

        expect(screen.getByText('버튼')).toHaveStyle({
          color: theme.warning300,
        });
      });
    });
  });
});
