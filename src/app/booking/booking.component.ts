import {Component, OnInit} from '@angular/core';
import {Reservation} from '../model/reservation.model';
import {User} from '../model/user.model';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  reservation: Reservation = {
    endDate: 0,
    guest: new User('', '', '', '', ''),
    isPaid: false,
    room: '',
    startDate: 0
  };
  datePipeString: string;

  constructor(private datePipe: DatePipe) {
    this.datePipeString = datePipe.transform(Date.now(), 'yyyy-MM-dd');
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    alert('Booking add / not implemented yet');
  }

  getDate(): any {

    return;
  }
}
