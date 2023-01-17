import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppbarComponent } from './components/appbar/appbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ImagesFrameComponent } from './components/images-frame/images-frame.component';
import { DescriptionComponent } from './components/description/description.component';
import { CardReservationDetailsComponent } from './components/card-reservation-details/card-reservation-details.component';

@NgModule({
  declarations: [AppComponent, AppbarComponent, HeaderComponent, ImagesFrameComponent, DescriptionComponent, CardReservationDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
