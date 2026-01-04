import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sale-apartments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sale-apartments.component.html'
})
export class SaleApartmentsComponent {
  apartments = [
    { city: 'תל אביב', price: 2500000 },
    { city: 'ירושלים', price: 2200000 },
    { city: 'חיפה', price: 1800000 }
  ];
}
