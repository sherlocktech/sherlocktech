import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navbarCollapsed = true;
  header = 'Welcome to my portfolio site!';

  toggleNavbarCollapse() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
}
