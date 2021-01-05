import {Component, OnInit} from '@angular/core';
import {User} from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {
    password: '',
    username: ''
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    alert('Login');
  }
}
