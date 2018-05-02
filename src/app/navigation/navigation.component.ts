import { Component, OnInit } from '@angular/core';
import { INavigation } from './../../interfaces/navigationItem';

@Component ({
  selector: 'gw-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: [
    './navigation.component.scss'
  ]
})

export class NavigationComponent implements OnInit {
  public navArr: INavigation[];

  ngOnInit() {
    this.navArr = [
    {
      title: 'Home',
      url: '/home'
    },

    {
      title: 'About',
      url: '/about'
    },

    {
      title: 'Contact',
      url: '/contact'
    }
    ]
  }
}
