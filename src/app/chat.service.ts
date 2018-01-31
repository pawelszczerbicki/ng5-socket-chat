import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Socket} from 'ng-socket-io';

@Injectable()
export class ChatService {

  to: any;

  constructor(private socket: Socket) {
  }

  getMessage() {
    return this.socket.fromEvent<any>('message');
  }

  onNewChannel() {
    return this.socket.fromEvent('channelCreated')
      .subscribe((channel: { _id }) => {
        this.to = channel._id;
        console.log(`channel created`);
        console.log(channel);
      });
  }

  getError() {
    return this.socket.fromEvent<any>('error');
  }

  sendMessage(text: string) {
    console.log(this.to);
    this.socket.emit('message', {to: this.to, text});
  }

  createChannel(users: string[]) {
    this.socket.emit('createChannel', {users});
  }

  changeNickname(nick) {
    this.socket.emit('nick', {nick});
  }
}
