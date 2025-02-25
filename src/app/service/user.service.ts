import { Injectable, inject } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { FirestoreService } from './firestore.service'
import { User } from '../models/user.model'
import { AuthService } from './auth.service'
import { map } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class UserService {
  private firestoreService = inject(FirestoreService)
  private authService = inject(AuthService)
  private userSubject = new BehaviorSubject<User | null>(null)
  public user$: Observable<User | null> = this.userSubject.asObservable()

  constructor() {
    this.authService.authState$.subscribe((user) => {
      if (user) {
        this.getUser(user.uid).subscribe((userData) => {
          if (userData) {
            this.userSubject.next(userData)
          } else {
            const newUser: User = {
              uId: user.uid,
              email: user.email || '',
              displayName: user.displayName || '',
              firstName: '',
              lastName: ''
            }
            this.createUser(newUser).then(() => this.userSubject.next(newUser))
          }
        })
      } else {
        this.userSubject.next(null)
      }
    })
  }

  getUser(uid: string): Observable<User | null> {
    return this.firestoreService.getDocument<User>('users', uid)
  }

  async createUser(user: User): Promise<void> {
    if (!user.uId || !user.email) {
      throw new Error('Invalid user data')
    }
    await this.firestoreService.createDocument('users', user.uId, user)
  }

  async updateUser(uid: string, data: Partial<User>): Promise<void> {
    if (!uid || !data) {
      throw new Error('Invalid update data')
    }
    await this.firestoreService.updateDocument('users', uid, data)
  }
}
