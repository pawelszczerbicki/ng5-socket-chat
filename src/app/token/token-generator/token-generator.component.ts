import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-token-generator',
  templateUrl: './token-generator.component.html',
  styleUrls: ['./token-generator.component.css']
})
export class TokenGeneratorComponent implements OnInit {

  @Output() onNewNick = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  setNick(nick) {
    this.onNewNick.emit(nick);
  }

}
