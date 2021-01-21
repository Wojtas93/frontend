import {Component, OnInit} from '@angular/core';
import {HotelBookingService} from '../services/hotel-booking.service';
import {Reservation} from '../model/reservation.model';
import {LoggedUserService} from '../services/logged-user.service';
import {User} from '../model/user.model';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.css']
})
export class MyReservationsComponent implements OnInit {

  reservations: Array<Reservation>;
  userLogged: Subject<User> = this.loggedUser.user;

  constructor(private httpService: HotelBookingService, private loggedUser: LoggedUserService) {

  }

  ngOnInit(): void {
    // this.reservations = this.httpService.getAllByUsername(this.userLogged.username);
  }

}
