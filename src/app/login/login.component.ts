import {Component, OnInit} from '@angular/core';
import {User} from '../model/user.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HotelUserService} from '../services/hotel-user.service';
import {Subject, Subscription} from 'rxjs';
import {Router} from '@angular/router';
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
  userSub: Subscription;

  constructor(private  httpService: HotelUserService,
              private  router: Router,
              private loggedService: LoggedUserService) {
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
        this.loggedService.emitUser(responseUser);
        this.userSub = this.loggedService.user.subscribe();
        this.isLoading = false;
        this.router.navigate(['/my-profile']).then(r => alert('Witaj ' + user.username + '!'));
      },
      () => {
        this.errorBoolean = true;
        alert('Could not find user');
      });
  }
}
