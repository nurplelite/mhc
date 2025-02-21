import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = new FormControl('');
  passwd = new FormControl('');
  user: User = {} as User;
  user$: Observable<User>;

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.user$ = this.authService.user$;
  }

  login() {
    this.authService.login(this.email.value, this.passwd.value)
      .then(() => {
        this.router.navigate(['/dashboard']);
      })
      .catch((err) => {
        this.snackBar.open(err.message, 'Close', {
          duration: 5000
        });
      });
  }

  logout() {
    this.authService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch((err) => {
        this.snackBar.open(err.message, 'Close', {
          duration: 5000
        });
      });
  }

  register() {
    this.authService.registerUser(this.email.value, this.passwd.value)
      .then(() => {
        this.router.navigate(['/dashboard']);
      })
      .catch((err) => {
        this.snackBar.open(err.message, 'Close', {
          duration: 5000
        });
      });
  }

  resetPassword() {
    this.authService.resetPassword(this.email.value)
      .then(() => {
        this.snackBar.open('Password reset email sent', 'Close', {
          duration: 5000
        });
      })
      .catch((err) => {
        this.snackBar.open(err.message, 'Close', {
          duration: 5000
        });
      });
  }
}
