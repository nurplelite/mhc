import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { environment } from '../../../environments/environment';
import { LoginComponent } from '../../core/login/login.component';

@Component({
  selector: 'app-home',
  imports: [MatGridListModule, MatCardModule, MatButtonModule, LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  Company = environment.appTitle;
  ImgUrl = environment.urlBase;
  ImgEncode = environment.imgEncode;
}
