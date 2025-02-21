import { Injectable } from "@angular/core";
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
    constructor(
        private firestore: Firestore,
        private afAuth: Auth,
        user$: Observable<User>
    
    ) {
    }

    login(email: string, passwd: string): Promise<any> {
        return signInWithEmailAndPassword(this.afAuth, email, passwd);
    }

    logout(): Promise<void> {
        return signOut(this.afAuth);
    }

    registerUser(email: string, passwd: string): Promise<any> {
        return createUserWithEmailAndPassword(this.afAuth, email, passwd);
    }

    resetPassword(email: string): Promise<void> {
        return sendPasswordResetEmail(this.afAuth, email);
    }

}