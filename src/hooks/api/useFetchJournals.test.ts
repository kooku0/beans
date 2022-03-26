import { renderHook } from '@testing-library/react-hooks';

import { fetchJournals } from '@/api/journal';
import { journal as FIXTURE_JOURNAL } from '@/fixtures/journal';
import wrapper from '@/test/ReactQueryWrapper';

import useFetchJournals from './useFetchJournals';

jest.mock('@/api/journal');

describe('useFetchJournals', () => {
  const useFetchJournalsHook = () => renderHook(() => useFetchJournals(), { wrapper });

  beforeEach(() => {
    jest.clearAllMocks();

    (fetchJournals as jest.Mock).mockResolvedValue([FIXTURE_JOURNAL]);
  });

  it('journal들을 반환해야 한다.', async () => {
    const { result, waitFor } = useFetchJournalsHook();

    await waitFor(() => !!result.current.data);

    expect(fetchJournals).toBeCalled();
    expect(result.current.data).toEqual([FIXTURE_JOURNAL]);
  });
});
