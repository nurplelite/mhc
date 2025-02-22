import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Firestore } from '@angular/fire/firestore';
import { doc, getDoc, setDoc } from '@angular/fire/firestore';
import { Timestamp } from '@angular/fire/firestore';

@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatCardModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  readonly passwd = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(16), Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]);
  readonly confirmPassword = new FormControl('', [Validators.required]);
  readonly firstName = new FormControl('', [Validators.required]);
  readonly lastName = new FormControl('', [Validators.required]);
  readonly displayName = new FormControl('', [Validators.required]);

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
    private firestore: Firestore,
  ) { }

passwordsMatch(form: FormGroup){
  return this.passwd === this.confirmPassword;
}
  
    register() {
    const email = this.email.value === this.passwd.value 
    ? null
    : {mismatch: true}

    this.authService.registerUser(this.email.value || '', 
    this.passwd.value || '')
        .then(() => {
          this.router.navigate(['/account']);
        })
        .catch((err) => {
          const message =  this.getErrorCodeMessage(err.code);
          this.snackBar.open(message, 'Close', {
            duration: 5000
          });
        });
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
