import { Component } from '@angular/core';
//import { MaterialModule } from '../../material.module';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-home',
  imports: [MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
