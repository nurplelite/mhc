import { Component, inject } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatCardModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  readonly regForm = FormGroup
  private authService = inject(AuthService)
  public logMsg = ''

  readonly email = new FormControl('', [Validators.required, Validators.email])
  readonly passwd = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(16), Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')])
  readonly confirmPassword = new FormControl('', [Validators.required])
  readonly firstName = new FormControl('', [Validators.required])
  readonly lastName = new FormControl('', [Validators.required])
  readonly displayName = new FormControl('', [Validators.required])

  constructor(
    //private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) { }

  ngOninit() {}

  pwMatch(pw: string, confirmPw: string) {
    if (pw === confirmPw) {
      return true
    } else
      return false
  }

  register() {
    console.log('entering registration function')
    if(this.pwMatch(this.passwd.value || '',this.confirmPassword.value || '')) {
      //register user takes user, passd
      this.authService.registerUser(this.email.value || '',
        this.passwd.value || '')
          .then((credential) => {
            console.log(this.email, 'successfully registered: ', credential)
            this.router.navigate(['/account'])
          })
          .catch((err) => {
            const message = this.authService.getErrorCodeMessage(err.code)
            this.logMsg = err
            this.snackBar.open(message, 'Close', {
              duration: 5000
            })
          })
        } else {
          this.snackBar.open('Passwords do not Match, please try again')
        }
  }
}
