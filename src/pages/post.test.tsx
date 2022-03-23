import { render } from '@testing-library/react';

import InjectTestingRecoil from '@/test/InjectTestingRecoil';
import ReactQueryWrapper from '@/test/ReactQueryWrapper';

import PostPage from './post.page';

jest.mock('@/services/map');
jest.mock('@/hooks/useMap');

describe('PostPage', () => {
  const renderPostPage = () => render((
    <ReactQueryWrapper>
      <InjectTestingRecoil>
        <PostPage />
      </InjectTestingRecoil>
    </ReactQueryWrapper>
  ));

  it('"글쓰기" 문구가 보여야 한다.', () => {
    const { container } = renderPostPage();

    expect(container).toHaveTextContent('글쓰기');
  });
});
