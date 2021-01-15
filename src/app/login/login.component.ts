import {Component, OnInit} from '@angular/core';
import {User} from '../model/user.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HotelUserService} from '../services/hotel-user.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLoginForm: FormGroup;
  errorBoolean: boolean;
  isLoading = false;
  user = new Subject<User>();

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
    this.isLoading = true;
    this.httpService.getUserByLoginAndPassword(user).subscribe((responseUser) => {
        this.errorBoolean = false;
        alert('User logged');
        this.user.next(responseUser);
        this.isLoading = false;
        this.userLoginForm.reset();
      },
      () => {
        this.errorBoolean = true;
        alert('Could not find user');
      });
  }
}
