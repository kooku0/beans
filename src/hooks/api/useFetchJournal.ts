import { useQuery } from 'react-query';

import { fetchJournal } from '@/api/journal';

function useFetchJournal(id: string) {
  const query = useQuery(['journal', id], () => fetchJournal(id), {
    enabled: !!id,
  });

  return query;
}

export default useFetchJournal;
