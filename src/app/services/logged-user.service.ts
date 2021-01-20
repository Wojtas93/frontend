import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {User} from '../model/user.model';
import {HotelUserService} from './hotel-user.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {
  user = new Subject<User>();


  constructor(private  httpService: HotelUserService,
              private  router: Router) {
  }

  logInUser(user: User, navigateTo: string, isLoading?: boolean, error?: boolean): void {
    isLoading = true;
    this.httpService.getUserByLoginAndPassword(user).subscribe((responseUser) => {
        error = false;
        this.user.next(responseUser);
        isLoading = false;
        this.router.navigate([navigateTo]).then(() => alert('Witaj ' + user.username + '!'));
      },
      () => {
        error = true;
        alert('Could not find user');
      });
  }

}
