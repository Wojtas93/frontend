import {User} from './user.model';
import {Room} from './room.model';

export class Reservation {
  id?: number;
  room: Room;
  guest: User;
  startDate: number;
  endDate: number;
  isPaid: boolean;


  constructor(id: number, room: Room, guest: User, startDate: number, endDate: number) {
    this.id = id;
    this.room = room;
    this.guest = guest;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
