import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ClientReqService} from '../client-req.service';
import {SnotifyService} from 'ng-snotify';
import {AuthService} from '../auth.service';
import {TookenService} from '../tooken.service';

@Component({
  selector: 'app-client-request',
  templateUrl: './client-request.component.html',
  styleUrls: ['./client-request.component.css']
})
export class ClientRequestComponent implements OnInit {
  public loggedIn: boolean;
  public form = {
    name : null,
    email : null,
    phone : null,
    website: null,
    message : null
  };
  public error = null ;

  constructor(private router: Router , private client: ClientReqService , private Notify: SnotifyService ,
              private auth: AuthService , private token: TookenService) { }
  onSubmit() {
    console.log(this.form);
    this.Notify.info('We will contact you as soon as possible ' , { timeout: 5000 });
    return this.client.create(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data) {
    this.router.navigateByUrl('/client-request');
  }
  handleError(error) {
    this.error = error.error.error;
  }

  ngOnInit() {
    this.auth.authStatus.subscribe(value => this.loggedIn = value) ;
  }

}
