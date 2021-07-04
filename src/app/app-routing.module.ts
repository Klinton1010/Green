import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { OverviewComponent } from './overview/overview.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  //{path:'',component:DepartmentlistComponent},
  {path:'',redirectTo:'/departments-list',pathMatch:'full'},
  {path:'departments-list',component:DepartmentlistComponent},
  {path:'departments-list/:id',
  component:DepartmentDetailsComponent,
  children:[
    {path:"overview",component:OverviewComponent},
    {path:"contactlist",component:ContactListComponent}]
  },
  {path:'employee',component:EmployeeListComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[DepartmentlistComponent,EmployeeListComponent,
  PagenotfoundComponent,DepartmentDetailsComponent,ContactListComponent,OverviewComponent]
