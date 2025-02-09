import { Timestamp } from '@angular/fire/firestore';

export interface Property {
    Id: string;
    street: string;
    street2?: string;
    city: string;
    state: string;
    zip: string;
    type: 'home' | 'service' | 'mailing';
    effectiveDates: {
    startDate: Timestamp;
    endDate?: Timestamp;
    }
    clientId: string;
    created: {
    createdAt: Timestamp;
    createdBy: string;
    }
    modified: {
    modifiedAt: Timestamp;
    modifiedBy: string;
    };

}