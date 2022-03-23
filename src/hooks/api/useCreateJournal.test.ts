import { act, renderHook } from '@testing-library/react-hooks';

import { createJournal } from '@/api/journal';
import { docRef as FIXTURE_DOC_REF } from '@/fixtures/firebase';
import FIXTURE_JOURNAL from '@/fixtures/journal';
import wrapper from '@/test/ReactQueryWrapper';

import useCreateJournal from './useCreateJournal';

jest.mock('@/api/journal');

describe('useCreateJournal', () => {
  const useCreateJournalHook = () => renderHook(
    () => useCreateJournal(), { wrapper },
  );

  beforeEach(() => {
    jest.clearAllMocks();

    (createJournal as jest.Mock).mockResolvedValue(FIXTURE_DOC_REF);
  });

  it('생성된 doc의 ref를 반환해야 한다.', async () => {
    const { result } = useCreateJournalHook();

    await act(async () => {
      await result.current.mutate(FIXTURE_JOURNAL);
    });

    expect(createJournal).toBeCalled();
    expect(result.current.data).toEqual(FIXTURE_DOC_REF);
  });
});
