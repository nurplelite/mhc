import { Timestamp } from '@angular/fire/firestore';

export interface User {
  uId: string;
  firebaseId: string;
  email: string;
  displayName?: string;
  firstName?: string;
  lastName?: string;
  role: 'admin' | 'customer';
  created: {
    createdAt: Timestamp;
    createdBy: string;
  }
  modified: {
    modifiedAt: Timestamp;
    modifiedBy: string;
  };
  sessionId: string;
  lastLogin: Timestamp;
  active: boolean;
  clientId?: string;
  };
