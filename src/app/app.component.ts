import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- Header -->
    <app-header></app-header>

    <!-- Routes get injected right here -->
    <router-outlet></router-outlet>

    <!-- Footer -->
    <app-footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ossain-angular';
}
