import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Reservation} from '../model/reservation.model';


@Injectable({
  providedIn: 'root'
})
export class HotelBookingService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa('user3:Password3')
    })
  };

  constructor(private httpClient: HttpClient) {
  }

  url = 'http://localhost:8080/reservation';

  getAll(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(this.url, this.httpOptions);
  }

  addReservation(reservation: Reservation): Observable<Reservation> {
    return this.httpClient.post<Reservation>(this.url, reservation, this.httpOptions);
  }

  deleteReservation(id: number): Observable<Reservation> {
    return this.httpClient.delete<Reservation>(this.url + '/' + id, this.httpOptions);
  }
}
