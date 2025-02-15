import {Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';




@Component({
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  styleUrl: 'nav.component.scss',
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatListModule
  ],
})
export class NavComponent {

}
