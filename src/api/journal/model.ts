import { DocumentData } from '@firebase/firestore';

import { Journal } from '@/models/journal';

export type CreateJournalRequest = Journal;
export type CreateJournalResponse = DocumentData;
