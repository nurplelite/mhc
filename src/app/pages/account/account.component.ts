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
import { Firestore } from '@angular/fire/firestore';
import { doc, getDoc, setDoc } from '@angular/fire/firestore';
import { Timestamp } from '@angular/fire/firestore';

@Component({
  selector: 'app-account',
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatCardModule, ReactiveFormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {

}

