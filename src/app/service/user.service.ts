import { inject, Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { User } from '../models/user.model';
import { Timestamp } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './auth.service';

/**
 * Service to handle user-related operations with Firestore.
 */
@Injectable({ providedIn: 'root' })
export class UserService {
  private firestore = inject(Firestore)
  private userSubject = new BehaviorSubject<User | null>(null)
  public user$: Observable<User | null> = this.userSubject.asObservable()

  constructor() {

  }
  /**
   * Placeholder method for assigning a user.
   */
  assignUser(user: User){}

  /**
   * Creates a new user in Firestore.
   * @param user - The user object to be created.
   * @returns A promise that resolves to an object indicating success or failure.
   */
  async createUser(user: User): Promise<{success: boolean; error?: string}> {

  }
}
