import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {User} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {

  user = new Subject<User>();

  emitUser(user: User): void {
    this.user.next(user);
  }

  isLogged(): boolean {
    return this.user != null;
  }

}
