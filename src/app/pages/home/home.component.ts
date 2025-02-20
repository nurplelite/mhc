import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { environment } from '../../../environments/environment';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-home',
  imports: [MatGridListModule, MatCardModule, MatButtonModule, MatIcon],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  Company = environment.APP_TITLE;
  ImgUrl = environment.IMAGE_BASE_URL;
  ImgEncode = environment.IMAGE_ENCODE;
}
