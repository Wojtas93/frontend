import {Component, OnDestroy, OnInit} from '@angular/core';
import {faCalendarDay, faHeadphones, faPhoneAlt, faSignInAlt, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {LoggedUserService} from '../services/logged-user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  faCalendarDay = faCalendarDay;
  faSignInAlt = faSignInAlt;
  faUserPlus = faUserPlus;
  faHeadphones = faPhoneAlt;
  userSub: Subscription;
  isAuthenticated: boolean;

  constructor(private loggedService: LoggedUserService) {
  }

  ngOnInit(): void {
    this.userSub = this.loggedService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  onLogout(): void {
    this.loggedService.logout();
  }
}
