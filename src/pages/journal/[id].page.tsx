import Head from 'next/head';

import Journal from '@/components/journal/Journal';
import useRouterQuery from '@/hooks/useRouterQuery';

function JournalPage() {
  const id = useRouterQuery('id');

  return (
    <>
      <Head>
        <title>Journal 상세</title>
      </Head>
      <div>
        <div>journal</div>
        <Journal id={id} />
      </div>
    </>
  );
}

export default JournalPage;
