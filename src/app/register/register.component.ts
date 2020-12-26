import {Component, OnInit} from '@angular/core';
import {User} from '../model/user.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private url = 'http://localhost:8080/user';
  users: User[] = [];
  user: User = {
    username: '',
    password: '',
  };

  constructor(private httpClient: HttpClient) {
  }


  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.httpClient.get<User[]>(this.url)
      .subscribe(users => this.users = users);
  }

  create(): void {
    this.httpClient.post<User>(this.url, this.user)
      .subscribe(() => this.loadData());
  }


}
