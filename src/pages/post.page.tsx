import Head from 'next/head';

import FormContainer from '@/containers/post/FormContainer';

function PostPage() {
  return (
    <>
      <Head>
        <title>글 작성</title>
      </Head>
      <div>글쓰기</div>
      <FormContainer />
    </>
  );
}

export default PostPage;
