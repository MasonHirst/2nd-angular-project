import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  serversList = ['Testserver', 'Testserver 2, server 3'];
  username: string = '';
  serverNameInput: string = '';
  onClearUsername() {
    this.username = '';
  }

  onAddServer() {
    this.serversList.push(this.serverNameInput);
    this.serverNameInput = '';
  }

}
