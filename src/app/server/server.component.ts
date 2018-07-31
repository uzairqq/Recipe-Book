import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online{
        color:white
    }
    `
    ]

})

export class ServerComponent {
    serverId = 10;
    serverStatus = 'online';
    servers = ['test 1', 'test 2 ', 'test 3'];

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}
