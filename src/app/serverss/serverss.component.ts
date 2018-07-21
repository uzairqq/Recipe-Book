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
  serverName = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);



  }
  ngOnInit() {
  }
  onCreateServer() {
    return this.serverCreationStatus = 'server was created';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
