import { Route } from '@angular/router';
import { LandingPageComponent } from './pages/landing/landing.page';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingPageComponent,
  }

];
