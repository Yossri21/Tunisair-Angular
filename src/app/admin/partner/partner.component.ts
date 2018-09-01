import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';
import {SnotifyService} from 'ng-snotify';
import {ClientReqService} from '../../client-req.service';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {
  public form = {
    numero : null,
    ref : null,
    objet : null,
    datelimite : null,
    statu : null
  };
  public error = null;
  constructor( private router: Router , private notify: SnotifyService , private partner: ClientReqService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form);
    this.notify.info('done' , {timeout: 2000});
    return this.partner.addpartner(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.router.navigateByUrl('/admin/addPartnair');
  }
  handleError(error) {
    this.error = error.error.error;
  }
}
