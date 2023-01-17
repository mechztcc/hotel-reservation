import { Component, OnInit } from '@angular/core';
import {
  faStar,
  faMedal,
  faCalendar,
  faComputer,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {
  icons = {
    star: faStar,
    medal: faMedal,
    calendar: faCalendar,
    computer: faComputer,
    arrow: faArrowRight,
  };

  constructor() {}

  ngOnInit(): void {}
}
