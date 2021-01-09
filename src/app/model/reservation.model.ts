import {User} from './user.model';

export class Reservation {
  id?: number;
  room: string;
  guest: User;
  startDate: number;
  endDate: number;
  isPaid: boolean;


  constructor(id: number, room: string, guest: User, startDate: number, endDate: number) {
    this.id = id;
    this.room = room;
    this.guest = guest;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
