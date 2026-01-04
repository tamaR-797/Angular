import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rent-apartments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rent-apartments.component.html'
})
export class RentApartmentsComponent {
  apartments = [
    { city: 'תל אביב', price: 5500 },
    { city: 'רמת גן', price: 4800 },
    { city: 'פתח תקווה', price: 4200 }
  ];
}
