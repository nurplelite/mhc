import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-services',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  Company = environment.appTitle;
  ImgUrl = environment.urlBase;
  ImgEncode = environment.imgEncode;
}
