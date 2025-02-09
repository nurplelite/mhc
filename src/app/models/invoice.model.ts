import { Timestamp } from '@angular/fire/firestore';

export interface Invoice {
  id: string;
  number: number;
  clientId: string;
  total: number;
  created: {
    createdAt: Timestamp;
    createdBy: string;
  }
  modified: {
    modifiedAt: Timestamp;
    modifiedBy: string;
  };
  duedate: Timestamp;
  serviceid: string[];
}