import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ClientReqService {

  constructor(private http: HttpClient) { }
  create(data) {
    return this.http.post('http://localhost:8000/api/requestclient' , data);
  }
  addpartner(data) {
    return this.http.post('http://localhost:8000/api/addPartnaire' , data);
  }
  getpartner() {
    return this.http.get('http://localhost:8000/api/partnaire');
  }
  travel(data) {
    return this.http.post('http://localhost:8000/api/travel' , data);
  }
  travelrequest() {
    return this.http.get('http://localhost:8000/api/listtravel');
  }
  get(id){
    return this.http.get('http://localhost:8000/api/get' + '/' + id);
  }
  travelupdate(id , data) {
    return this.http.post('http://localhost:8000/api/update' + '/' + id , data);
  }

}
