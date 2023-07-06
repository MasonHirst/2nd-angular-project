import { Component, NgModule } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .white-text {
            color: white;
        }
    `]
})

export class ServerComponent {
  serverOnline: Boolean = Math.random() > 0.5 ? true : false;
}