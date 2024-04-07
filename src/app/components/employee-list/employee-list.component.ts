import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterLink, RouterModule } from '@angular/router'; // Import RouterModule for routerLink
import { EmployeeService } from '../../services/employee.service'; // Adjust path as necessary
import { Employee } from '../../models/employee.model'; // Adjust path as necessary

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink], // Include CommonModule and RouterModule here
  templateUrl: './employee-list.component.html',
  providers: [EmployeeService] // Provide the EmployeeService
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees;
    }, error => {
      console.error("Failed to fetch employees", error);
    });
  }
}
