import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { IclienteRequest } from '../../../clientes/icliente-request';
import { InputMaskModule } from 'primeng/inputmask';

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

  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() create = new EventEmitter<IclienteRequest>();

  data: IclienteRequest = { ...EMPTY_CLIENT };

  onShow(): void {
    if (this.mode === 'create') {
      this.data = { ...EMPTY_CLIENT };
    }
  }

  onCancel(): void {
    this.visible = false;
    this.visibleChange.emit(false);
  }

  onSave(): void {
    this.create.emit(this.data);
    this.visible = false;
    this.visibleChange.emit(false);
  }
}
