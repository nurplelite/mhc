import { Component, inject } from '@angular/core'
import { AuthService } from '../../service/auth.service'
import { Router } from '@angular/router'
import { FormControl, Validators, FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { User } from '../../models/user.model'

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, MatCardModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})

export class RegistrationComponent {
  private authService = inject(AuthService)
  private router = inject(Router)
  private snackBar = inject(MatSnackBar)
  private fb = inject(FormBuilder)
  public logMsg = ''

  regForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    passwd: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16), Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]],
    confirmPassword: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    displayName: ['', [Validators.required]]
  })

  pwMatch(): boolean {
    return this.regForm.value.passwd === this.regForm.value.confirmPassword
  }

  register() {
    if (!this.pwMatch()) {
      this.snackBar.open('Passwords do not match, please try again', 'Close', { duration: 5000 })
      return
    }

    const user: User = {
      email: this.regForm.value.email,
      firstName: this.regForm.value.firstName,
      lastName: this.regForm.value.lastName,
      displayName: this.regForm.value.displayName
    }

    this.authService.registerUser(user, this.regForm.value.passwd)
      .then(() => {
        console.log(user.email, 'successfully registered')
        this.router.navigate(['/account'])
      })
      .catch((err) => {
        const message = this.authService.getErrorCodeMessage(err.code)
        this.logMsg = message
        this.snackBar.open(message, 'Close', { duration: 5000 })
      })
  }
}
