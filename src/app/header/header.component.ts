import {Component, OnInit} from '@angular/core';
import {faCalendarDay, faSignInAlt, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {LoggedUserService} from '../services/logged-user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faCalendarDay = faCalendarDay;
  faSignInAlt = faSignInAlt;
  faUserPlus = faUserPlus;
  userSub: Subscription;
  isAuthenticated: boolean;

  constructor(private loggedService: LoggedUserService) {
  }

  ngOnInit(): void {
    this.userSub = this.loggedService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }
}
