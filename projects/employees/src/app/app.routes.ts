import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees/employees.component';

export const routes: Routes = [
    { path: '', redirectTo: 'employees', pathMatch: 'full' },
    {
        path: 'employees',
        loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule)
    },
];
