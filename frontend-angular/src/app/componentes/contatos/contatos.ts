import { Component, inject, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ClientCard } from '../shared/client-card/client-card';
import { ToolbarModule } from 'primeng/toolbar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarService } from '../sidebar/sidebar-service';
import { Bars } from '@primeicons/angular/bars';
import { ButtonModule } from 'primeng/button';
import { ClienteService } from '../../clientes/cliente-service';
import { ICliente } from '../../clientes/icliente';
import { AvatarModule } from 'primeng/avatar';
import { DialogModule } from 'primeng/dialog';
import { ClientDialog } from '../shared/client-dialog/client-dialog';
import { IclienteRequest } from '../../clientes/icliente-request';
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
    Bars,
    AvatarModule,
    DialogModule,
    ClientDialog
],
  selector: 'app-contatos',
  styleUrl: './contatos.css',
  templateUrl: './contatos.html',
})
export class Crm {

  private clientService = inject(ClienteService);
  sidebarService = inject(SidebarService);
    showCreateDialog = signal(false);

  clients = signal<ICliente[]>([]);
  loading = signal(true);
  ngOnInit(): void {
  this.clientService.getClientes().subscribe({
    next: (data) => {
      this.clients.set(data as ICliente[]);
      this.loading.set(false);
    },
    error: (err) => {
      console.error('Erro ao buscar clientes:', err);
      this.loading.set(false);
    },
  });
}
 onClientCreate(data: IclienteRequest): void {
    this.clientService.createCliente(data).subscribe({
      next: (newClient) => {
        this.clients.update((clients) => [...clients, newClient as ICliente]);
        this.showCreateDialog.set(false);
      },
      error: (err) => {
        console.error('Erro ao criar cliente:', err);
      },
    });
  }
}
