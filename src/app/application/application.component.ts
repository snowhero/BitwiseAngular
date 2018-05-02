import { Component } from '@angular/core';

@Component ({
  selector: 'gw-application',
  templateUrl: './application.component.html',
  styleUrls: [
    './application.component.scss'
  ]
})

export class ApplicationComponent {
  public application: string = 'The application!';
}
