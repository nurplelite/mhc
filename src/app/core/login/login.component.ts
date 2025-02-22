import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatCardModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  readonly passwd = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(16), Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]);

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {

  }

  login() {
    this.authService.login(this.email.value || '', this.passwd.value || '')
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch((err) => {
        const message =  this.getErrorCodeMessage(err.code);
        this.snackBar.open(message, 'Close', {
          duration: 5000
        });
      });
  }

  logout() {
    this.authService.logout()
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch((err) => {
        const message =  this.getErrorCodeMessage(err.code);
        this.snackBar.open(message, 'Close', {
          duration: 5000
        });
      });
  }

  register() {
    this.authService.registerUser(this.email.value || '', this.passwd.value || '')
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

  resetPassword() {
    this.authService.resetPassword(this.email.value || '')
      .then(() => {
        this.snackBar.open('Password reset email sent', 'Close', {
          duration: 5000
        });
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
