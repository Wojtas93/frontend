import {Component, OnInit} from '@angular/core';
import {User} from '../model/user.model';
import {LoggedUserService} from '../services/logged-user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  user: Subscription;

  constructor() {
  }

  ngOnInit(): void {
  }

}
