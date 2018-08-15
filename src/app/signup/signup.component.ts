import { Component, OnInit } from '@angular/core';
import {JarwisService} from '../services/jarwis.service';
import {TookenService} from '../tooken.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public form = {
    email : null,
    name : null,
    password : null,
    password_confirmation : null
  };
  constructor(private jarwis: JarwisService , private token: TookenService , private router: Router) { }
  public error = [];
  onSubmit() {
    // console.log(this.form);
    return this.jarwis.signup(this.form).subscribe(
     // data => console.log(data),
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.token.handle(data.access_token);
    this.router.navigateByUrl('/espace-partenaire');
  }

  handleError(error) {
    this.error = error.error.errors;
  }
  ngOnInit() {
  }

}
