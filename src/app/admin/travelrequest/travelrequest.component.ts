import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ClientReqService} from '../../client-req.service';

@Component({
  selector: 'app-travelrequest',
  templateUrl: './travelrequest.component.html',
  styleUrls: ['./travelrequest.component.css']
})
export class TravelrequestComponent implements OnInit {
  public listreq = [];
  public errorr = false;

  constructor(private route: Router , private req: ClientReqService) { }
  loadrequest() {
    this.req.travelrequest().subscribe(
      data => this.handlereq(data),
      err => this.handleErr(err),
    );
  }
 handlereq(data) {
    this.listreq = data.travels;
    console.log(data) ;
 }
 handleErr(errorr) {
    this.errorr = false;
    this.listreq = [] ;
 }
  ngOnInit() {
    this.errorr = false ;
    this.loadrequest() ;
  }

}
