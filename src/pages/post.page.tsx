import Head from 'next/head';

import JournalFormSection from '@/components/post/JournalFormSection';

function PostPage() {
  return (
    <>
      <Head>
        <title>Journal 작성</title>
      </Head>
      <JournalFormSection />
    </>
  );
}

export default PostPage;
