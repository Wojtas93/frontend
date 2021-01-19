import {Component, OnInit} from '@angular/core';
import {faHome, faCalendarDay, faSignInAlt, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {LoggedUserService} from '../services/logged-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faHome = faHome;
  faCalendarDay = faCalendarDay;
  faSignInAlt = faSignInAlt;
  faUserPlus = faUserPlus;


  constructor(private loggedService: LoggedUserService) {
  }

  ngOnInit(): void {
  }
}
