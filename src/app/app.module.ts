import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { LoginComponent } from './login/login.component';
import { BasicModuleRouting } from './app-routing.module';
import { SignupComponent } from './signup/signup.component';
import { ForgetpsdComponent } from './forgetpsd/forgetpsd.component';
import { EspacePassagerComponent } from './espace-passager/espace-passager.component';
import { CentreDeFormationComponent } from './centre-de-formation/centre-de-formation.component';
import { EspacePartenaireComponent } from './espace-partenaire/espace-partenaire.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TservicesComponent } from './tservices/tservices.component';
import { JarwisService } from './services/jarwis.service';
import {TookenService} from './tooken.service';
import { AuthService } from './auth.service';
import { AfterLoginService } from './after-login.service';
import { BeforeLoginService } from './before-login.service';
import { ProfileComponent } from './profile/profile.component';
import { RequestResetPasswordComponent } from './request-reset-password/request-reset-password.component';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { AdminModuleRouting } from './app-routing-admin.module';
import { BasicComponent } from './basic/basic.component';
import { TableComponent } from './admin/table/table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FirstpageComponent,
    LoginComponent,
    SignupComponent,
    ForgetpsdComponent,
    EspacePassagerComponent,
    CentreDeFormationComponent,
    EspacePartenaireComponent,
    ContactComponent,
    AdminComponent,
    TservicesComponent,
    ProfileComponent,
    RequestResetPasswordComponent,
    BasicComponent,
    TableComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    BasicModuleRouting,
    RouterModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule,
    AdminModuleRouting
  ],
  providers: [JarwisService, TookenService, AuthService, AfterLoginService, BeforeLoginService ,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
