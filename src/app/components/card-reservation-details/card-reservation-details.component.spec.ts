import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReservationDetailsComponent } from './card-reservation-details.component';

describe('CardReservationDetailsComponent', () => {
  let component: CardReservationDetailsComponent;
  let fixture: ComponentFixture<CardReservationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardReservationDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReservationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
