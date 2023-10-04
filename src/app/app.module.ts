import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpComponent } from './emp/emp.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
const routes: Routes = [  
  { path: 'em', component: EmpComponent },  
  { path: 'employee', component: EmployeeComponent },  
  { path: 'admin', component: AdminComponent },  
  { path: 'star', component: StartComponent },  






];  

@NgModule({


  exports: [RouterModule]  ,



  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeComponent,
    EmpComponent,
    AdminComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  RouterModule.forRoot(routes) 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
