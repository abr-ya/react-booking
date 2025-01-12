export interface IRoom {
  _id: string;
  title: string;
  price: number;
  maxPeople: number;
  desc: string;
  roomNumbers: IRoomNumber[];
}

export interface IRoomNumber {
  _id: string;
  number: number;
  bookedDates: string[];
}
