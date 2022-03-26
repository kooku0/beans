import { DocumentData } from '@firebase/firestore';

import { Journal, JournalForm } from '@/models/journal';

export type CreateJournalRequest = JournalForm;
export type CreateJournalResponse = DocumentData;

export type JournalResponse = Journal[];
