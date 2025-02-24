import { Injectable } from '@angular/core';
import { Firestore, doc, getDoc, setDoc } from '@angular/fire/firestore';
import { User } from '../models/user.model';
import { Timestamp } from '@angular/fire/firestore';

/**
 * Service to handle user-related operations with Firestore.
 */
@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private firestore: Firestore) {}

  /**
   * Placeholder method for assigning a user.
   */
  assignUser(){}

  /**
   * Creates a new user in Firestore.
   * @param user - The user object to be created.
   * @returns A promise that resolves to an object indicating success or failure.
   */
  async createUser(user: User): Promise<{success: boolean; error?: string}> {
    const userRef = doc(this.firestore, 'users', user.uId);
    const userSnapshot = await getDoc(userRef);

    if (userSnapshot.exists()) {
      return { success: false, error: 'User already exists'};
    } else {
      await setDoc(userRef, {
        ...user,
        created: { createdAt: Timestamp.now(), createdBy: user.uId },
        modified: { modifiedAt: Timestamp.now(), modifiedBy: user.uId }
      });
      return {success: true};
    }
  }
}
