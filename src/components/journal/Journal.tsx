import useFetchJournal from '@/hooks/api/useFetchJournal';

interface Props {
  id: string;
}

function Journal({ id }: Props) {
  const { data } = useFetchJournal(id);

  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <div>journal</div>
      {JSON.stringify(data)}
    </div>
  );
}

export default Journal;
