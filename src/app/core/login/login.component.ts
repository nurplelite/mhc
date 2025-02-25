import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Firestore } from '@angular/fire/firestore';
import { doc, getDoc, setDoc } from '@angular/fire/firestore';
import { Timestamp } from '@angular/fire/firestore';
import { RegistrationComponent } from '../registration/registration.component';

/**
 * Component for handling user login.
 */
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatCardModule, RegistrationComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  readonly email = new FormControl('', [Validators.required, Validators.email])
  readonly passwd = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(16), Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')])
  public logMsg = ''

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {}

  /**
   * Logs in a user with email and password.
   */
  login() {
    this.authService.login(this.email.value || '', this.passwd.value || '')
      .then((credential) => {
        this.logMsg += 'user logged in:' + credential
        this.router.navigate(['/home'])
      })
      .catch((err) => {
        const message = this.authService.getErrorCodeMessage(err.code)
        this.snackBar.open(message, 'Close', {
          duration: 5000
        })
      })
  }

  /**
   * Logs out the current user.
   */
  logout() {
    this.authService.logout()
      .then(() => {
        this.router.navigate(['/home'])
      })
      .catch((err) => {
        const message = this.authService.getErrorCodeMessage(err.code)
        this.snackBar.open(message, 'Close', {
          duration: 5000
        })
      })
  }

  /**
   * Registers a new user with email and password.
   */
  register() {
    this.authService.registerUser(this.email.value || '', this.passwd.value || '')
      .then((credential) => {
        console.log(this.email, 'registration successful for: ', credential)
        this.router.navigate(['/account'])
      })
      .catch((err) => {
        const message = this.authService.getErrorCodeMessage(err.code)
        this.snackBar.open(message, 'Close', {
          duration: 5000
        })
      })
  }

  /**
   * Sends a password reset email to the user.
   */
  resetPassword() {
    this.authService.resetPassword(this.email.value || '')
      .then(() => {
        this.snackBar.open('Password reset email sent', 'Close', {
          duration: 5000
        })
      })
      .catch((err) => {
        const message = this.authService.getErrorCodeMessage(err.code)
        this.snackBar.open(message, 'Close', {
          duration: 5000
        })
      })
  }
}
