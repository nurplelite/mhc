import { Injectable, inject, NgZone } from "@angular/core";
import { Firestore } from "@angular/fire/firestore";
import { Auth } from "@angular/fire/auth";
import { createUserWithEmailAndPassword
   ,signInWithEmailAndPassword, 
   sendPasswordResetEmail, 
   signOut, 
   onAuthStateChanged } from "@angular/fire/auth"; 
import { User } from "../models/user.model";
import { Observable } from "rxjs";

@Injectable ({providedIn: 'root'})  // Injectable

export class AuthService {
  private auth = inject(Auth);
  
  constructor(
        private firestore: Firestore,
        private afAuth: Auth,
        private zone: NgZone
      ) {
    
    }


    login(email: string, passwd: string): Promise<any> {
        console.log(email, passwd, 'used to attempt login')
        return this.zone.run(() => signInWithEmailAndPassword(this.afAuth, email, passwd));
    }

    logout(): Promise<void> {
        return this.zone.run(() => signOut(this.afAuth));
    }

    registerUser(email: string, passwd: string): Promise<any> {
        console.log(email, passwd, ' attempting to register')
        return this.zone.run(() => createUserWithEmailAndPassword(this.afAuth, email, passwd));
    }

    resetPassword(email: string): Promise<void> {
        return this.zone.run(() => sendPasswordResetEmail(this.afAuth, email));
    }

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