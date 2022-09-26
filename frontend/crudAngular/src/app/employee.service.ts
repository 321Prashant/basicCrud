import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl="http://localhost:8080/Getpath/getAllEmployees"
  constructor(private HttpClient:HttpClient) { }

  getEmployeeList():Observable<Employee[]>{
    return this.HttpClient.get<Employee[]>(`http://localhost:8080/Getpath/getAllEmployees`);
  }
  createEmployee(employee:Employee):Observable<Employee>{
    return this.HttpClient.post<Employee>(`http://localhost:8080/Getpath/saveEmployee`,employee)
  }
  updateEmployee(id:number, employee:Employee):Observable<Object>{
    return this.HttpClient.put(`http://localhost:8080/Getpath/updateEmployee/${id}`,employee)
  }
  getEmployeeById(id:number):Observable<Employee>{
    return this.HttpClient.get<Employee>(`http://localhost:8080/Getpath/getById/${id}`);
  
  }
  DeleteEmployee(id:number):Observable<Object>{
    return this.HttpClient.delete(`http://localhost:8080/Getpath/delete/${id}`)
  }
}
