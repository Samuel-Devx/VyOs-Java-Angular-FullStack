import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { IclienteRequest } from '../../../clientes/icliente-request';

const EMPTY_CLIENT: IclienteRequest = { name: '', email: '', phoneNumber: '' };

@Component({
  imports: [CommonModule, FormsModule, DialogModule, AvatarModule, InputTextModule, ButtonModule, InputMaskModule],
  selector: 'app-client-dialog',
  styleUrl: './client-dialog.css',
  templateUrl: './client-dialog.html',
})
export class ClientDialog {
  @Input() visible = false;
  @Input() mode: 'create' | 'edit' = 'create';
  @Input() client: IclienteRequest | null = null;

  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() save = new EventEmitter<IclienteRequest>();

  data: IclienteRequest = { ...EMPTY_CLIENT };
  submitted = false;


  readonly phonePattern = /^\(\d{2}\) \d{5}-\d{4}$/;

  get title(): string {
    return this.mode === 'edit' ? 'Editar Cliente' : 'Novo Cliente';
  }

  onShow(): void {
    this.submitted = false;
    this.data =
      this.mode === 'edit' && this.client
        ? { ...this.client }
        : { ...EMPTY_CLIENT };
  }

  onCancel(): void {
    this.close();
  }

  onSave(form: NgForm): void {
    this.submitted = true;
    if (form.invalid) return;

    this.save.emit({ ...this.data });
    this.close();
  }

  private close(): void {
    this.visible = false;
    this.visibleChange.emit(false);
  }
}
