import { Component, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { catchError, debounceTime, distinctUntilChanged, map, of, switchMap } from 'rxjs';
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
import { ServiceNotification } from '../shared/toast/service-notification';

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
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
  private notify = inject(ServiceNotification);

  showCreateDialog = signal(false);
  clients = signal<ICliente[]>([]);
  loading = signal(true);

  dialogVisible = false;
  dialogMode: 'create' | 'edit' = 'create';
  selectedClient: ICliente | null = null;

  searchControl = new FormControl('', { nonNullable: true });
  activeSearch = signal('');

  constructor() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        map((value) => value.trim()),
        distinctUntilChanged(),
        switchMap((term) =>
          this.clientService.getClientes(term).pipe(
            map((data) => ({ term, list: (data as ICliente[]) ?? [] })),
            catchError(() => {
              this.notify.error('Erro ao buscar clientes', 'Erro');
              return of(null);
            }),
          ),
        ),
        takeUntilDestroyed(),
      )
      .subscribe((result) => {
        if (!result) return;
        this.clients.set(result.list);
        this.activeSearch.set(result.term);
      });
  }

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
        this.notify.error('Erro ao buscar clientes', 'Erro');
        this.loading.set(false);
      },
    });
  }

  openCreate(): void {
    this.dialogMode = 'create';
    this.selectedClient = null;
    this.showCreateDialog.set(true);
  }

  openEdit(cliente: ICliente) {
    this.dialogMode = 'edit';
    this.selectedClient = cliente;
    this.showCreateDialog.set(true);
  }

  onSaveClient(data: IclienteRequest): void {
    if (this.dialogMode === 'edit' && this.selectedClient) {
      this.onClientUpdate(this.selectedClient.id, data);
    } else {
      this.onClientCreate(data);
    }
  }

  onClientCreate(data: IclienteRequest): void {
    this.clientService.createCliente(data).subscribe({
      next: (newClient) => {
        this.clients.update((list) => [...list, newClient as ICliente]);
        this.notify.success('Contato criado', 'Sucesso');
        this.showCreateDialog.set(false);
        if (this.activeSearch()) {
          this.searchControl.setValue('');
        }
      },
      error: (err) => {
        this.notify.error(
          'Erro ao criar contato',
          err.error?.message ?? 'Não foi possível criar o contato',
        );
      },
    });
  }

  onDeleted(id: string) {
    this.clients.update((list) => list.filter((c) => c.id !== id));
  }

  onClientUpdate(id: string, data: IclienteRequest): void {
    this.clientService.update(id, data).subscribe({
      next: (updated) => {
        this.clients.update((list) => list.map((c) => (c.id === id ? updated : c)));
        this.notify.success('Contato atualizado', 'Sucesso');
      },
      error: (err) => {
        this.notify.error(
          'Erro ao atualizar contato',
          err.error?.message ?? 'Não foi possível atualizar o contato',
        );
      },
    });
  }
}
