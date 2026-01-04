import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationApartmentsComponent } from './vacation-apartments.component';

describe('VacationApartmentsComponent', () => {
  let component: VacationApartmentsComponent;
  let fixture: ComponentFixture<VacationApartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationApartmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacationApartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
