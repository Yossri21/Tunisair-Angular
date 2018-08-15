import { Injectable } from '@angular/core';
import {TookenService} from './tooken.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {isBoolean} from 'util';

@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.token.loggedIn());
  authStatus = this.loggedIn.asObservable();
  changeAuthStatus(value: boolean) {
    this.loggedIn.next(value);
  }

  constructor(private token: TookenService) { }

}
