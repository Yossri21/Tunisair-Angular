import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {TookenService} from '../tooken.service';
import {ClientReqService} from '../client-req.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loggedIn: boolean;

  constructor(private auth: AuthService ,
              private router: Router ,
              private token: TookenService ,
              private partner: ClientReqService) { }

  ngOnInit() {
    this.auth.authStatus.subscribe(value => this.loggedIn = value);
  }
  logout(event: MouseEvent) {
    event.preventDefault();
    this.auth.changeAuthStatus(false);
    this.token.remove();
    localStorage.clear();
    this.router.navigateByUrl('client-request/login');
  }

}
