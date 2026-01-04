import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  name = '';
  phone = '';
  email = '';

  constructor(private router: Router) {}

  submit() {
    this.router.navigate(['/success'], {
      queryParams: { name: this.name }
    });
  }
}
