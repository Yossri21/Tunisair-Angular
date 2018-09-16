import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ClientReqService} from '../client-req.service';
import {SnotifyService} from 'ng-snotify';
import {AuthService} from '../auth.service';
import {TookenService} from '../tooken.service';
import {isBoolean} from 'util';

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
    message : null,

  };
  public travel = {
    id_travel : null,
    date : null,
    numb_travelers : null,
    remark : null,
    user_id: null,
    user_name: null
  };
  public error = null ;
  public profile = null;
  public test = false ;
  public listreq = [];
  public errorr = false;
  public tra = null;

  constructor(private router: Router , private client: ClientReqService , private Notify: SnotifyService ,
              private auth: AuthService ,
              private token: TookenService ,
              private req: ClientReqService ) { }
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
    const x = JSON.parse(localStorage.getItem('user'));
    console.log(x);
    if(x!==null) {
      this.profile = x.id ;
      console.log(x);
      console.log(this.profile);
      if (this.profile === 1 ) {
        this.test = true ;
      }
      this.errorr = false ;
      this.loadrequest() ;
    }
  }
  onSubmittravel() {

    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    this.travel.user_id = user.id;
    this.travel.user_name = user.name;

    console.log(this.travel);
    /*
    console.log(this.token.get());
    console.log(this.token.payload(this.token.get()));
    console.log(this.token.decode(this.token.payload(this.token.get())));
    */
    this.Notify.info('We will answer you' , { timeout: 5000 });
    return this.client.travel(this.travel).subscribe(
      data => this.handResponse(data),
      error => this.handError(error)
    );
  }
  handResponse(data) {
    this.router.navigateByUrl('/client-request');
  }
  handError(error) {
    this.error = error.error.error;
  }
  loadrequest() {
    this.req.travelrequest().subscribe(
      data => this.handlereq(data),
      err => this.handleErr(err),
    );
  }
  handlereq(data) {
    this.listreq = data.travels;
    console.log(data) ;
  }
  handleErr(errorr) {
    this.errorr = false;
    this.listreq = [] ;
  }
}
