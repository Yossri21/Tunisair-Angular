import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { RouterModule , Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {ForgetpsdComponent} from './forgetpsd/forgetpsd.component';
import {FirstpageComponent} from './firstpage/firstpage.component';
import {EspacePassagerComponent} from './espace-passager/espace-passager.component';
import {EspacePartenaireComponent} from './espace-partenaire/espace-partenaire.component';
import {ContactComponent} from './contact/contact.component';
import {CentreDeFormationComponent} from './centre-de-formation/centre-de-formation.component';
import {TservicesComponent} from './tservices/tservices.component';
import {ProfileComponent} from './profile/profile.component';
import {BeforeLoginService} from './before-login.service';
import {AfterLoginService} from './after-login.service';
import {RequestResetPasswordComponent} from './request-reset-password/request-reset-password.component';
import {BasicComponent} from './basic/basic.component';
import {ClientRequestComponent} from './client-request/client-request.component';


const appRoutes: Routes = [
  {
    path: '',
    component: BasicComponent,
    children: [
      { path: '', redirectTo: 'accueil', pathMatch: 'full' },
      {path: 'accueil' , component: FirstpageComponent} ,
      {path: 'Tservices' , component: TservicesComponent},
      {path: 'espace-passager' , component: EspacePassagerComponent },
      {path: 'centre-de-formation' , component: CentreDeFormationComponent },
      {path: 'espace-partenaire' , component: EspacePartenaireComponent } ,
      {path: 'contact' , component: ContactComponent},
      {path: 'client-request/login', component: LoginComponent , canActivate: [BeforeLoginService]},
     // {path: 'signup' , component: SignupComponent , canActivate: [BeforeLoginService]},
      {path: 'client-request' , component: ClientRequestComponent } ,
      {path: 'forgetPasword' , component: ForgetpsdComponent},
      {path: 'espace-partenaire/profile' , component: ProfileComponent , canActivate: [AfterLoginService]},
      {path: 'resetpassword' , component: RequestResetPasswordComponent , canActivate: [BeforeLoginService]}
    ]
  }
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})
export class BasicModuleRouting { }
