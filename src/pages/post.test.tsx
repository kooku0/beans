import { render } from '@testing-library/react';

import PostPage from './post.page';

describe('PostPage', () => {
  const renderPostPage = () => render((
    <PostPage />
  ));

  it('"글쓰기" 문구가 보여야 한다.', () => {
    const { container } = renderPostPage();

    expect(container).toHaveTextContent('글쓰기');
  });
});
