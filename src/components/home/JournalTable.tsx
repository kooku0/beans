import styled from '@emotion/styled';

import useFetchJournals from '@/hooks/api/useFetchJournals';
import { h6Font } from '@/styles/fontStyles';

import JournalItem from './JournalItem';

function JournalTable() {
  const { data } = useFetchJournals();

  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <TableWrapper>
      <Table>
        <Header>
          <tr>
            <th>날짜</th>
            <th>비용</th>
            <th>내용</th>
            <th>자세히 보기</th>
          </tr>
        </Header>
        <Body>
          {data.map((journal) => (
            <JournalItem
              key={journal.id}
              journal={journal}
            />
          ))}
        </Body>
      </Table>
    </TableWrapper>
  );
}

export default JournalTable;

const TableWrapper = styled.div`
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.primary30};
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Table = styled.table`
  width: 100%;
  box-sizing: border-box;
  border-collapse: collapse;

  tr {
    th, td {
      width: 150px;
      text-align: center;
    }

    th:first-of-type, td:first-of-type {
      padding-left: 24px;
      text-align: left;
    }
  }
`;

const Header = styled.thead`
  ${h6Font}
  color: ${({ theme }) => theme.primary200};
  height: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.primary30};
`;

const Body = styled.tbody`
  & > tr:not(tr:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.primary30};
  }
`;
