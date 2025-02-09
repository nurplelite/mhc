import { Timestamp } from '@angular/fire/firestore';

export interface Service {
  id: string;
  name: string;
  description?: string;
  price: number;
  createdAt: Timestamp;
}

