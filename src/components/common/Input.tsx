import { InputHTMLAttributes, ReactElement } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { body2Font } from '@/styles/fontStyles';

import ErrorMessage from './ErrorMessage';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  isError?: boolean;
  register?: UseFormRegisterReturn;
  placeholder: string;
}

function Input({
  error, register, placeholder, isError, ...rest
}: Props): ReactElement {
  return (
    <InputWrapper>
      <InputBox>
        <InputField
          placeholder={placeholder}
          isError={!!isError}
          {...register}
          {...rest}
        />
      </InputBox>
      <ErrorMessage errorMessage={error} />
    </InputWrapper>
  );
}

export default Input;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputBox = styled.div`
  position: relative;
  width: 100%;
`;

const InputField = styled.input<{ isError: boolean; }>`
  ${body2Font}
  width: 100%;
  color: ${({ theme }) => theme.primary400};
  border: 1px solid ${({ theme }) => theme.primary30};
  box-sizing: border-box;
  border-radius: 4px;
  padding: 15px 16px;
  transition: border .2s ease-in-out;

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.success300};
  }

  &:disabled {
    background: ${({ theme }) => theme.primary20};
    border: 1px solid ${({ theme }) => theme.primary30};
  }

  &::placeholder {
    color: ${({ theme }) => theme.primary200};
  }

  ${({ isError, theme }) => isError && css`
    border: 1px solid ${theme.warning300};

    &:focus {
      border: 1px solid ${theme.warning300};
    }
  `};
`;
