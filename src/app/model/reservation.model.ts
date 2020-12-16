export class Reservation {
  id?: number;
  room: string;
  guest: string;
  startDate: number;
  endDate: number;
  isPaid: boolean;

  constructor(id: number, room: string, guest: string, startDate: number, endDate: number, isPaid: boolean) {
    this.id = id;
    this.room = room;
    this.guest = guest;
    this.startDate = startDate;
    this.endDate = endDate;
    this.isPaid = isPaid;
  }
}
