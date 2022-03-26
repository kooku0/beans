import { renderHook } from '@testing-library/react-hooks';

import { fetchJournal } from '@/api/journal';
import { journal as FIXTURE_JOURNAL } from '@/fixtures/journal';
import wrapper from '@/test/ReactQueryWrapper';

import useFetchJournal from './useFetchJournal';

jest.mock('@/api/journal');

describe('useFetchJournal', () => {
  const useFetchJournalHook = () => renderHook(() => useFetchJournal('journal-id'), { wrapper });

  beforeEach(() => {
    jest.clearAllMocks();

    (fetchJournal as jest.Mock).mockResolvedValue(FIXTURE_JOURNAL);
  });

  it('journal을 반환해야 한다.', async () => {
    const { result, waitFor } = useFetchJournalHook();

    await waitFor(() => !!result.current.data);

    expect(fetchJournal).toBeCalled();
    expect(result.current.data).toEqual(FIXTURE_JOURNAL);
  });
});
