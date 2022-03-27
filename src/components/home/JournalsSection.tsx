import styled from '@emotion/styled';

import Layout from '../common/Layout';

import JournalTable from './JournalTable';

function JournalsSection() {
  return (
    <Section>
      <h3>글 목록</h3>
      <JournalTable />
    </Section>
  );
}

export default JournalsSection;

const Section = styled(Layout)`
  margin: 40px 0;
`;
