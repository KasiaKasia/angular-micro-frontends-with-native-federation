import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { ShellHomeComponent } from './shell-home/shell-home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: 'start', pathMatch: 'full' },
      {
        path: 'employees',
        loadComponent: () =>
            loadRemoteModule('employees', './Component').then((m) => m.AppComponent),
    },
    {
        path: 'products',
        loadComponent: () =>
            loadRemoteModule('products', './Component').then((c) => c.AppComponent),
    },
    {
        path: 'website-map',
        loadChildren: () => import('./website-map/website-map.module').then(m => m.WebsiteMapModule)
    },
    {
        path: 'start',
        component: ShellHomeComponent,
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: '**',
        redirectTo: '404'
    }
];
