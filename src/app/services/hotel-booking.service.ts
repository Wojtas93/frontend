import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Reservation} from '../model/reservation.model';


@Injectable({
  providedIn: 'root'
})
export class HotelBookingService {

  constructor(private httpClient: HttpClient) {
  }

  url = 'http://localhost:8080/reservation';

  getAll(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(this.url);
  }

  getAllByUsername(username: string): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(this.url + '/' + username);
  }

  addReservation(reservation: Reservation): Observable<Reservation> {
    return this.httpClient.post<Reservation>(this.url, reservation);
  }

  deleteReservation(id: number): Observable<Reservation> {
    return this.httpClient.delete<Reservation>(this.url + '/' + id);
  }
}
