import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class HotelUserService {

  constructor(private httpClient: HttpClient) {
  }

  url = 'http://localhost:8080/hotel/user';

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }

  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.url, user);
  }

  deleteUser(id: number): Observable<User> {
    return this.httpClient.delete<User>(this.url + '/' + id);
  }
}
