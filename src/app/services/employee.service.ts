import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from '../models/employee.model'; 

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'https://100876273-comp-3133-assignment1.vercel.app//graphql';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    const query = `
      query {
        getAllEmployees {
          id
          firstName
          lastName
          email
          gender
          salary
        }
      }
    `;

    return this.http.post<any>(this.apiUrl, {
      query
    }, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(
      map(response => response.data.getAllEmployees)
    );
  }

  getEmployeeById(id: string): Observable<Employee> {
    const query = `
      query SearchEmployeeById($id: ID!) {
        searchEmployeeById(id: $id) {
          id
          firstName
          lastName
          email
          gender
          salary
        }
      }
    `;

    return this.http.post<any>(this.apiUrl, {
      query,
      variables: { id }
    }, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(
      map(response => response.data.searchEmployeeById)
    );
  }
}
