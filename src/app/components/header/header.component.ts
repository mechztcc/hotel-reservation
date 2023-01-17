import { Component, OnInit } from '@angular/core';
import {
  faStar,
  faMedal,
  faShare,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  icons = {
    star: faStar,
    medal: faMedal,
    heart: faHeart,
    share: faShare,
  };

  payload = {
    stars: '4,98',
    comments: 124,
    address: 'Guilhermina',
    state: 'PE',
    city: 'Recife',
  };

  datesConfig = [{ date: new Date(), classes: ['text-del'] }];
}
