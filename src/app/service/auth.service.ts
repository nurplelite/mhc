import { Injectable, inject, NgZone } from '@angular/core'
import { Auth, authState } from '@angular/fire/auth'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from '@angular/fire/auth'
import { BehaviorSubject, Observable } from 'rxjs'
import { UserService } from './user.service'
import { User } from '../models/user.model'

/**
 * Service to handle authentication-related operations.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private afAuth = inject(Auth)
  private zone = inject(NgZone)
  private userService = inject(UserService)
  private user: User | null = null
  private authStateSubject = new BehaviorSubject<User | null>(null)
  public authState$ = authState(this.afAuth)

  /**
   * Logs in a user with email and password.
   * @param email - The user's email.
   * @param passwd - The user's password.
   * @returns A promise that resolves to the authentication credential.
   */
  async login(email: string, passwd: string): Promise<string> {
    try {
      console.log(email, ' used to attempt login')
      const credential = await this.zone.run(() => signInWithEmailAndPassword(this.afAuth, email, passwd))
      if (credential.user) {
        this.user = {
          uId: credential.user.uid
        }
      }
      if (this.user) {
        this.userService.getUser(this.user.uId || '')
      }
      return 'Login successful'
    } catch (error: any) {
      return `Login failed: ${error.message}`
    }
  }

  /**
   * Logs out the current user.
   * @returns A promise that resolves when the user is logged out.
   */
  async logout(): Promise<void> {
    await this.zone.run(() => signOut(this.afAuth))
  }

  /**
   * Registers a new user with email and password.
   * @param email - The user's email.
   * @param passwd - The user's password.
   * @returns A promise that resolves to the authentication credential.
   */
  async registerUser(form: User, passwd: string): Promise<string> {
    try {
      console.log(form.email, ' attempting to register')
      const credential = await this.zone.run(() => createUserWithEmailAndPassword(this.afAuth, form.email || '', passwd))
      if (credential.user) {
        this.user = {
          email: form.email || '',
          displayName: form.displayName || '',
          firstName: form.firstName || '',
          lastName: form.lastName || '',
          uId: credential.user.uid,
        
        }
        await this.zone.run(() => this.userService.createUser(this.user))
      } else {
        throw new Error('User credential is null')
      }
      return 'Registration successful'
    } catch (error: any) {
      return `Registration failed: ${error.message}`
    }
  }

  /**
   * Sends a password reset email to the user.
   * @param email - The user's email.
   * @returns A promise that resolves when the email is sent.
   */
  async resetPassword(email: string): Promise<string> {
    try {
      await this.zone.run(() => sendPasswordResetEmail(this.afAuth, email))
      return 'Password reset email sent'
    } catch (error: any) {
      return `Failed to send password reset email: ${error.message}`
    }
  }

  /**
   * Returns a user-friendly error message based on the error code.
   * @param code - The error code.
   * @returns A user-friendly error message.
   */
  getErrorCodeMessage(code: string): string {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'This email is already in use'
      case 'auth/invalid-email':
        return 'Invalid email'
      case 'auth/weak-password':
        return 'Weak password'
      case 'auth/user-disabled':
        return 'User disabled'
      case 'auth/invalid-credential':
        return 'Password is incorrect'
      case 'auth/user-not-found':
        return 'User not found'
      case 'auth/wrong-password':
        return 'Wrong password'
      default:
        return 'An error occurred'
    }
  }
}
