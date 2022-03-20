import styled from '@emotion/styled';
import Link from 'next/link';

function HomePage() {
  return (
    <Main>
      <div>home</div>
      <Link href="/auth">
        <a>auth</a>
      </Link>
    </Main>
  );
}

export default HomePage;

const Main = styled.main`
  min-height: calc(100vh - 367px);
`;
