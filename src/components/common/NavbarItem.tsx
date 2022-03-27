import React, { ReactElement } from 'react';

import styled from '@emotion/styled';
import Link from 'next/link';

import { body1Font } from '@/styles/fontStyles';

interface Props {
  href: string;
  name: string;
  pathName: string;
  width?: string;
}

function NavbarItem({
  href, name, pathName, width = '60px',
}: Props): ReactElement {
  return (
    <NavbarItemWrapper
      target={href}
      pathName={pathName}
      width={width}
      data-testid="navbar-item-wrapper"
    >
      <Link href={href} passHref>
        <a>{name}</a>
      </Link>
    </NavbarItemWrapper>
  );
}

export default NavbarItem;

const NavbarItemWrapper = styled.div<{ target: string; pathName: string; width: string;}>`
  height: 60px;
  width: ${({ width }) => width};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid ${({ theme, target, pathName }) => (target === pathName ? theme.primary400 : 'transparent')};
  transition: border-color .2s ease-in-out;

  & > a {
    ${body1Font}
    color: ${({ theme }) => theme.primary400};
  }
`;
