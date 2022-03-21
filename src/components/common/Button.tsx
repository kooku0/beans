/* eslint-disable react/jsx-props-no-spreading */
import {
  ButtonHTMLAttributes, PropsWithChildren, ReactElement,
} from 'react';

import { css, Theme, useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { h5Font, h6Font, title3Font } from '@/styles/fontStyles';

export type ColorType = 'subGrey' | 'darkGrey' | 'primary' | 'secondary' | 'yellow' | 'lightGrey' | 'outline' | 'warning' | 'warningSecondary';
type ButtonSize = 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ColorType;
  size?: ButtonSize;
  borderRadius?: number;
}

interface StyledButtonProps {
  color: ColorType;
  size: ButtonSize;
  theme: Theme;
  borderRadius: number;
}

function Button({
  color = 'primary', size = 'medium', type = 'button', borderRadius = 4, children, ...rest
}: PropsWithChildren<Props>): ReactElement {
  const theme = useTheme();

  return (
    <StyledButton
      color={color}
      size={size}
      type={type}
      borderRadius={borderRadius}
      theme={theme}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

export default Button;

const ButtonWrapper = ({
  color, size, theme, borderRadius,
}: StyledButtonProps) => css`
  ${h5Font}
  position: relative;
  transform: translateZ(0);
  user-select: none;
  transition:
    color .1s ease-in-out,
    background-color .1s ease-in-out,
    border-color .1s ease-in-out,
    opacity .1s ease-in-out;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: ${`${borderRadius}px`};

  @media(hover: hover) and (pointer: fine) {
    &:not(:disabled):after {
      content: " ";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: ${theme.foreground};
      opacity: 0;
      transition: opacity .1s ease-in-out;
    }

    &:not(:disabled):not(.disabled):hover:after {
      opacity: 0.1;
    }
  }

  ${size === 'xLarge' && css`
    height: 54px;
    width: 100%;
  `};

  ${size === 'large' && css`
    height: 48px;
    padding: 0 24px;
  `};

  ${size === 'medium' && css`
    height: 40px;
    padding: 0 24px;
  `};

  ${size === 'small' && css`
    height: 32px;
    padding: 0 14px;
  `};

  ${size === 'xSmall' && css`
    ${color === 'outline' ? title3Font : h6Font}
    height: 32px;
    padding: 0 14px;
  `};

  ${color === 'primary' && css`
    color: ${theme.background};
    background-color: ${theme.success300};
  `}

  ${color === 'subGrey' && css`
    color: ${theme.background};
    background-color: ${theme.primary40};
  `}

  ${color === 'darkGrey' && css`
    color: ${theme.background};
    background-color: ${theme.primary400};
  `}

  ${color === 'secondary' && css`
    color: ${theme.success300};
    background-color: ${theme.primary20};
  `}

  ${color === 'yellow' && css`
    color: ${theme.primary400};
    background-color: ${theme.yellow10};
  `}

  ${color === 'lightGrey' && css`
    color: ${theme.primary200};
    background-color: ${theme.primary20};
  `}

  ${color === 'outline' && css`
    color: ${theme.primary200};
    background-color: ${theme.background};
    border: 1px solid ${theme.primary30};
    box-sizing: border-box;
  `}

  ${color === 'warning' && css`
    color: ${theme.background};
    background-color: ${theme.warning300};
  `}

  ${color === 'warningSecondary' && css`
    color: ${theme.warning300};
    background-color: ${theme.primary20};
  `}

  &:disabled {
    color: ${theme.primary200};
    background-color: ${theme.primary20};
  }
`;

const StyledButton = styled.button<StyledButtonProps>`
  ${ButtonWrapper}
`;
