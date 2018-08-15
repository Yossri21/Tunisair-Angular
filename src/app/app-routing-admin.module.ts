import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {TableComponent} from './admin/table/table.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children : [
      {path: 'table' , component: TableComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRouting { }
