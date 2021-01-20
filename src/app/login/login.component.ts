import {Component, OnInit} from '@angular/core';
import {User} from '../model/user.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoggedUserService} from '../services/logged-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoggedUserService]
})
export class LoginComponent implements OnInit {
  userLoginForm: FormGroup;
  errorBoolean: boolean;
  isLoading = false;

  constructor(private loggedService: LoggedUserService) {
  }

  ngOnInit(): void {
    this.userLoginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit(): void {
    const user: User = {
      username: this.userLoginForm.value.username,
      password: this.userLoginForm.value.password
    };
    this.loggedService.logInUser(user, '/my-profile', this.isLoading, this.errorBoolean);
  }
}
