import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "./components/header.component";
import { FooterComponent } from './components/footer.component';
import { CardsComponent } from './components/cards.component';



@Component({
  imports: [FooterComponent, RouterModule, HeaderComponent, CardsComponent],
  selector: 'app-root',
  template: `
    <div class="wrapper">
      <app-header></app-header>
      <app-cards></app-cards>
      <app-footer></app-footer>
    </div>
  `,
  standalone: true,
  styles: `
    .wrapper {
      width: 100%;
      max-width: 1280px; /* or 1440px if you want even wider */
      margin-left: auto;
      margin-right: auto;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      position: relative;
      flex-direction: column;
      justify-content: center;
    }
  `
})
export class AppComponent {
  title = 'Dylan Jewett Property Services'
}
