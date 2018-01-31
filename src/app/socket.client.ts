import {Socket} from 'ng-socket-io';

export class SocketClient extends Socket {
  constructor(token) {
    super({url: 'http://localhost:3000/', options: {query: {token: token}}});
  }
}
