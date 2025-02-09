import { Timestamp } from '@angular/fire/firestore';

export interface Quote {
  id: string;
  number: number;
  clientId: string;
  details: string;
  amount: number;
  status: {
    status: 'New' | 'In Review' | 'Approved' | 'Rejected';
    effectiveDate: Timestamp;  
  }
   created: {
    createdAt: Timestamp;
    createdBy: string;
  }
  modified: {
    modifiedAt: Timestamp;
    modifiedBy: string;
  };

}