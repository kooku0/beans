import { useQuery } from 'react-query';

import { fetchJournals } from '@/api/journal';

function useFetchJournals() {
  const query = useQuery('journals', fetchJournals);

  return query;
}

export default useFetchJournals;
