import {Component, OnInit} from '@angular/core';
import {Reservation} from '../model/reservation.model';
import {User} from '../model/user.model';
import {DatePipe} from '@angular/common';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ErrorMessage} from '../model/error-message.model';
import {HotelUserService} from '../services/hotel-user.service';
import {HotelBookingService} from '../services/hotel-booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookingForm: FormGroup;
  errorBoolean: boolean;

  reservation: Reservation = {
    endDate: 0,
    guest: new User('', '', '', '', '', ''),
    isPaid: false,
    room: '',
    startDate: 0
  };
  datePipeString: string;

  constructor(private datePipe: DatePipe, private httpService: HotelBookingService) {
    this.datePipeString = datePipe.transform(Date.now(), 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.bookingForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      startDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null, Validators.required),
    });
  }

  onSubmit(): void {
    const reservation: Reservation = {
      startDate: this.bookingForm.value.startDate,
      endDate: this.bookingForm.value.endDate,
      guest: new User('',
        '',
        'USER',
        this.bookingForm.value.firstName,
        this.bookingForm.value.lastName,
        '')
    };
    this.httpService.addReservation(reservation)
      .subscribe(() => {
          this.errorBoolean = false;
          alert('Room booked');
        },
        () => {
          this.errorBoolean = true;
        });
    alert('Cannot book a room');
  }
}
