import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { D12Component } from './components/d12/d12.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, D12Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DieTester';
}
