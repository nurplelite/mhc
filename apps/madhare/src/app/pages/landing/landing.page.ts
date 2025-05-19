import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from '../../components/services.component';
import { PlansComponent } from '../../components/plans.component';
import { HeroComponent } from '../../components/hero.component';
import { FooterComponent } from '../../components/footer.component';


@Component({
  selector: 'mhc-landing',
  imports: [CommonModule, ServicesComponent, PlansComponent, HeroComponent, FooterComponent],
  standalone: true,
  providers: [],
  templateUrl: './landing.page.html',
  styles: ``,
})
export class LandingPageComponent {

}
