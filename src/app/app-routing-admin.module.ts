import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {TableComponent} from './admin/table/table.component';
import {SignupComponent} from './signup/signup.component';
import {BeforeLoginService} from './before-login.service';
import {AfterLoginService} from './after-login.service';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children : [
      {path: 'table' , component: TableComponent},
      {path: 'addAccount' , component: SignupComponent , canActivate: [AfterLoginService]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRouting { }
