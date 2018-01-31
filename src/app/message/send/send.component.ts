import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {

  @Output() onMessage = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  sendMsg(msg) {
    this.onMessage.emit(msg);
  }

}
