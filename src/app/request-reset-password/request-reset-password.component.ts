import { Component, OnInit } from '@angular/core';
import {JarwisService} from '../services/jarwis.service';
import {SnotifyModule, SnotifyService} from 'ng-snotify';
import {Router} from '@angular/router';

@Component({
  selector: 'app-request-reset-password',
  templateUrl: './request-reset-password.component.html',
  styleUrls: ['./request-reset-password.component.css']
})
export class RequestResetPasswordComponent implements OnInit {
  public form = {
    email: null
  };

  constructor(private jarwis: JarwisService ,
              private Notify: SnotifyService,
              private router: Router) { }

  onSubmit() {
    this.Notify.info('Wait...' , { timeout: 5000 })
    this.jarwis.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
       // error => this.notify.error(error.error.error),
      error => this.Notify.error(error.error.error),
       // error => console.log(error)
    );

  }
  handleResponse(res) {
    this.Notify.success(res.data, { timeout: 0});
    this.form.email = null ;
    console.log(res) ;

  }

  ngOnInit() {
  }

}
