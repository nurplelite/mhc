import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ServicesComponent } from './pages/services/services.component';
import { LayoutComponent } from './core/layout/layout.component';

export const routes: Routes = [
    { path: '', 
        component: LayoutComponent, pathMatch: 'full',
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'gallery', component: GalleryComponent },
            { path: 'services', component: ServicesComponent}
        ]
    }
];
