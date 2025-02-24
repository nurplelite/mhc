import { Injectable, inject, NgZone } from "@angular/core";
import { Auth } from "@angular/fire/auth";
import { createUserWithEmailAndPassword,
          signInWithEmailAndPassword,
          sendPasswordResetEmail,
          signOut
       } from "@angular/fire/auth";

/**
 * Service to handle authentication-related operations.
 */
@Injectable ({providedIn: 'root'})  // Injectable
export class AuthService {
  private afAuth = inject(Auth);
  private zone = inject(NgZone);

  constructor() {}

  /**
   * Logs in a user with email and password.
   * @param email - The user's email.
   * @param passwd - The user's password.
   * @returns A promise that resolves to the authentication credential.
   */
  login(email: string, passwd: string): Promise<any> {
      console.log(email,' used to attempt login')
      return this.zone.run(() => signInWithEmailAndPassword(this.afAuth, email, passwd));
  }

  /**
   * Logs out the current user.
   * @returns A promise that resolves when the user is logged out.
   */
  logout(): Promise<void> {
      return this.zone.run(() => signOut(this.afAuth));
  }

  /**
   * Registers a new user with email and password.
   * @param email - The user's email.
   * @param passwd - The user's password.
   * @returns A promise that resolves to the authentication credential.
   */
  registerUser(email: string, passwd: string): Promise<any> {
      console.log(email, ' attempting to register')
      return this.zone.run(() => createUserWithEmailAndPassword(this.afAuth, email, passwd));
  }

  /**
   * Sends a password reset email to the user.
   * @param email - The user's email.
   * @returns A promise that resolves when the email is sent.
   */
  resetPassword(email: string): Promise<void> {
      return this.zone.run(() => sendPasswordResetEmail(this.afAuth, email));
  }

  /**
   * Returns a user-friendly error message based on the error code.
   * @param code - The error code.
   * @returns A user-friendly error message.
   */
  getErrorCodeMessage(code: string): string {
      switch (code) {
        case 'auth/email-already-in-use':
          return 'This email is already in use';
        case 'auth/invalid-email':
          return 'Invalid email';
        case 'auth/weak-password':
          return 'Weak password';
        case 'auth/user-disabled':
          return 'User disabled';
        case 'auth/invalid-credential':
          return 'Password is incorrect';
        case 'auth/user-not-found':
          return 'User not found';
        case 'auth/wrong-password':
          return 'Wrong password';
        default:
          return 'An error occurred';
      }
    }

}
