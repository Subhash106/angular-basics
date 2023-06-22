import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  username = '';
  serverName = 'test';
  serverCreatedStatus = 'No server created!';
  serverCreated = false;
  allowAddServer: boolean = false;
  servers: string[] = ['Test server', 'test server 2'];
  showParagraph = false;
  buttonClicks: boolean[] = [];

  constructor() {
    setTimeout(() => {
      this.allowAddServer = true;
    }, 2000);
  }

  onCreateServe() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreatedStatus = `Server created! and the name is ${this.serverName}`;
  }

  inputChangeHandler(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  usernameChangeHandler(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
  }

  resetUsername() {
    this.username = '';
  }

  displayParagraphHandler() {
    this.buttonClicks.push(this.showParagraph);
    this.showParagraph = !this.showParagraph;
  }
}
