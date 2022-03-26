import styled from '@emotion/styled';
import dayjs from 'dayjs';
import Link from 'next/link';

import Button from '@/components/common/Button';
import { Journal } from '@/models/journal';
import { body2Font, h6Font } from '@/styles/fontStyles';

interface Props {
  journal: Journal;
}

function JournalItem({ journal }: Props) {
  const {
    date, contents, price, id,
  } = journal;

  const parseTime = (time: string) => dayjs(time).format('YYYY년 MM월 DD일');

  return (
    <TableItem>
      <td>{parseTime(date)}</td>
      <td>
        {price}
      </td>
      <td>
        {contents}
      </td>
      <td>
        <Link href={`/journal/${id}`}>
          <Button
            color="lightGrey"
            size="xSmall"
          >
            자세히 보기
          </Button>
        </Link>
      </td>
    </TableItem>
  );
}

export default JournalItem;

const TableItem = styled.tr`
  ${body2Font}
  height: 64px;

  td:nth-of-type(2), td:nth-of-type(5), td:nth-of-type(6) {
    ${h6Font}
  }

  td:last-of-type > button {
    margin: auto;
    width: 96px;
  }
`;
