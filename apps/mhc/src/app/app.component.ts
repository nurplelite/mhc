import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "./components/header.component";
import { FooterComponent } from './components/footer.component';
import { CardsComponent } from './components/cards.component';


@Component({
  imports: [FooterComponent, RouterModule, HeaderComponent, CardsComponent],
  selector: 'app-root',
  template: `
    <div class="max-w- mx-auto px-2">
      <app-header></app-header>
      <app-cards></app-cards>
      <app-footer></app-footer>
    </div>
  `,
  standalone: true,
  styles: ``
})
export class AppComponent {
  title = 'Dylan Jewett Property Services'
}
