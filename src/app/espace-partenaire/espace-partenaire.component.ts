import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {TookenService} from '../tooken.service';

@Component({
  selector: 'app-espace-partenaire',
  templateUrl: './espace-partenaire.component.html',
  styleUrls: ['./espace-partenaire.component.css']
})
export class EspacePartenaireComponent implements OnInit {
  public loggedIn: boolean;

  constructor( private auth: AuthService ,
               private router: Router ,
               private token: TookenService
  ) { }

  ngOnInit() {
    this.auth.authStatus.subscribe(value => this.loggedIn = value);
  }
  logout(event: MouseEvent) {
    event.preventDefault();
    this.auth.changeAuthStatus(false);
    this.token.remove();
    this.router.navigateByUrl('/espace-partenaire/login');
  }

}
