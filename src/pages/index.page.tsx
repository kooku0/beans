import styled from '@emotion/styled';

import JournalsSection from '@/components/home/JournalsSection';

function HomePage() {
  return (
    <Main>
      <JournalsSection />
    </Main>
  );
}

export default HomePage;

const Main = styled.main`
  min-height: calc(100vh - 367px);
`;
