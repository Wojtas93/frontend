import {Component, OnInit} from '@angular/core';
import {User} from '../model/user.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HotelUserService} from '../services/hotel-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userRegisterForm: FormGroup;

  constructor(private httpService: HotelUserService) {
  }


  ngOnInit(): void {
    this.formController();
  }

  private formController(): void {
    this.userRegisterForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      firstname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      lastname: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      passwordConfirm: new FormControl(null, Validators.required)
    });
  }

  onSubmit(): void {
    const user: User = {
      firstname: this.userRegisterForm.value.firstname,
      lastname: this.userRegisterForm.value.lastname,
      email: this.userRegisterForm.value.email,
      password: this.userRegisterForm.value.password,
      role: 'USER',
      username: this.userRegisterForm.value.username
    };
  }
}
