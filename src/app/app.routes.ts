import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ServicesComponent } from './pages/services/services.component';
import { LayoutComponent } from './core/layout/layout.component';
import { LoginComponent } from './core/login/login.component';
import { AccountComponent } from './pages/account/account.component';

export const routes: Routes = [
    { path: '', 
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'gallery', component: GalleryComponent },
            { path: 'services', component: ServicesComponent},
            { path: 'login', component: LoginComponent },
            { path: 'account', component: AccountComponent }, 
            { path: '**', redirectTo: 'home' }
        ]
    },
    { path: '**', redirectTo: 'home' }
];
