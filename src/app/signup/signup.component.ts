import { Component, OnInit } from '@angular/core';
import {JarwisService} from '../services/jarwis.service';
import {TookenService} from '../tooken.service';
import {Router} from '@angular/router';
import {Alert} from 'selenium-webdriver';
import {SnotifyService} from 'ng-snotify';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public form = {
    email : null,
    name : null,
    password : null,
    password_confirmation : null
  };
  public requestlist = [];
  public errorr = false ;
  constructor(private jarwis: JarwisService , private token: TookenService , private router: Router ,
              private Notify: SnotifyService , private req: JarwisService ) { }
  public error = [];
  onSubmit() {
    // console.log(this.form);
    this.Notify.info('Wait...' , { timeout: 2000 });
    return this.jarwis.signup(this.form).subscribe(
     // data => console.log(data),
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.token.handle(data.access_token);
    this.router.navigateByUrl('/admin/addAccount');
    this.Notify.success(data.data , { timeout: 0});
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  loadrequest() {
    this.req.getAllreqest().subscribe(
      data => this.handleReq(data),
      err => this.handleErr(err),
    );
    }
    handleReq(data) {
    this.requestlist = data.requestclient;
    console.log(data) ;
    }
    handleErr(errorr) {
    this.errorr = true;
    this.requestlist = [] ;
    }
  ngOnInit() {
    this.errorr = false;
    this.loadrequest();
  }

}
