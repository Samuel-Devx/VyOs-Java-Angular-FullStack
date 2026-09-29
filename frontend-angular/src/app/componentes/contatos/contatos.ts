import { Component, inject, OnInit, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { DialogModule } from 'primeng/dialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Bars } from '@primeicons/angular/bars';
import { ClientCard } from '../shared/client-card/client-card';
import { ClientDialog } from '../shared/client-dialog/client-dialog';
import { SidebarService } from '../sidebar/sidebar-service';
import { ClienteService } from '../../clientes/cliente-service';
import { ICliente } from '../../clientes/icliente';
import { IclienteRequest } from '../../clientes/icliente-request';

@Component({
  standalone: true,
  imports: [
    ToolbarModule,
    CardModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    ClientCard,
    ButtonModule,
    Bars,
    AvatarModule,
    DialogModule,
    ClientDialog,
    ConfirmPopupModule,
    ToastModule,
  ],
  providers: [ConfirmationService, MessageService],
  selector: 'app-contatos',
  styleUrl: './contatos.css',
  templateUrl: './contatos.html',
})
export class Crm implements OnInit {
  private messageService = inject(MessageService);
  private clientService = inject(ClienteService);
  sidebarService = inject(SidebarService);

  showCreateDialog = signal(false);
  clients = signal<ICliente[]>([]);
  loading = signal(true);



  ngOnInit(): void {
    this.onClientLoad();
  }

  onClientLoad(): void {
    this.loading.set(true);
    this.clientService.getClientes().subscribe({
      next: (data) => {
        const list = (data as ICliente[]) ?? [];
        this.clients.set(list);
        this.loading.set(false);
        if (list.length === 0) {
          this.showCreateDialog.set(true);
        }
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
        this.clients.update((list) => [...list, newClient as ICliente]);
        this.showCreateDialog.set(false);
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Contato criado',
          life: 3000,
        });
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: err.error?.message ?? 'Não foi possível criar o contato',
          life: 4000,
        });
      },
    });
  }

  onDeleted(id: string) {
    this.clients.update((list) => list.filter((c) => c.id !== id));
  }
}
