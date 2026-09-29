import { Component, inject, input, output } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Trash } from '@primeicons/angular/trash';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ClienteService } from '../../../clientes/cliente-service';

@Component({
  selector: 'app-client-card',
  imports: [CardModule, Trash, AvatarModule, DividerModule],
  styleUrl: './client-card.css',
  templateUrl: './client-card.html',
})
export class ClientCard {
  id = input.required<string>();
  name = input.required<string>();
  email = input.required<string>();
  number = input.required<string>();
  status = input<'Active' | 'Inactive'>('Active');

  deleted = output<string>();

  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);
  private clientService = inject(ClienteService);

  initials() {
    return this.name().split(' ').map(n => n[0]).join('').toUpperCase();
  }

  statusClasses() {
    const map: Record<string, string> = {
      Active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      Inactive: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    };
    return map[this.status()] ?? 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
  }

  confirmDelete(event: Event) {
    this.confirmationService.confirm({
      target: event.currentTarget as EventTarget,
      message: 'Deseja excluir este contato?',
      icon: 'pi pi-info-circle',
      rejectButtonProps: { label: 'Cancelar', severity: 'secondary', outlined: true },
      acceptButtonProps: { label: 'Excluir', severity: 'danger' },
      accept: () => this.deleteClient(),
    });
  }

  private deleteClient() {
    this.clientService.delete(this.id()).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Contato excluído',
          life: 3000,
        });
        this.deleted.emit(this.id());
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: err.error?.message ?? 'Não foi possível excluir o contato',
          life: 4000,
        });
      },
    });
  }
}
