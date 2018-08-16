import { Component, OnInit } from '@angular/core';
import {JarwisService} from '../../services/jarwis.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor( private user: JarwisService) { }
  public error = false ;
  public usersList = [] ;

  ngOnInit() {
    this.error = false;
    this.loadUsers();
  }
  loadUsers() {
    this.user.getAll().subscribe(
      data => this.handleResponse(data),
      err => this.handleErrors(err)
    );
  }
  handleResponse(data) {
    this.usersList = data.users;
  }
  handleErrors(error) {
    this.error = true;
    this.usersList = [] ;
  }
}

