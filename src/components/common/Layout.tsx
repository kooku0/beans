/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement, ReactNode } from 'react';

import styled from '@emotion/styled';

interface Props {
  children: ReactNode;
}

const Layout = ({ children, ...rest }: Props): ReactElement => (
  <LayoutWrapper {...rest}>
    {children}
  </LayoutWrapper>
);

export default Layout;

const LayoutWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1024px;
  position: relative;
`;
