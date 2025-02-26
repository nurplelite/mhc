import { Component, inject } from '@angular/core'
import { AuthService } from '../../service/auth.service'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { RegistrationComponent } from '../registration/registration.component'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, RegistrationComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  private authService = inject(AuthService)
  private router = inject(Router)
  private snackBar = inject(MatSnackBar)
  private fb = inject(FormBuilder)
  public logMsg = ''

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    passwd: ['', [Validators.required, Validators.minLength(6)]]
  })

  login() {
    this.authService.login(this.loginForm.get('email')?.value, this.loginForm.get('passwd')?.value)
      .then(() => {
        console.log('Login successful')
        this.router.navigate(['/home'])
      })
      .catch((err) => {
        const message = this.authService.getErrorCodeMessage(err.code)
        this.logMsg = message
        this.snackBar.open(message, 'Close', { duration: 5000 })
      })
  }
}
