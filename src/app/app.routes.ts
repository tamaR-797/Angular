import { Routes } from '@angular/router';
import { SaleApartmentsComponent } from './sale-apartments/sale-apartments.component';
import { RentApartmentsComponent } from './rent-apartments/rent-apartments.component';
import { VacationApartmentsComponent } from './vacation-apartments/vacation-apartments.component';
import { RegisterComponent } from './register/register.component';
import { SuccessComponent } from './success/success.component';

export const routes: Routes = [
  { path: '', redirectTo: 'sale', pathMatch: 'full' },
  { path: 'sale', component: SaleApartmentsComponent },
  { path: 'rent', component: RentApartmentsComponent },
  { path: 'vacation', component: VacationApartmentsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'success', component: SuccessComponent }
];
