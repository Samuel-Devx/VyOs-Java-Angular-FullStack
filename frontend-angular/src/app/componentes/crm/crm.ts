import { Component, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ClientCard } from '../shared/client-card/client-card';
import { ToolbarModule } from 'primeng/toolbar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarService } from '../sidebar/sidebar-service';
import { Bars } from '@primeicons/angular/bars';
import { ButtonModule } from 'primeng/button';
@Component({
  standalone: true,
  imports: [
    ToolbarModule,
    CardModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    InputTextModule,
    ClientCard,
    ButtonModule,
    Bars
  ],
  selector: 'app-crm',
  styleUrl: './crm.css',
  templateUrl: './crm.html',
})
export class Crm {
  sidebarService = inject(SidebarService);
}
