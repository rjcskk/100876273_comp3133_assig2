import { Route } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';

export const APP_ROUTES: Route[] = [
  { path: '', component: EmployeeListComponent, title: 'Employee List' },
  { path: 'employee/edit/:id', component: EmployeeDetailComponent, title: 'Edit Employee' },
];
