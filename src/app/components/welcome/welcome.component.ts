import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/core/model/userDTO';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  user = new UserDTO();

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

}
