import { Injectable, inject, Injector, NgZone } from '@angular/core'
import { FirestoreService } from './firestore.service'
import { AuthService } from './auth.service'
import { User } from '../models/user.model'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class UserService {
  private firestoreService = inject(FirestoreService)
  private injector = inject(Injector)
  private zone = inject(NgZone)
  private authService!: AuthService

  private get auth(): AuthService {
    if (!this.authService) {
      this.authService = this.injector.get(AuthService)
    }
    return this.authService
  }

  getUser(uId: string): Observable<User | null> {
    try {
      return this.firestoreService.getDocument<User>('users', uId)
    } catch (error) {
      console.error(`Failed to get user: ${uId}`, error)
      throw error
    }
  }

  async createUser(user: User | null): Promise<void> {
    try {
      if (!user || !user.uId) {
        throw new Error('Invalid user data')
      }
      const uId = user.uId
      await this.zone.run(() => this.firestoreService.createDocument('users', uId, user))
      console.log(`User created: ${uId}`)
    } catch (error) {
      console.error(`Failed to create user: ${user?.uId}`, error)
      throw error
    }
  }

  async updateUser(uId: string, data: Partial<User>): Promise<void> {
    try {
      await this.zone.run(() => this.firestoreService.updateDocument('users', uId, data))
      console.log(`User updated: ${uId}`)
    } catch (error) {
      console.error(`Failed to update user: ${uId}`, error)
      throw error
    }
  }
}
