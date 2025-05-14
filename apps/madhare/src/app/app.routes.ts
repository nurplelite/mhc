import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AccountComponent } from './pages/account/account.component';
import { DashComponent } from './pages/dashboard/dash.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'account', component: AccountComponent },
  { path: 'dashboard', component: DashComponent}

]
