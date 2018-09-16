import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {TookenService} from '../tooken.service';
import {ClientReqService} from '../client-req.service';

@Component({
  selector: 'app-espace-partenaire',
  templateUrl: './espace-partenaire.component.html',
  styleUrls: ['./espace-partenaire.component.css']
})
export class EspacePartenaireComponent implements OnInit {
  public loggedIn: boolean;
  public error = null;
  public partnerlist = [] ;

  constructor( private auth: AuthService ,
               private router: Router ,
               private token: TookenService,
               private partner: ClientReqService
  ) { }

  ngOnInit() {
    this.auth.authStatus.subscribe(value => this.loggedIn = value);
    this.error = false ;
    this.loadpartner();
  }
  loadpartner() {
    this.partner.getpartner().subscribe(
      data => this.handleres(data),
      err => this.handleErr (err)
    );
  }

  handleres(data) {
    this.partnerlist = data.partnaires;
  }
  handleErr(error) {
    this.error = true;
    this.partnerlist = [];
  }
  logout(event: MouseEvent) {
    event.preventDefault();
    this.auth.changeAuthStatus(false);
    this.token.remove();
    this.router.navigateByUrl('client-request/login');
  }

}
