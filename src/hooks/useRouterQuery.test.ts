import useRouterQuery from './useRouterQuery';

jest.mock('next/router', () => ({
  useRouter() {
    return ({
      query: {
        id: 'id',
      },
    });
  },
}));

describe('useRouterQuery', () => {
  const useRouterQueryHook = (key: string) => useRouterQuery(key);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('useRouter query에서 key의 value를 반환해야한다.', () => {
    const view = useRouterQueryHook('id');

    expect(view).toBe('id');
  });
});
