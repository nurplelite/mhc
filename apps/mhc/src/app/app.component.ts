import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "./components/header.component";
import { FooterComponent } from './components/footer.component';
import { CardsComponent } from './components/cards.component';



@Component({
  imports: [FooterComponent, RouterModule, HeaderComponent, CardsComponent],
  selector: 'app-root',
  template: `
  <div class="relative isolate overflow-hidden min-h-screen bg-gradient-to-tr from-[#333745] to-[#0d1113]">
  <!-- Noise Texture Layer -->
  <div class="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>

  <!-- Misty Blur Polygon Layer -->
  <div class="relative isolate overflow-hidden bg-gradient-to-tr from-[#333745] to-[#0d1113] py-32 sm:py-48 lg:py-56">
  <!-- Noise Layer -->
  <div class="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>

  <!-- Mist Layer -->
  <div aria-hidden="true" class="absolute left-1/2 top-0 -translate-x-1/2 sm:left-[calc(50%-18rem)] lg:left-12 xl:left-[calc(50%-24rem)]">
    <div class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#1E293B] to-[#0B1120] opacity-10 blur-4xl clip-path-polygon animate-mist"></div>
  </div>
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
