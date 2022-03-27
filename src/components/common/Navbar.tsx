import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

import zIndexes from '@/styles/zIndexes';

import Button from './Button';
import Layout from './Layout';
import NavbarItem from './NavbarItem';

function Navbar() {
  const { pathname } = useRouter();

  return (
    <>
      <NavbarBlock>
        <NavbarWrapper>
          <NavbarNavbar>
            <Link href="/" passHref>
              <a>홈</a>
            </Link>
            <NavbarItem href="/post" name="글 작성" pathName={pathname} />
          </NavbarNavbar>
          <div>
            <Link href="/auth/signin" passHref>
              <a>
                <Button color="primary">로그인</Button>
              </a>
            </Link>
          </div>
        </NavbarWrapper>
      </NavbarBlock>
      <Spacer />
    </>
  );
}

export default Navbar;

const NavbarBlock = styled.div`
  position: fixed;
  width: 100%;
  z-index: ${zIndexes.TopNavigation};
  background: ${({ theme }) => theme.background};
  box-shadow: inset 0px -1px 0px ${({ theme }) => theme.primary30};
`;

const Spacer = styled.div`
  height: 60px;
`;

const NavbarWrapper = styled(Layout)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;

const NavbarNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  & > a:first-of-type {
    margin-right: 30px;
  }
`;
