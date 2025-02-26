import { Component, inject, NgZone } from '@angular/core'
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'
import { AuthService } from '../../service/auth.service'
import { Router } from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { User } from '../../models/user.model'

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatCardModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  private authService = inject(AuthService)
  private router = inject(Router)
  private snackBar = inject(MatSnackBar)
  private fb = inject(FormBuilder)
  private zone = inject(NgZone)

  regForm: FormGroup

  constructor() {
    this.regForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      displayName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      passwd: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    })
  }

  isValid(): boolean {
    return Object.values(this.regForm.controls).every(control => control.value && control.valid);
  }

  async register(): Promise<any> {
    if (!this.isValid()) {
      this.snackBar.open('Please fill out all required fields', 'Close', { duration: 3000 })
      return
    }
    
    const user: User = {
      email: this.regForm.get('email')?.value,
      firstName: this.regForm.get('firstName')?.value,
      lastName: this.regForm.get('lastName')?.value,
      displayName: this.regForm.get('displayName')?.value
    }

    try {
      await this.zone.run(() => this.authService.registerUser(user, this.regForm.get('passwd')?.value))
      console.log('Registration successful ')
      this.router.navigate(['/home'])
    } catch (error) {
      console.error('Registration failed:', error instanceof Error ? error.message : error)
      this.snackBar.open(`Registration failed: ${error instanceof Error ? error.message : 'Unknown error'}`, 'Close', { duration: 5000 })
    }
    console.log(user.uId,' created with details', user.email, user.firstName, user.lastName, user.displayName)  
  }
}
