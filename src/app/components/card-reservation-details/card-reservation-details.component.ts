import { Component, OnInit } from '@angular/core';
import {
  faStar,
  faMedal,
  faShare,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-reservation-details',
  templateUrl: './card-reservation-details.component.html',
  styleUrls: ['./card-reservation-details.component.scss'],
})
export class CardReservationDetailsComponent implements OnInit {
  icons = {
    star: faStar,
    medal: faMedal,
    heart: faHeart,
    share: faShare,
  };

  payload = {
    value: 140,
    comments: 124,
    stars: '4.98',
    servicePrice: 41,
    total: '321',
  };

  constructor() {}

  ngOnInit(): void {}
}
