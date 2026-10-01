import { Component, inject } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { Drawer, DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { Times } from '@primeicons/angular/times';
import {Option} from '../shared/option/option';
import { HideDivider } from "../shared/hide-divider/hide-divider";
import { SidebarService } from './sidebar-service';
import { ThemeToggle } from '../shared/theme-toggle/theme-toggle';
@Component({
  imports: [AvatarModule, DrawerModule, ButtonModule,
    RippleModule, StyleClassModule, Times,
    Option, HideDivider,
    ThemeToggle
  ],
  selector: 'app-sidebar',
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})
export class DrawerHeadlessDemo {
     sidebarService = inject(SidebarService);

  closeCallback(e: any): void {
    this.sidebarService.close();
  }
}
export class Sidebar {}
