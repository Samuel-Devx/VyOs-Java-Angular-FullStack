import { inject, Injectable, Service } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class ServiceNotification {
  private messageService = inject(MessageService);

  success(detail: string, summary = 'Sucesso'): void {
    this.messageService.add({ severity: 'success', summary, detail, life: 3000 });
  }

  error(detail: string, summary = 'Erro'): void {
    this.messageService.add({ severity: 'error', summary, detail, life: 4000 });
  }
}
