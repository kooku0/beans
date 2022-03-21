import { ReactElement } from 'react';

import styled from '@emotion/styled';

import { body3Font } from '@/styles/fontStyles';

interface Props {
  errorMessage?: string;
}

function ErrorMessage({ errorMessage }: Props): ReactElement | null {
  if (!errorMessage) {
    return null;
  }

  return (
    <ErrorMessageWrapper>{errorMessage}</ErrorMessageWrapper>
  );
}

export default ErrorMessage;

const ErrorMessageWrapper = styled.div`
  width: 100%;
  ${body3Font}
  color: ${({ theme }) => theme.warning300};
  text-align: start;
  margin-top: 8px;
`;
