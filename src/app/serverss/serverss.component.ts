import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serverss',
  templateUrl: './serverss.component.html',
  styleUrls: ['./serverss.component.css']
})
export class ServerssComponent implements OnInit {
  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }
  ngOnInit() {
  }

}
