import {Component, OnInit} from '@angular/core';
import {User} from '../model/user.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HotelUserService} from '../services/hotel-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLoginForm: FormGroup;
  errorBoolean: boolean;

  constructor(private  httpService: HotelUserService) {
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
    this.httpService.getUserByLogin(user.username).subscribe(() => {
      this.errorBoolean = false;
      alert('User logged');
      },
      () => {
      this.errorBoolean = true;
      alert('Could not find user');
      });
  }
}
