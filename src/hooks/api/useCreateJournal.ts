import { useMutation } from 'react-query';

import { createJournal } from '@/api/journal';

function useCreateJournal() {
  const mutation = useMutation(createJournal);

  return mutation;
}

export default useCreateJournal;
