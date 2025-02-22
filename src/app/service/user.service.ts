import { Injectable } from '@angular/core';
import { Firestore, doc, getDoc, setDoc } from '@angular/fire/firestore';
import { User } from '../models/user.model';
import { Timestamp } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private firestore: Firestore) {}

  async createOrUpdateUser(user: User): Promise<void> {
    const userRef = doc(this.firestore, 'users', user.uId);
    const userSnapshot = await getDoc(userRef);

    if (userSnapshot.exists()) {
      await setDoc(userRef, {
        ...user,
        modified: { modifiedAt: Timestamp.now(), modifiedBy: user.uId }
      }, { merge: true });
    } else {
      await setDoc(userRef, {
        ...user,
        created: { createdAt: Timestamp.now(), createdBy: user.uId },
        modified: { modifiedAt: Timestamp.now(), modifiedBy: user.uId }
      });
    }
  }
}
