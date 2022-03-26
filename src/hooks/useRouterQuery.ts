import { useRouter } from 'next/router';

function useRouterQuery(key: string): string {
  const { query } = useRouter();

  return query[key] as string;
}

export default useRouterQuery;
