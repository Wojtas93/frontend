import {Component, OnInit} from '@angular/core';
import {User} from '../model/user.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HotelUserService} from '../services/hotel-user.service';
import {ErrorMessage} from '../model/error-message.model';
import {CustomValidators} from './custom-validators/custom-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userRegisterForm: FormGroup;
  validationErrors: ErrorMessage = {};

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
      password: new FormControl(null, Validators.compose([
        Validators.minLength(8),
        CustomValidators.patternValidator(/\d/, {hasNumber: true}),
        CustomValidators.patternValidator(/[A-Z]/, {hasCapitalCase: true}),
        CustomValidators.patternValidator(/[a-z]/, {hasSmallCase: true}),
        CustomValidators.patternValidator(/^$/, {isNotEmpty: true})
      ])),
      passwordConfirm: new FormControl(null, Validators.compose([
        Validators.required
      ]))
    });
  }

  onSubmit(): void {
    const user: User = {
      firstName: this.userRegisterForm.value.firstname,
      lastName: this.userRegisterForm.value.lastname,
      email: this.userRegisterForm.value.email,
      password: this.userRegisterForm.value.password,
      role: 'USER',
      username: this.userRegisterForm.value.username,
      creditCard: null
    };
    this.httpService.addUser(user).subscribe(() => alert('User created'),
      errorResponse => {
        this.validationErrors = errorResponse;
        alert('Coś poszło nie tak!');
      });
  }
}
