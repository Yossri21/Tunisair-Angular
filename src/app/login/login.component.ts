import { Component, OnInit } from '@angular/core';
import {JarwisService} from '../services/jarwis.service';
import {TookenService} from '../tooken.service';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  };
  public error = null;
  constructor( private jarwis: JarwisService ,
               private token: TookenService ,
               private router: Router ,
               private auth: AuthService) { }

  onSubmit() {
    // console.log(this.form);
    return this.jarwis.login(this.form).subscribe(
       // data => console.log(data),
       // data => this.handleResponse(data) ,
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/client-request');
  }
  handleError(error) {
    this.error = error.error.error;
  }


  ngOnInit() {
  }

}
