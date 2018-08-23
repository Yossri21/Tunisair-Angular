import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ClientReqService {

  constructor(private http: HttpClient) { }
  create(data) {
    return this.http.post('http://localhost:8000/api/requestclient' , data);
  }

}
