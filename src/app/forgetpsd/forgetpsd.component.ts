import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {JarwisService} from '../services/jarwis.service';
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-forgetpsd',
  templateUrl: './forgetpsd.component.html',
  styleUrls: ['./forgetpsd.component.css']
})
export class ForgetpsdComponent implements OnInit {
  public error = [];
  public form = {
    email : null,
    password : null,
    password_confirmation: null,
    resetToken : null
  };
  constructor(
    private route: ActivatedRoute,
    private jarwis: JarwisService,
    private router: Router,
    private Notify: SnotifyService

  ) {
    route.queryParams.subscribe(params => {
      this.form.resetToken = params['token'] ;
      console.log(this.form.resetToken);
    });
  }

  ngOnInit() {
  }
  onSubmit() {
    this.jarwis.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),
    );
  }
  handleResponse(data) {
    const _router = this.router;
    this.Notify.confirm('Done!, Now login with new Password', {
      buttons: [
        {text: 'Okay',
          action: toster => {
            _router.navigateByUrl('/espace-partenaire/login'),
              this.Notify.remove(toster.id) ;
          }
        },
      ]
    });
  }

  handleError(error) {
    this.error = error.error.errors;
  }
}
