import { Timestamp } from '@angular/fire/firestore';

export interface User {
    clientId?: string[];
    uId: string;
    primaryEmail: string;
    displayName?: string;
    firstName?: string;
    lastName?: string;
    type: 'prospect' | 'customer' | 'archive';
    propertyId?: string[];
    created: {
        createdAt: Timestamp;
        createdBy: string;
    }
    modified: {
        modifiedAt: Timestamp;
        modifiedBy: string;
    }; 
};