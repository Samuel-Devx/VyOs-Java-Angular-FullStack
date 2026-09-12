import { Component, input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Trash } from '@primeicons/angular/trash';
@Component({
  imports: [
    CardModule,
    Trash
  ],
  selector: 'app-client-card',
  styleUrl: './client-card.css',
  templateUrl: './client-card.html',
})
export class ClientCard {

  name = input.required<string>();
  email = input.required<string>();
  number = input.required<string>();
  status = input<'Active' | 'Inactive'>('Active');

  statusClasses(){
    const map: Record<string, string> = {
      'ACTIVE': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      'INACTIVE': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
    }
    return map[this.status()] ?? 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
  }

}
