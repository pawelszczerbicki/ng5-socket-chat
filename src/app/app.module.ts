import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {SocketIoConfig, SocketIoModule} from 'ng-socket-io';
import {AppComponent} from './app.component';
import {TokenGeneratorComponent} from './token/token-generator/token-generator.component';
import { SendComponent } from './message/send/send.component';
import { DisplayComponent } from './message/display/display.component';
import { UserPickerComponent } from './message/user-picker/user-picker.component';

const config: SocketIoConfig = {
  url: 'http://localhost:3000/', options: {
    query: {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ' +
      '9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsInVzZXJfbmFtZSI6InRlc3QyIn0.hmKYoKURP3HtW2rFIV' +
      'RKbKThmQ6fa2JDFI9YHrcB-F0'
    }
  }
};

@NgModule({
  declarations: [
    AppComponent,
    TokenGeneratorComponent,
    SendComponent,
    DisplayComponent,
    UserPickerComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
