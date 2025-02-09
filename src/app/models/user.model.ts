import { Timestamp } from '@angular/fire/firestore';

export interface User {
  uId: string;
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
  clientId?: string[];
  };