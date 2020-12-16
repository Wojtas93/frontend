export class Room {
  id?: number;
  roomNr: string;
  isCleaned: boolean;
  numPeople: number;
  price: number;

  constructor(id: number, roomNr: string, isCleaned: boolean, numPeople: number, price: number) {
    this.id = id;
    this.roomNr = roomNr;
    this.isCleaned = isCleaned;
    this.numPeople = numPeople;
    this.price = price;
  }
}
