import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,SearchPipe],
  templateUrl: './app.component.html'
})
export class AppComponent {
  arr=[1,2,3,4,5,6]
}