import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Ripple } from 'primeng/ripple';
@Component({
  imports: [
    Ripple,
    RouterLink,
  ],
  selector: 'app-option',
  styleUrl: './option.css',
  templateUrl: './option.html',
})
export class Option {
  icon = input.required<string>();
  label = input.required<string>();
  route = input.required<string>();
}
