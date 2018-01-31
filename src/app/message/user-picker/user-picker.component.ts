import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-picker',
  templateUrl: './user-picker.component.html',
  styleUrls: ['./user-picker.component.css']
})
export class UserPickerComponent implements OnInit {

  @Output() changeUser = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  talkTo(username) {
    this.changeUser.emit(username);
  }

}
