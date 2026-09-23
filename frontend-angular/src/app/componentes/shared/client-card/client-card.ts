import { Component, input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Trash } from '@primeicons/angular/trash';
import { Pencil } from '@primeicons/angular/pencil';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
@Component({
  imports: [
    CardModule,
    Trash,
    AvatarModule,
    DividerModule
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

  initials(){
    return this.name().split(' ').map(n => n[0]).join('').toUpperCase();
  }

  statusClasses(){
    const map: Record<string, string> = {
      'Active': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      'Inactive': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
    }
    return map[this.status()] ?? 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
  }

}
