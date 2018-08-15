import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {TookenService} from './tooken.service';

@Injectable()
export class AfterLoginService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot , state: RouterStateSnapshot): boolean |
Observable<boolean> |Promise<boolean> {
    return this.token.loggedIn() ;
  }

  constructor(private token: TookenService) { }

}
