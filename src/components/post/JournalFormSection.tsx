import styled from '@emotion/styled';

import Layout from '../common/Layout';

import JournalForm from './JournalForm';
import Map from './Map';

function JournalFormSection() {
  return (
    <Section>
      <h3>글 작성</h3>
      <Map />
      <JournalForm />
    </Section>
  );
}

export default JournalFormSection;

const Section = styled(Layout)`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
`;
