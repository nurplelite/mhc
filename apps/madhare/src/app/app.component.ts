import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  imports: [RouterModule, MatIconModule, MatDividerModule, MatButtonModule],
  selector: 'mad-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'madhare';
}
