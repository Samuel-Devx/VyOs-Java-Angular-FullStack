import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ThemeToggleService } from './theme-toggle-service';

@Component({
  selector: 'app-theme-toggle',
  imports: [ButtonModule],
  styleUrl: './theme-toggle.css',
  templateUrl: './theme-toggle.html',
})
export class ThemeToggle {
  theme = inject(ThemeToggleService);
}
