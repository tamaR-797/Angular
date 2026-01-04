import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vacation-apartments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vacation-apartments.component.html'
})
export class VacationApartmentsComponent {
  apartments = [
    { city: 'אילת', price: 900 },
    { city: 'טבריה', price: 700 },
    { city: 'ים המלח', price: 850 }
  ];
}
