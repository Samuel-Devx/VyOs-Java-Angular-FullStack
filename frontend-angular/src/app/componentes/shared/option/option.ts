import { Component, input } from '@angular/core';
import { Ripple } from 'primeng/ripple';
@Component({
  imports: [Ripple],
  selector: 'app-option',
  styleUrl: './option.css',
  templateUrl: './option.html',
})
export class Option {
  icon = input.required<string>();
  label = input.required<string>();

}
