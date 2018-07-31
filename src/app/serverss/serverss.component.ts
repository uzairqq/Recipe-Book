import { Component, OnInit } from '@angular/core';
import { createWiresService } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-serverss',
  templateUrl: './serverss.component.html',
  styleUrls: ['./serverss.component.css']
})
export class ServerssComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'not server was created!';
  serverName = 'TextServer';
  serverCreated = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);



  }
  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreated = true;
    return this.serverCreationStatus = 'server was created! Name is' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
