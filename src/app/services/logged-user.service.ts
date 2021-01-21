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

  logInUser(givenUser: User, navigateTo: string, isLoading?: boolean, error?: boolean): void {
    isLoading = true;
    this.httpService.getUserByLoginAndPassword(givenUser).subscribe((responseUser) => {
        error = false;
        this.user.next(responseUser);
        isLoading = false;
        this.router.navigate([navigateTo]).then(() => alert('Witaj ' + givenUser.username + '!'));
      },
      () => {
        error = true;
        alert('Could not find user');
      });
  }

  logout(): void {
    this.user.next(null);
    this.router.navigate(['/home']).then(() => alert('Logged out'));
  }

}
