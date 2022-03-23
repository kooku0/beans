import { render } from '@testing-library/react';

import ReactQueryWrapper from '@/test/ReactQueryWrapper';

import PostPage from './post.page';

describe('PostPage', () => {
  const renderPostPage = () => render((
    <ReactQueryWrapper>
      <PostPage />
    </ReactQueryWrapper>
  ));

  it('"글쓰기" 문구가 보여야 한다.', () => {
    const { container } = renderPostPage();

    expect(container).toHaveTextContent('글쓰기');
  });
});
