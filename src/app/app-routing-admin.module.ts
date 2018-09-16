import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {TableComponent} from './admin/table/table.component';
import {SignupComponent} from './signup/signup.component';
import {BeforeLoginService} from './before-login.service';
import {AfterLoginService} from './after-login.service';
import {PartnerComponent} from './admin/partner/partner.component';
import {TravelrequestComponent} from './admin/travelrequest/travelrequest.component';
import {ModtravelrequestComponent} from './admin/modtravelrequest/modtravelrequest.component';
import {LoginadminComponent} from './admin/loginadmin/loginadmin.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    // canActivateChild: [AfterLoginService],
    children : [
      {path: 'login' , component: LoginadminComponent , canActivate: [BeforeLoginService]},
      {path: 'table' , component: TableComponent , canActivate: [AfterLoginService]} ,
      {path: 'addAccount' , component: SignupComponent , canActivate: [AfterLoginService]},
      {path: 'addPartnair' , component: PartnerComponent , canActivate: [AfterLoginService]},
      {path: 'requesttravel', component: TravelrequestComponent , canActivate: [AfterLoginService]},
      {path: 'requesttravel/modification/:id' , component: ModtravelrequestComponent , canActivate: [AfterLoginService]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRouting { }
