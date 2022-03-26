import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';

// eslint-disable-next-line import/prefer-default-export
export function parseDocsData(doc: QueryDocumentSnapshot<DocumentData>) {
  const { id } = doc;
  const data = doc.data();

  return {
    id,
    ...data,
  };
}
