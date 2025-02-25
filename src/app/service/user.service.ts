import { inject, Injectable } from '@angular/core';
import { Firestore, doc, getDoc, setDoc } from '@angular/fire/firestore';
import { User } from '../models/user.model';
import { Timestamp } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

/**
 * Service to handle user-related operations with Firestore.
 */
@Injectable({ providedIn: 'root' })

export class UserService {

  private firestore = inject(Firestore)
  private userSubject = new BehaviorSubject<User | null>(null)
  user$ = this.userSubject.asObservable()

  constructor() {}

  /** Initialize behaviorsubject as an observable user for components */
  ngOnInit(): void {
    this.user$.subscribe(user => {
      console.log('User:', user)
    })
  }
  /**
   * Placeholder method for assigning a user.
   */
  assignUser(user: User | null): void {
    this.userSubject.next(user)
  }

  /**
   * Creates a new user in Firestore.
   * @param user - The user object to be created.
   * @returns A promise that resolves to an object indicating success or failure.
   */
  createUser(user: User | null): void {
    this.userSubject.next(user)
    }
  }

