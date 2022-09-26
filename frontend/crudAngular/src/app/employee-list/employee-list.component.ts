import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import {Employee} from '/CrudWebToken/frontend/crudAngular/src/app/employee'
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService:EmployeeService, private router:Router) { }

  employee: Employee[];
  ngOnInit(): void {
    this.getEmployees();
    // this.employee=[{
    //   "id":1,
    //   "firstName":"hey",
    //   "email":"1@.com",
    //   "lastName":"matata"
    // }];
  }
  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data=>{
      this.employee = data;
    })
  
  }
  private updateEmployee(id:number){
      this.router.navigate(["updateEmployee",id])
  }
   deleteEmployee(id:number){
    this.employeeService.DeleteEmployee(id).subscribe(data=>{
      console.log(data)
      this.getEmployees();
    })
}

}
