import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {JarwisService} from '../../services/jarwis.service';
import {Router} from '@angular/router';
import {TookenService} from '../../tooken.service';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {
  public form = {
    email: null,
    password: null
  };
  public error = null;

  constructor( private jarwis: JarwisService ,
               private token: TookenService ,
               private router: Router ,
               private auth: AuthService) { }

  ngOnInit() {
  }
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
    console.log(data);
    localStorage.setItem('user', JSON.stringify(data.user));
    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/admin');
  }
  handleError(error) {
    this.error = error.error.error;
  }

}
