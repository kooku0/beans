import {
  addDoc, collection, getDocs,
  orderBy, query,
} from 'firebase/firestore';

import { db } from '@/services/firebase';
import { parseDocsData } from '@/utils/firebase';

import { CreateJournalRequest, CreateJournalResponse, JournalResponse } from './model';

const COLECTION_NAME = 'journal';
const journalCol = collection(db, COLECTION_NAME);

export async function createJournal(journal: CreateJournalRequest): Promise<CreateJournalResponse> {
  const docRef = await addDoc(journalCol, {
    ...journal,
    date: journal.date.toISOString(),
    createdAt: new Date().toISOString(),
  });

  return docRef;
}

export async function fetchJournals(): Promise<JournalResponse> {
  const q = query(journalCol, orderBy('date', 'desc'));
  const querySnapshot = await getDocs(q);
  const journals = querySnapshot.docs.map(parseDocsData);

  return journals as JournalResponse;
}
