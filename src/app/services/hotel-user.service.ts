import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class HotelUserService {

  constructor(private httpClient: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa('user3:Password3')
    })
  };

  url = 'http://localhost:8080/user';

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url, this.httpOptions);
  }

  getUserByLoginAndPassword(user: User): Observable<User> {
    return this.httpClient.post<User>(this.url + '/login', user, this.httpOptions);
  }

  addUser(user: User): Observable<User[]> {
    return this.httpClient.post<User[]>(this.url + '/post', user, this.httpOptions);
  }

  deleteUser(id: number): Observable<User> {
    return this.httpClient.delete<User>(this.url + '/' + id, this.httpOptions);
  }
}
