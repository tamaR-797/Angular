import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentApartmentsComponent } from './rent-apartments.component';

describe('RentApartmentsComponent', () => {
  let component: RentApartmentsComponent;
  let fixture: ComponentFixture<RentApartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentApartmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentApartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
