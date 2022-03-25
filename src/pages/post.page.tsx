import Head from 'next/head';

import JournalForm from '@/components/post/JournalForm';
import Map from '@/components/post/Map';

function PostPage() {
  return (
    <>
      <Head>
        <title>글 작성</title>
      </Head>
      <div>글쓰기</div>
      <Map />
      <JournalForm />
    </>
  );
}

export default PostPage;
