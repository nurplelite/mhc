import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButton } from '@angular/material/button';



@Component({
  imports: [ RouterModule, MatGridListModule, MatButton ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'madhare';
}
