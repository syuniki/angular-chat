import { User } from './user';

export class Comment {

  user: User;
  message: string;
  date: number;
  key?: string;
  isEdit: boolean;
  temp: string;

  constructor(value: any) {
    this.user = value.user;
    this.message = value.message;
    this.date = value.date || Date.now();
    this.temp = "";
    if(value.key) {
      this.key = value.key;
    }
  }
}
