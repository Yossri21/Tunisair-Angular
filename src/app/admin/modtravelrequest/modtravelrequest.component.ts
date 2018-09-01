import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientReqService} from '../../client-req.service';

@Component({
  selector: 'app-modtravelrequest',
  templateUrl: './modtravelrequest.component.html',
  styleUrls: ['./modtravelrequest.component.css']
})
export class ModtravelrequestComponent implements OnInit {
  public travel = {
    id_travel : null,
    date : null,
    numb_travelers : null,
    remark : null,
    user_id: null,
    user_name: null,
    statue: null
  };
  private errors = [];
  private genericError = false;
  id: number;
  constructor(private route: Router , private req: ClientReqService ,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      setTimeout(() => {
        this.req.get(this.id).subscribe(
          data => this.handleGetTravelResponse(data),
          err => this.handleError(err)
        );
      } , 1000);
    });
  }
  handleGetTravelResponse(data) {
    this.travel = data.travel;
  }

  handleError(error) {

    if (error.hasOwnProperty('error') && error.error.hasOwnProperty('errors')) {
      this.errors = error.error.errors;
    } else {this.genericError = true; }
  }


  travelupdate() {
    this.errors = [];
    this.genericError = false;
    this.req.travelupdate(this.id , this.travel).subscribe(
      data => this.handleUpdate(data),
      err => this.handleError(err)
    );
  }
  handleUpdate(data) {
    this.route.navigateByUrl('/admin/requesttravel');
  }



}
