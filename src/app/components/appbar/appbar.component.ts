import { Component, OnInit } from '@angular/core';

import { faSearch, faBars, faHotel } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss'],
})
export class AppbarComponent implements OnInit {
  icons = {
    search: faSearch,
    bars: faBars,
    hotel: faHotel
  };

  constructor() {}

  ngOnInit(): void {}
}
