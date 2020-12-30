import {Component, OnInit} from '@angular/core';
import {User} from '../model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {
    firstname: '',
    lastname: '',
    password: '',
    role: '',
    username: ''
  };
  passwordConfirm: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {

  }
}
