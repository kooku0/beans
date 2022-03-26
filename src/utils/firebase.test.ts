import { parseDocsData } from './firebase';

describe('parseDocsData', () => {
  const data = {
    date: '2022-12-11',
    title: 'title',
    contents: 'contents',
  };
  const doc = {
    id: 'doc-id',
    data: () => data,
  } as any;

  it('firestore snapshot의 docs에 id를 포함시켜 반환해야한다.', () => {
    const result = parseDocsData(doc);

    expect(result).toEqual({
      ...data,
      id: 'doc-id',
    });
  });
});
