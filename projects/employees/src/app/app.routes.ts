import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'employees', pathMatch: 'full' },
    {
        path: 'employees',
        loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule)
    },
];