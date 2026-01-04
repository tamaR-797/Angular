import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleApartmentsComponent } from './sale-apartments.component';

describe('SaleApartmentsComponent', () => {
  let component: SaleApartmentsComponent;
  let fixture: ComponentFixture<SaleApartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleApartmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleApartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
