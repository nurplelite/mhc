import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-home',
  imports: [MatGridListModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  Company = environment.APP_TITLE;
  ImgUrl = environment.IMAGE_BASE_URL;
  ImgEncode = environment.IMAGE_ENCODE;
}
