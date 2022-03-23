import {
  addDoc, collection,
} from 'firebase/firestore';

import { db } from '@/services/firebase';

import { CreateJournalRequest, CreateJournalResponse } from './model';

const COLECTION_NAME = 'journal';
const journalCol = collection(db, COLECTION_NAME);

// eslint-disable-next-line import/prefer-default-export
export async function createJournal(journal: CreateJournalRequest): Promise<CreateJournalResponse> {
  const docRef = await addDoc(journalCol, {
    ...journal,
    createdAt: new Date(),
  });

  return docRef;
}
