import { Component, input } from '@angular/core';
import { Ripple } from 'primeng/ripple';
import { StyleClass } from 'primeng/styleclass';
import { ChevronDown } from '@primeicons/angular/chevron-down';

@Component({
  selector: 'app-hide-divider',
  standalone: true,
  imports: [ChevronDown],
  hostDirectives: [
    Ripple,
    {
      directive: StyleClass,
      inputs: [
        'pStyleClass',
        'enterFromClass',
        'enterActiveClass',
        'leaveToClass',
        'leaveActiveClass',
      ],
    },
  ],
  templateUrl: './hide-divider.html',
  styleUrl: './hide-divider.css',
})
export class HideDivider {
  label = input.required<string>();
}
