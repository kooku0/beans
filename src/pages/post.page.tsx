import Head from 'next/head';

import Form from '@/components/post/Form';
import Map from '@/components/post/Map';

function PostPage() {
  return (
    <>
      <Head>
        <title>글 작성</title>
      </Head>
      <div>글쓰기</div>
      <Map />
      <Form />
    </>
  );
}

export default PostPage;
