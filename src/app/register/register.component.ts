import {Component, OnInit} from '@angular/core';
import {User} from '../model/user.model';
import {HttpClient} from '@angular/common/http';

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
  private url = 'http://localhost:8080/user';

  constructor(private httpClient: HttpClient) {
  }


  ngOnInit(): void {
  }

  onSubmit(): void {
    this.httpClient.post<User>(this.url, this.user)
      .subscribe(() => alert('User created'));
  }
}
