import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id:number;
  employee:Employee = new Employee();
  constructor(private router:Router,private route:ActivatedRoute, private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee = data
    },error=>console.log(error)
    );
  }


  onSubmit(){
     this.employeeService.updateEmployee(this.id,this.employee).subscribe(data=>{
      console.log(data);
      this.goToList();
     },error=>console.log(error));
  }

  goToList(){
    this.router.navigate(['/employees'])
  }
}
