import { Injectable, Service, signal } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class SidebarService {
  visible = signal(false);

  open(): void {
    this.visible.set(true);
  }

  close(): void {
    this.visible.set(false);
  }
}
