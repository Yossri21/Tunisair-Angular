import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {ClientReqService} from '../../client-req.service';
import {Router} from '@angular/router';
import {TookenService} from '../../tooken.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
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
    this.router.navigateByUrl('/admin');
  }

}
