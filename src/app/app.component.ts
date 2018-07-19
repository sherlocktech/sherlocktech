import { Component } from '@angular/core';

import { PROJECTS } from './projects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navbarCollapsed = true;
  projects = PROJECTS;
  project = this.projects[0];
  header = 'Welcome to my portfolio site!';

  toggleNavbarCollapse() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
}
