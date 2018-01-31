import {Component, OnInit} from '@angular/core';
import {ChatService} from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChatService]
})
export class AppComponent implements OnInit {
  msg: string[] = [];
  err: string;
  channel: string;

  constructor(private chatService: ChatService) {
  }

  changeNickname(nick) {
    this.chatService.changeNickname(nick);
  }

  ngOnInit() {
    this.chatService.getError().subscribe(err => this.err = err);
    this.chatService.getMessage().subscribe(msg => this.msg.push(msg));
    this.chatService.onNewChannel();
  }

  dismissError() {
    this.err = null;
  }

  sendMsg(msg) {
    this.chatService.sendMessage(msg);
  }

  changeUser(user) {
    this.chatService.createChannel([user]);
  }
}
