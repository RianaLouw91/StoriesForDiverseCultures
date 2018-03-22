import { Component, OnInit } from '@angular/core';
import { NavigationItem } from '../../../../models/navigation-item';

@Component({
  selector: 'app-nav-bar',
  templateUrl: 'nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {
  navigationItems: NavigationItem[] = [];

  constructor() {
    this.navigationItems[0] = { displayName: 'Contact Us', redirectLink: '/app/contactus' };
    this.navigationItems[1] = { displayName: 'Projects', redirectLink: '/app/projects' };
    this.navigationItems[2] = { displayName: 'Donate', redirectLink: '/app/donate' };
    this.navigationItems[3] = { displayName: 'Jobs', redirectLink: '/app/jobs' };
    this.navigationItems[4] = { displayName: 'About Us', redirectLink: '/app/aboutus' };
    this.navigationItems[5] = { displayName: 'Suggestions', redirectLink: '/app/suggestions' };
    this.navigationItems[6] = { displayName: 'Competitions', redirectLink: '/app/competitions' };
    this.navigationItems[7] = { displayName: 'My Profile', redirectLink: '/app/profile' };
    this.navigationItems[8] = { displayName: 'Education', redirectLink: '/app/education' };
    this.navigationItems[9] = { displayName: 'Store', redirectLink: '/app/store' };
    this.navigationItems[10] = { displayName: 'Cultures', redirectLink: '/app/cultures' };
    this.navigationItems[11] = { displayName: 'Forum', redirectLink: '/app/forum' };
  }

  ngOnInit() {
  }
}