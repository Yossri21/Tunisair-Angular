import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class JarwisService {

  constructor(private http: HttpClient) { }
  signup(data) {
    return this.http.post('http://localhost:8000/api/signup' , data);
  }
  login(data) {
    return this.http.post('http://localhost:8000/api/login' , data) ;
  }
  sendPasswordResetLink(data) {
    return this.http.post('http://localhost:8000/api/sendPasswordResetLink' , data) ;
  }
  changePassword(data) {
    return this.http.post('http://localhost:8000/api/resetPassword' , data) ;
  }
  getAll() {
    return this.http.get('http://localhost:8000/api/user');
  }
  getAllreqest() {
    return this.http.get('http://localhost:8000/api/request');
  }

}
