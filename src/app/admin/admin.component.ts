import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
declare var $: any ;

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: 'Table', title: 'Table List',  icon: 'ti-view-list-alt', class: '' },
  { path: 'accueil', title: 'accueil',  icon: 'ti-view-list-alt', class: '' },
];
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public loggedIn: Boolean;
  public menuItems: any[];
  constructor(private auth: AuthService ) {}
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.auth.authStatus.subscribe(value => this.loggedIn = value);
  }
  isNotMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

}
