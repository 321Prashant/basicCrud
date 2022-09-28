import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
{path:"employees", component:EmployeeListComponent},
{path:" ",redirectTo:'abc', pathMatch:'full'},
{path:"createEmployee", component:CreateEmployeeComponent},
{path:"updateEmployee/:id", component:UpdateEmployeeComponent},
{path:"home", component:HomeComponent},
{path:"admin", component:AdminComponent,canActivate:[AuthGuard], data:{roles:['Admin']}},
{path:"user", component:UserComponent,canActivate:[AuthGuard], data:{roles:['User']}},
{path:"login", component:LoginComponent},
{path:"forbidden", component:ForbiddenComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
