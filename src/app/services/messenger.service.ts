import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();

  constructor() {
  }

  getMsg(): any {
    return this.subject.asObservable();
  }

  sendMsg(item): void {
    this.subject.next(item);
  }
}
