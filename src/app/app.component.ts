import { Component } from '@angular/core';
import { faCoffee, faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hotel-calendar';
  faCoffee = faCoffee;
  faCog = faCog;
}
