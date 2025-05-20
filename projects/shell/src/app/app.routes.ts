import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { ShellHomeComponent } from './shell-home/shell-home.component';

export const routes: Routes = [
    { path: '', component: ShellHomeComponent, pathMatch: 'full' },
    {
        path: 'products',
        loadComponent: () =>
            loadRemoteModule('products', './Component').then((m) => m.AppComponent),
    },
    {
        path: '**',
        component: ShellHomeComponent,
    }
];
