import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeesComponent } from './employees/employees/employees.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeeListComponent], //
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'employees';
}
